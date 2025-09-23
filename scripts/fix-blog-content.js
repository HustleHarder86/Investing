#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Mapping of broken slugs to correct ones
const relatedArticleMapping = {
  'government-benefits-retirement-guide': 'government-benefits-oas-gis-cpp',
  'maximizing-ei-benefits-complete-guide': 'maximizing-ei-benefits-guide',
  'retirement-income-splitting-strategies': null, // Remove - doesn't exist
  'year-end-business-sale-tax': 'year-end-business-sale-tax', // Keep - scheduled
  'q4-business-exit-planning': 'q4-business-exit-planning', // Keep - scheduled
  'gray-divorce-retirement-accounts': 'gray-divorce-retirement-accounts', // Keep - scheduled
  'prenup-financial-protection-strategies': 'prenup-financial-protection-strategies', // Keep - scheduled
  'probate-fees-ontario-2025': 'probate-fees-ontario-2025', // Keep - scheduled
  'trust-structures-high-net-worth': 'trust-structures-high-net-worth', // Keep - scheduled
  'october-tax-planning-inheritances': 'october-tax-planning-inheritances', // Keep - scheduled
  'divorce-mediation-vs-litigation': 'divorce-mediation-vs-litigation', // Keep - scheduled
  'digital-asset-division-divorce': 'digital-asset-division-divorce', // Keep - scheduled
  'navigating-holidays-after-divorce': 'navigating-holidays-after-divorce', // Keep - scheduled
  'halloween-shared-custody': 'halloween-shared-custody', // Keep - scheduled
  'pension-commutation-lump-sum-analysis': 'pension-commutation-lump-sum-analysis', // Keep - scheduled
  'early-retirement-50s-complete-roadmap': 'early-retirement-50s-complete-roadmap', // Keep - scheduled
  'retirement-planning-age-40': 'retirement-planning-age-40', // Keep - scheduled
  'retirement-travel-budget-planning': 'retirement-travel-budget-planning', // Keep - scheduled
  'retirement-healthcare-cost-planning': 'retirement-healthcare-cost-planning', // Keep - scheduled
  'november-severance-negotiation-strategies': 'november-severance-negotiation-strategies', // Keep - scheduled
  'constructive-dismissal-financial-rights': null, // Remove - doesn't exist
  'holiday-co-parenting-expense-sharing': null, // Remove - doesn't exist
  'christmas-budget-divorced-parents': 'back-to-school-budgeting-divorced-parents', // Map to existing
};

// Generate topic-specific quick answers based on title
function generateQuickAnswer(title, category) {
  const titleLower = title.toLowerCase();

  if (titleLower.includes('divorce')) {
    if (titleLower.includes('covid') || titleLower.includes('pandemic')) {
      return "Post-COVID divorce planning requires adapting to remote work arrangements, volatile real estate markets, and new custody considerations. Understanding how pandemic-driven changes affect asset division, support calculations, and co-parenting agreements is essential for fair settlements in Ontario's evolving legal landscape.";
    }
    if (titleLower.includes('rrsp') && titleLower.includes('tfsa')) {
      return "RRSPs and TFSAs are divided differently in Ontario divorces: RRSPs accumulated during marriage are shared property subject to equalization, while TFSAs follow the same rules but with different tax implications. Understanding rollovers, tax-free transfers, and withdrawal strategies helps both parties maximize post-divorce retirement savings.";
    }
    return "Divorce financial planning in Ontario requires understanding property equalization, support obligations, and tax implications to protect your financial future. Strategic planning around asset division, pension splitting, and support calculations ensures fair outcomes while minimizing long-term financial impact on both parties.";
  }

  if (titleLower.includes('severance') || titleLower.includes('job loss') || titleLower.includes('layoff')) {
    if (titleLower.includes('tech')) {
      return "Tech industry severance packages in 2025 average 3-4 weeks per year of service, with additional considerations for equity vesting, bonus pro-ration, and non-compete agreements. Understanding your rights beyond Employment Standards Act minimums and negotiating strategically can increase packages by 30-50%.";
    }
    if (titleLower.includes('september')) {
      return "September severance trends in Toronto show increased layoffs as companies adjust Q4 budgets and prepare for year-end. Understanding seasonal patterns, industry-specific factors, and negotiation timing helps professionals maximize severance packages during fall restructuring waves.";
    }
    return "Severance planning maximizes compensation during job transitions through strategic negotiation, tax optimization, and benefit continuation. Understanding your legal entitlements, industry standards, and available support programs ensures financial stability while pursuing new career opportunities.";
  }

  if (titleLower.includes('retirement')) {
    if (titleLower.includes('checklist')) {
      return "Comprehensive retirement planning checklists ensure all financial, legal, and lifestyle aspects are addressed before leaving work. From government benefit applications to estate document updates, systematic preparation prevents costly oversights during the critical transition to retirement.";
    }
    if (titleLower.includes('tfsa') && titleLower.includes('rrsp')) {
      return "Choosing between TFSAs and RRSPs depends on current versus expected retirement tax rates, with TFSAs offering flexibility and RRSPs providing immediate deductions. Strategic use of both, considering income levels and retirement goals, optimizes tax savings across working and retirement years.";
    }
    return "Retirement planning in the GTA requires accumulating sufficient assets to maintain desired lifestyle despite high living costs. Strategic decisions around savings, investments, and government benefits determine retirement success over potentially 30+ years.";
  }

  if (titleLower.includes('inheritance') || titleLower.includes('estate')) {
    if (titleLower.includes('ontario') && titleLower.includes('2025')) {
      return "Ontario's 2025 inheritance tax landscape includes Estate Administration Tax (probate fees) at 1.5% on estates over $50,000, with strategic planning through trusts and beneficiary designations potentially saving thousands. Understanding new trust reporting rules and principal residence exemption changes ensures optimal estate structuring.";
    }
    return "Inheritance and estate planning ensures efficient wealth transfer while minimizing taxes and family conflicts. Strategic use of wills, trusts, and tax planning preserves family wealth for future generations.";
  }

  if (titleLower.includes('business')) {
    if (titleLower.includes('selling') && titleLower.includes('gta')) {
      return "Selling your GTA business before year-end provides tax planning opportunities through capital gains timing and income splitting strategies. Understanding valuation methods, buyer types, and deal structures while navigating Ontario's competitive market helps achieve optimal sale terms.";
    }
    return "Business succession and sale planning maximizes value while ensuring smooth ownership transitions. Strategic preparation, tax optimization, and structured deals help owners achieve successful exits.";
  }

  if (titleLower.includes('child support')) {
    return "Child support modifications reflect income changes, custody adjustments, and children's evolving needs throughout their development. Understanding Ontario's guidelines, Section 7 expenses, and modification thresholds helps parents maintain fair support arrangements that prioritize children's best interests.";
  }

  // Default fallback by category
  if (category.toLowerCase().includes('divorce')) {
    return "Strategic divorce financial planning protects assets, ensures fair settlements, and establishes sustainable post-divorce finances. Understanding Ontario family law, tax implications, and support calculations helps both parties move forward with financial security.";
  }

  return "Expert financial planning helps Toronto families navigate complex decisions during life transitions. Understanding tax implications, legal requirements, and optimization strategies ensures the best outcomes for your unique situation.";
}

// Generate topic-specific related questions
function generateRelatedQuestions(title, category) {
  const titleLower = title.toLowerCase();

  if (titleLower.includes('divorce')) {
    return [
      "How is property divided in Ontario divorces?",
      "What factors affect spousal support duration and amount?",
      "Can I keep the house after divorce?",
      "How are pensions split during divorce?",
      "What's the difference between separation and divorce?"
    ];
  }

  if (titleLower.includes('severance') || titleLower.includes('job loss')) {
    return [
      "What's the minimum severance in Ontario?",
      "Can I negotiate my severance package?",
      "How is severance taxed in Canada?",
      "Should I take lump sum or salary continuance?",
      "What happens to my benefits during severance?"
    ];
  }

  if (titleLower.includes('retirement')) {
    return [
      "How much do I need to retire in Toronto?",
      "When should I start taking CPP and OAS?",
      "What's the best withdrawal order for retirement accounts?",
      "How do I avoid OAS clawback in retirement?",
      "Should I convert RRSP to RRIF early?"
    ];
  }

  if (titleLower.includes('inheritance') || titleLower.includes('estate')) {
    return [
      "How much are probate fees in Ontario?",
      "Do I need a will if everything is joint?",
      "What assets bypass probate?",
      "How are RRSPs taxed at death?",
      "Can I avoid probate with a trust?"
    ];
  }

  if (titleLower.includes('business')) {
    return [
      "How is my business valued for sale?",
      "What's the capital gains exemption for business sale?",
      "Should I do asset sale or share sale?",
      "How long does business sale process take?",
      "What due diligence should I prepare for?"
    ];
  }

  // Default questions
  return [
    `What are the tax implications of ${category.toLowerCase()}?`,
    `How long does the ${category.toLowerCase()} process take?`,
    `What professionals should I consult for ${category.toLowerCase()}?`,
    `What are common mistakes in ${category.toLowerCase()}?`,
    `How much does professional ${category.toLowerCase()} advice cost?`
  ];
}

// Fix a single blog post file
function fixBlogPost(filePath, isScheduled = false) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let modified = false;
  const changes = [];

  // Extract title and category
  const titleMatch = content.match(/title:\s*["'`](.*?)["'`]/);
  const categoryMatch = content.match(/category:\s*["'`](.*?)["'`]/);
  const title = titleMatch ? titleMatch[1] : '';
  const category = categoryMatch ? categoryMatch[1] : '';

  // 1. Fix generic quick answer
  const genericQuickAnswer = "Professional financial planning helps you navigate complex financial decisions with confidence. Working with a qualified advisor ensures you're maximizing opportunities, minimizing taxes, and avoiding costly mistakes. The right strategy depends on your unique situation, goals, and timeline.";

  if (content.includes(genericQuickAnswer)) {
    const newQuickAnswer = generateQuickAnswer(title, category);
    content = content.replace(
      /const quickAnswer = ["'`]Professional financial planning helps you navigate[^"'`]*["'`];/,
      `const quickAnswer = "${newQuickAnswer}";`
    );
    modified = true;
    changes.push('Replaced generic quick answer');
  }

  // 2. Fix generic related questions
  const genericPatterns = [
    /Where can I find .* services in Toronto\?/i,
    /What documents do I need for .* in Ontario\?/i,
    /How much does .* cost in the GTA\?/i,
    /Are there free .* resources in Toronto\?/i,
    /What are common .* mistakes to avoid\?/i
  ];

  const relatedQuestionsMatch = content.match(/const relatedQuestions = \[([\s\S]*?)\];/);
  if (relatedQuestionsMatch) {
    const questionsContent = relatedQuestionsMatch[1];
    let hasGenericQuestions = false;

    for (const pattern of genericPatterns) {
      if (pattern.test(questionsContent)) {
        hasGenericQuestions = true;
        break;
      }
    }

    if (hasGenericQuestions) {
      const newQuestions = generateRelatedQuestions(title, category);
      const newQuestionsString = newQuestions.map(q => `  "${q}"`).join(',\n');
      content = content.replace(
        /const relatedQuestions = \[([\s\S]*?)\];/,
        `const relatedQuestions = [\n${newQuestionsString}\n];`
      );
      modified = true;
      changes.push('Replaced generic related questions');
    }
  }

  // 3. Fix broken related article links
  const relatedPostsMatch = content.match(/const relatedPosts = \[([\s\S]*?)\];/);
  if (relatedPostsMatch) {
    let relatedContent = relatedPostsMatch[0];
    let linksFixed = false;

    for (const [broken, replacement] of Object.entries(relatedArticleMapping)) {
      if (relatedContent.includes(broken)) {
        if (replacement === null) {
          // Remove the entire related post object
          const postPattern = new RegExp(`\\{[^}]*slug:\\s*["'\`]${broken}["'\`][^}]*\\},?`, 'g');
          relatedContent = relatedContent.replace(postPattern, '');
          linksFixed = true;
        } else if (replacement !== broken) {
          // Replace with correct slug
          relatedContent = relatedContent.replace(
            new RegExp(`slug:\\s*["'\`]${broken}["'\`]`, 'g'),
            `slug: "${replacement}"`
          );
          linksFixed = true;
        }
      }
    }

    if (linksFixed) {
      // Clean up any trailing commas
      relatedContent = relatedContent.replace(/,(\s*)\]/, '$1]');
      // Clean up any double commas
      relatedContent = relatedContent.replace(/,\s*,/g, ',');
      content = content.replace(relatedPostsMatch[0], relatedContent);
      modified = true;
      changes.push('Fixed broken related article links');
    }
  }

  return { content, modified, changes };
}

// Main execution
async function main() {
  console.log('\n📝 Starting Blog Content Fixes...\n');

  let totalFixed = 0;
  const results = [];

  // Fix published posts
  const blogDir = path.join(__dirname, '../src/app/blog');
  const publishedDirs = fs.readdirSync(blogDir).filter(item => {
    const itemPath = path.join(blogDir, item);
    return fs.statSync(itemPath).isDirectory() && item !== 'calendar' && item !== 'preview';
  });

  console.log(`Processing ${publishedDirs.length} published posts...`);
  for (const dir of publishedDirs) {
    const filePath = path.join(blogDir, dir, 'page.tsx');
    if (fs.existsSync(filePath)) {
      const { content, modified, changes } = fixBlogPost(filePath, false);
      if (modified) {
        fs.writeFileSync(filePath, content);
        totalFixed++;
        results.push({ type: 'published', slug: dir, changes });
        console.log(`  ✅ Fixed: ${dir} - ${changes.join(', ')}`);
      }
    }
  }

  // Fix scheduled posts
  const scheduledDir = path.join(__dirname, '../content/scheduled-posts');
  const scheduledFiles = fs.readdirSync(scheduledDir).filter(f => f.endsWith('.tsx'));

  console.log(`\nProcessing ${scheduledFiles.length} scheduled posts...`);
  for (const file of scheduledFiles) {
    const filePath = path.join(scheduledDir, file);
    const { content, modified, changes } = fixBlogPost(filePath, true);
    if (modified) {
      fs.writeFileSync(filePath, content);
      totalFixed++;
      results.push({ type: 'scheduled', slug: file.replace('.tsx', ''), changes });
      console.log(`  ✅ Fixed: ${file} - ${changes.join(', ')}`);
    }
  }

  // Summary
  console.log('\n' + '='.repeat(50));
  console.log(`✅ FIXES COMPLETE`);
  console.log(`   Total files fixed: ${totalFixed}`);
  console.log(`   Published: ${results.filter(r => r.type === 'published').length}`);
  console.log(`   Scheduled: ${results.filter(r => r.type === 'scheduled').length}`);

  // Change breakdown
  const changeTypes = {};
  for (const result of results) {
    for (const change of result.changes) {
      changeTypes[change] = (changeTypes[change] || 0) + 1;
    }
  }

  console.log('\n📊 Changes Applied:');
  for (const [change, count] of Object.entries(changeTypes)) {
    console.log(`   • ${change}: ${count} files`);
  }
}

// Run the script
main().catch(console.error);