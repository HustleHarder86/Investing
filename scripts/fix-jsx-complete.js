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
    
    // Fix Pattern 1: Files that end with relatedQuestions={relatedQuestions} />
    // They should end with relatedQuestions={relatedQuestions} />
    if (content.includes('relatedQuestions={relatedQuestions} />')) {
      // This is actually correct - just need to ensure no stray characters after
      const lines = content.split('\n');
      const lastNonEmptyLine = lines.filter(l => l.trim()).pop();
      if (lastNonEmptyLine === '}') {
        // Good - file ends correctly
      } else if (lastNonEmptyLine.includes('relatedQuestions={relatedQuestions} />')) {
        // Need to add the closing bracket
        content = content.trimEnd() + '\n}';
        modified = true;
      }
    }
    
    // Fix Pattern 2: Files with malformed structure like:
    // relatedQuestions={relatedQuestions}>}
    // relatedPosts={relatedPosts}
    // />
    if (content.includes('relatedQuestions={relatedQuestions}>')) {
      // Find the section and fix it properly
      content = content.replace(
        /relatedQuestions=\{relatedQuestions\}>[\s\S]*?\/>/g,
        'relatedQuestions={relatedQuestions} />'
      );
      
      // Make sure the file ends with }
      if (!content.trimEnd().endsWith('}')) {
        content = content.trimEnd() + '\n}';
      }
      modified = true;
    }
    
    // Fix Pattern 3: Simple missing closing bracket
    const trimmedContent = content.trimEnd();
    if (!trimmedContent.endsWith('}') && trimmedContent.endsWith('/>')) {
      content = trimmedContent + '\n}';
      modified = true;
    }
    
    if (modified) {
      // Write the fixed content back
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed: ${fileName}`);
      fixedCount++;
    } else {
      console.log(`⚠️  Checking: ${fileName}`);
      // Do a final check to ensure it ends properly
      const trimmed = content.trimEnd();
      if (!trimmed.endsWith('}')) {
        fs.writeFileSync(filePath, trimmed + '\n}');
        console.log(`✅ Added closing bracket to: ${fileName}`);
        fixedCount++;
      }
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