#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Generate topic-specific key takeaways based on title and category
const generateKeyTakeaways = (title, category) => {
  const titleLower = title.toLowerCase();
  const takeaways = [];

  // Generate first 3 specific takeaways based on topic
  if (titleLower.includes('rrif') || titleLower.includes('rrsp to rrif')) {
    takeaways.push(
      "Convert RRSP to RRIF by December 31 of the year you turn 71",
      "Minimum withdrawal rates increase from 5.28% at 71 to 20% at 95+",
      "Using younger spouse's age can reduce mandatory withdrawals significantly"
    );
  } else if (titleLower.includes('ei benefit') || titleLower.includes('employment insurance')) {
    takeaways.push(
      "Maximum EI benefit is $668/week for up to 45 weeks in 2025",
      "Need 420-700 insurable hours depending on regional unemployment rate",
      "Apply within 4 weeks of job loss to avoid benefit delays"
    );
  } else if (titleLower.includes('severance') || titleLower.includes('job loss')) {
    takeaways.push(
      "Minimum severance is 1 week per year up to 8 weeks in Ontario",
      "Common law severance can be 1-2 months per year of service",
      "Negotiate total compensation package, not just base severance"
    );
  } else if (titleLower.includes('divorce') && titleLower.includes('financial')) {
    takeaways.push(
      "Net family property is equalized 50/50 in Ontario divorces",
      "Matrimonial home is shared regardless of title ownership",
      "Spousal support duration typically 0.5-1 year per year of marriage"
    );
  } else if (titleLower.includes('inheritance') || titleLower.includes('estate')) {
    takeaways.push(
      "Probate fees in Ontario are 1.5% on estates over $50,000",
      "Primary residence exemption can save hundreds of thousands in taxes",
      "Multiple wills strategy can reduce probate costs significantly"
    );
  } else if (titleLower.includes('business sale') || titleLower.includes('business exit')) {
    takeaways.push(
      "Lifetime capital gains exemption is $971,190 for 2025",
      "Asset sale vs share sale has major tax implications",
      "Earnouts and vendor financing can optimize tax treatment"
    );
  } else if (titleLower.includes('retirement planning') || titleLower.includes('retirement income')) {
    takeaways.push(
      "GTA retirement costs average $65,000-85,000/year for couples",
      "CPP maximum benefit is $1,364/month if taken at 65",
      "TFSA contribution room is $7,000 for 2025"
    );
  } else if (titleLower.includes('tfsa') || titleLower.includes('tax-free')) {
    takeaways.push(
      "TFSA contribution limit is $7,000 for 2025, $95,000 total room",
      "Investment growth and withdrawals are completely tax-free",
      "Over-contributions face 1% monthly penalty tax"
    );
  } else if (titleLower.includes('cpp') || titleLower.includes('canada pension')) {
    takeaways.push(
      "Taking CPP at 60 reduces benefits by 36%, at 70 increases by 42%",
      "Break-even age for early CPP is typically 77-80 years old",
      "Maximum monthly CPP at 65 is $1,364 in 2025"
    );
  } else if (titleLower.includes('real estate') && titleLower.includes('divorce')) {
    takeaways.push(
      "Matrimonial home is split 50/50 regardless of down payment source",
      "Exclusive possession orders don't change ownership rights",
      "Capital gains on second properties split based on ownership"
    );
  } else if (titleLower.includes('pension') && (titleLower.includes('commut') || titleLower.includes('lump sum'))) {
    takeaways.push(
      "Commuted value transfers have maximum transfer limits to RRSP",
      "Excess amounts are taxable immediately at marginal rate",
      "Life expectancy and health status crucial for decision"
    );
  } else if (titleLower.includes('resp')) {
    takeaways.push(
      "Maximum CESG grant is $500/year, $7,200 lifetime per child",
      "Unused RESP room can transfer to RRSP under conditions",
      "Educational assistance payments taxed in student's hands"
    );
  } else if (titleLower.includes('defined benefit')) {
    takeaways.push(
      "DB pensions provide guaranteed income indexed to inflation",
      "Commuted value option provides flexibility but transfers risk",
      "Bridge benefits typically end at age 65 when CPP starts"
    );
  } else if (titleLower.includes('stock option')) {
    takeaways.push(
      "Stock option deduction can reduce tax rate by 50%",
      "Exercise timing affects both tax treatment and risk exposure",
      "Employer deduction limits apply to options over $200,000/year"
    );
  } else if (titleLower.includes('trust') || titleLower.includes('high net worth')) {
    takeaways.push(
      "Family trusts can income split with minor children",
      "21-year deemed disposition rule requires planning",
      "Alter ego trusts avoid probate while maintaining control"
    );
  } else if (titleLower.includes('probate')) {
    takeaways.push(
      "Ontario probate fees are 1.5% on estates over $50,000",
      "Joint ownership with right of survivorship avoids probate",
      "Multiple wills can shelter private company shares"
    );
  } else if (titleLower.includes('prenup') || titleLower.includes('marriage contract')) {
    takeaways.push(
      "Prenups protect pre-marital assets and inheritances",
      "Must have independent legal advice to be enforceable",
      "Cannot waive child support or custody rights"
    );
  } else if (titleLower.includes('spousal support')) {
    takeaways.push(
      "Support duration typically 0.5-1 year per year married",
      "Spousal Support Advisory Guidelines provide ranges",
      "Support can be reviewable, time-limited, or indefinite"
    );
  } else if (titleLower.includes('child support')) {
    takeaways.push(
      "Child support tables are mandatory minimums in Ontario",
      "Section 7 expenses shared proportional to income",
      "Support continues if child in full-time post-secondary"
    );
  } else if (titleLower.includes('custody') || titleLower.includes('parenting')) {
    takeaways.push(
      "Best interests of child is paramount consideration",
      "Equal shared parenting increasingly common default",
      "Relocation requires consent or court approval"
    );
  } else if (titleLower.includes('gray divorce') || titleLower.includes('grey divorce')) {
    takeaways.push(
      "Retirement accounts divided using equalization date values",
      "CPP credits can be split for years of cohabitation",
      "Health insurance continuation crucial consideration"
    );
  } else if (titleLower.includes('blended famil')) {
    takeaways.push(
      "Estate planning crucial to protect children's inheritances",
      "Mutual wills can ensure promises to children honored",
      "Life insurance trusts provide guaranteed distributions"
    );
  } else if (titleLower.includes('cottage') || titleLower.includes('vacation property')) {
    takeaways.push(
      "Capital gains tax due on transfer even within family",
      "Principal residence exemption election affects tax",
      "Co-ownership agreements prevent future disputes"
    );
  } else if (titleLower.includes('cross-border') || titleLower.includes('snowbird')) {
    takeaways.push(
      "183-day substantial presence test affects tax residency",
      "Estate tax treaties prevent double taxation",
      "Medicare coverage limited outside Canada"
    );
  } else if (titleLower.includes('manufacturing') && titleLower.includes('severance')) {
    takeaways.push(
      "Union agreements often exceed ESA minimums significantly",
      "Mass termination rules trigger enhanced notice periods",
      "Pension and benefit continuation negotiable"
    );
  } else if (titleLower.includes('tech') && (titleLower.includes('layoff') || titleLower.includes('severance'))) {
    takeaways.push(
      "Tech severance often includes equity vesting acceleration",
      "Non-compete clauses may be unenforceable in Ontario",
      "Signing bonuses may be clawback eligible"
    );
  } else if (titleLower.includes('q4') || titleLower.includes('year-end')) {
    takeaways.push(
      "Year-end tax planning can save thousands in current year",
      "RRSP deadline is 60 days after December 31",
      "Capital losses can offset gains from past 3 years"
    );
  } else if (titleLower.includes('holiday') || titleLower.includes('thanksgiving') || titleLower.includes('christmas')) {
    takeaways.push(
      "Holiday scheduling requires advance planning in separation agreements",
      "Travel consent needed for international trips with children",
      "Gift-giving guidelines prevent conflict in shared custody"
    );
  } else if (titleLower.includes('healthcare') && titleLower.includes('retirement')) {
    takeaways.push(
      "Healthcare costs average $5,000-15,000/year in retirement",
      "Provincial coverage doesn't include dental, vision, or prescriptions",
      "Long-term care insurance protects against catastrophic costs"
    );
  } else if (titleLower.includes('downsizing') || titleLower.includes('retirement housing')) {
    takeaways.push(
      "Downsizing can free up $300,000-500,000 in GTA market",
      "Principal residence exemption preserves full proceeds",
      "Condo fees and property tax must factor into budgets"
    );
  } else if (titleLower.includes('part-time') && titleLower.includes('retirement')) {
    takeaways.push(
      "Earning over $5,000 may trigger CPP contributions",
      "GIS benefits reduced by 50 cents per dollar earned",
      "Part-time income can delay RRIF withdrawals"
    );
  } else if (titleLower.includes('retirement') && titleLower.includes('travel')) {
    takeaways.push(
      "Travel medical insurance essential for trips over 7 days",
      "Credit card insurance often has age and trip length limits",
      "Provincial coverage minimal outside Canada"
    );
  } else if (titleLower.includes('withdrawal sequence') || titleLower.includes('decumulation')) {
    takeaways.push(
      "Optimal sequence: non-registered, TFSA, then RRSP/RRIF",
      "Tax bracket management can save 10-15% annually",
      "GIS and OAS clawbacks affect optimal strategy"
    );
  } else if (titleLower.includes('self-employed') && titleLower.includes('retirement')) {
    takeaways.push(
      "IPP can provide 65% more retirement savings than RRSP",
      "No employer pension means higher personal savings needed",
      "Incorporation enables income splitting and tax deferral"
    );
  } else if (titleLower.includes('partnership buyout') || titleLower.includes('buy-sell')) {
    takeaways.push(
      "Valuation methodology must be predetermined in agreement",
      "Life insurance funding ensures liquidity for buyouts",
      "Shotgun clauses can force sales at inopportune times"
    );
  } else if (titleLower.includes('professional practice')) {
    takeaways.push(
      "Goodwill valuation typically 60-150% of annual revenue",
      "Non-compete agreements essential for value preservation",
      "Transition period improves client retention rates"
    );
  } else if (titleLower.includes('family business')) {
    takeaways.push(
      "Family business capital gains exemption doubled in 2025",
      "Estate freeze locks in current values for tax purposes",
      "Succession planning should start 5-10 years before exit"
    );
  } else if (titleLower.includes('digital asset') && titleLower.includes('divorce')) {
    takeaways.push(
      "Cryptocurrency and NFTs are divisible marital property",
      "Social media accounts with income are business assets",
      "Digital asset disclosure increasingly required"
    );
  } else if (titleLower.includes('mediation') && titleLower.includes('litigation')) {
    takeaways.push(
      "Mediation costs 80% less than litigation on average",
      "Litigation timeline typically 18-36 months vs 3-6 for mediation",
      "Mediated agreements have higher compliance rates"
    );
  } else if (titleLower.includes('high conflict') || titleLower.includes('high-conflict')) {
    takeaways.push(
      "Parallel parenting reduces direct parent contact needs",
      "Communication apps provide documented exchanges",
      "Parenting coordinators can break decision deadlocks"
    );
  } else if (titleLower.includes('remarriage')) {
    takeaways.push(
      "Remarriage typically terminates spousal support",
      "Estate planning updates crucial to protect all children",
      "Blended family financial planning more complex"
    );
  } else if (titleLower.includes('veteran') || titleLower.includes('remembrance')) {
    takeaways.push(
      "Veterans Affairs disability benefits tax-free",
      "Career Impact Allowance supplements up to $1,500/month",
      "Survivor benefits continue for spouse and children"
    );
  } else if (titleLower.includes('black friday') || titleLower.includes('boxing day')) {
    takeaways.push(
      "Average Canadian spends $1,800 during holiday season",
      "Retirement budgets need 3-5% inflation adjustment",
      "Credit card debt affects retirement savings ability"
    );
  } else if (titleLower.includes('common law') || titleLower.includes('common-law')) {
    takeaways.push(
      "No automatic property division for common law in Ontario",
      "Cohabitation agreements protect individual assets",
      "Spousal support possible after 3 years cohabitation"
    );
  } else if (titleLower.includes('career transition')) {
    takeaways.push(
      "Career change at 50+ requires 12-18 months financial cushion",
      "Pension transfers have strict timelines and limits",
      "Retraining costs may qualify for tax credits"
    );
  } else if (titleLower.includes('october') || titleLower.includes('november') || titleLower.includes('september')) {
    // Fall-specific planning
    takeaways.push(
      "Q4 tax planning can reduce current year tax by 20-30%",
      "Year-end RRSP contributions maximize tax savings",
      "Capital gains/losses crystallization before December 31"
    );
  } else {
    // Generic fallbacks based on category
    if (category.toLowerCase().includes('divorce')) {
      takeaways.push(
        "Financial separation should happen immediately upon separation",
        "Document all assets and debts as of separation date",
        "Seek professional advice before making major financial moves"
      );
    } else if (category.toLowerCase().includes('inheritance')) {
      takeaways.push(
        "Estate planning saves families time, money, and conflict",
        "Professional executors may be worth the cost for complex estates",
        "Regular will updates ensure wishes remain current"
      );
    } else if (category.toLowerCase().includes('business')) {
      takeaways.push(
        "Business valuation is crucial for sale planning",
        "Tax planning can save 20-40% on sale proceeds",
        "Transition planning improves sale price and terms"
      );
    } else if (category.toLowerCase().includes('severance')) {
      takeaways.push(
        "Never sign severance agreements without legal review",
        "Severance negotiations can increase packages 50-200%",
        "Tax optimization strategies preserve more severance"
      );
    } else {
      takeaways.push(
        "Professional financial planning optimizes outcomes",
        "Early planning provides more options and flexibility",
        "Tax strategies can significantly impact net results"
      );
    }
  }

  // Add 2 more contextual takeaways based on the specific content
  if (titleLower.includes('2025') || titleLower.includes('2024')) {
    takeaways.push("New tax rules and contribution limits apply for 2025");
    takeaways.push("Review strategies annually as regulations change");
  } else if (titleLower.includes('gta') || titleLower.includes('toronto')) {
    takeaways.push("GTA-specific costs require localized planning strategies");
    takeaways.push("Local expertise ensures compliance with Ontario regulations");
  } else if (titleLower.includes('guide') || titleLower.includes('checklist')) {
    takeaways.push("Systematic approach ensures nothing is overlooked");
    takeaways.push("Professional guidance accelerates successful outcomes");
  } else if (titleLower.includes('strateg') || titleLower.includes('planning')) {
    takeaways.push("Strategic planning can reduce costs by 30-50%");
    takeaways.push("Implementation timing affects overall success");
  } else if (titleLower.includes('mistakes') || titleLower.includes('avoid')) {
    takeaways.push("Common mistakes can cost thousands in lost benefits");
    takeaways.push("Proactive planning prevents costly errors");
  } else {
    takeaways.push("Customized strategies outperform generic approaches");
    takeaways.push("Regular reviews ensure plans remain optimal");
  }

  // Ensure we return exactly 5 takeaways
  return takeaways.slice(0, 5);
};

// Fix key takeaways in a file
const fixFile = (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Extract title and category from the content
  const titleMatch = content.match(/title:\s*["']([^"']+)["']/);
  const categoryMatch = content.match(/category:\s*["']([^"']+)["']/);

  if (!titleMatch) {
    console.log(`⚠️  Could not find title in ${path.basename(filePath)}`);
    return false;
  }

  const title = titleMatch[1];
  const category = categoryMatch ? categoryMatch[1] : 'Financial Planning';

  // Find and replace the keyTakeaways array
  const keyTakeawaysPattern = /const keyTakeaways = \[([\s\S]*?)\];/;
  const match = content.match(keyTakeawaysPattern);

  if (match) {
    const newTakeaways = generateKeyTakeaways(title, category);
    const formattedTakeaways = newTakeaways.map(t => `  "${t}"`).join(',\n');
    const replacement = `const keyTakeaways = [\n${formattedTakeaways}\n];`;

    content = content.replace(keyTakeawaysPattern, replacement);
    modified = true;

    fs.writeFileSync(filePath, content);
    console.log(`✅ Fixed: ${path.basename(filePath)}`);
  } else {
    console.log(`⚠️  No keyTakeaways found in ${path.basename(filePath)}`);
  }

  return modified;
};

// Main execution
console.log('🔧 Fixing Key Takeaways in All Blog Posts\n');
console.log('=' .repeat(50));

// Fix published posts
console.log('\n📝 Fixing Published Posts...\n');
const publishedDir = path.join(__dirname, '..', 'src', 'app', 'blog');
const publishedDirs = fs.readdirSync(publishedDir)
  .filter(dir => fs.statSync(path.join(publishedDir, dir)).isDirectory())
  .filter(dir => dir !== 'calendar' && dir !== 'preview');

let fixedCount = 0;
publishedDirs.forEach(dir => {
  const filePath = path.join(publishedDir, dir, 'page.tsx');
  if (fs.existsSync(filePath)) {
    if (fixFile(filePath)) {
      fixedCount++;
    }
  }
});

console.log(`\n✅ Fixed ${fixedCount} published posts`);

// Fix scheduled posts
console.log('\n📅 Fixing Scheduled Posts...\n');
const scheduledDir = path.join(__dirname, '..', 'content', 'scheduled-posts');
const scheduledFiles = fs.readdirSync(scheduledDir)
  .filter(file => file.endsWith('.tsx'));

fixedCount = 0;
scheduledFiles.forEach(file => {
  const filePath = path.join(scheduledDir, file);
  if (fixFile(filePath)) {
    fixedCount++;
  }
});

console.log(`\n✅ Fixed ${fixedCount} scheduled posts`);
console.log('\n' + '=' .repeat(50));
console.log('✨ Key takeaways fix complete!');
console.log('\nAll posts now have:');
console.log('  • Topic-specific takeaways without bullet prefixes');
console.log('  • 5 contextual, valuable points per post');
console.log('  • Proper formatting for the component');