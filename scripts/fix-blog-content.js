#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Blog content fixes based on title analysis
const generateQuickAnswer = (title, category) => {
  // Parse the title to understand the topic
  const titleLower = title.toLowerCase();

  // RRIF/RRSP related
  if (titleLower.includes('rrif conversion') || titleLower.includes('rrsp rollover')) {
    return "You must convert your RRSP to a RRIF by December 31 of the year you turn 71. Strategic early conversion starting at age 65 can unlock the $2,000 pension income tax credit and enable income splitting with your spouse, potentially saving thousands in taxes annually.";
  }

  if (titleLower.includes('maximizing ei') || titleLower.includes('ei benefits')) {
    return "To maximize EI benefits in 2025, apply immediately after job loss, ensure your ROE shows maximum insurable earnings ($66,300), and avoid any actions that could delay your claim. You can receive up to $668 per week for 14-45 weeks depending on your region's unemployment rate and hours worked.";
  }

  if (titleLower.includes('retirement planning checklist') || titleLower.includes('retirement checklist')) {
    return "A comprehensive retirement plan for GTA residents should include: RRSP/TFSA optimization, CPP/OAS timing decisions, real estate strategy for your home worth $1.2M+, healthcare cost planning, and estate planning. Start with a retirement needs analysis calculating your required income of $65,000-85,000 annually for couples in Toronto.";
  }

  if (titleLower.includes('cpp') && (titleLower.includes('60') || titleLower.includes('65') || titleLower.includes('70'))) {
    return "Taking CPP at 60 reduces benefits by 36% but provides income sooner, while waiting until 70 increases benefits by 42%. For most Canadians, starting CPP at 65 provides the optimal balance, but high earners still working should delay to 70, potentially gaining $200,000+ in lifetime benefits.";
  }

  if (titleLower.includes('child support') && titleLower.includes('modification')) {
    return "Child support can be modified when there's a material change in circumstances such as income changes of 15%+, children starting/ending post-secondary education, or custody arrangement changes. In Ontario, use the online child support calculator and file Form 15 with the court to request modifications.";
  }

  if (titleLower.includes('tfsa') && titleLower.includes('rrsp')) {
    return "Choose TFSAs for retirement if you expect to be in a lower tax bracket now than in retirement, or if you want to avoid OAS clawback. Choose RRSPs if you're in a high tax bracket now (over $100,000 income) and expect lower income in retirement. Most GTA professionals benefit from maximizing both.";
  }

  if (titleLower.includes('negotiating severance')) {
    return "In Ontario, you're entitled to minimum severance under the Employment Standards Act plus potentially 24+ months of common law reasonable notice. Key negotiation points include extending benefits, pension contributions, bonus pro-rating, and outplacement services. Never sign immediately - always get legal review first.";
  }

  if (titleLower.includes('estate planning') && titleLower.includes('blended')) {
    return "Blended families require careful estate planning to balance children from previous relationships with current spouse needs. Key strategies include mutual wills, trusts for minor children, specific bequests for biological children, and life insurance to equalize inheritances. Update beneficiaries on all accounts immediately.";
  }

  if (titleLower.includes('toronto real estate') && titleLower.includes('divorce')) {
    return "In divorce, the matrimonial home is divided equally regardless of title ownership if it was the family residence. With average Toronto homes at $1.2M, options include buyout (requiring mortgage qualification), sale and split proceeds, or deferred sale until children finish school. September market typically sees 10-15% more inventory.";
  }

  if (titleLower.includes('fall financial reset') || titleLower.includes('job loss')) {
    return "After job loss, immediately apply for EI, review your severance package with a lawyer, reduce non-essential expenses, and avoid touching retirement savings for 6 months. Create a 3-6-12 month budget plan and consider contract work while job searching. Fall hiring typically picks up after Labour Day through November.";
  }

  if (titleLower.includes('business valuation') || titleLower.includes('business sale')) {
    return "Business valuation typically uses three methods: asset-based (book value), income-based (3-5x EBITDA), and market-based (comparable sales). For Q4 sales, start valuation now as the process takes 60-90 days. Most GTA small businesses sell for 2.5-4x adjusted EBITDA depending on industry and growth potential.";
  }

  if (titleLower.includes('rrsp contribution room')) {
    return "Your RRSP contribution room for 2025 is 18% of your 2024 earned income (max $32,490) plus any unused room from previous years. Check your Notice of Assessment or CRA My Account for exact amounts. Contributing before March 1, 2026 reduces your 2025 taxes, potentially saving $10,000+ for high earners.";
  }

  if (titleLower.includes('probate fees') || titleLower.includes('estate administration tax')) {
    return "Ontario probate fees (Estate Administration Tax) are $15 per $1,000 for estates over $50,000, with no upper limit. For a $2M estate, fees are $29,500. Avoid probate through joint ownership, designated beneficiaries, and multiple wills strategy. Primary residence can often bypass probate with proper planning.";
  }

  if (titleLower.includes('retirement income splitting')) {
    return "Eligible pension income can be split up to 50% with your spouse starting at age 65, including RRIF withdrawals, annuity payments, and registered pension plans. This strategy can save $3,000-8,000 annually in taxes by equalizing tax brackets and both claiming the pension income tax credit.";
  }

  if (titleLower.includes('gray divorce') || titleLower.includes('grey divorce')) {
    return "Divorce after 50 requires special attention to retirement account division, CPP credit splitting, and spousal support duration. With less time to rebuild retirement savings, keep the house only if affordable on one income. Consider collaborative divorce to preserve assets - litigation can cost $50,000+ each.";
  }

  if (titleLower.includes('pension commutation')) {
    return "Commuting your pension to a lump sum provides investment control and estate benefits but loses guaranteed income and inflation protection. Generally favorable if you're under 60, healthy, have other retirement income, or the commuted value exceeds 110% of actuarial present value. Get independent actuarial analysis first.";
  }

  if (titleLower.includes('early retirement')) {
    return "Early retirement in your 50s requires 25-30x annual expenses saved, a bridge strategy until government benefits begin, and private health insurance until 65. Key milestones: age 55 (pension unlocking), 60 (CPP eligible), 65 (OAS begins). Most need $2-3 million invested to retire comfortably in the GTA.";
  }

  if (titleLower.includes('stock options') && titleLower.includes('severance')) {
    return "Vested stock options typically must be exercised within 30-90 days of termination. Negotiate to extend the exercise window, accelerate unvested options, or cash out in-the-money options. Tax implications can be severe - options are taxed as employment income, potentially adding $50,000+ to your tax bill.";
  }

  // Category-based defaults if no specific match
  if (category.toLowerCase().includes('retirement')) {
    return "Strategic retirement planning involves optimizing government benefits (CPP/OAS), managing tax-efficient withdrawals from registered accounts, and ensuring your savings last throughout retirement. Most GTA retirees need $65,000-85,000 annually, requiring $1.5-2.5 million in total retirement assets including home equity.";
  }

  if (category.toLowerCase().includes('divorce')) {
    return "Divorce financial planning involves equitable division of assets, understanding support obligations, tax implications of property transfers, and rebuilding financial independence. In Ontario, work with both a family lawyer and financial planner to protect your interests and ensure long-term financial security post-divorce.";
  }

  if (category.toLowerCase().includes('inheritance') || category.toLowerCase().includes('estate')) {
    return "Effective estate planning minimizes taxes, ensures your wishes are followed, and provides for your beneficiaries. Key components include a will, powers of attorney, beneficiary designations, and potentially trusts. In Ontario, proper planning can save tens of thousands in probate fees and taxes.";
  }

  if (category.toLowerCase().includes('severance') || category.toLowerCase().includes('job loss')) {
    return "After job loss, maximize your severance package through negotiation, apply for EI benefits immediately, and create a financial bridge plan. Most employees are entitled to more than minimum statutory severance - often 1 month per year of service. Protect your finances while transitioning to new employment.";
  }

  if (category.toLowerCase().includes('business')) {
    return "Business transition planning, whether selling, succession, or winding down, requires 2-3 years of preparation for optimal value. Key steps include business valuation, tax planning, buyer identification, and deal structuring. Most business owners leave 20-30% of potential value unrealized due to poor planning.";
  }

  // Generic fallback
  return "Professional financial planning helps you navigate complex financial decisions with confidence. Working with a qualified advisor ensures you're maximizing opportunities, minimizing taxes, and avoiding costly mistakes. The right strategy depends on your unique situation, goals, and timeline.";
};

const generateFAQs = (title, category) => {
  const titleLower = title.toLowerCase();
  const faqs = [];

  // RRIF/RRSP specific
  if (titleLower.includes('rrif conversion')) {
    faqs.push(
      {
        question: "When do I have to convert my RRSP to a RRIF?",
        answer: "You must convert your RRSP to a RRIF by December 31 of the year you turn 71. However, you can convert earlier if it makes strategic sense for your situation."
      },
      {
        question: "What are the minimum RRIF withdrawal rates?",
        answer: "At age 71, the minimum withdrawal is 5.28% of your RRIF value. This percentage increases each year, reaching 20% at age 95 and beyond."
      },
      {
        question: "Can I convert just part of my RRSP to a RRIF?",
        answer: "Yes, partial conversions are allowed and often recommended. Many retirees convert just enough to claim the pension income tax credit at age 65."
      }
    );
    return faqs;
  }

  if (titleLower.includes('ei benefits')) {
    faqs.push(
      {
        question: "How much EI can I receive in 2025?",
        answer: "The maximum EI benefit is $668 per week in 2025, which is 55% of your average insurable earnings up to the maximum of $66,300 per year."
      },
      {
        question: "How long does it take to get EI benefits?",
        answer: "EI benefits typically begin within 28 days of filing your claim, assuming all documentation is complete. There's a one-week waiting period before benefits start."
      },
      {
        question: "Can I work while receiving EI?",
        answer: "Yes, you can work part-time and earn up to 50% of your weekly benefits before deductions apply. Earnings above this threshold reduce benefits by 50 cents per dollar."
      }
    );
    return faqs;
  }

  if (titleLower.includes('retirement') && titleLower.includes('checklist')) {
    faqs.push(
      {
        question: "How much do I need to retire in Toronto?",
        answer: "Most couples need $65,000-85,000 annually for a comfortable retirement in the GTA, requiring total assets of $1.5-2.5 million including home equity."
      },
      {
        question: "When should I start retirement planning?",
        answer: "Ideally, start serious retirement planning by age 40, though it's never too late. The last 10-15 years before retirement are critical for maximizing savings and optimizing strategies."
      },
      {
        question: "What documents do I need for retirement planning?",
        answer: "Key documents include recent tax returns, investment statements, pension statements, insurance policies, estate planning documents, and a current budget."
      }
    );
    return faqs;
  }

  if (titleLower.includes('cpp') && titleLower.includes('timing')) {
    faqs.push(
      {
        question: "How much does CPP reduce if I take it at 60?",
        answer: "Taking CPP at age 60 reduces your benefits by 36% (0.6% per month before 65). However, you receive payments for an extra 5 years."
      },
      {
        question: "What's the maximum CPP benefit in 2025?",
        answer: "The maximum monthly CPP retirement pension at age 65 is $1,364.60 in 2025. At age 70, this increases to $1,937.73 with the 42% enhancement."
      },
      {
        question: "Should I take CPP early if I'm still working?",
        answer: "Generally no - if you're still working and don't need the income, delaying CPP to 70 maximizes your lifetime benefits, especially if you're healthy and have longevity in your family."
      }
    );
    return faqs;
  }

  if (titleLower.includes('child support')) {
    faqs.push(
      {
        question: "When can child support be modified in Ontario?",
        answer: "Child support can be modified when there's a material change in circumstances, typically an income change of 15% or more, or changes in custody arrangements."
      },
      {
        question: "How is child support calculated for university students?",
        answer: "Post-secondary support is determined case-by-case, considering the child's academic performance, program costs, and both parents' financial abilities. It often includes tuition plus a reduced monthly amount."
      },
      {
        question: "Do I need a lawyer to modify child support?",
        answer: "While not required, legal assistance is recommended for contested modifications. Simple agreed changes can be filed using Form 15 at the Ontario Court of Justice."
      }
    );
    return faqs;
  }

  if (titleLower.includes('probate fees')) {
    faqs.push(
      {
        question: "How much are probate fees in Ontario?",
        answer: "Ontario charges $5 per $1,000 for the first $50,000 and $15 per $1,000 thereafter. A $1 million estate pays $14,500 in probate fees."
      },
      {
        question: "Can I avoid probate fees in Ontario?",
        answer: "Yes, through strategies like joint ownership, designated beneficiaries on registered accounts, multiple wills, and certain trust structures. Primary residences can often bypass probate."
      },
      {
        question: "How long does probate take in Ontario?",
        answer: "Simple estates typically receive probate approval in 2-4 weeks. Complex estates or those with issues can take 2-6 months. Toronto courts average 3-4 weeks for straightforward applications."
      }
    );
    return faqs;
  }

  // Category-based FAQs as fallback
  if (category.toLowerCase().includes('retirement')) {
    faqs.push(
      {
        question: "When should I start planning for retirement?",
        answer: "Start serious retirement planning at least 10-15 years before your target retirement date. This gives you time to maximize savings, optimize strategies, and adjust course if needed."
      },
      {
        question: "How much will I need for retirement?",
        answer: "Most financial planners recommend 70-80% of pre-retirement income. In the GTA, couples typically need $65,000-85,000 annually, requiring $1.5-2.5 million in total assets."
      },
      {
        question: "What's included in retirement planning?",
        answer: "Comprehensive retirement planning covers income projections, tax strategies, government benefit optimization, estate planning, healthcare costs, and lifestyle goals."
      }
    );
    return faqs;
  }

  if (category.toLowerCase().includes('divorce')) {
    faqs.push(
      {
        question: "How are assets divided in Ontario divorce?",
        answer: "Ontario follows equalization of net family property, meaning growth in assets during marriage is split equally. Some exclusions apply, such as gifts and inheritances kept separate."
      },
      {
        question: "What financial documents are needed for divorce?",
        answer: "You'll need three years of tax returns, bank statements, investment accounts, pension statements, property valuations, debts, and a Financial Statement (Form 13)."
      },
      {
        question: "How long does financial recovery take after divorce?",
        answer: "Most people need 3-5 years to fully recover financially from divorce. Working with a financial planner can accelerate this timeline and prevent costly mistakes."
      }
    );
    return faqs;
  }

  if (category.toLowerCase().includes('inheritance') || category.toLowerCase().includes('estate')) {
    faqs.push(
      {
        question: "What happens if I die without a will in Ontario?",
        answer: "Ontario's intestacy rules apply, distributing assets according to a fixed formula. Spouses receive preferential shares, and children inherit equally. The process is longer and more expensive."
      },
      {
        question: "How often should I update my estate plan?",
        answer: "Review your estate plan every 3-5 years or after major life events like marriage, divorce, births, deaths, or significant asset changes."
      },
      {
        question: "What's the difference between a will and estate planning?",
        answer: "A will is one component of estate planning, which also includes powers of attorney, beneficiary designations, trusts, tax planning, and probate minimization strategies."
      }
    );
    return faqs;
  }

  if (category.toLowerCase().includes('severance') || category.toLowerCase().includes('job loss')) {
    faqs.push(
      {
        question: "What severance am I entitled to in Ontario?",
        answer: "Minimum statutory severance is 1 week per year of service. Common law severance can be much higher - often 1 month per year for professional employees."
      },
      {
        question: "Should I sign my severance package immediately?",
        answer: "Never sign immediately. You typically have several weeks to review. Always consult an employment lawyer - the cost is often covered by negotiating a better package."
      },
      {
        question: "How is severance taxed in Canada?",
        answer: "Severance is fully taxable as income. Consider requesting payment across tax years, transferring eligible amounts to RRSPs, or negotiating continued salary instead of lump sum."
      }
    );
    return faqs;
  }

  if (category.toLowerCase().includes('business')) {
    faqs.push(
      {
        question: "How long does it take to sell a business?",
        answer: "Typically 6-12 months from listing to closing. Preparation should begin 2-3 years before to maximize value and ensure smooth transition."
      },
      {
        question: "How are businesses valued for sale?",
        answer: "Common methods include multiples of EBITDA (2.5-5x for small businesses), asset valuation, and discounted cash flow analysis. Industry and growth potential significantly impact multiples."
      },
      {
        question: "What are the tax implications of selling my business?",
        answer: "Qualifying small business shares may be eligible for the lifetime capital gains exemption ($971,190 in 2024). Proper structuring can save hundreds of thousands in taxes."
      }
    );
    return faqs;
  }

  // Generic fallback
  faqs.push(
    {
      question: `What makes Life Money different from other financial advisors?`,
      answer: "We specialize in complex life transitions with dedicated expertise in divorce, inheritance, business sales, and career changes. Our GTA-focused approach means we understand local markets and regulations."
    },
    {
      question: "How much do financial planning services cost?",
      answer: "Fees vary based on complexity and services needed. Initial consultations help determine scope and provide transparent pricing. Many clients save more in taxes and optimization than our fees cost."
    },
    {
      question: "How do I get started with financial planning?",
      answer: "Book a consultation to discuss your situation and goals. We'll review your finances, identify opportunities and risks, and create a customized action plan for your success."
    }
  );

  return faqs;
};

// Process a single file
const processFile = (filePath) => {
  const content = fs.readFileSync(filePath, 'utf8');

  // Extract title and category
  const titleMatch = content.match(/title:\s*['"`]([^'"`]+)/);
  const categoryMatch = content.match(/category:\s*['"`]([^'"`]+)/);

  if (!titleMatch) {
    console.log(`⚠️  Could not find title in ${filePath}`);
    return false;
  }

  const title = titleMatch[1].replace(' | Life Money', '').replace(' | ProsperBridge', '');
  const category = categoryMatch ? categoryMatch[1] : 'Financial Planning';

  // Generate new content
  const quickAnswer = generateQuickAnswer(title, category);
  const faqs = generateFAQs(title, category);

  let updatedContent = content;

  // Replace quickAnswer
  const quickAnswerPattern = /const quickAnswer = "[^"]+"/;
  if (quickAnswerPattern.test(content)) {
    updatedContent = updatedContent.replace(
      quickAnswerPattern,
      `const quickAnswer = "${quickAnswer.replace(/"/g, '\\"')}"`
    );
  }

  // Replace FAQs
  const faqPattern = /const blogFAQs = \[\s*{[\s\S]*?}\s*\];/;
  if (faqPattern.test(content)) {
    const faqString = `const blogFAQs = [\n${faqs.map(faq => `  {
    "question": "${faq.question}",
    "answer": "${faq.answer.replace(/"/g, '\\"')}"
  }`).join(',\n')}\n];`;

    updatedContent = updatedContent.replace(faqPattern, faqString);
  }

  // Fix generic key takeaways ending
  updatedContent = updatedContent.replace(
    /"Early planning leads to better financial outcomes"/g,
    '"Expert guidance ensures optimal outcomes"'
  );

  updatedContent = updatedContent.replace(
    /"Taking action now prevents costly mistakes later"/g,
    '"Professional advice maximizes your financial success"'
  );

  // Write updated content
  fs.writeFileSync(filePath, updatedContent);

  return true;
};

// Main function
const main = () => {
  console.log('🔧 Fixing Blog Content Quality Issues...\n');

  // Process published posts
  console.log('📝 Processing Published Posts...');
  const publishedDir = path.join(__dirname, '..', 'src', 'app', 'blog');
  const publishedPosts = fs.readdirSync(publishedDir)
    .filter(dir => fs.statSync(path.join(publishedDir, dir)).isDirectory())
    .filter(dir => dir !== 'calendar' && dir !== 'preview');

  let successCount = 0;
  publishedPosts.forEach(dir => {
    const filePath = path.join(publishedDir, dir, 'page.tsx');
    if (fs.existsSync(filePath)) {
      if (processFile(filePath)) {
        successCount++;
        console.log(`✅ Fixed: ${dir}`);
      }
    }
  });

  console.log(`\n✅ Fixed ${successCount}/${publishedPosts.length} published posts\n`);

  // Process scheduled posts
  console.log('📅 Processing Scheduled Posts...');
  const scheduledDir = path.join(__dirname, '..', 'content', 'scheduled-posts');
  const scheduledPosts = fs.readdirSync(scheduledDir)
    .filter(file => file.endsWith('.tsx'));

  successCount = 0;
  scheduledPosts.forEach(file => {
    const filePath = path.join(scheduledDir, file);
    if (processFile(filePath)) {
      successCount++;
      console.log(`✅ Fixed: ${file}`);
    }
  });

  console.log(`\n✅ Fixed ${successCount}/${scheduledPosts.length} scheduled posts`);
  console.log('\n✨ Blog content quality fixes complete!');
};

// Run the script
if (require.main === module) {
  main();
}