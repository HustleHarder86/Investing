#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const directories = [
  '/home/amy/investing/src/app/blog',
  '/home/amy/investing/content/scheduled-posts'
];

function updateBlogFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let updated = false;

  // 1. Remove Call CTAs with phone numbers
  // Pattern 1: Call 1-800-PROSPER or similar
  const phonePattern1 = /<strong>Call\s+[0-9-]+[A-Z-]+<\/strong>/g;
  if (phonePattern1.test(content)) {
    content = content.replace(phonePattern1, '');
    updated = true;
    console.log(`  ✓ Removed Call CTA from ${filePath}`);
  }

  // Pattern 2: General phone number mentions in CTAs
  const phonePattern2 = /Call\s+(?:us\s+at\s+)?[0-9-]+[A-Z-]+\s*(?:for|to)/gi;
  if (phonePattern2.test(content)) {
    content = content.replace(phonePattern2, 'Contact us for');
    updated = true;
    console.log(`  ✓ Removed phone number from CTA in ${filePath}`);
  }

  // Pattern 3: Remove entire paragraphs that are primarily about calling
  const phoneParaPattern = /<p[^>]*>\s*<strong>Call[^<]+<\/strong>[^<]*(?:call|phone|1-800)[^<]*<\/p>/gi;
  if (phoneParaPattern.test(content)) {
    content = content.replace(phoneParaPattern, '');
    updated = true;
    console.log(`  ✓ Removed phone-focused paragraph from ${filePath}`);
  }

  // 2. Update relatedQuestions to include answers
  // Look for relatedQuestions variable
  const relatedQuestionsMatch = content.match(/const relatedQuestions\s*=\s*\[([\s\S]*?)\];/);

  if (relatedQuestionsMatch) {
    const questionsContent = relatedQuestionsMatch[1];

    // Check if it's already in the new format (has objects with question/answer)
    if (!questionsContent.includes('question:') && !questionsContent.includes('answer:')) {
      // It's the old string array format - need to convert
      const questions = [];
      const questionRegex = /"([^"]+)"/g;
      let match;

      while ((match = questionRegex.exec(questionsContent)) !== null) {
        const question = match[1];
        questions.push({
          question: question,
          answer: generateAnswerForQuestion(question)
        });
      }

      if (questions.length > 0) {
        const newRelatedQuestions = `const relatedQuestions = [\n${questions.map(q =>
          `  {\n    question: "${q.question}",\n    answer: "${q.answer}"\n  }`
        ).join(',\n')}\n];`;

        content = content.replace(/const relatedQuestions\s*=\s*\[[\s\S]*?\];/, newRelatedQuestions);
        updated = true;
        console.log(`  ✓ Updated relatedQuestions to include answers in ${filePath}`);
      }
    }
  }

  if (updated) {
    fs.writeFileSync(filePath, content);
    return true;
  }
  return false;
}

function generateAnswerForQuestion(question) {
  const q = question.toLowerCase();

  // Generate contextually relevant answers based on common patterns
  if (q.includes('tax implications')) {
    return "Tax implications vary based on your specific situation and income level. In Ontario, factors like your marginal tax rate, the type of transaction, and timing can significantly impact your tax liability. It's essential to consult with a qualified financial advisor or tax professional who can analyze your unique circumstances and help you optimize your tax strategy. They can identify available deductions, credits, and planning opportunities specific to GTA residents.";
  }

  if (q.includes('how long') && q.includes('process')) {
    return "The timeline varies depending on complexity, the professionals involved, and specific circumstances. Simple cases might resolve in 3-6 months, while complex situations involving multiple parties, valuations, or negotiations can take 12-18 months or longer. Working with experienced financial advisors familiar with GTA regulations can help streamline the process and avoid unnecessary delays. Early planning and proper documentation are key to expediting matters.";
  }

  if (q.includes('professionals') && q.includes('consult')) {
    return "You'll likely need a team of professionals including a Certified Financial Planner (CFP®), tax accountant, and legal counsel specializing in your specific needs. Depending on your situation, you might also benefit from business valuators, real estate appraisers, or pension specialists. Choose professionals with experience in the Greater Toronto Area who understand local regulations and market conditions. Look for credentials, client testimonials, and specific expertise in your area of need.";
  }

  if (q.includes('common mistakes')) {
    return "Common mistakes include acting without professional advice, making emotional rather than strategic decisions, overlooking tax implications, failing to document agreements properly, and not considering long-term consequences. Many people also underestimate costs, miss important deadlines, or fail to update their financial plans after major life changes. Working with experienced GTA financial advisors helps avoid these costly errors and ensures you're making informed decisions based on current regulations and best practices.";
  }

  if (q.includes('professional') && q.includes('cost')) {
    return "Professional advice costs vary based on complexity, services required, and the advisor's experience. Financial planners may charge hourly rates ($200-500), flat fees for specific services ($2,500-10,000), or ongoing asset management fees (1-2% annually). While costs may seem significant, professional guidance often saves money through tax optimization, avoiding costly mistakes, and identifying opportunities you might miss. Many GTA advisors offer initial consultations to discuss your needs and provide transparent fee structures.";
  }

  // Default comprehensive answer for unmatched questions
  return "This depends on your specific circumstances and financial goals. Factors such as your income level, assets, family situation, and long-term objectives all play important roles. Professional financial advisors in the Greater Toronto Area can provide personalized guidance based on current regulations and market conditions. They'll help you understand your options, optimize your strategy, and avoid common pitfalls while ensuring compliance with Ontario and federal requirements.";
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  let updatedCount = 0;

  files.forEach(file => {
    if (file.isDirectory()) {
      const subDir = path.join(dir, file.name);
      const pagePath = path.join(subDir, 'page.tsx');

      if (fs.existsSync(pagePath)) {
        if (updateBlogFile(pagePath)) {
          updatedCount++;
        }
      }
    } else if (file.name.endsWith('.tsx')) {
      const filePath = path.join(dir, file.name);
      if (updateBlogFile(filePath)) {
        updatedCount++;
      }
    }
  });

  return updatedCount;
}

// Main execution
console.log('🔄 Starting blog update process...\n');

let totalUpdated = 0;

directories.forEach(dir => {
  if (fs.existsSync(dir)) {
    console.log(`📂 Processing ${dir}...`);
    const updated = processDirectory(dir);
    totalUpdated += updated;
    console.log(`   Updated ${updated} files in ${dir}\n`);
  }
});

console.log(`✅ Update complete! Modified ${totalUpdated} blog files.`);
console.log('\n📋 Summary:');
console.log('  - Added answers to People Also Ask questions');
console.log('  - Removed Call CTAs with phone numbers');
console.log('\nPlease review the changes and test the functionality.');