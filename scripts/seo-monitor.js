#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * SEO Monitoring System
 * Analyzes blog posts for SEO optimization status and generates reports
 */
class SEOMonitor {
  constructor() {
    this.publishedPath = path.join(process.cwd(), 'src/app/blog');
    this.scheduledPath = path.join(process.cwd(), 'content/scheduled-posts');
    this.report = {
      total: 0,
      optimized: 0,
      nonOptimized: 0,
      details: [],
      seoComponents: {
        quickAnswer: 0,
        faqSection: 0,
        keyTakeaways: 0,
        relatedQuestions: 0,
        structuredData: 0
      },
      missingComponents: []
    };
  }

  /**
   * Check if a file is optimized
   */
  checkOptimization(filePath, isPublished = false) {
    const content = fs.readFileSync(filePath, 'utf8');
    const fileName = path.basename(filePath);
    
    const checks = {
      hasEnhancedTemplate: content.includes('BlogPostTemplateEnhanced'),
      hasQuickAnswer: content.includes('QuickAnswer'),
      hasFAQSection: content.includes('FAQSection'),
      hasKeyTakeaways: content.includes('KeyTakeaways'),
      hasRelatedQuestions: content.includes('RelatedQuestions'),
      hasStructuredData: content.includes('StructuredData') || content.includes('BlogPostTemplateEnhanced'),
      hasMetaDescription: content.match(/excerpt=['"](.*?)['"]/)?.[1]?.length > 150,
      hasProperTitle: content.match(/title=['"](.*?)['"]/)?.[1]?.length > 30,
      hasFAQData: content.includes('blogFAQs'),
      hasKeyTakeawaysData: content.includes('keyTakeaways'),
      hasRelatedQuestionsData: content.includes('relatedQuestions')
    };

    const optimizationScore = Object.values(checks).filter(Boolean).length;
    const isOptimized = checks.hasEnhancedTemplate && optimizationScore >= 8;

    // Update component counts
    if (checks.hasQuickAnswer) this.report.seoComponents.quickAnswer++;
    if (checks.hasFAQSection) this.report.seoComponents.faqSection++;
    if (checks.hasKeyTakeaways) this.report.seoComponents.keyTakeaways++;
    if (checks.hasRelatedQuestions) this.report.seoComponents.relatedQuestions++;
    if (checks.hasStructuredData || checks.hasEnhancedTemplate) this.report.seoComponents.structuredData++;

    const detail = {
      file: fileName,
      path: isPublished ? 'published' : 'scheduled',
      isOptimized,
      score: optimizationScore,
      checks,
      missing: Object.entries(checks)
        .filter(([key, value]) => !value)
        .map(([key]) => key.replace(/^has/, ''))
    };

    this.report.details.push(detail);
    this.report.total++;
    
    if (isOptimized) {
      this.report.optimized++;
    } else {
      this.report.nonOptimized++;
      this.report.missingComponents.push({
        file: fileName,
        missing: detail.missing
      });
    }

    return detail;
  }

  /**
   * Scan all blog posts
   */
  scanAllPosts() {
    console.log('📊 SEO Monitoring System\n');
    console.log('Scanning blog posts...\n');

    // Scan published posts
    if (fs.existsSync(this.publishedPath)) {
      const publishedDirs = fs.readdirSync(this.publishedPath)
        .filter(item => {
          const itemPath = path.join(this.publishedPath, item);
          return fs.statSync(itemPath).isDirectory() && 
                 item !== 'preview' && 
                 item !== 'calendar';
        });

      for (const dir of publishedDirs) {
        const filePath = path.join(this.publishedPath, dir, 'page.tsx');
        if (fs.existsSync(filePath)) {
          this.checkOptimization(filePath, true);
        }
      }
    }

    // Scan scheduled posts
    if (fs.existsSync(this.scheduledPath)) {
      const scheduledFiles = fs.readdirSync(this.scheduledPath)
        .filter(file => file.endsWith('.tsx'));

      for (const file of scheduledFiles) {
        const filePath = path.join(this.scheduledPath, file);
        this.checkOptimization(filePath, false);
      }
    }
  }

  /**
   * Generate performance metrics
   */
  generateMetrics() {
    const optimizationRate = (this.report.optimized / this.report.total * 100).toFixed(1);
    
    return {
      optimizationRate,
      averageScore: (this.report.details.reduce((sum, d) => sum + d.score, 0) / this.report.total).toFixed(1),
      componentAdoption: {
        quickAnswer: `${(this.report.seoComponents.quickAnswer / this.report.total * 100).toFixed(1)}%`,
        faqSection: `${(this.report.seoComponents.faqSection / this.report.total * 100).toFixed(1)}%`,
        keyTakeaways: `${(this.report.seoComponents.keyTakeaways / this.report.total * 100).toFixed(1)}%`,
        relatedQuestions: `${(this.report.seoComponents.relatedQuestions / this.report.total * 100).toFixed(1)}%`,
        structuredData: `${(this.report.seoComponents.structuredData / this.report.total * 100).toFixed(1)}%`
      }
    };
  }

  /**
   * Generate detailed report
   */
  generateReport() {
    const metrics = this.generateMetrics();
    
    console.log('═══════════════════════════════════════════════════════');
    console.log('                    SEO REPORT SUMMARY                  ');
    console.log('═══════════════════════════════════════════════════════\n');
    
    console.log('📈 Overall Statistics:');
    console.log(`   Total Posts: ${this.report.total}`);
    console.log(`   ✅ Optimized: ${this.report.optimized} (${metrics.optimizationRate}%)`);
    console.log(`   ⚠️  Non-Optimized: ${this.report.nonOptimized}`);
    console.log(`   📊 Average Score: ${metrics.averageScore}/11\n`);
    
    console.log('🎯 Component Adoption:');
    console.log(`   Quick Answer: ${metrics.componentAdoption.quickAnswer}`);
    console.log(`   FAQ Section: ${metrics.componentAdoption.faqSection}`);
    console.log(`   Key Takeaways: ${metrics.componentAdoption.keyTakeaways}`);
    console.log(`   Related Questions: ${metrics.componentAdoption.relatedQuestions}`);
    console.log(`   Structured Data: ${metrics.componentAdoption.structuredData}\n`);
    
    if (this.report.nonOptimized > 0) {
      console.log('⚠️  Posts Needing Optimization:');
      this.report.missingComponents.slice(0, 10).forEach(item => {
        console.log(`   - ${item.file}`);
        if (item.missing.length > 0) {
          console.log(`     Missing: ${item.missing.slice(0, 3).join(', ')}`);
        }
      });
      
      if (this.report.missingComponents.length > 10) {
        console.log(`   ... and ${this.report.missingComponents.length - 10} more`);
      }
      console.log('');
    }
    
    console.log('✨ Recommendations:');
    if (metrics.optimizationRate === '100.0') {
      console.log('   🎉 All posts are fully optimized!');
    } else {
      console.log(`   1. Run: npm run blog:optimize to optimize remaining posts`);
      console.log(`   2. Review posts with score < 8 for manual enhancement`);
      console.log(`   3. Add missing FAQ sections for better voice search`);
    }
    
    console.log('\n═══════════════════════════════════════════════════════');
  }

  /**
   * Export detailed report to JSON
   */
  exportReport(outputPath = null) {
    const reportPath = outputPath || path.join(process.cwd(), 'seo-report.json');
    const metrics = this.generateMetrics();
    
    const exportData = {
      timestamp: new Date().toISOString(),
      summary: {
        total: this.report.total,
        optimized: this.report.optimized,
        nonOptimized: this.report.nonOptimized,
        optimizationRate: metrics.optimizationRate,
        averageScore: metrics.averageScore
      },
      componentAdoption: metrics.componentAdoption,
      details: this.report.details.sort((a, b) => b.score - a.score),
      needsOptimization: this.report.missingComponents
    };
    
    fs.writeFileSync(reportPath, JSON.stringify(exportData, null, 2));
    console.log(`\n📄 Detailed report exported to: ${reportPath}`);
  }

  /**
   * Check specific post
   */
  checkPost(postPath) {
    if (!fs.existsSync(postPath)) {
      console.error(`Error: File not found: ${postPath}`);
      return;
    }
    
    const detail = this.checkOptimization(postPath);
    
    console.log(`\n📝 SEO Analysis: ${path.basename(postPath)}`);
    console.log('─'.repeat(50));
    console.log(`Status: ${detail.isOptimized ? '✅ Optimized' : '⚠️  Needs Optimization'}`);
    console.log(`Score: ${detail.score}/11`);
    console.log('\nChecklist:');
    
    Object.entries(detail.checks).forEach(([key, value]) => {
      const label = key.replace(/^has/, '').replace(/([A-Z])/g, ' $1').trim();
      console.log(`  ${value ? '✓' : '✗'} ${label}`);
    });
    
    if (detail.missing.length > 0) {
      console.log('\nMissing Components:');
      detail.missing.forEach(item => {
        console.log(`  - ${item}`);
      });
    }
  }
}

// Main execution
const args = process.argv.slice(2);
const monitor = new SEOMonitor();

if (args.length === 0 || args[0] === 'scan') {
  // Default: scan all posts
  monitor.scanAllPosts();
  monitor.generateReport();
} else if (args[0] === 'export') {
  // Export detailed JSON report
  monitor.scanAllPosts();
  monitor.generateReport();
  monitor.exportReport(args[1]);
} else if (args[0] === 'check') {
  // Check specific post
  if (!args[1]) {
    console.error('Usage: npm run seo:monitor check <file-path>');
    process.exit(1);
  }
  monitor.checkPost(path.resolve(args[1]));
} else {
  console.log('Usage:');
  console.log('  npm run seo:monitor        - Scan all posts and generate report');
  console.log('  npm run seo:monitor export - Export detailed JSON report');
  console.log('  npm run seo:monitor check <file> - Check specific post');
}