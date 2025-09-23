#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Generic phrases that indicate low-quality or irrelevant content
const genericPhrases = [
  /professional financial planning helps you navigate/i,
  /working with a qualified advisor ensures/i,
  /the right strategy depends on your unique situation/i,
  /where can i find .* services in toronto/i,
  /what documents do i need for .* in ontario/i,
  /how much does .* cost in the gta/i,
  /are there free .* resources in toronto/i,
  /what are common .* mistakes to avoid/i
];

// Check if content is generic
function isGenericContent(text) {
  for (const pattern of genericPhrases) {
    if (pattern.test(text)) {
      return true;
    }
  }
  return false;
}

// Calculate relevance score
function calculateRelevance(title, content, faqs, keyTakeaways, relatedQuestions) {
  let score = 100;
  const issues = [];

  // Extract main topic from title
  const titleWords = title.toLowerCase().split(/\s+/);
  const topicKeywords = [];

  // Common topic identifiers
  if (title.match(/divorce/i)) topicKeywords.push('divorce', 'separation', 'custody', 'support', 'asset');
  if (title.match(/severance|job loss|layoff/i)) topicKeywords.push('severance', 'ei', 'employment', 'termination', 'package');
  if (title.match(/retirement/i)) topicKeywords.push('retirement', 'rrsp', 'tfsa', 'pension', 'rrif');
  if (title.match(/inheritance|estate/i)) topicKeywords.push('inheritance', 'estate', 'probate', 'beneficiary', 'will');
  if (title.match(/business|sale/i)) topicKeywords.push('business', 'sale', 'valuation', 'capital gains', 'shareholders');
  if (title.match(/career|pivot/i)) topicKeywords.push('career', 'transition', 'retraining', 'skill', 'industry');

  // Check FAQ relevance
  if (faqs && faqs.length > 0) {
    let relevantFaqs = 0;
    for (const faq of faqs) {
      let isRelevant = false;
      for (const keyword of topicKeywords) {
        if (faq.question.toLowerCase().includes(keyword) ||
            faq.answer.toLowerCase().includes(keyword)) {
          isRelevant = true;
          break;
        }
      }
      if (isRelevant) relevantFaqs++;

      // Check for generic content
      if (isGenericContent(faq.question) || isGenericContent(faq.answer)) {
        score -= 10;
        issues.push(`Generic FAQ: "${faq.question.substring(0, 50)}..."`);
      }

      // Check for empty or short answers
      if (faq.answer.length < 150) {
        score -= 5;
        issues.push(`Short FAQ answer (${faq.answer.length} chars): "${faq.question.substring(0, 50)}..."`);
      }
    }

    const faqRelevanceRate = faqs.length > 0 ? (relevantFaqs / faqs.length) * 100 : 0;
    if (faqRelevanceRate < 50) {
      score -= 20;
      issues.push(`Low FAQ relevance: Only ${relevantFaqs}/${faqs.length} FAQs relate to topic`);
    }
  }

  // Check Key Takeaways relevance
  if (keyTakeaways && keyTakeaways.length > 0) {
    let relevantTakeaways = 0;
    for (const takeaway of keyTakeaways) {
      let isRelevant = false;
      for (const keyword of topicKeywords) {
        if (takeaway.toLowerCase().includes(keyword)) {
          isRelevant = true;
          break;
        }
      }
      if (isRelevant) relevantTakeaways++;

      if (isGenericContent(takeaway)) {
        score -= 5;
        issues.push(`Generic takeaway: "${takeaway.substring(0, 50)}..."`);
      }
    }

    const takeawayRelevanceRate = keyTakeaways.length > 0 ? (relevantTakeaways / keyTakeaways.length) * 100 : 0;
    if (takeawayRelevanceRate < 40) {
      score -= 10;
      issues.push(`Low takeaway relevance: Only ${relevantTakeaways}/${keyTakeaways.length} relate to topic`);
    }
  }

  // Check Related Questions
  if (relatedQuestions && relatedQuestions.length > 0) {
    let genericCount = 0;
    for (const question of relatedQuestions) {
      if (isGenericContent(question)) {
        genericCount++;
      }
    }
    if (genericCount > 2) {
      score -= 15;
      issues.push(`Too many generic related questions: ${genericCount}/${relatedQuestions.length}`);
    }
  }

  return { score: Math.max(0, score), issues };
}

// Parse blog post
function analyzeBlogPost(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');

  // Extract title
  const titleMatch = content.match(/title:\s*["'`](.*?)["'`]/);
  const title = titleMatch ? titleMatch[1] : 'Unknown';

  // Extract FAQs
  const faqs = [];
  const faqMatch = content.match(/const\s+blogFAQs\s*=\s*\[([\s\S]*?)\];/);
  if (faqMatch) {
    const faqPattern = /\{\s*question:\s*["'`](.*?)["'`],\s*answer:\s*["'`](.*?)["'`]\s*\}/gs;
    let match;
    while ((match = faqPattern.exec(faqMatch[1])) !== null) {
      faqs.push({ question: match[1], answer: match[2] });
    }
  }

  // Extract Key Takeaways
  const keyTakeaways = [];
  const takeawaysMatch = content.match(/const\s+keyTakeaways\s*=\s*\[([\s\S]*?)\];/);
  if (takeawaysMatch) {
    const takeawayPattern = /["'`](.*?)["'`]/g;
    let match;
    while ((match = takeawayPattern.exec(takeawaysMatch[1])) !== null) {
      keyTakeaways.push(match[1]);
    }
  }

  // Extract Related Questions
  const relatedQuestions = [];
  const questionsMatch = content.match(/const\s+relatedQuestions\s*=\s*\[([\s\S]*?)\];/);
  if (questionsMatch) {
    const questionPattern = /["'`](.*?)["'`]/g;
    let match;
    while ((match = questionPattern.exec(questionsMatch[1])) !== null) {
      relatedQuestions.push(match[1]);
    }
  }

  // Extract Quick Answer
  const quickAnswerMatch = content.match(/const\s+quickAnswer\s*=\s*["'`](.*?)["'`];/s);
  const quickAnswer = quickAnswerMatch ? quickAnswerMatch[1] : null;

  return {
    title,
    faqs,
    keyTakeaways,
    relatedQuestions,
    quickAnswer
  };
}

// Main function
function analyzeContentRelevance() {
  console.log(`
╔═══════════════════════════════════════════════╗
║     CONTENT RELEVANCE ANALYSIS REPORT        ║
╚═══════════════════════════════════════════════╝
`);

  const allFiles = [];

  // Get published posts
  const blogDir = path.join(__dirname, '../src/app/blog');
  const publishedDirs = fs.readdirSync(blogDir).filter(item => {
    const itemPath = path.join(blogDir, item);
    return fs.statSync(itemPath).isDirectory() && item !== 'calendar' && item !== 'preview';
  });

  for (const dir of publishedDirs) {
    allFiles.push({
      type: 'published',
      slug: dir,
      path: path.join(blogDir, dir, 'page.tsx')
    });
  }

  // Get scheduled posts
  const scheduledDir = path.join(__dirname, '../content/scheduled-posts');
  const scheduledFiles = fs.readdirSync(scheduledDir).filter(f => f.endsWith('.tsx'));
  for (const file of scheduledFiles) {
    allFiles.push({
      type: 'scheduled',
      slug: file.replace('.tsx', ''),
      path: path.join(scheduledDir, file)
    });
  }

  const lowRelevancePosts = [];
  const genericContentPosts = [];
  let totalPosts = 0;

  // Analyze each post
  for (const file of allFiles) {
    if (!fs.existsSync(file.path)) continue;

    totalPosts++;
    const postData = analyzeBlogPost(file.path);
    const { score, issues } = calculateRelevance(
      postData.title,
      '',
      postData.faqs,
      postData.keyTakeaways,
      postData.relatedQuestions
    );

    if (score < 80) {
      lowRelevancePosts.push({
        slug: file.slug,
        type: file.type,
        title: postData.title,
        score,
        issues
      });
    }

    // Check for generic quick answer
    if (postData.quickAnswer && isGenericContent(postData.quickAnswer)) {
      genericContentPosts.push({
        slug: file.slug,
        type: file.type,
        field: 'quickAnswer',
        content: postData.quickAnswer.substring(0, 100) + '...'
      });
    }
  }

  // Report findings
  console.log(`📊 ANALYSIS SUMMARY:`);
  console.log(`   Total Posts Analyzed: ${totalPosts}`);
  console.log(`   Posts with Low Relevance: ${lowRelevancePosts.length}`);
  console.log(`   Posts with Generic Content: ${genericContentPosts.length}\n`);

  if (lowRelevancePosts.length > 0) {
    console.log(`\n❌ POSTS WITH LOW CONTENT RELEVANCE:\n${'─'.repeat(50)}`);
    for (const post of lowRelevancePosts.sort((a, b) => a.score - b.score)) {
      console.log(`\n📄 ${post.slug} (${post.type})`);
      console.log(`   Title: ${post.title}`);
      console.log(`   Relevance Score: ${post.score}/100`);
      console.log(`   Issues:`);
      for (const issue of post.issues) {
        console.log(`     • ${issue}`);
      }
    }
  }

  if (genericContentPosts.length > 0) {
    console.log(`\n⚠️ POSTS WITH GENERIC CONTENT:\n${'─'.repeat(50)}`);
    for (const post of genericContentPosts) {
      console.log(`\n📄 ${post.slug} (${post.type})`);
      console.log(`   Field: ${post.field}`);
      console.log(`   Generic content: "${post.content}"`);
    }
  }

  // Recommendations
  console.log(`\n\n💡 RECOMMENDATIONS:\n${'─'.repeat(50)}`);
  console.log(`
1. Replace generic quick answers with specific, topic-relevant summaries
2. Ensure FAQs directly address the blog post's main topic
3. Remove generic "Where can I find..." questions from Related Questions
4. Add more specific, actionable key takeaways
5. Focus on unique, valuable content rather than filler text
`);

  // Success criteria
  const successRate = ((totalPosts - lowRelevancePosts.length) / totalPosts) * 100;
  console.log(`\n✅ CONTENT QUALITY SCORE: ${successRate.toFixed(1)}%`);

  if (successRate < 90) {
    console.log(`   ⚠️ Below target threshold (90%)`);
    process.exit(1);
  } else {
    console.log(`   ✅ Meets quality standards`);
  }
}

// Run analysis
analyzeContentRelevance();