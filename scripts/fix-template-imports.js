#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// All scheduled post files
const filesToFix = [
  'charitable-giving-tax-planning.tsx',
  'constructive-dismissal-financial-rights.tsx',
  'defined-benefit-pension-maximization.tsx',
  'defined-benefit-pension-options.tsx',
  'divorce-mediation-vs-litigation.tsx',
  'early-retirement-50s-complete-roadmap.tsx',
  'early-retirement-50s-financial-independence.tsx',
  'ei-benefits-maximization-strategies.tsx',
  'emotional-financial-wellness-job-loss.tsx',
  'family-cottage-inheritance-disputes.tsx',
  'gray-divorce-retirement-accounts.tsx',
  'healthcare-benefits-after-job-loss.tsx',
  'inheritance-tax-planning-ontario.tsx',
  'inherited-debt-obligations-canada.tsx',
  'inherited-investment-accounts-tax.tsx',
  'job-search-expense-tax-deductions.tsx',
  'manufacturing-severance-trends.tsx',
  'maximizing-ei-benefits-guide.tsx',
  'power-of-attorney-financial-decisions.tsx',
  'q4-business-exit-planning.tsx',
  'severance-package-negotiation-tactics.tsx',
  'stock-options-severance-packages.tsx',
  'tax-free-retirement-income-strategies.tsx',
  'year-end-business-sale-tax.tsx'
];

const scheduledPostsPath = path.join(__dirname, '..', 'content', 'scheduled-posts');

let fixedCount = 0;
let errorCount = 0;

filesToFix.forEach(fileName => {
  const filePath = path.join(scheduledPostsPath, fileName);
  
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix the import statement - change BlogPostTemplateEnhancedEnhanced to BlogPostTemplateEnhanced
    if (content.includes("import BlogPostTemplateEnhancedEnhanced from '@/components/templates/BlogPostTemplateEnhancedEnhanced'")) {
      content = content.replace(
        "import BlogPostTemplateEnhancedEnhanced from '@/components/templates/BlogPostTemplateEnhancedEnhanced'",
        "import BlogPostTemplateEnhanced from '@/components/templates/BlogPostTemplateEnhanced'"
      );
      modified = true;
    }
    
    // Also fix any usage of BlogPostTemplateEnhancedEnhanced in the JSX
    if (content.includes('<BlogPostTemplateEnhancedEnhanced')) {
      content = content.replace(/<BlogPostTemplateEnhancedEnhanced/g, '<BlogPostTemplateEnhanced');
      modified = true;
    }
    
    if (content.includes('</BlogPostTemplateEnhancedEnhanced>')) {
      content = content.replace(/<\/BlogPostTemplateEnhancedEnhanced>/g, '</BlogPostTemplateEnhanced>');
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