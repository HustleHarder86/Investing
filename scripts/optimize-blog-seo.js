#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Optimize a blog post for SEO and AI platforms
 */
class BlogSEOOptimizer {
  constructor(filePath) {
    this.filePath = filePath;
    this.content = fs.readFileSync(filePath, 'utf8');
    this.hasEnhancements = false;
  }

  /**
   * Extract title from the content
   */
  extractTitle() {
    const titleMatch = this.content.match(/title=['"](.*?)['"]/);
    return titleMatch ? titleMatch[1] : 'Blog Post';
  }

  /**
   * Extract category from the content
   */
  extractCategory() {
    const categoryMatch = this.content.match(/category=['"](.*?)['"]/);
    return categoryMatch ? categoryMatch[1] : 'Financial Planning';
  }

  /**
   * Extract excerpt from the content
   */
  extractExcerpt() {
    const excerptMatch = this.content.match(/excerpt=['"](.*?)['"]/);
    if (excerptMatch) return excerptMatch[1];
    
    // Try to extract from lead paragraph
    const leadMatch = this.content.match(/<p className="lead.*?>(.*?)<\/p>/s);
    if (leadMatch) {
      return leadMatch[1].replace(/<[^>]*>/g, '').substring(0, 160) + '...';
    }
    return 'Professional financial planning advice for Greater Toronto Area residents.';
  }

  /**
   * Generate FAQ questions based on content
   */
  generateFAQs(title, category) {
    const faqs = [];
    
    // Extract H2 headings as potential questions
    const h2Matches = this.content.matchAll(/<h2.*?>(.*?)<\/h2>/g);
    for (const match of h2Matches) {
      const heading = match[1].replace(/<[^>]*>/g, '');
      if (heading.includes('?') || heading.toLowerCase().includes('how') || heading.toLowerCase().includes('what')) {
        // Find the paragraph after this heading
        const afterHeading = this.content.indexOf(match[0]) + match[0].length;
        const nextParagraph = this.content.substring(afterHeading).match(/<p.*?>(.*?)<\/p>/s);
        if (nextParagraph) {
          faqs.push({
            question: heading.endsWith('?') ? heading : heading + '?',
            answer: nextParagraph[1].replace(/<[^>]*>/g, '').substring(0, 200)
          });
        }
      }
    }

    // Add default FAQs if we don't have enough
    if (faqs.length < 3) {
      faqs.push(
        {
          question: `What is the best approach to ${category.toLowerCase()} in Toronto?`,
          answer: `The best approach involves working with a qualified financial advisor who understands the Greater Toronto Area market and can provide personalized strategies based on your unique situation.`
        },
        {
          question: `How much does ${category.toLowerCase()} cost?`,
          answer: `Costs vary based on complexity and scope, but most financial planning services in the GTA range from consultation fees to percentage-based asset management. Contact us for a personalized quote.`
        },
        {
          question: `When should I start ${category.toLowerCase()}?`,
          answer: `The best time to start is now. Early planning provides more options and better outcomes. Our Toronto-based advisors can help you begin your financial planning journey today.`
        }
      );
    }

    return faqs.slice(0, 5); // Limit to 5 FAQs
  }

  /**
   * Generate key takeaways from content
   */
  generateKeyTakeaways(title, category) {
    const takeaways = [];
    
    // Look for lists in the content
    const listMatches = this.content.matchAll(/<li>(.*?)<\/li>/g);
    let count = 0;
    for (const match of listMatches) {
      const item = match[1].replace(/<[^>]*>/g, '').trim();
      if (item.length > 20 && item.length < 150 && count < 3) {
        takeaways.push(item);
        count++;
      }
    }

    // Add default takeaways if needed
    while (takeaways.length < 5) {
      const defaults = [
        `Understanding ${title.toLowerCase()} is crucial for financial success`,
        `Professional guidance can save thousands in taxes and fees`,
        `GTA residents have unique ${category.toLowerCase()} considerations`,
        `Early planning leads to better financial outcomes`,
        `Taking action now prevents costly mistakes later`
      ];
      takeaways.push(defaults[takeaways.length]);
    }

    return takeaways.slice(0, 5);
  }

  /**
   * Generate related questions for "People Also Ask"
   */
  generateRelatedQuestions(title, category) {
    const titleWords = title.toLowerCase().split(' ');
    const questions = [];

    // Generate questions based on title keywords
    if (titleWords.includes('how')) {
      questions.push(`What are alternatives to ${title.toLowerCase()}?`);
    }
    if (titleWords.includes('guide') || titleWords.includes('complete')) {
      questions.push(`How long does ${category.toLowerCase()} take in Ontario?`);
    }
    if (titleWords.includes('2025') || titleWords.includes('2024')) {
      questions.push(`What changed in ${category.toLowerCase()} regulations this year?`);
    }

    // Add location-specific questions
    questions.push(
      `Where can I find ${category.toLowerCase()} services in Toronto?`,
      `What documents do I need for ${category.toLowerCase()} in Ontario?`,
      `How much does ${category.toLowerCase()} cost in the GTA?`,
      `Are there free ${category.toLowerCase()} resources in Toronto?`,
      `What are common ${category.toLowerCase()} mistakes to avoid?`
    );

    return questions.slice(0, 5);
  }

  /**
   * Check if content already has SEO enhancements
   */
  checkExistingEnhancements() {
    this.hasEnhancements = 
      this.content.includes('QuickAnswer') ||
      this.content.includes('FAQSection') ||
      this.content.includes('KeyTakeaways') ||
      this.content.includes('RelatedQuestions') ||
      this.content.includes('BlogPostTemplateEnhanced');
  }

  /**
   * Add SEO components to the blog post
   */
  optimize() {
    this.checkExistingEnhancements();
    
    if (this.hasEnhancements) {
      console.log(`✓ ${path.basename(this.filePath)} already optimized`);
      return false;
    }

    const title = this.extractTitle();
    const category = this.extractCategory();
    const excerpt = this.extractExcerpt();

    // Generate SEO content
    const faqs = this.generateFAQs(title, category);
    const takeaways = this.generateKeyTakeaways(title, category);
    const questions = this.generateRelatedQuestions(title, category);

    // Check if using old template
    const usesOldTemplate = this.content.includes('BlogPostTemplate') && 
                           !this.content.includes('BlogPostTemplateEnhanced');

    if (usesOldTemplate) {
      // Replace old template with enhanced one
      this.content = this.content.replace(
        "import BlogPostTemplate from '@/components/templates/BlogPostTemplate'",
        "import BlogPostTemplateEnhanced from '@/components/templates/BlogPostTemplateEnhanced'"
      );
      
      // Only replace BlogPostTemplate that isn't already Enhanced
      this.content = this.content.replace(/BlogPostTemplate(?!Enhanced)/g, 'BlogPostTemplateEnhanced');

      // Add SEO imports
      const importsToAdd = `import QuickAnswer from '@/components/seo/QuickAnswer';
import FAQSection from '@/components/seo/FAQSection';
import KeyTakeaways from '@/components/seo/KeyTakeaways';
import RelatedQuestions from '@/components/seo/RelatedQuestions';

`;
      
      // Add imports after the template import
      const templateImportIndex = this.content.indexOf("import BlogPostTemplateEnhanced");
      const nextLineIndex = this.content.indexOf('\n', templateImportIndex) + 1;
      this.content = this.content.slice(0, nextLineIndex) + importsToAdd + this.content.slice(nextLineIndex);

      // Add SEO data before the component
      const faqsData = `
const blogFAQs = ${JSON.stringify(faqs, null, 2)};

const keyTakeaways = ${JSON.stringify(takeaways, null, 2)};

const relatedQuestions = ${JSON.stringify(questions, null, 2)};

const quickAnswer = "${excerpt.substring(0, 200)}";
`;

      // Insert before the component function
      const componentStart = this.content.indexOf('const BlogContent = ()');
      if (componentStart > -1) {
        this.content = this.content.slice(0, componentStart) + faqsData + '\n' + this.content.slice(componentStart);
      }

      // Add props to BlogPostTemplateEnhanced
      const templatePropsMatch = this.content.match(/<BlogPostTemplateEnhanced([^>]*?)>/);
      if (templatePropsMatch) {
        const existingProps = templatePropsMatch[1];
        const newProps = `${existingProps}
      quickAnswer={quickAnswer}
      keyTakeaways={keyTakeaways}
      faqs={blogFAQs}
      relatedQuestions={relatedQuestions}`;
        
        this.content = this.content.replace(
          templatePropsMatch[0],
          `<BlogPostTemplateEnhanced${newProps}>`
        );
      }

      // Save the optimized content
      fs.writeFileSync(this.filePath, this.content);
      console.log(`✅ Optimized: ${path.basename(this.filePath)}`);
      return true;
    }

    return false;
  }
}

/**
 * Process a single file or directory
 */
function processPath(targetPath) {
  const stats = fs.statSync(targetPath);
  
  if (stats.isDirectory()) {
    // Process all .tsx files in directory
    const files = fs.readdirSync(targetPath);
    let optimizedCount = 0;
    
    for (const file of files) {
      if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
        const filePath = path.join(targetPath, file);
        const optimizer = new BlogSEOOptimizer(filePath);
        if (optimizer.optimize()) {
          optimizedCount++;
        }
      }
    }
    
    console.log(`\n📊 Summary: Optimized ${optimizedCount} files in ${targetPath}`);
  } else {
    // Process single file
    const optimizer = new BlogSEOOptimizer(targetPath);
    optimizer.optimize();
  }
}

// Main execution
const args = process.argv.slice(2);
if (args.length === 0) {
  console.log('Usage: node optimize-blog-seo.js <file-or-directory>');
  console.log('Example: node optimize-blog-seo.js src/app/blog/');
  process.exit(1);
}

const targetPath = path.resolve(args[0]);
if (!fs.existsSync(targetPath)) {
  console.error(`Error: Path does not exist: ${targetPath}`);
  process.exit(1);
}

console.log('🚀 Starting SEO optimization...\n');
processPath(targetPath);
console.log('\n✨ SEO optimization complete!');