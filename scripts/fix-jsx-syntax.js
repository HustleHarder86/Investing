#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Files that need fixing
const filesToFix = [
  'year-end-business-sale-tax.tsx',
  'tax-free-retirement-income-strategies.tsx',
  'stock-options-severance-packages.tsx',
  'severance-package-negotiation-tactics.tsx',
  'q4-business-exit-planning.tsx',
  'power-of-attorney-financial-decisions.tsx',
  'maximizing-ei-benefits-guide.tsx',
  'job-search-expense-tax-deductions.tsx',
  'manufacturing-severance-trends.tsx',
  'inheritance-tax-planning-ontario.tsx',
  'inherited-debt-obligations-canada.tsx',
  'inherited-investment-accounts-tax.tsx',
  'gray-divorce-retirement-accounts.tsx',
  'healthcare-benefits-after-job-loss.tsx',
  'family-cottage-inheritance-disputes.tsx',
  'divorce-mediation-vs-litigation.tsx',
  'early-retirement-50s-complete-roadmap.tsx',
  'early-retirement-50s-financial-independence.tsx',
  'ei-benefits-maximization-strategies.tsx',
  'emotional-financial-wellness-job-loss.tsx',
  'defined-benefit-pension-maximization.tsx',
  'defined-benefit-pension-options.tsx',
  'constructive-dismissal-financial-rights.tsx',
  'charitable-giving-tax-planning.tsx'
];

const scheduledPostsPath = path.join(__dirname, '..', 'content', 'scheduled-posts');

let fixedCount = 0;
let errorCount = 0;

filesToFix.forEach(fileName => {
  const filePath = path.join(scheduledPostsPath, fileName);
  
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix 1: Change BlogPostTemplateEnhancedEnhanced to BlogPostTemplateEnhanced in import
    if (content.includes("import BlogPostTemplateEnhancedEnhanced from")) {
      content = content.replace(
        "import BlogPostTemplateEnhancedEnhanced from '@/components/templates/BlogPostTemplateEnhancedEnhanced'",
        "import BlogPostTemplateEnhanced from '@/components/templates/BlogPostTemplateEnhanced'"
      );
      modified = true;
    }
    
    // Fix 2: Change the self-closing tag to opening tag
    if (content.includes('relatedQuestions={relatedQuestions} />')) {
      content = content.replace(
        'relatedQuestions={relatedQuestions} />',
        'relatedQuestions={relatedQuestions}>'
      );
      modified = true;
    }
    
    if (modified) {
      // Write the fixed content back
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed: ${fileName}`);
      fixedCount++;
    } else {
      console.log(`⚠️  No changes needed for: ${fileName}`);
    }
  } catch (error) {
    console.error(`❌ Error fixing ${fileName}:`, error.message);
    errorCount++;
  }
});

console.log(`\n📊 Summary:`);
console.log(`   Fixed: ${fixedCount} files`);
console.log(`   Errors: ${errorCount} files`);
console.log(`   Total: ${filesToFix.length} files`);