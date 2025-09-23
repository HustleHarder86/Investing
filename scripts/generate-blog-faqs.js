#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Generate topic-specific FAQs for blog posts
 * This replaces generic company FAQs with relevant, substantive content
 */

// Topic-specific FAQ templates based on blog categories and titles
const FAQ_TEMPLATES = {
  // CPP and Pension FAQs
  cpp: [
    {
      question: "When should I start taking CPP - at 60, 65, or 70?",
      answer: "The optimal CPP start age depends on your health, life expectancy, and financial needs. Starting at 60 reduces benefits by 36% but provides immediate income. Waiting until 70 increases benefits by 42%. Most healthy individuals benefit from waiting until at least 65, while those with health concerns or immediate income needs should consider starting earlier. A break-even analysis typically shows age 74 for 60 vs 65, and age 82 for 65 vs 70."
    },
    {
      question: "How is CPP calculated and what's the maximum I can receive?",
      answer: "CPP is calculated based on your average pensionable earnings over your working life, excluding your lowest-earning years (up to 8 years can be dropped). For 2025, the maximum monthly payment at age 65 is $1,364.60, but the average Canadian receives about $758. Starting early at 60 reduces this by 36% (0.6% per month), while delaying to 70 increases it by 42% (0.7% per month after 65)."
    },
    {
      question: "Can I work while collecting CPP?",
      answer: "Yes, you can work while collecting CPP with no earnings limit or reduction in benefits. If you're under 65 and working, you must continue contributing to CPP, which creates Post-Retirement Benefits (PRB) that increase your pension. After 65, contributions are optional until age 70. Each year of PRB adds approximately $400 annually to your pension."
    }
  ],

  // Business Sale and Valuation FAQs
  business_sale: [
    {
      question: "How do I determine the value of my business for sale?",
      answer: "Business valuation typically uses three methods: asset-based (book value of assets minus liabilities), income-based (3-5x EBITDA for most small businesses), and market-based (comparable sales in your industry). Most GTA small businesses sell for 2.5-4x adjusted EBITDA, though tech companies can command 5-8x. Professional valuations cost $5,000-$25,000 but can increase sale price by identifying value drivers often worth hundreds of thousands more."
    },
    {
      question: "What's the typical timeline for selling a business?",
      answer: "The business sale process typically takes 6-12 months from preparation to closing. This includes 2-3 months for preparation and valuation, 2-3 months for marketing and finding buyers, 1-2 months for due diligence, and 1-2 months for final negotiations and closing. Starting in Q4 positions you well for a Q1-Q2 close the following year, often the most active period for acquisitions."
    },
    {
      question: "Should I use a business broker or sell privately?",
      answer: "Business brokers typically charge 8-12% commission but bring buyer networks, marketing expertise, and negotiation skills that often result in 15-30% higher sale prices. For businesses under $1 million, brokers are usually worthwhile. For larger businesses, M&A advisors charging 3-5% may be more appropriate. Private sales work best when you have identified strategic buyers or competitors already interested in acquisition."
    }
  ],

  // Divorce and Separation FAQs
  divorce: [
    {
      question: "How are assets divided in an Ontario divorce?",
      answer: "Ontario follows equalization of net family property, meaning spouses share equally in the increase of their net worth during marriage. Each spouse calculates their net worth on the marriage date and separation date. The spouse with the higher increase pays half the difference to the other. The matrimonial home is treated specially - its full value is included regardless of who owned it before marriage. Excluded assets include inheritances, gifts from third parties, and personal injury settlements."
    },
    {
      question: "What happens to RRSPs and pensions during divorce?",
      answer: "RRSPs accumulated during marriage are divided equally, typically through a tax-free rollover to the other spouse's RRSP. Defined benefit pensions require actuarial valuation to determine present value, which forms part of equalization. You can transfer up to 50% of pension credits to your spouse tax-free. CPP credits earned during marriage are automatically split equally upon divorce. TFSAs are treated as regular property for equalization purposes."
    },
    {
      question: "How is spousal support calculated in Ontario?",
      answer: "Spousal support uses the Spousal Support Advisory Guidelines, which consider income difference, marriage length, ages, and children. For marriages over 20 years or age 65+, support is often indefinite. The formula typically ranges from 1.5-2% of income difference per year of marriage (without children) to more complex calculations with children. High-income earners ($350,000+) may see different applications. Tax implications are significant - support is deductible for the payor and taxable for the recipient."
    }
  ],

  // Inheritance and Estate FAQs
  inheritance: [
    {
      question: "What taxes apply to inheritances in Canada?",
      answer: "Canada has no inheritance tax, but estates face deemed disposition tax on capital gains. All assets (except those passing to a spouse) are deemed sold at fair market value upon death, triggering capital gains tax in the final return. RRSPs/RRIFs are fully taxable as income unless transferred to a spouse or dependent child. Primary residences remain tax-exempt. Probate fees in Ontario are 1.5% on estates over $50,000. Proper planning using trusts, insurance, and spousal rollovers can save hundreds of thousands in taxes."
    },
    {
      question: "How long does probate take in Ontario?",
      answer: "Ontario probate typically takes 3-6 months for simple estates, or 8-18 months for complex situations. The process includes: application preparation (2-4 weeks), court review and approval (6-8 weeks), asset collection and debt payment (3-6 months), and final distribution (1-2 months). Estates with foreign assets, business interests, or litigation can take 2-3 years. Probate can be avoided for assets with named beneficiaries (RRSPs, TFSAs, insurance) or jointly-held property."
    },
    {
      question: "What are an executor's responsibilities and liabilities?",
      answer: "Executors have fiduciary duty to act in beneficiaries' best interests, facing personal liability for mistakes. Key responsibilities include: securing assets, paying debts and taxes, filing final tax returns, obtaining probate if required, managing investments prudently, and distributing according to the will. Executors can be personally liable for unpaid taxes, premature distributions, investment losses from poor decisions, and breach of fiduciary duty. Professional executor insurance and legal guidance are strongly recommended for estates over $500,000."
    }
  ],

  // Job Loss and Severance FAQs
  severance: [
    {
      question: "What severance am I entitled to in Ontario?",
      answer: "Ontario employment law provides two types of severance: minimum statutory (1 week per year up to 8 weeks under ESA) and common law reasonable notice (often 1 month per year of service, up to 24 months). Factors affecting common law severance include age, position, length of service, and job market conditions. Senior executives over 50 with 10+ years often receive 18-24 months. Always have an employment lawyer review packages - initial offers average only 30-50% of potential entitlements."
    },
    {
      question: "How do I maximize Employment Insurance (EI) benefits?",
      answer: "EI provides 55% of average insurable earnings up to $68,500 (2025 maximum $650/week) for 14-45 weeks depending on regional unemployment and hours worked. Apply immediately upon job loss - delays can cost benefits. You can earn up to 50% of benefits through part-time work without reduction. Training programs may extend benefits. Severance payments don't affect eligibility but may delay start date. Report job search activities accurately - false reporting leads to penalties and repayment."
    },
    {
      question: "Should I take a lump sum or salary continuance severance?",
      answer: "Lump sum provides immediate access to funds and certainty, allowing investment and avoiding employer bankruptcy risk. However, it triggers immediate tax withholding (often 30-40%) and may push you into a higher tax bracket. Salary continuance maintains benefits, spreads tax burden, and preserves potential for additional severance if you find work, but ties you to employer policies and restricts legal claims. Most financial advisors recommend lump sum for packages over 12 months, salary continuance for shorter periods."
    }
  ],

  // Retirement Planning FAQs
  retirement: [
    {
      question: "How much do I need to retire comfortably in the GTA?",
      answer: "Retirement needs vary, but GTA retirees typically require 60-70% of pre-retirement income. With average Toronto housing costs, a couple needs $75,000-$100,000 annually for comfortable retirement, or $50,000-$65,000 if mortgage-free. Using the 4% withdrawal rule, this requires $1.25-2.5 million in savings. Government benefits (CPP, OAS) provide about $30,000-40,000 per couple, meaning personal savings must generate $35,000-70,000 annually. Healthcare, travel, and inflation significantly impact these figures."
    },
    {
      question: "When should I convert my RRSP to a RRIF?",
      answer: "You must convert RRSPs to RRIFs by December 31 of the year you turn 71, but can convert earlier for strategic reasons. Early conversion provides income flexibility and pension income splitting at 65. However, RRIF withdrawals are mandatory (5.28% at 71, increasing annually to 20% at 95), while RRSPs allow withdrawal control. Consider early conversion if you need regular income, want to income split, or have large RRSPs that will trigger OAS clawback. Delay if you have other income sources and want maximum tax deferral."
    },
    {
      question: "How do I minimize taxes in retirement?",
      answer: "Strategic tax planning can save retirees thousands annually. Key strategies include: TFSA maximization ($7,000/year, tax-free growth), pension income splitting (up to 50% with spouse), timing RRSP/RRIF withdrawals to smooth tax brackets, delaying CPP/OAS if you have other income, using dividend tax credits from non-registered investments, and managing income to avoid OAS clawback (starts at $86,912 in 2025). Consider professional tax planning - the savings often exceed advisory fees by 5-10x."
    }
  ]
};

/**
 * Analyze blog title to determine topic
 */
function analyzeTopic(title, category) {
  const titleLower = title.toLowerCase();
  const categoryLower = category ? category.toLowerCase() : '';

  if (titleLower.includes('cpp') || titleLower.includes('pension') ||
      titleLower.includes('60 vs 65') || titleLower.includes('70')) {
    return 'cpp';
  }

  if (titleLower.includes('business') &&
      (titleLower.includes('sale') || titleLower.includes('valuation') ||
       titleLower.includes('exit') || titleLower.includes('buyer'))) {
    return 'business_sale';
  }

  if (titleLower.includes('divorce') || titleLower.includes('separation') ||
      titleLower.includes('custody') || titleLower.includes('matrimonial')) {
    return 'divorce';
  }

  if (titleLower.includes('inheritance') || titleLower.includes('estate') ||
      titleLower.includes('probate') || titleLower.includes('executor')) {
    return 'inheritance';
  }

  if (titleLower.includes('severance') || titleLower.includes('job loss') ||
      titleLower.includes('layoff') || titleLower.includes('ei ') ||
      titleLower.includes('employment insurance')) {
    return 'severance';
  }

  if (titleLower.includes('retirement') || titleLower.includes('rrsp') ||
      titleLower.includes('rrif') || titleLower.includes('tfsa') ||
      titleLower.includes('retire')) {
    return 'retirement';
  }

  // Default based on category
  if (categoryLower.includes('divorce')) return 'divorce';
  if (categoryLower.includes('business')) return 'business_sale';
  if (categoryLower.includes('inheritance')) return 'inheritance';
  if (categoryLower.includes('severance')) return 'severance';

  return 'retirement'; // Default fallback
}

/**
 * Generate FAQs for a specific blog
 */
function generateFAQs(title, category) {
  const topic = analyzeTopic(title, category);
  const faqs = FAQ_TEMPLATES[topic] || FAQ_TEMPLATES.retirement;

  // Customize FAQs slightly based on specific title keywords
  return faqs.map(faq => {
    let customizedFaq = { ...faq };

    // Add year reference if title includes a year (only to first sentence)
    const yearMatch = title.match(/202\d/);
    if (yearMatch && !customizedFaq.answer.includes(yearMatch[0])) {
      // Only add year to the first sentence
      customizedFaq.answer = customizedFaq.answer.replace(/\./, ` in ${yearMatch[0]}.`);
    }

    return customizedFaq;
  });
}

/**
 * Process a single blog file
 */
function processBlogFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');

  // Extract title and category
  const titleMatch = content.match(/title:\s*['"`](.*?)['"`]/);
  const categoryMatch = content.match(/category:\s*['"`](.*?)['"`]/);

  if (!titleMatch) {
    console.log(`⚠️  Could not find title in ${filePath}`);
    return null;
  }

  const title = titleMatch[1];
  const category = categoryMatch ? categoryMatch[1] : 'Financial Planning';

  // Generate appropriate FAQs
  const faqs = generateFAQs(title, category);

  // Format FAQs for the blog file
  const faqsCode = `const blogFAQs = [
${faqs.map(faq => `  {
    question: "${faq.question}",
    answer: "${faq.answer.replace(/"/g, '\\"')}"
  }`).join(',\n')}
];`;

  return {
    filePath,
    title,
    category,
    faqs,
    faqsCode
  };
}

/**
 * Update blog file with new FAQs
 */
function updateBlogFile(filePath, newFaqsCode) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Find and replace existing blogFAQs
  const faqPattern = /const blogFAQs = \[[\s\S]*?\];/;

  if (faqPattern.test(content)) {
    // Replace existing FAQs
    content = content.replace(faqPattern, newFaqsCode);
    console.log(`✅ Updated FAQs in: ${path.basename(filePath)}`);
  } else {
    console.log(`⚠️  Could not find blogFAQs in: ${path.basename(filePath)}`);
    return false;
  }

  // Write updated content
  fs.writeFileSync(filePath, content);
  return true;
}

/**
 * Main execution
 */
function main() {
  const args = process.argv.slice(2);

  if (args.length === 0 || args[0] === '--help') {
    console.log('Usage: node generate-blog-faqs.js [file|--all] [--dry-run]');
    console.log('');
    console.log('Options:');
    console.log('  file       Path to specific blog file to process');
    console.log('  --all      Process all blog files');
    console.log('  --dry-run  Show what would be changed without modifying files');
    console.log('');
    console.log('Examples:');
    console.log('  node generate-blog-faqs.js src/app/blog/my-post/page.tsx');
    console.log('  node generate-blog-faqs.js --all --dry-run');
    return;
  }

  const isDryRun = args.includes('--dry-run');

  if (args.includes('--all')) {
    console.log('🚀 Generating FAQs for all blog posts...\n');

    // Get all blog files
    const blogDirs = [
      path.join(process.cwd(), 'src', 'app', 'blog'),
      path.join(process.cwd(), 'content', 'scheduled-posts')
    ];

    let processedCount = 0;
    let successCount = 0;

    blogDirs.forEach(dir => {
      if (!fs.existsSync(dir)) return;

      if (dir.includes('app/blog')) {
        // Process published blogs
        const subdirs = fs.readdirSync(dir);
        subdirs.forEach(subdir => {
          if (subdir === 'calendar' || subdir === 'preview' || subdir.startsWith('.')) return;

          const pageFile = path.join(dir, subdir, 'page.tsx');
          if (fs.existsSync(pageFile)) {
            processedCount++;
            const result = processBlogFile(pageFile);

            if (result && !isDryRun) {
              if (updateBlogFile(pageFile, result.faqsCode)) {
                successCount++;
              }
            } else if (result && isDryRun) {
              console.log(`Would update: ${result.title}`);
              console.log(`  Topic: ${analyzeTopic(result.title, result.category)}`);
              successCount++;
            }
          }
        });
      } else {
        // Process scheduled posts
        const files = fs.readdirSync(dir);
        files.forEach(file => {
          if (!file.endsWith('.tsx')) return;

          const filePath = path.join(dir, file);
          processedCount++;
          const result = processBlogFile(filePath);

          if (result && !isDryRun) {
            if (updateBlogFile(filePath, result.faqsCode)) {
              successCount++;
            }
          } else if (result && isDryRun) {
            console.log(`Would update: ${result.title}`);
            console.log(`  Topic: ${analyzeTopic(result.title, result.category)}`);
            successCount++;
          }
        });
      }
    });

    console.log(`\n✅ Processed ${processedCount} files, updated ${successCount} successfully`);
  } else {
    // Process single file
    const filePath = path.resolve(args[0]);

    if (!fs.existsSync(filePath)) {
      console.error(`❌ File not found: ${filePath}`);
      process.exit(1);
    }

    const result = processBlogFile(filePath);

    if (result) {
      if (isDryRun) {
        console.log('Generated FAQs:');
        console.log(result.faqsCode);
      } else {
        updateBlogFile(filePath, result.faqsCode);
      }
    }
  }
}

// Run if executed directly
if (require.main === module) {
  main();
}

module.exports = { generateFAQs, analyzeTopic };