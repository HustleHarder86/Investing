#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

/**
 * Comprehensive Blog Proofreading System
 * Checks for grammar, content quality, missing answers, structure issues, and SEO problems
 */
class BlogProofreader {
  constructor(filePath, options = {}) {
    this.filePath = filePath;
    this.content = '';
    this.issues = [];
    this.warnings = [];
    this.autoFix = options.autoFix || false;
    this.verbose = options.verbose || false;
  }

  /**
   * Load and parse the blog file
   */
  loadBlog() {
    if (!fs.existsSync(this.filePath)) {
      throw new Error(`File not found: ${this.filePath}`);
    }
    this.content = fs.readFileSync(this.filePath, 'utf8');
    return this;
  }

  /**
   * Check for missing or empty answers in Q&A sections
   */
  checkMissingAnswers() {
    // Check FAQs
    const faqPattern = /\{\s*["']?question["']?\s*:\s*["'](.*?)["'],?\s*["']?answer["']?\s*:\s*["'](.*?)["']/g;
    let match;
    let faqIndex = 0;
    const faqs = [];

    while ((match = faqPattern.exec(this.content)) !== null) {
      faqIndex++;
      const question = match[1];
      const answer = match[2];

      faqs.push({ question, answer, index: match.index });

      if (!answer || answer.trim().length < 10) {
        this.issues.push({
          type: 'MISSING_ANSWER',
          severity: 'error',
          line: this.getLineNumber(match.index),
          message: `FAQ #${faqIndex} has missing or too short answer for question: "${question}"`
        });
      }

      if (answer && answer.length < 150) {
        this.warnings.push({
          type: 'SHORT_ANSWER',
          severity: 'warning',
          line: this.getLineNumber(match.index),
          message: `FAQ #${faqIndex} answer is too brief (${answer.length} chars). Minimum 150 chars recommended for substantive answers.`
        });
      }
    }

    // Store FAQs for relevance checking later
    this.faqs = faqs;

    // Check for incomplete sections marked with TODO, TBD, XXX, FIXME
    // Only match when these appear as standalone markers, not part of normal content
    const todoPattern = /\b(TODO|TBD|XXX|FIXME)(?:\s*:|\s*-|\s*$)/gi;
    while ((match = todoPattern.exec(this.content)) !== null) {
      this.issues.push({
        type: 'INCOMPLETE_CONTENT',
        severity: 'error',
        line: this.getLineNumber(match.index),
        message: `Incomplete content marker found: "${match[1]}"`
      });
    }
  }

  /**
   * Check FAQ relevance and quality
   */
  checkFAQRelevance() {
    if (!this.faqs || this.faqs.length === 0) return;

    // Extract blog title and topic from content
    const titleMatch = this.content.match(/title:\s*['"`](.*?)['"`]/);
    const title = titleMatch ? titleMatch[1].toLowerCase() : '';

    // Extract main topic keywords from title
    const topicKeywords = title
      .replace(/[^\w\s]/g, '')
      .split(' ')
      .filter(word => word.length > 3 && !['life', 'money', 'guide', 'complete', 'your', 'with', 'from', 'this', 'that'].includes(word));

    // Generic FAQ patterns that indicate templated content
    const genericPatterns = [
      /what makes life money different/i,
      /how much do financial planning services cost/i,
      /how do i get started with financial planning/i,
      /anyone in the greater toronto area looking for professional/i,
      /implementation timelines vary based on individual circumstances/i,
      /most clients see results within 3-6 months/i
    ];

    // Check each FAQ
    this.faqs.forEach((faq, index) => {
      const questionLower = faq.question.toLowerCase();
      const answerLower = faq.answer.toLowerCase();

      // Check for generic FAQs
      const isGeneric = genericPatterns.some(pattern =>
        pattern.test(questionLower) || pattern.test(answerLower)
      );

      if (isGeneric) {
        this.issues.push({
          type: 'GENERIC_FAQ',
          severity: 'error',
          line: this.getLineNumber(faq.index),
          message: `FAQ #${index + 1} is generic company content not related to the blog topic`
        });
      }

      // Check if FAQ relates to blog topic
      const questionRelevant = topicKeywords.some(keyword =>
        questionLower.includes(keyword)
      );

      const answerRelevant = topicKeywords.some(keyword =>
        answerLower.includes(keyword)
      );

      if (!questionRelevant && !answerRelevant && !isGeneric) {
        this.warnings.push({
          type: 'FAQ_RELEVANCE',
          severity: 'warning',
          line: this.getLineNumber(faq.index),
          message: `FAQ #${index + 1} may not be relevant to the blog topic about "${title}"`
        });
      }

      // Check for substantive content in answers
      const hasNumbers = /\d+/.test(faq.answer);
      const hasSpecifics = /\$|%|month|year|day|step|tip|example/i.test(faq.answer);
      const hasActionable = /you can|you should|consider|recommend|suggest|avoid|ensure|check/i.test(faq.answer);

      if (!hasNumbers && !hasSpecifics && !hasActionable && faq.answer.length < 200) {
        this.warnings.push({
          type: 'FAQ_NOT_SUBSTANTIVE',
          severity: 'warning',
          line: this.getLineNumber(faq.index),
          message: `FAQ #${index + 1} answer lacks substantive, actionable information`
        });
      }
    });

    // Check if FAQs cover expected topics
    if (title.includes('cpp') || title.includes('pension')) {
      const hasCPPFAQs = this.faqs.some(faq =>
        /when.*cpp|cpp.*age|cpp.*60|cpp.*65|cpp.*70/i.test(faq.question)
      );
      if (!hasCPPFAQs) {
        this.warnings.push({
          type: 'MISSING_TOPIC_FAQ',
          severity: 'warning',
          message: 'Blog about CPP/pension should have FAQs about timing, ages, or amounts'
        });
      }
    }

    if (title.includes('business') && (title.includes('sale') || title.includes('valuation') || title.includes('exit'))) {
      const hasBusinessFAQs = this.faqs.some(faq =>
        /valuation|ebitda|multiple|buyer|sell.*business|exit.*planning/i.test(faq.question)
      );
      if (!hasBusinessFAQs) {
        this.warnings.push({
          type: 'MISSING_TOPIC_FAQ',
          severity: 'warning',
          message: 'Blog about business sale should have FAQs about valuation, multiples, or exit planning'
        });
      }
    }

    if (title.includes('divorce') || title.includes('separation')) {
      const hasDivorceFAQs = this.faqs.some(faq =>
        /asset.*division|custody|support|equalization|matrimonial/i.test(faq.question)
      );
      if (!hasDivorceFAQs) {
        this.warnings.push({
          type: 'MISSING_TOPIC_FAQ',
          severity: 'warning',
          message: 'Blog about divorce should have FAQs about asset division, support, or custody'
        });
      }
    }

    if (title.includes('inheritance') || title.includes('estate')) {
      const hasEstateFAQs = this.faqs.some(faq =>
        /probate|tax|beneficiar|will|executor|estate.*planning/i.test(faq.question)
      );
      if (!hasEstateFAQs) {
        this.warnings.push({
          type: 'MISSING_TOPIC_FAQ',
          severity: 'warning',
          message: 'Blog about inheritance/estate should have FAQs about probate, taxes, or beneficiaries'
        });
      }
    }

    if (title.includes('severance') || title.includes('job loss') || title.includes('layoff')) {
      const hasSeveranceFAQs = this.faqs.some(faq =>
        /severance.*package|ei|employment.*insurance|notice.*period|negotiat/i.test(faq.question)
      );
      if (!hasSeveranceFAQs) {
        this.warnings.push({
          type: 'MISSING_TOPIC_FAQ',
          severity: 'warning',
          message: 'Blog about job loss should have FAQs about severance, EI, or negotiation'
        });
      }
    }
  }

  /**
   * Check for content structure issues
   */
  checkContentStructure() {
    // Check for proper heading hierarchy
    const headings = [];
    const headingPattern = /<h([1-6]).*?>(.*?)<\/h\1>/g;
    let match;

    while ((match = headingPattern.exec(this.content)) !== null) {
      const level = parseInt(match[1]);
      const text = match[2].replace(/<[^>]*>/g, '');
      headings.push({ level, text, index: match.index });
    }

    // Verify heading hierarchy
    for (let i = 1; i < headings.length; i++) {
      if (headings[i].level > headings[i-1].level + 1) {
        this.warnings.push({
          type: 'HEADING_HIERARCHY',
          severity: 'warning',
          line: this.getLineNumber(headings[i].index),
          message: `Heading hierarchy skip: H${headings[i-1].level} → H${headings[i].level}`
        });
      }
    }

    // Check for missing key sections
    const requiredSections = [
      { pattern: /QuickAnswer/, name: 'QuickAnswer component' },
      { pattern: /KeyTakeaways/, name: 'KeyTakeaways component' },
      { pattern: /FAQSection/, name: 'FAQSection component' },
      { pattern: /RelatedQuestions/, name: 'RelatedQuestions component' }
    ];

    requiredSections.forEach(section => {
      if (!section.pattern.test(this.content)) {
        this.issues.push({
          type: 'MISSING_SECTION',
          severity: 'error',
          message: `Missing required section: ${section.name}`
        });
      }
    });

    // Check for Call-to-Action presence
    const ctaPattern = /<(button|a).*?(contact|consultation|book|schedule|call|email)/i;
    if (!ctaPattern.test(this.content)) {
      this.warnings.push({
        type: 'MISSING_CTA',
        severity: 'warning',
        message: 'No clear call-to-action found in the content'
      });
    }
  }

  /**
   * Check content quality and consistency
   */
  checkContentQuality() {
    // Check for duplicate content
    const paragraphs = this.content.match(/<p[^>]*>(.*?)<\/p>/g) || [];
    const uniqueParagraphs = new Set();

    paragraphs.forEach((p, index) => {
      const cleaned = p.replace(/<[^>]*>/g, '').trim();
      if (cleaned.length > 50) {
        if (uniqueParagraphs.has(cleaned)) {
          this.warnings.push({
            type: 'DUPLICATE_CONTENT',
            severity: 'warning',
            message: `Duplicate paragraph found at position ${index + 1}`
          });
        }
        uniqueParagraphs.add(cleaned);
      }
    });

    // Check for Lorem Ipsum or placeholder text
    const placeholderPattern = /lorem\s+ipsum|placeholder|sample\s+text|dummy\s+text/i;
    if (placeholderPattern.test(this.content)) {
      this.issues.push({
        type: 'PLACEHOLDER_TEXT',
        severity: 'error',
        message: 'Placeholder text detected in content'
      });
    }

    // Check for broken formatting
    const brokenTags = [
      { pattern: /<([a-z]+)(?![^>]*\/>)[^>]*>[^<]*$/, name: 'Unclosed HTML tag' },
      { pattern: /^[^>]*<\/[a-z]+>/, name: 'Orphaned closing tag' },
      { pattern: /\{\{.*?\}\}/, name: 'Unprocessed template variable' },
      { pattern: /undefined|null(?!\s*[;,)])/i, name: 'Undefined/null value' }
    ];

    brokenTags.forEach(tag => {
      if (tag.pattern.test(this.content)) {
        this.issues.push({
          type: 'BROKEN_FORMATTING',
          severity: 'error',
          message: tag.name + ' detected'
        });
      }
    });
  }

  /**
   * Check for SEO issues
   */
  checkSEO() {
    // Check metadata
    const titleMatch = this.content.match(/title:\s*['"`](.*?)['"`]/);
    const descMatch = this.content.match(/description:\s*['"`](.*?)['"`]/);

    if (titleMatch) {
      const title = titleMatch[1];
      if (title.length > 60) {
        this.warnings.push({
          type: 'SEO_TITLE_LENGTH',
          severity: 'warning',
          message: `Title too long (${title.length} chars, recommended: 50-60)`
        });
      }
      if (!title.includes('Toronto') && !title.includes('GTA') && !title.includes('Ontario')) {
        this.warnings.push({
          type: 'SEO_LOCAL_KEYWORDS',
          severity: 'warning',
          message: 'Title missing local keywords (Toronto/GTA/Ontario)'
        });
      }
    }

    if (descMatch) {
      const desc = descMatch[1];
      if (desc.length > 160) {
        this.warnings.push({
          type: 'SEO_DESC_LENGTH',
          severity: 'warning',
          message: `Description too long (${desc.length} chars, recommended: 150-160)`
        });
      }
      if (desc.length < 120) {
        this.warnings.push({
          type: 'SEO_DESC_LENGTH',
          severity: 'warning',
          message: `Description too short (${desc.length} chars, recommended: 120-160)`
        });
      }
    }

    // Check keyword density
    const contentText = this.content.replace(/<[^>]*>/g, '').toLowerCase();
    const wordCount = contentText.split(/\s+/).length;

    if (wordCount < 800) {
      this.warnings.push({
        type: 'CONTENT_LENGTH',
        severity: 'warning',
        message: `Content too short (${wordCount} words, recommended: 1500+)`
      });
    }
  }

  /**
   * Check for grammar and spelling issues
   */
  checkGrammarAndSpelling() {
    // Extract text content for checking
    const textContent = this.content
      .replace(/<[^>]*>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();

    // Common grammar issues
    const grammarIssues = [
      { pattern: /\bi\s+[a-z]/g, message: 'Lowercase "i" should be capitalized' },
      { pattern: /\s{2,}/g, message: 'Multiple spaces detected' },
      { pattern: /\.\.\./g, message: 'Use proper ellipsis character (…)' },
      { pattern: /\s[,\.;:]/g, message: 'Space before punctuation' },
      { pattern: /[\.,:;]\S/g, message: 'Missing space after punctuation' },
      { pattern: /\bits\s+(?!a\s|an\s|the\s)/g, message: 'Possible its/it\'s confusion' },
      { pattern: /\byour\s+(?:a|an)\s/g, message: 'Possible your/you\'re confusion' },
      { pattern: /\btheir\s+(?:is|was|has)\s/g, message: 'Possible their/there confusion' }
    ];

    grammarIssues.forEach(issue => {
      const matches = textContent.match(issue.pattern);
      if (matches && matches.length > 0) {
        this.warnings.push({
          type: 'GRAMMAR',
          severity: 'warning',
          message: `${issue.message} (${matches.length} instance${matches.length > 1 ? 's' : ''})`
        });
      }
    });

    // Common spelling mistakes in financial content
    const spellingIssues = [
      { wrong: /benifits?/gi, correct: 'benefits' },
      { wrong: /recieve/gi, correct: 'receive' },
      { wrong: /seperate/gi, correct: 'separate' },
      { wrong: /occured?/gi, correct: 'occurred' },
      { wrong: /succesful/gi, correct: 'successful' },
      { wrong: /finacial/gi, correct: 'financial' },
      { wrong: /planing/gi, correct: 'planning' },
      { wrong: /divorse/gi, correct: 'divorce' },
      { wrong: /inheritence/gi, correct: 'inheritance' },
      { wrong: /severence/gi, correct: 'severance' }
    ];

    spellingIssues.forEach(issue => {
      if (issue.wrong.test(textContent)) {
        this.issues.push({
          type: 'SPELLING',
          severity: 'error',
          message: `Spelling error: "${issue.wrong.source}" should be "${issue.correct}"`
        });
      }
    });
  }

  /**
   * Check for consistency in data and references
   */
  checkDataConsistency() {
    // Check date consistency
    const dates = this.content.match(/\b(January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{1,2},?\s+\d{4}\b/g) || [];
    const years = dates.map(d => d.match(/\d{4}/)?.[0]).filter(Boolean);
    const uniqueYears = [...new Set(years)];

    if (uniqueYears.length > 2) {
      this.warnings.push({
        type: 'DATE_CONSISTENCY',
        severity: 'warning',
        message: `Multiple years referenced: ${uniqueYears.join(', ')}. Verify dates are current.`
      });
    }

    // Check for outdated year references
    const currentYear = new Date().getFullYear();
    years.forEach(year => {
      if (parseInt(year) < currentYear - 1) {
        this.warnings.push({
          type: 'OUTDATED_DATE',
          severity: 'warning',
          message: `Possibly outdated year reference: ${year}`
        });
      }
    });

    // Check author consistency
    const authorMatches = this.content.match(/author:\s*['"`](.*?)['"`]/g) || [];
    const authors = authorMatches.map(a => a.match(/:\s*['"`](.*?)['"`]/)?.[1]).filter(Boolean);
    const uniqueAuthors = [...new Set(authors)];

    if (uniqueAuthors.length > 1) {
      this.warnings.push({
        type: 'AUTHOR_CONSISTENCY',
        severity: 'warning',
        message: `Multiple authors found: ${uniqueAuthors.join(', ')}`
      });
    }
  }

  /**
   * Auto-fix issues where possible
   */
  autoFixIssues() {
    if (!this.autoFix) return;

    let fixedContent = this.content;
    let fixCount = 0;

    // Fix multiple spaces
    fixedContent = fixedContent.replace(/\s{2,}/g, ' ');

    // Fix space before punctuation
    fixedContent = fixedContent.replace(/\s([,\.;:])/g, '$1');

    // Fix missing space after punctuation
    fixedContent = fixedContent.replace(/([\.,:;])(\S)/g, '$1 $2');

    // Fix common spelling mistakes
    const spellingFixes = [
      { wrong: /benifits?/gi, correct: 'benefits' },
      { wrong: /recieve/gi, correct: 'receive' },
      { wrong: /seperate/gi, correct: 'separate' },
      { wrong: /finacial/gi, correct: 'financial' }
    ];

    spellingFixes.forEach(fix => {
      if (fix.wrong.test(fixedContent)) {
        fixedContent = fixedContent.replace(fix.wrong, fix.correct);
        fixCount++;
      }
    });

    if (fixCount > 0) {
      fs.writeFileSync(this.filePath, fixedContent);
      console.log(`✅ Auto-fixed ${fixCount} issue(s)`);
    }

    this.content = fixedContent;
  }

  /**
   * Get line number for an index position
   */
  getLineNumber(index) {
    const lines = this.content.substring(0, index).split('\n');
    return lines.length;
  }

  /**
   * Run all checks
   */
  async runAllChecks() {
    this.loadBlog();

    console.log(`\n📝 Proofreading: ${path.basename(this.filePath)}`);
    console.log('━'.repeat(60));

    // Run all checks
    this.checkMissingAnswers();
    this.checkFAQRelevance();
    this.checkContentStructure();
    this.checkContentQuality();
    this.checkSEO();
    this.checkGrammarAndSpelling();
    this.checkDataConsistency();

    // Auto-fix if enabled
    if (this.autoFix) {
      this.autoFixIssues();
    }

    // Report results
    this.reportResults();

    return {
      file: this.filePath,
      issues: this.issues,
      warnings: this.warnings,
      hasErrors: this.issues.length > 0,
      score: this.calculateScore()
    };
  }

  /**
   * Calculate quality score
   */
  calculateScore() {
    const baseScore = 100;
    let deductions = 0;

    // Different penalties for different error types
    this.issues.forEach(issue => {
      switch(issue.type) {
        case 'GENERIC_FAQ':
          deductions += 20; // Heavy penalty for generic FAQs
          break;
        case 'MISSING_ANSWER':
          deductions += 15;
          break;
        case 'INCOMPLETE_CONTENT':
        case 'PLACEHOLDER_TEXT':
          deductions += 10;
          break;
        default:
          deductions += 10;
      }
    });

    // Warning penalties
    this.warnings.forEach(warning => {
      switch(warning.type) {
        case 'FAQ_RELEVANCE':
        case 'FAQ_NOT_SUBSTANTIVE':
          deductions += 5; // Higher penalty for FAQ issues
          break;
        case 'MISSING_TOPIC_FAQ':
          deductions += 3;
          break;
        default:
          deductions += 2;
      }
    });

    const score = baseScore - deductions;
    return Math.max(0, Math.min(100, score));
  }

  /**
   * Report results
   */
  reportResults() {
    // Report errors
    if (this.issues.length > 0) {
      console.log('\n❌ ERRORS:');
      this.issues.forEach((issue, i) => {
        console.log(`  ${i + 1}. ${issue.message}`);
        if (issue.line) {
          console.log(`     Line: ${issue.line}`);
        }
      });
    }

    // Report warnings
    if (this.warnings.length > 0) {
      console.log('\n⚠️  WARNINGS:');
      this.warnings.forEach((warning, i) => {
        console.log(`  ${i + 1}. ${warning.message}`);
        if (warning.line) {
          console.log(`     Line: ${warning.line}`);
        }
      });
    }

    // Summary
    const score = this.calculateScore();
    const emoji = score >= 90 ? '✅' : score >= 70 ? '⚠️' : '❌';

    console.log('\n' + '━'.repeat(60));
    console.log(`${emoji} Quality Score: ${score}/100`);
    console.log(`   Errors: ${this.issues.length}`);
    console.log(`   Warnings: ${this.warnings.length}`);

    if (score < 70) {
      console.log('\n🔧 RECOMMENDATION: This content needs significant improvement.');
    } else if (score < 90) {
      console.log('\n🔧 RECOMMENDATION: Address warnings to improve content quality.');
    } else {
      console.log('\n✨ Content meets quality standards!');
    }
  }
}

/**
 * Batch proofread multiple files
 */
class BatchProofreader {
  constructor(options = {}) {
    this.options = options;
    this.results = [];
  }

  /**
   * Proofread all blog posts
   */
  async proofreadAll(directory) {
    console.log('🚀 Starting Batch Proofreading');
    console.log('═'.repeat(60));

    const blogDirs = this.getBlogDirectories(directory);
    console.log(`📚 Found ${blogDirs.length} blog posts to proofread\n`);

    for (const blogPath of blogDirs) {
      const proofreader = new BlogProofreader(blogPath, this.options);
      const result = await proofreader.runAllChecks();
      this.results.push(result);
    }

    this.generateReport();
  }

  /**
   * Get all blog post files
   */
  getBlogDirectories(basePath) {
    const files = [];

    // Check published blogs
    const publishedPath = path.join(basePath, 'src', 'app', 'blog');
    if (fs.existsSync(publishedPath)) {
      const dirs = fs.readdirSync(publishedPath);
      dirs.forEach(dir => {
        if (dir !== 'calendar' && dir !== 'preview' && !dir.startsWith('.')) {
          const pageFile = path.join(publishedPath, dir, 'page.tsx');
          if (fs.existsSync(pageFile)) {
            files.push(pageFile);
          }
        }
      });
    }

    // Check scheduled posts
    const scheduledPath = path.join(basePath, 'content', 'scheduled-posts');
    if (fs.existsSync(scheduledPath)) {
      const posts = fs.readdirSync(scheduledPath);
      posts.forEach(post => {
        if (post.endsWith('.tsx')) {
          files.push(path.join(scheduledPath, post));
        }
      });
    }

    return files;
  }

  /**
   * Generate summary report
   */
  generateReport() {
    console.log('\n' + '═'.repeat(60));
    console.log('📊 PROOFREADING SUMMARY REPORT');
    console.log('═'.repeat(60));

    const totalIssues = this.results.reduce((sum, r) => sum + r.issues.length, 0);
    const totalWarnings = this.results.reduce((sum, r) => sum + r.warnings.length, 0);
    const avgScore = this.results.reduce((sum, r) => sum + r.score, 0) / this.results.length;

    console.log(`\n📈 Overall Statistics:`);
    console.log(`   Posts Checked: ${this.results.length}`);
    console.log(`   Total Errors: ${totalIssues}`);
    console.log(`   Total Warnings: ${totalWarnings}`);
    console.log(`   Average Score: ${avgScore.toFixed(1)}/100`);

    // List posts needing attention
    const needsAttention = this.results.filter(r => r.score < 70);
    if (needsAttention.length > 0) {
      console.log('\n❌ Posts Needing Immediate Attention:');
      needsAttention.forEach(r => {
        console.log(`   - ${path.basename(path.dirname(r.file))}: Score ${r.score}/100`);
      });
    }

    const needsImprovement = this.results.filter(r => r.score >= 70 && r.score < 90);
    if (needsImprovement.length > 0) {
      console.log('\n⚠️  Posts Needing Improvement:');
      needsImprovement.forEach(r => {
        console.log(`   - ${path.basename(path.dirname(r.file))}: Score ${r.score}/100`);
      });
    }

    const goodQuality = this.results.filter(r => r.score >= 90);
    if (goodQuality.length > 0) {
      console.log('\n✅ Posts Meeting Quality Standards:');
      console.log(`   ${goodQuality.length} posts (${(goodQuality.length / this.results.length * 100).toFixed(1)}%)`);
    }

    // Issue type breakdown
    const issueTypes = {};
    this.results.forEach(r => {
      r.issues.forEach(i => {
        issueTypes[i.type] = (issueTypes[i.type] || 0) + 1;
      });
    });

    if (Object.keys(issueTypes).length > 0) {
      console.log('\n📋 Common Issues:');
      Object.entries(issueTypes)
        .sort((a, b) => b[1] - a[1])
        .forEach(([type, count]) => {
          console.log(`   - ${type}: ${count} occurrences`);
        });
    }

    console.log('\n' + '═'.repeat(60));

    if (avgScore < 70) {
      console.log('🔴 CRITICAL: Content quality is below acceptable standards.');
      console.log('   Immediate action required to fix errors.');
    } else if (avgScore < 90) {
      console.log('🟡 ATTENTION: Content quality needs improvement.');
      console.log('   Address warnings to meet quality standards.');
    } else {
      console.log('🟢 EXCELLENT: Content quality meets standards!');
    }

    // Save report to file
    const reportPath = path.join(process.cwd(), 'proofreading-report.json');
    fs.writeFileSync(reportPath, JSON.stringify({
      timestamp: new Date().toISOString(),
      summary: {
        postsChecked: this.results.length,
        totalErrors: totalIssues,
        totalWarnings: totalWarnings,
        averageScore: avgScore
      },
      results: this.results
    }, null, 2));

    console.log(`\n💾 Detailed report saved to: proofreading-report.json`);
  }
}

// Main execution
async function main() {
  const args = process.argv.slice(2);
  const options = {
    autoFix: args.includes('--fix'),
    verbose: args.includes('--verbose')
  };

  if (args.length === 0 || args[0] === '--help') {
    console.log('Usage: node proofread-blog.js [file|--all] [--fix] [--verbose]');
    console.log('');
    console.log('Options:');
    console.log('  file       Path to specific blog file to proofread');
    console.log('  --all      Proofread all blog posts');
    console.log('  --fix      Auto-fix simple issues');
    console.log('  --verbose  Show detailed output');
    console.log('');
    console.log('Examples:');
    console.log('  node proofread-blog.js src/app/blog/my-post/page.tsx');
    console.log('  node proofread-blog.js --all --fix');
    return;
  }

  if (args.includes('--all')) {
    const batchProofreader = new BatchProofreader(options);
    await batchProofreader.proofreadAll(process.cwd());
  } else {
    const filePath = args.find(arg => !arg.startsWith('--'));
    if (filePath) {
      const proofreader = new BlogProofreader(path.resolve(filePath), options);
      await proofreader.runAllChecks();
    }
  }
}

// Run if executed directly
if (require.main === module) {
  main().catch(err => {
    console.error('❌ Error:', err.message);
    process.exit(1);
  });
}

module.exports = { BlogProofreader, BatchProofreader };