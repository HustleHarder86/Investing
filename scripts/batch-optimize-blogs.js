#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

/**
 * Batch optimize all blog posts for SEO
 */
class BatchBlogOptimizer {
  constructor() {
    this.publishedPath = path.join(__dirname, '../src/app/blog');
    this.scheduledPath = path.join(__dirname, '../content/scheduled-posts');
    this.stats = {
      published: { total: 0, optimized: 0, skipped: 0, failed: 0 },
      scheduled: { total: 0, optimized: 0, skipped: 0, failed: 0 }
    };
  }

  /**
   * Get all blog post directories
   */
  getBlogDirectories(basePath) {
    if (!fs.existsSync(basePath)) {
      console.log(`⚠️  Path does not exist: ${basePath}`);
      return [];
    }

    const items = fs.readdirSync(basePath);
    const directories = [];

    for (const item of items) {
      const fullPath = path.join(basePath, item);
      const stats = fs.statSync(fullPath);
      
      if (stats.isDirectory() && !item.startsWith('.') && item !== 'preview' && item !== 'calendar') {
        const pageFile = path.join(fullPath, 'page.tsx');
        if (fs.existsSync(pageFile)) {
          directories.push(pageFile);
        }
      } else if (stats.isFile() && item.endsWith('.tsx')) {
        directories.push(fullPath);
      }
    }

    return directories;
  }

  /**
   * Optimize a single blog post
   */
  optimizePost(filePath, type) {
    try {
      console.log(`  Processing: ${path.basename(path.dirname(filePath) === path.dirname(filePath) ? filePath : path.dirname(filePath))}`);
      
      // Run the optimization script
      const result = execSync(`node ${path.join(__dirname, 'optimize-blog-seo.js')} "${filePath}"`, {
        encoding: 'utf8'
      });

      if (result.includes('already optimized')) {
        this.stats[type].skipped++;
        return 'skipped';
      } else if (result.includes('Optimized:')) {
        this.stats[type].optimized++;
        return 'optimized';
      } else {
        this.stats[type].skipped++;
        return 'skipped';
      }
    } catch (error) {
      console.error(`    ❌ Failed: ${error.message}`);
      this.stats[type].failed++;
      return 'failed';
    }
  }

  /**
   * Process all published blog posts
   */
  async processPublishedPosts() {
    console.log('\n📚 Processing Published Blog Posts...\n');
    
    const posts = this.getBlogDirectories(this.publishedPath);
    this.stats.published.total = posts.length;

    if (posts.length === 0) {
      console.log('  No published posts found.');
      return;
    }

    for (const post of posts) {
      this.optimizePost(post, 'published');
    }

    console.log(`\n  ✅ Published: ${this.stats.published.optimized} optimized, ${this.stats.published.skipped} skipped, ${this.stats.published.failed} failed`);
  }

  /**
   * Process all scheduled blog posts
   */
  async processScheduledPosts() {
    console.log('\n📅 Processing Scheduled Blog Posts...\n');
    
    const posts = this.getBlogDirectories(this.scheduledPath);
    this.stats.scheduled.total = posts.length;

    if (posts.length === 0) {
      console.log('  No scheduled posts found.');
      return;
    }

    for (const post of posts) {
      this.optimizePost(post, 'scheduled');
    }

    console.log(`\n  ✅ Scheduled: ${this.stats.scheduled.optimized} optimized, ${this.stats.scheduled.skipped} skipped, ${this.stats.scheduled.failed} failed`);
  }

  /**
   * Generate summary report
   */
  generateReport() {
    const total = this.stats.published.total + this.stats.scheduled.total;
    const optimized = this.stats.published.optimized + this.stats.scheduled.optimized;
    const skipped = this.stats.published.skipped + this.stats.scheduled.skipped;
    const failed = this.stats.published.failed + this.stats.scheduled.failed;

    console.log('\n' + '='.repeat(60));
    console.log('📊 OPTIMIZATION SUMMARY REPORT');
    console.log('='.repeat(60));
    
    console.log('\n📚 Published Posts:');
    console.log(`   Total: ${this.stats.published.total}`);
    console.log(`   Optimized: ${this.stats.published.optimized}`);
    console.log(`   Already Optimized: ${this.stats.published.skipped}`);
    console.log(`   Failed: ${this.stats.published.failed}`);
    
    console.log('\n📅 Scheduled Posts:');
    console.log(`   Total: ${this.stats.scheduled.total}`);
    console.log(`   Optimized: ${this.stats.scheduled.optimized}`);
    console.log(`   Already Optimized: ${this.stats.scheduled.skipped}`);
    console.log(`   Failed: ${this.stats.scheduled.failed}`);
    
    console.log('\n📈 Overall Results:');
    console.log(`   Total Posts: ${total}`);
    console.log(`   Successfully Optimized: ${optimized}`);
    console.log(`   Already Optimized: ${skipped}`);
    console.log(`   Failed: ${failed}`);
    
    const successRate = total > 0 ? ((optimized + skipped) / total * 100).toFixed(1) : 0;
    console.log(`   Success Rate: ${successRate}%`);
    
    console.log('\n' + '='.repeat(60));

    // Generate recommendations
    if (failed > 0) {
      console.log('\n⚠️  RECOMMENDATIONS:');
      console.log('   - Review failed posts manually');
      console.log('   - Check for syntax errors in failed files');
      console.log('   - Ensure all required imports are present');
    }

    if (optimized > 0) {
      console.log('\n✨ NEXT STEPS:');
      console.log('   1. Run build to verify no errors: npm run build');
      console.log('   2. Test locally: npm run dev');
      console.log('   3. Commit changes: git add . && git commit -m "Add SEO optimizations"');
      console.log('   4. Deploy to production: git push origin main');
    }
  }

  /**
   * Run the batch optimization
   */
  async run() {
    console.log('🚀 Starting Batch Blog SEO Optimization');
    console.log('=====================================\n');

    // Check if optimization script exists
    const optimizeScriptPath = path.join(__dirname, 'optimize-blog-seo.js');
    if (!fs.existsSync(optimizeScriptPath)) {
      console.error('❌ Error: optimize-blog-seo.js not found');
      console.error('   Please ensure the optimization script is in the scripts directory');
      process.exit(1);
    }

    // Process all posts
    await this.processPublishedPosts();
    await this.processScheduledPosts();

    // Generate report
    this.generateReport();

    console.log('\n✅ Batch optimization complete!\n');
  }
}

// Main execution
async function main() {
  const optimizer = new BatchBlogOptimizer();
  
  // Handle Ctrl+C gracefully
  process.on('SIGINT', () => {
    console.log('\n\n⚠️  Optimization interrupted by user');
    optimizer.generateReport();
    process.exit(0);
  });

  try {
    await optimizer.run();
  } catch (error) {
    console.error('\n❌ Fatal error:', error.message);
    process.exit(1);
  }
}

// Run if executed directly
if (require.main === module) {
  main();
}

module.exports = BatchBlogOptimizer;