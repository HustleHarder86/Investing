#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// List of files with known syntax errors
const brokenFiles = [
  'black-friday-retirement-spending-budget.tsx',
  'government-benefits-oas-gis-cpp.tsx',
  'remembrance-day-veteran-benefits.tsx',
  'resp-to-rrsp-education-retirement.tsx',
  'self-employed-retirement-ipp-rrsp.tsx'
];

// Generate appropriate takeaways based on filename
const generateTakeawaysFromFilename = (filename) => {
  const name = filename.toLowerCase();

  if (name.includes('black-friday')) {
    return [
      "Average Canadian spends $1,800 during holiday season",
      "Retirement budgets need 3-5% inflation adjustment annually",
      "Holiday spending can derail retirement savings goals",
      "Budget 10-15% of retirement income for discretionary spending",
      "Credit card debt reduces retirement savings by 20-30%"
    ];
  } else if (name.includes('government-benefits')) {
    return [
      "OAS maximum is $713.34/month at 65, clawback starts at $90,997",
      "GIS provides up to $1,065/month for low-income seniors",
      "CPP maximum is $1,364/month if taken at age 65",
      "Combined government benefits can provide $30,000+ annually",
      "Apply 6 months before turning 65 to avoid delays"
    ];
  } else if (name.includes('remembrance') || name.includes('veteran')) {
    return [
      "Veterans Affairs disability benefits are completely tax-free",
      "Career Impact Allowance supplements up to $1,500/month",
      "Survivor benefits continue for spouse and children",
      "Veterans Independence Program covers home care costs",
      "Priority access to long-term care facilities available"
    ];
  } else if (name.includes('resp')) {
    return [
      "Maximum CESG grant is $500/year, $7,200 lifetime per child",
      "Unused RESP room can transfer to RRSP under conditions",
      "Educational assistance payments taxed in student's hands",
      "Contribution room doesn't expire until child turns 31",
      "Family plans allow flexibility between beneficiaries"
    ];
  } else if (name.includes('self-employed')) {
    return [
      "IPP can provide 65% more retirement savings than RRSP",
      "No employer pension means higher personal savings needed",
      "Incorporation enables income splitting and tax deferral",
      "Small business deduction saves $30,000+ annually",
      "Dividend vs salary decision affects CPP and retirement"
    ];
  } else {
    return [
      "Professional financial planning optimizes retirement outcomes",
      "Early planning provides more options and flexibility",
      "Tax strategies can significantly impact net results",
      "Regular reviews ensure plans remain optimal",
      "Customized approaches outperform generic strategies"
    ];
  }
};

// Fix a broken file
const fixBrokenFile = (filename) => {
  const scheduledDir = path.join(__dirname, '..', 'content', 'scheduled-posts');
  const filePath = path.join(scheduledDir, filename);

  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  File not found: ${filename}`);
    return false;
  }

  let content = fs.readFileSync(filePath, 'utf8');

  // Find the broken keyTakeaways section
  const keyTakeawaysPattern = /const keyTakeaways = \[([\s\S]*?)\];/;
  const match = content.match(keyTakeawaysPattern);

  if (match) {
    // Generate new takeaways based on filename
    const newTakeaways = generateTakeawaysFromFilename(filename);
    const formattedTakeaways = newTakeaways.map(t => `  "${t}"`).join(',\n');
    const replacement = `const keyTakeaways = [\n${formattedTakeaways}\n];`;

    content = content.replace(keyTakeawaysPattern, replacement);

    fs.writeFileSync(filePath, content);
    console.log(`✅ Fixed: ${filename}`);
    return true;
  } else {
    console.log(`⚠️  No keyTakeaways found in ${filename}`);
    return false;
  }
};

// Main execution
console.log('🔧 Fixing Broken Key Takeaways\n');
console.log('=' .repeat(50));

let fixedCount = 0;

// Fix known broken files
brokenFiles.forEach(file => {
  if (fixBrokenFile(file)) {
    fixedCount++;
  }
});

// Also check all scheduled posts for the broken pattern
console.log('\n📅 Checking all scheduled posts for broken patterns...\n');
const scheduledDir = path.join(__dirname, '..', 'content', 'scheduled-posts');
const allFiles = fs.readdirSync(scheduledDir).filter(f => f.endsWith('.tsx'));

allFiles.forEach(file => {
  const filePath = path.join(scheduledDir, file);
  const content = fs.readFileSync(filePath, 'utf8');

  // Look for the broken pattern (unterminated string in keyTakeaways)
  if (content.includes('CPP maximum benefit is \n') ||
      content.includes(',364/month if taken at 65"')) {
    console.log(`🔍 Found broken pattern in: ${file}`);
    if (fixBrokenFile(file)) {
      fixedCount++;
    }
  }
});

console.log('\n' + '=' .repeat(50));
console.log(`✨ Fixed ${fixedCount} files with broken key takeaways!`);