#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Color codes for terminal output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  bold: '\x1b[1m'
};

// Get list of all existing blog posts (for validating Related Articles)
function getExistingBlogPosts() {
  const blogDir = path.join(__dirname, '../src/app/blog');
  const posts = [];

  if (fs.existsSync(blogDir)) {
    const items = fs.readdirSync(blogDir);
    for (const item of items) {
      const itemPath = path.join(blogDir, item);
      const stats = fs.statSync(itemPath);
      if (stats.isDirectory() && item !== 'calendar' && item !== 'preview') {
        posts.push(item);
      }
    }
  }

  return posts;
}

// Parse blog post file to extract key information
function parseBlogPost(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const issues = [];
  const warnings = [];
  const info = {};

  // Extract FAQs
  const faqMatch = content.match(/const\s+blogFAQs\s*=\s*\[([\s\S]*?)\];/);
  if (faqMatch) {
    const faqContent = faqMatch[1];
    info.faqs = [];

    // Parse each FAQ
    const faqPattern = /\{\s*question:\s*["'`](.*?)["'`],\s*answer:\s*["'`](.*?)["'`]\s*\}/gs;
    let match;
    while ((match = faqPattern.exec(faqContent)) !== null) {
      const question = match[1];
      const answer = match[2];

      info.faqs.push({ question, answer });

      // Check for empty or placeholder answers
      if (!answer || answer.trim().length < 50) {
        issues.push(`❌ FAQ has empty or too short answer: "${question.substring(0, 50)}..."`);
      }

      // Check for TODO/TBD markers
      if (answer.match(/\b(TODO|TBD|FIXME|XXX|PLACEHOLDER)\b/i)) {
        issues.push(`❌ FAQ answer contains placeholder text: "${question.substring(0, 50)}..."`);
      }
    }

    if (info.faqs.length === 0) {
      issues.push('❌ blogFAQs array is defined but empty');
    }
  } else {
    warnings.push('⚠️ No blogFAQs array found');
  }

  // Extract Related Articles
  const relatedMatch = content.match(/const\s+relatedPosts\s*=\s*\[([\s\S]*?)\];/);
  if (relatedMatch) {
    const relatedContent = relatedMatch[1];
    info.relatedPosts = [];

    // Parse each related post
    const postPattern = /\{\s*title:\s*["'`](.*?)["'`],\s*slug:\s*["'`](.*?)["'`],\s*excerpt:\s*["'`](.*?)["'`],\s*readTime:\s*["'`](.*?)["'`]\s*\}/gs;
    let match;
    while ((match = postPattern.exec(relatedContent)) !== null) {
      info.relatedPosts.push({
        title: match[1],
        slug: match[2],
        excerpt: match[3],
        readTime: match[4]
      });
    }
  }

  // Extract Quick Answer
  const quickAnswerMatch = content.match(/const\s+quickAnswer\s*=\s*["'`](.*?)["'`];/s);
  if (quickAnswerMatch) {
    info.quickAnswer = quickAnswerMatch[1];
    if (info.quickAnswer.length < 50) {
      issues.push('❌ Quick answer is too short (< 50 characters)');
    }
  } else {
    warnings.push('⚠️ No quickAnswer found');
  }

  // Extract Key Takeaways
  const keyTakeawaysMatch = content.match(/const\s+keyTakeaways\s*=\s*\[([\s\S]*?)\];/);
  if (keyTakeawaysMatch) {
    const takeawaysContent = keyTakeawaysMatch[1];
    info.keyTakeaways = [];

    const takeawayPattern = /["'`](.*?)["'`]/g;
    let match;
    while ((match = takeawayPattern.exec(takeawaysContent)) !== null) {
      info.keyTakeaways.push(match[1]);
    }

    if (info.keyTakeaways.length === 0) {
      issues.push('❌ keyTakeaways array is defined but empty');
    } else if (info.keyTakeaways.length < 3) {
      warnings.push(`⚠️ Only ${info.keyTakeaways.length} key takeaways (recommend 5+)`);
    }
  } else {
    warnings.push('⚠️ No keyTakeaways found');
  }

  // Extract Related Questions (People Also Ask)
  const relatedQuestionsMatch = content.match(/const\s+relatedQuestions\s*=\s*\[([\s\S]*?)\];/);
  if (relatedQuestionsMatch) {
    const questionsContent = relatedQuestionsMatch[1];
    info.relatedQuestions = [];

    const questionPattern = /["'`](.*?)["'`]/g;
    let match;
    while ((match = questionPattern.exec(questionsContent)) !== null) {
      info.relatedQuestions.push(match[1]);
    }

    if (info.relatedQuestions.length === 0) {
      issues.push('❌ relatedQuestions array is defined but empty');
    }
  } else {
    warnings.push('⚠️ No relatedQuestions (People Also Ask) found');
  }

  // Check for generic FAQ patterns
  if (info.faqs) {
    for (const faq of info.faqs) {
      if (faq.question.match(/What is the cost of.*in Toronto\?/i) ||
          faq.question.match(/How do I choose.*advisor\?/i) ||
          faq.question.match(/What are the tax implications/i)) {
        warnings.push(`⚠️ Potentially generic FAQ: "${faq.question.substring(0, 60)}..."`);
      }
    }
  }

  return { info, issues, warnings };
}

// Validate Related Articles links
function validateRelatedArticles(relatedPosts, existingPosts) {
  const brokenLinks = [];

  if (relatedPosts) {
    for (const post of relatedPosts) {
      if (!existingPosts.includes(post.slug)) {
        brokenLinks.push(post);
      }
    }
  }

  return brokenLinks;
}

// Main audit function
function auditBlogPosts() {
  console.log(`${colors.bold}${colors.cyan}
╔════════════════════════════════════════════╗
║     COMPREHENSIVE BLOG POST AUDIT         ║
╚════════════════════════════════════════════╝
${colors.reset}`);

  const existingPosts = getExistingBlogPosts();
  console.log(`${colors.blue}Found ${existingPosts.length} published blog posts${colors.reset}\n`);

  const allIssues = [];
  const summaryStats = {
    totalPosts: 0,
    postsWithIssues: 0,
    brokenLinks: 0,
    missingFAQs: 0,
    emptyAnswers: 0,
    missingComponents: 0
  };

  // Check published posts
  const blogDir = path.join(__dirname, '../src/app/blog');
  const publishedPosts = fs.readdirSync(blogDir).filter(item => {
    const itemPath = path.join(blogDir, item);
    return fs.statSync(itemPath).isDirectory() && item !== 'calendar' && item !== 'preview';
  });

  // Check scheduled posts
  const scheduledDir = path.join(__dirname, '../content/scheduled-posts');
  const scheduledPosts = fs.readdirSync(scheduledDir).filter(item => item.endsWith('.tsx'));

  // Combine all posts for auditing
  const allPostsToAudit = [
    ...publishedPosts.map(slug => ({
      type: 'published',
      slug,
      path: path.join(blogDir, slug, 'page.tsx')
    })),
    ...scheduledPosts.map(file => ({
      type: 'scheduled',
      slug: file.replace('.tsx', ''),
      path: path.join(scheduledDir, file)
    }))
  ];

  console.log(`${colors.bold}Auditing ${allPostsToAudit.length} total blog posts...${colors.reset}\n`);

  // Audit each post
  for (const post of allPostsToAudit) {
    if (!fs.existsSync(post.path)) {
      console.log(`${colors.red}❌ File not found: ${post.path}${colors.reset}`);
      continue;
    }

    summaryStats.totalPosts++;
    const { info, issues, warnings } = parseBlogPost(post.path);

    // Validate related articles
    const brokenLinks = validateRelatedArticles(info.relatedPosts, existingPosts);

    // Only show posts with issues
    if (issues.length > 0 || brokenLinks.length > 0) {
      summaryStats.postsWithIssues++;

      console.log(`${colors.bold}${colors.yellow}📄 ${post.slug} (${post.type})${colors.reset}`);

      // Show critical issues
      if (issues.length > 0) {
        console.log(`${colors.red}  Issues:${colors.reset}`);
        issues.forEach(issue => {
          console.log(`    ${issue}`);
          if (issue.includes('empty')) summaryStats.emptyAnswers++;
          if (issue.includes('No blogFAQs')) summaryStats.missingFAQs++;
        });
      }

      // Show broken links
      if (brokenLinks.length > 0) {
        console.log(`${colors.red}  Broken Related Article Links:${colors.reset}`);
        brokenLinks.forEach(link => {
          console.log(`    ❌ "${link.title}" -> /blog/${link.slug} (404)`);
          summaryStats.brokenLinks++;
        });
      }

      // Show warnings (only if verbose)
      if (process.argv.includes('--verbose') && warnings.length > 0) {
        console.log(`${colors.yellow}  Warnings:${colors.reset}`);
        warnings.forEach(warning => console.log(`    ${warning}`));
      }

      console.log('');
    }
  }

  // Summary Report
  console.log(`${colors.bold}${colors.cyan}
╔════════════════════════════════════════════╗
║             AUDIT SUMMARY                 ║
╚════════════════════════════════════════════╝${colors.reset}

📊 ${colors.bold}Statistics:${colors.reset}
  • Total Posts Audited: ${summaryStats.totalPosts}
  • Posts with Issues: ${colors.red}${summaryStats.postsWithIssues}${colors.reset}
  • Broken Related Links: ${colors.red}${summaryStats.brokenLinks}${colors.reset}
  • Empty/Missing FAQ Answers: ${colors.red}${summaryStats.emptyAnswers}${colors.reset}
  • Posts Missing FAQs: ${colors.yellow}${summaryStats.missingFAQs}${colors.reset}

${colors.bold}${colors.magenta}Key Findings:${colors.reset}

1. ${colors.bold}People Also Ask (Related Questions):${colors.reset}
   ⚠️ Component has cursor-pointer but no click functionality
   📍 Location: /src/components/seo/RelatedQuestions.tsx

2. ${colors.bold}Related Articles:${colors.reset}
   ❌ Multiple posts link to non-existent blog posts
   📍 Need to update slugs or create missing posts

3. ${colors.bold}FAQ Completeness:${colors.reset}
   ${summaryStats.emptyAnswers > 0 ? '❌ Several posts have incomplete FAQ answers' : '✅ All FAQs have complete answers'}

4. ${colors.bold}Content Structure:${colors.reset}
   ${summaryStats.missingComponents > 0 ? `⚠️ ${summaryStats.missingComponents} posts missing key SEO components` : '✅ All posts have required components'}

${colors.bold}${colors.green}Recommendations:${colors.reset}

1. ${colors.bold}Fix People Also Ask Interaction:${colors.reset}
   - Add expandable functionality or remove cursor-pointer
   - Consider making questions link to relevant sections

2. ${colors.bold}Update Related Articles:${colors.reset}
   - Replace broken links with existing posts
   - Create missing posts or remove dead links

3. ${colors.bold}Complete Missing Content:${colors.reset}
   - Fill in all empty FAQ answers
   - Add missing quickAnswer and keyTakeaways

4. ${colors.bold}Quality Assurance:${colors.reset}
   - Run proofreading script on all posts
   - Ensure minimum content requirements met
`);

  // Exit with error code if issues found
  if (summaryStats.postsWithIssues > 0) {
    process.exit(1);
  }
}

// Run the audit
auditBlogPosts();