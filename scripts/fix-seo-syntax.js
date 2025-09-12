#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Fix syntax errors in SEO-optimized blog posts
 */
function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  // Fix multi-line quickAnswer strings
  const quickAnswerMatch = content.match(/const quickAnswer = "([\s\S]*?)";/);
  if (quickAnswerMatch) {
    const originalQuickAnswer = quickAnswerMatch[0];
    const answerText = quickAnswerMatch[1]
      .replace(/\n\s+/g, ' ')  // Replace newlines and indentation with space
      .replace(/\s+/g, ' ')     // Replace multiple spaces with single space
      .replace(/"/g, '\\"')     // Escape quotes
      .trim();
    
    const fixedQuickAnswer = `const quickAnswer = "${answerText}";`;
    
    if (originalQuickAnswer !== fixedQuickAnswer) {
      content = content.replace(originalQuickAnswer, fixedQuickAnswer);
      modified = true;
      console.log(`  ✓ Fixed quickAnswer in ${path.basename(filePath)}`);
    }
  }
  
  // Fix incomplete BlogPostTemplateEnhanced tag
  const templateMatch = content.match(/<BlogPostTemplateEnhanced[^>]*?\/\s*\n\s*quickAnswer/);
  if (templateMatch) {
    // Replace the broken closing with proper props
    content = content.replace(
      /<BlogPostTemplateEnhanced([^>]*?)\/\s*\n\s*(quickAnswer|keyTakeaways|faqs|relatedQuestions)/g,
      '<BlogPostTemplateEnhanced$1\n      $2'
    );
    modified = true;
    console.log(`  ✓ Fixed template props in ${path.basename(filePath)}`);
  }
  
  // Ensure template is properly closed
  const templateOpenMatch = content.match(/<BlogPostTemplateEnhanced[^>]*?>/);
  if (templateOpenMatch && !templateOpenMatch[0].includes('/>')) {
    // Check if it's missing the closing />
    const templatePattern = /<BlogPostTemplateEnhanced([^>]*?)relatedQuestions={relatedQuestions}([^>]*?)>/;
    content = content.replace(
      templatePattern,
      '<BlogPostTemplateEnhanced$1relatedQuestions={relatedQuestions}$2 />'
    );
    modified = true;
  }
  
  if (modified) {
    fs.writeFileSync(filePath, content);
    return true;
  }
  
  return false;
}

/**
 * Process all blog posts
 */
function processAllPosts() {
  console.log('🔧 Fixing SEO syntax errors...\n');
  
  let fixedCount = 0;
  
  // Fix scheduled posts
  const scheduledPath = path.join(process.cwd(), 'content/scheduled-posts');
  if (fs.existsSync(scheduledPath)) {
    const files = fs.readdirSync(scheduledPath).filter(f => f.endsWith('.tsx'));
    
    for (const file of files) {
      const filePath = path.join(scheduledPath, file);
      if (fixFile(filePath)) {
        fixedCount++;
      }
    }
  }
  
  // Fix published posts
  const publishedPath = path.join(process.cwd(), 'src/app/blog');
  if (fs.existsSync(publishedPath)) {
    const dirs = fs.readdirSync(publishedPath)
      .filter(item => {
        const itemPath = path.join(publishedPath, item);
        return fs.statSync(itemPath).isDirectory() && 
               item !== 'preview' && 
               item !== 'calendar';
      });
    
    for (const dir of dirs) {
      const filePath = path.join(publishedPath, dir, 'page.tsx');
      if (fs.existsSync(filePath) && fixFile(filePath)) {
        fixedCount++;
      }
    }
  }
  
  console.log(`\n✅ Fixed ${fixedCount} files`);
}

// Run the fixes
processAllPosts();