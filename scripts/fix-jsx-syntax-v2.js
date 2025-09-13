#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Files that need fixing based on build errors
const filesToFix = [
  'charitable-giving-tax-planning.tsx',
  'constructive-dismissal-financial-rights.tsx',
  'defined-benefit-pension-options.tsx',
  'divorce-mediation-vs-litigation.tsx',
  'early-retirement-50s-complete-roadmap.tsx',
  'early-retirement-50s-financial-independence.tsx',
  'emotional-financial-wellness-job-loss.tsx',
  'ei-benefits-maximization-strategies.tsx',
  'family-cottage-inheritance-disputes.tsx',
  'gray-divorce-retirement-accounts.tsx',
  'healthcare-benefits-after-job-loss.tsx',
  'inherited-investment-accounts-tax.tsx',
  'inherited-debt-obligations-canada.tsx',
  'inheritance-tax-planning-ontario.tsx',
  'job-search-expense-tax-deductions.tsx',
  'manufacturing-severance-trends.tsx',
  'maximizing-ei-benefits-guide.tsx',
  'power-of-attorney-financial-decisions.tsx',
  'q4-business-exit-planning.tsx',
  'severance-package-negotiation-tactics.tsx',
  'stock-options-severance-packages.tsx',
  'tax-free-retirement-income-strategies.tsx',
  'year-end-business-sale-tax.tsx',
  'defined-benefit-pension-maximization.tsx'
];

const scheduledPostsPath = path.join(__dirname, '..', 'content', 'scheduled-posts');

let fixedCount = 0;
let errorCount = 0;

filesToFix.forEach(fileName => {
  const filePath = path.join(scheduledPostsPath, fileName);
  
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix the broken patterns from the previous fix attempt
    // Pattern 1: relatedQuestions={relatedQuestions}>;
    if (content.includes('relatedQuestions={relatedQuestions}>;')) {
      content = content.replace(
        'relatedQuestions={relatedQuestions}>;',
        'relatedQuestions={relatedQuestions} />'
      );
      modified = true;
    }
    
    // Pattern 2: relatedQuestions={relatedQuestions}>}
    if (content.includes('relatedQuestions={relatedQuestions}>}')) {
      // This pattern needs special handling - it likely has extra content after
      content = content.replace(
        /relatedQuestions=\{relatedQuestions\}>\}[\s\S]*?relatedPosts=\{relatedPosts\}[\s\S]*?\/>/,
        'relatedQuestions={relatedQuestions}\n      relatedPosts={relatedPosts}\n    />'
      );
      modified = true;
    }
    
    // Pattern 3: Fix any remaining broken closing tags
    // Look for patterns where we have > followed by content that should be props
    content = content.replace(
      /relatedQuestions=\{relatedQuestions\}>[\s\S]*?<\/BlogPostTemplateEnhanced>/g,
      (match) => {
        // Extract any additional props that might be between > and </BlogPostTemplateEnhanced>
        const propsMatch = match.match(/relatedQuestions=\{relatedQuestions\}>([\s\S]*?)<\/BlogPostTemplateEnhanced>/);
        if (propsMatch && propsMatch[1].trim()) {
          // If there's content, it's likely misplaced props
          return 'relatedQuestions={relatedQuestions} />';
        }
        return 'relatedQuestions={relatedQuestions} />';
      }
    );
    
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