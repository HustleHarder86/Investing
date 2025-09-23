#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const directories = [
  '/home/amy/investing/src/app/blog',
  '/home/amy/investing/content/scheduled-posts'
];

// Map of blog slugs to their specific contexts
const blogContextMap = {
  'rrsp-contribution-room-maximize-2025': 'RRSP contributions',
  'tfsa-vs-rrsp-retirement-strategy': 'TFSA vs RRSP decisions',
  'cpp-timing-60-65-70-decision': 'CPP timing',
  'ontario-inheritance-tax-changes-2025': 'inheritance planning',
  'retirement-planning-checklist-gta': 'retirement planning',
  'rrif-conversion-strategy-timing': 'RRIF conversion',
  'rrsp-vs-tfsa-during-divorce': 'RRSP and TFSA during divorce',
  'selling-gta-business-before-year-end': 'business sale',
  'divorce-financial-planning-after-covid': 'divorce financial planning',
  'estate-planning-blended-families': 'estate planning for blended families',
  'maximizing-ei-benefits-guide': 'EI benefits',
  'fall-financial-reset-after-job-loss': 'financial recovery after job loss',
  'tech-layoffs-severance-guide-2025': 'severance packages',
  'september-severance-trends-tech': 'tech severance',
  'negotiating-severance-financial-services': 'severance negotiation',
  'business-valuation-methods-q4': 'business valuation',
  'child-support-modifications-school-year': 'child support modifications',
  'cottage-inheritance-labor-day': 'cottage inheritance',
  'toronto-real-estate-division-september': 'real estate division',
  'back-to-school-budgeting-divorced-parents': 'budgeting for divorced parents',
  'government-benefits-oas-gis-cpp': 'government benefits',
  'gray-divorce-retirement-accounts': 'gray divorce',
  'probate-fees-ontario-2025': 'probate fees',
  'q4-business-exit-planning': 'business exit planning',
  'retirement-income-splitting-strategies': 'income splitting',
  'retirement-planning-age-40': 'retirement planning at 40',
  'self-employed-retirement-ipp-rrsp': 'self-employed retirement planning',
  // Add scheduled posts contexts
  'early-retirement-50s-complete-roadmap': 'early retirement planning',
  'defined-benefit-pension-options': 'pension options',
  'retirement-healthcare-cost-planning': 'healthcare costs in retirement',
  'retirement-housing-downsizing-gta': 'retirement downsizing',
  'retirement-part-time-work-strategies': 'part-time work in retirement',
  'retirement-travel-budget-planning': 'retirement travel planning',
  'retirement-withdrawal-sequence-optimization': 'withdrawal strategies',
  'pension-commutation-lump-sum-analysis': 'pension commutation',
  'resp-to-rrsp-education-retirement': 'RESP to RRSP transfers',
  // Default for other topics
  'default': 'financial planning'
};

function getContextFromFilePath(filePath) {
  // Extract slug from file path
  const pathParts = filePath.split(path.sep);
  let slug = '';

  if (filePath.includes('/src/app/blog/')) {
    // For published posts: /src/app/blog/[slug]/page.tsx
    slug = pathParts[pathParts.length - 2];
  } else if (filePath.includes('/content/scheduled-posts/')) {
    // For scheduled posts: /content/scheduled-posts/[slug].tsx
    const fileName = pathParts[pathParts.length - 1];
    slug = fileName.replace('.tsx', '');
  }

  return blogContextMap[slug] || blogContextMap['default'];
}

function fixRelatedQuestions(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let updated = false;
  const context = getContextFromFilePath(filePath);

  // Find and fix related questions with empty placeholders
  const relatedQuestionsMatch = content.match(/const relatedQuestions\s*=\s*\[([\s\S]*?)\];/);

  if (relatedQuestionsMatch) {
    const questionsContent = relatedQuestionsMatch[1];

    // Check if questions have placeholder blanks
    if (questionsContent.includes('of ?') || questionsContent.includes('the  process') || questionsContent.includes('for ?') || questionsContent.includes('in ?') || questionsContent.includes('professional  advice')) {

      const newQuestions = [
        {
          question: `What are the tax implications of ${context}?`,
          answer: `Tax implications of ${context} vary based on your specific situation and income level. In Ontario, factors like your marginal tax rate, the type of transaction, and timing can significantly impact your tax liability. It's essential to consult with a qualified financial advisor or tax professional who can analyze your unique circumstances and help you optimize your tax strategy. They can identify available deductions, credits, and planning opportunities specific to GTA residents.`
        },
        {
          question: `How long does the ${context} process take?`,
          answer: `The ${context} timeline varies depending on complexity, the professionals involved, and specific circumstances. Simple cases might resolve in 3-6 months, while complex situations involving multiple parties, valuations, or negotiations can take 12-18 months or longer. Working with experienced financial advisors familiar with GTA regulations can help streamline the process and avoid unnecessary delays. Early planning and proper documentation are key to expediting matters.`
        },
        {
          question: `What professionals should I consult for ${context}?`,
          answer: `For ${context}, you'll likely need a team of professionals including a Certified Financial Planner (CFP®), tax accountant, and legal counsel specializing in your specific needs. Depending on your situation, you might also benefit from business valuators, real estate appraisers, or pension specialists. Choose professionals with experience in the Greater Toronto Area who understand local regulations and market conditions. Look for credentials, client testimonials, and specific expertise in your area of need.`
        },
        {
          question: `What are common mistakes in ${context}?`,
          answer: `Common mistakes in ${context} include acting without professional advice, making emotional rather than strategic decisions, overlooking tax implications, failing to document agreements properly, and not considering long-term consequences. Many people also underestimate costs, miss important deadlines, or fail to update their financial plans after major life changes. Working with experienced GTA financial advisors helps avoid these costly errors and ensures you're making informed decisions based on current regulations and best practices.`
        },
        {
          question: `How much does professional ${context} advice cost?`,
          answer: `Professional ${context} advice costs vary based on complexity, services required, and the advisor's experience. Financial planners may charge hourly rates ($200-500), flat fees for specific services ($2,500-10,000), or ongoing asset management fees (1-2% annually). While costs may seem significant, professional guidance often saves money through tax optimization, avoiding costly mistakes, and identifying opportunities you might miss. Many GTA advisors offer initial consultations to discuss your needs and provide transparent fee structures.`
        }
      ];

      const newRelatedQuestionsCode = `const relatedQuestions = [\n${newQuestions.map(q =>
        `  {\n    question: "${q.question}",\n    answer: "${q.answer}"\n  }`
      ).join(',\n')}\n];`;

      content = content.replace(/const relatedQuestions\s*=\s*\[[\s\S]*?\];/, newRelatedQuestionsCode);
      updated = true;
      console.log(`  ✓ Fixed related questions for ${context} in ${path.basename(filePath)}`);
    }
  }

  if (updated) {
    fs.writeFileSync(filePath, content);
    return true;
  }
  return false;
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  let updatedCount = 0;

  files.forEach(file => {
    if (file.isDirectory()) {
      const subDir = path.join(dir, file.name);
      const pagePath = path.join(subDir, 'page.tsx');

      if (fs.existsSync(pagePath)) {
        if (fixRelatedQuestions(pagePath)) {
          updatedCount++;
        }
      }
    } else if (file.name.endsWith('.tsx')) {
      const filePath = path.join(dir, file.name);
      if (fixRelatedQuestions(filePath)) {
        updatedCount++;
      }
    }
  });

  return updatedCount;
}

// Main execution
console.log('🔄 Starting to fix related questions with proper context...\n');

let totalUpdated = 0;

directories.forEach(dir => {
  if (fs.existsSync(dir)) {
    console.log(`📂 Processing ${dir}...`);
    const updated = processDirectory(dir);
    totalUpdated += updated;
    console.log(`   Updated ${updated} files in ${dir}\n`);
  }
});

console.log(`✅ Fix complete! Updated ${totalUpdated} blog files with proper context.`);
console.log('\n📋 Summary:');
console.log('  - Fixed placeholder questions with actual context');
console.log('  - Updated answers to match the specific topic');
console.log('\nPlease review the changes and test the functionality.');