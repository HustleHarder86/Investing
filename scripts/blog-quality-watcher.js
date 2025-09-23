#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

/**
 * Real-time blog quality watcher
 * Monitors blog files for changes and runs proofreading automatically
 */
class BlogQualityWatcher {
  constructor() {
    this.watchPaths = [
      path.join(process.cwd(), 'src', 'app', 'blog'),
      path.join(process.cwd(), 'content', 'scheduled-posts')
    ];
    this.debounceTimers = {};
    this.isWatching = false;
  }

  /**
   * Start watching for file changes
   */
  start() {
    console.log('🚀 Blog Quality Watcher Started');
    console.log('═'.repeat(60));
    console.log('Monitoring:');
    this.watchPaths.forEach(p => console.log(`  - ${p}`));
    console.log('═'.repeat(60));
    console.log('Press Ctrl+C to stop\n');

    this.isWatching = true;

    // Watch each path
    this.watchPaths.forEach(watchPath => {
      if (!fs.existsSync(watchPath)) {
        console.log(`⚠️  Path does not exist: ${watchPath}`);
        return;
      }

      // Use recursive watching
      fs.watch(watchPath, { recursive: true }, (eventType, filename) => {
        if (!filename) return;

        // Only watch .tsx files
        if (!filename.endsWith('.tsx')) return;

        // Skip non-blog directories
        if (filename.includes('calendar') || filename.includes('preview')) return;

        const fullPath = path.join(watchPath, filename);

        // Debounce to avoid multiple triggers
        if (this.debounceTimers[fullPath]) {
          clearTimeout(this.debounceTimers[fullPath]);
        }

        this.debounceTimers[fullPath] = setTimeout(() => {
          this.checkFile(fullPath, eventType);
        }, 1000);
      });
    });

    // Handle graceful shutdown
    process.on('SIGINT', () => {
      console.log('\n\n👋 Shutting down Blog Quality Watcher...');
      this.isWatching = false;
      process.exit(0);
    });

    // Keep process running
    process.stdin.resume();
  }

  /**
   * Check a single file for quality issues
   */
  checkFile(filePath, eventType) {
    // Skip if file doesn't exist (was deleted)
    if (!fs.existsSync(filePath)) {
      return;
    }

    const timestamp = new Date().toLocaleTimeString();
    const relativePath = path.relative(process.cwd(), filePath);

    console.log(`\n[${timestamp}] 📝 File ${eventType}: ${relativePath}`);
    console.log('━'.repeat(60));

    // Run proofreading
    exec(`node ${path.join(__dirname, 'proofread-blog.js')} "${filePath}"`, (error, stdout, stderr) => {
      // Parse the output to get just the summary
      const lines = stdout.split('\n');
      const scoreMatch = stdout.match(/Quality Score: (\d+)\/100/);
      const errorsMatch = stdout.match(/Errors: (\d+)/);
      const warningsMatch = stdout.match(/Warnings: (\d+)/);

      if (scoreMatch) {
        const score = parseInt(scoreMatch[1]);
        const errors = errorsMatch ? parseInt(errorsMatch[1]) : 0;
        const warnings = warningsMatch ? parseInt(warningsMatch[1]) : 0;

        // Color-coded output based on score
        let statusEmoji = '✅';
        let statusColor = '\x1b[32m'; // green

        if (score < 70) {
          statusEmoji = '❌';
          statusColor = '\x1b[31m'; // red
        } else if (score < 90) {
          statusEmoji = '⚠️';
          statusColor = '\x1b[33m'; // yellow
        }

        console.log(`${statusEmoji} Quality Score: ${statusColor}${score}/100\x1b[0m`);
        console.log(`   Errors: ${errors}`);
        console.log(`   Warnings: ${warnings}`);

        // Show critical issues if any
        if (errors > 0) {
          console.log('\n❌ Critical Issues Detected:');
          const errorSection = stdout.split('❌ ERRORS:')[1];
          if (errorSection) {
            const errorLines = errorSection.split('\n').slice(0, 5);
            errorLines.forEach(line => {
              if (line.trim()) console.log(line);
            });
          }

          console.log('\n💡 Fix Suggestion:');
          console.log(`   Run: node scripts/proofread-blog.js "${relativePath}" --fix`);
        } else if (score < 90) {
          console.log('\n💡 Improvement Suggestion:');
          console.log(`   Run: node scripts/proofread-blog.js "${relativePath}" --verbose`);
        }

        // Alert for critical issues
        if (score < 70) {
          this.alertUser(relativePath, score, errors);
        }
      }

      console.log('━'.repeat(60));
    });
  }

  /**
   * Alert user about critical issues
   */
  alertUser(file, score, errors) {
    console.log('\n🚨 CRITICAL QUALITY ALERT 🚨');
    console.log(`File: ${file}`);
    console.log(`Score: ${score}/100`);
    console.log(`Errors: ${errors}`);
    console.log('\nThis file does not meet minimum quality standards.');
    console.log('Please fix the issues before committing.');

    // System beep (works on most terminals)
    process.stdout.write('\x07');
  }

  /**
   * Run initial check on all existing files
   */
  async initialCheck() {
    console.log('🔍 Running initial quality check on existing files...\n');

    const blogFiles = [];

    // Collect all blog files
    this.watchPaths.forEach(watchPath => {
      if (!fs.existsSync(watchPath)) return;

      // Get published blogs
      if (watchPath.includes('app/blog')) {
        const dirs = fs.readdirSync(watchPath);
        dirs.forEach(dir => {
          if (dir !== 'calendar' && dir !== 'preview' && !dir.startsWith('.')) {
            const pageFile = path.join(watchPath, dir, 'page.tsx');
            if (fs.existsSync(pageFile)) {
              blogFiles.push(pageFile);
            }
          }
        });
      }

      // Get scheduled posts
      if (watchPath.includes('scheduled-posts')) {
        const files = fs.readdirSync(watchPath);
        files.forEach(file => {
          if (file.endsWith('.tsx')) {
            blogFiles.push(path.join(watchPath, file));
          }
        });
      }
    });

    console.log(`Found ${blogFiles.length} blog files to check.\n`);

    // Check files with issues (score < 90)
    const issueFiles = [];

    for (const file of blogFiles) {
      await new Promise(resolve => {
        exec(`node ${path.join(__dirname, 'proofread-blog.js')} "${file}"`, (error, stdout) => {
          const scoreMatch = stdout.match(/Quality Score: (\d+)\/100/);
          if (scoreMatch) {
            const score = parseInt(scoreMatch[1]);
            if (score < 90) {
              issueFiles.push({
                file: path.relative(process.cwd(), file),
                score
              });
            }
          }
          resolve();
        });
      });
    }

    if (issueFiles.length > 0) {
      console.log('📊 Files Needing Attention:');
      issueFiles
        .sort((a, b) => a.score - b.score)
        .forEach(({ file, score }) => {
          const emoji = score < 70 ? '❌' : '⚠️';
          console.log(`  ${emoji} ${file}: ${score}/100`);
        });
      console.log('');
    } else {
      console.log('✅ All files meet quality standards!\n');
    }
  }
}

// Main execution
async function main() {
  const args = process.argv.slice(2);

  if (args.includes('--help')) {
    console.log('Blog Quality Watcher - Real-time blog quality monitoring');
    console.log('');
    console.log('Usage: node blog-quality-watcher.js [options]');
    console.log('');
    console.log('Options:');
    console.log('  --initial   Run initial check before watching');
    console.log('  --help      Show this help message');
    console.log('');
    console.log('The watcher will:');
    console.log('  - Monitor blog files for changes');
    console.log('  - Run quality checks automatically');
    console.log('  - Alert on critical issues');
    console.log('  - Suggest fixes for problems');
    return;
  }

  const watcher = new BlogQualityWatcher();

  // Run initial check if requested
  if (args.includes('--initial')) {
    await watcher.initialCheck();
    console.log('═'.repeat(60));
    console.log('');
  }

  // Start watching
  watcher.start();
}

// Run if executed directly
if (require.main === module) {
  main().catch(err => {
    console.error('❌ Error:', err.message);
    process.exit(1);
  });
}

module.exports = BlogQualityWatcher;