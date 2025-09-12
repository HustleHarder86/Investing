#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Fix double "Enhanced" naming and template closing issues
 */
function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  // Fix BlogPostTemplateEnhancedEnhanced -> BlogPostTemplateEnhanced
  if (content.includes('BlogPostTemplateEnhancedEnhanced')) {
    content = content.replace(/BlogPostTemplateEnhancedEnhanced/g, 'BlogPostTemplateEnhanced');
    modified = true;
    console.log(`  ✓ Fixed double Enhanced in ${path.basename(filePath)}`);
  }
  
  // Fix import path
  if (content.includes("@/components/templates/BlogPostTemplateEnhancedEnhanced")) {
    content = content.replace(
      "@/components/templates/BlogPostTemplateEnhancedEnhanced",
      "@/components/templates/BlogPostTemplateEnhanced"
    );
    modified = true;
    console.log(`  ✓ Fixed import path in ${path.basename(filePath)}`);
  }
  
  // Fix template closing tag format - ensure props are inside the tag
  const templateRegex = /<BlogPostTemplateEnhanced([^>]*?)\/>\s*(quickAnswer|keyTakeaways|faqs|relatedQuestions)/;
  if (templateRegex.test(content)) {
    // Find the template usage
    const match = content.match(/<BlogPostTemplateEnhanced[^>]*?\/>/);
    if (match) {
      const oldTemplate = match[0];
      // Check if there are props after the closing tag
      const afterTemplate = content.substring(content.indexOf(oldTemplate) + oldTemplate.length);
      const propsMatch = afterTemplate.match(/^\s*(quickAnswer|keyTakeaways|faqs|relatedQuestions)={/);
      
      if (propsMatch) {
        // Extract all props that should be inside the tag
        let props = '';
        let searchStr = afterTemplate;
        const propNames = ['quickAnswer', 'keyTakeaways', 'faqs', 'relatedQuestions'];
        
        for (const prop of propNames) {
          const propRegex = new RegExp(`^\\s*${prop}={[^}]+}`);
          const propMatch = searchStr.match(propRegex);
          if (propMatch) {
            props += '\n      ' + propMatch[0].trim();
            searchStr = searchStr.substring(propMatch[0].length);
          }
        }
        
        // Build the corrected template tag
        const newTemplate = oldTemplate.replace('/>', props + ' />');
        
        // Replace in content
        const toReplace = oldTemplate + afterTemplate.substring(0, afterTemplate.indexOf('>') + 1);
        content = content.replace(toReplace, newTemplate);
        modified = true;
        console.log(`  ✓ Fixed template props format in ${path.basename(filePath)}`);
      }
    }
  }
  
  // Alternative fix for template with props on separate lines
  const brokenTemplateRegex = /<BlogPostTemplateEnhanced([^>]*?)\s*\n\s*(quickAnswer|keyTakeaways|faqs|relatedQuestions)={([^}]+)}/;
  while (brokenTemplateRegex.test(content)) {
    content = content.replace(brokenTemplateRegex, '<BlogPostTemplateEnhanced$1\n      $2={$3}');
    modified = true;
  }
  
  // Ensure the template is properly closed with all props
  const finalCheck = content.match(/<BlogPostTemplateEnhanced([^/>]*)relatedQuestions={relatedQuestions}([^>]*?)>/);
  if (finalCheck && !finalCheck[0].includes('/>')) {
    content = content.replace(
      /<BlogPostTemplateEnhanced([^/>]*)relatedQuestions={relatedQuestions}([^>]*?)>/,
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
  console.log('🔧 Fixing template naming and format issues...\n');
  
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