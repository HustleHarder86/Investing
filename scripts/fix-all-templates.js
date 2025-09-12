#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Fix all template issues comprehensively
 */
function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  const fileName = path.basename(filePath);
  
  // Fix the template closing issue where it's self-closed but has content
  const selfClosedWithContent = /<BlogPostTemplateEnhanced([^>]*?)relatedQuestions={relatedQuestions}([^>]*?)\/>\s*<BlogContent\s*\/>/;
  if (selfClosedWithContent.test(content)) {
    content = content.replace(
      selfClosedWithContent,
      '<BlogPostTemplateEnhanced$1relatedQuestions={relatedQuestions}$2>\n      <BlogContent />'
    );
    modified = true;
    console.log(`  ✓ Fixed self-closed template with content in ${fileName}`);
  }
  
  // Alternative pattern for broken templates
  const brokenPattern = /(<BlogPostTemplateEnhanced[^>]*?)\/>\s*(<[^>]+\/>)\s*<\/BlogPostTemplateEnhanced>/;
  if (brokenPattern.test(content)) {
    content = content.replace(
      brokenPattern,
      '$1>\n      $2\n    </BlogPostTemplateEnhanced>'
    );
    modified = true;
    console.log(`  ✓ Fixed broken template pattern in ${fileName}`);
  }
  
  // Fix props on wrong line (career-pivot pattern)
  const propsOnWrongLine = /<BlogPostTemplateEnhanced\s+post={[^}]+}\s*\/\s*\n\s*(quickAnswer|keyTakeaways|faqs|relatedQuestions)={/;
  if (propsOnWrongLine.test(content)) {
    // Extract the entire malformed component
    const match = content.match(/<BlogPostTemplateEnhanced\s+post={blogPost}\s*\/?\s*\n\s*(quickAnswer={[^}]+}\s*\n\s*keyTakeaways={[^}]+}\s*\n\s*faqs={[^}]+}\s*\n\s*relatedQuestions={[^}]+})\s*\/>/);
    if (match) {
      const replacement = `<BlogPostTemplateEnhanced 
      post={blogPost}
      quickAnswer={quickAnswer}
      keyTakeaways={keyTakeaways}
      faqs={blogFAQs}
      relatedQuestions={relatedQuestions} 
    />`;
      content = content.replace(match[0], replacement);
      modified = true;
      console.log(`  ✓ Fixed props on wrong line in ${fileName}`);
    }
  }
  
  if (modified) {
    fs.writeFileSync(filePath, content);
    return true;
  }
  
  return false;
}

/**
 * Process all posts
 */
function processAllPosts() {
  console.log('🔧 Fixing all template issues...\n');
  
  let fixedCount = 0;
  const errors = [];
  
  // Fix scheduled posts
  const scheduledPath = path.join(process.cwd(), 'content/scheduled-posts');
  if (fs.existsSync(scheduledPath)) {
    const files = fs.readdirSync(scheduledPath).filter(f => f.endsWith('.tsx'));
    
    for (const file of files) {
      try {
        const filePath = path.join(scheduledPath, file);
        if (fixFile(filePath)) {
          fixedCount++;
        }
      } catch (err) {
        errors.push(`Error processing ${file}: ${err.message}`);
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
      try {
        const filePath = path.join(publishedPath, dir, 'page.tsx');
        if (fs.existsSync(filePath) && fixFile(filePath)) {
          fixedCount++;
        }
      } catch (err) {
        errors.push(`Error processing ${dir}: ${err.message}`);
      }
    }
  }
  
  console.log(`\n✅ Fixed ${fixedCount} files`);
  
  if (errors.length > 0) {
    console.log('\n⚠️  Errors encountered:');
    errors.forEach(err => console.log(`  - ${err}`));
  }
}

// Run fixes
processAllPosts();