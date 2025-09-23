#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Get list of all existing blog posts
function getExistingBlogPosts() {
  const blogDir = path.join(__dirname, '../src/app/blog');
  const posts = [];

  if (fs.existsSync(blogDir)) {
    const items = fs.readdirSync(blogDir);
    for (const item of items) {
      const itemPath = path.join(blogDir, item);
      const stats = fs.statSync(itemPath);
      if (stats.isDirectory() && item !== 'calendar' && item !== 'preview') {
        // Extract title from the actual post
        const pagePath = path.join(itemPath, 'page.tsx');
        if (fs.existsSync(pagePath)) {
          const content = fs.readFileSync(pagePath, 'utf-8');
          const titleMatch = content.match(/title:\s*["'`](.*?)["'`]/);
          const categoryMatch = content.match(/category:\s*["'`](.*?)["'`]/);
          posts.push({
            slug: item,
            title: titleMatch ? titleMatch[1] : item,
            category: categoryMatch ? categoryMatch[1] : 'Unknown'
          });
        }
      }
    }
  }

  return posts;
}

// Get list of scheduled posts
function getScheduledPosts() {
  const scheduledDir = path.join(__dirname, '../content/scheduled-posts');
  const posts = [];

  if (fs.existsSync(scheduledDir)) {
    const files = fs.readdirSync(scheduledDir).filter(f => f.endsWith('.tsx'));
    for (const file of files) {
      const content = fs.readFileSync(path.join(scheduledDir, file), 'utf-8');
      const titleMatch = content.match(/title:\s*["'`](.*?)["'`]/);
      const categoryMatch = content.match(/category:\s*["'`](.*?)["'`]/);
      posts.push({
        slug: file.replace('.tsx', ''),
        title: titleMatch ? titleMatch[1] : file.replace('.tsx', ''),
        category: categoryMatch ? categoryMatch[1] : 'Unknown',
        scheduled: true
      });
    }
  }

  return posts;
}

// Find best replacement for a broken link
function findBestReplacement(brokenSlug, brokenTitle, existingPosts, category) {
  // Mapping of known broken slugs to their actual counterparts
  const knownMappings = {
    'government-benefits-retirement-guide': 'government-benefits-oas-gis-cpp',
    'maximizing-ei-benefits-complete-guide': 'maximizing-ei-benefits-guide',
    'q4-business-exit-planning': 'q4-business-exit-planning',
    'constructive-dismissal-financial-rights': null, // Doesn't exist yet
    'holiday-co-parenting-expense-sharing': null, // Doesn't exist yet
  };

  if (knownMappings.hasOwnProperty(brokenSlug)) {
    const mappedSlug = knownMappings[brokenSlug];
    if (mappedSlug) {
      const found = existingPosts.find(p => p.slug === mappedSlug);
      if (found) return found;
    }
  }

  // Try to find by category match
  const sameCategoryPosts = existingPosts.filter(p =>
    p.category === category && p.slug !== brokenSlug
  );

  // Score each post based on title similarity
  const scored = sameCategoryPosts.map(post => {
    let score = 0;
    const brokenWords = brokenTitle.toLowerCase().split(/\s+/);
    const postWords = post.title.toLowerCase().split(/\s+/);

    // Count matching words
    for (const word of brokenWords) {
      if (postWords.includes(word)) score += 1;
    }

    // Bonus for similar keywords
    const keywords = ['retirement', 'divorce', 'severance', 'inheritance', 'business'];
    for (const keyword of keywords) {
      if (brokenTitle.toLowerCase().includes(keyword) &&
          post.title.toLowerCase().includes(keyword)) {
        score += 2;
      }
    }

    return { ...post, score };
  });

  // Sort by score and return best match
  scored.sort((a, b) => b.score - a.score);
  return scored[0] && scored[0].score > 0 ? scored[0] : null;
}

// Extract and analyze related posts from a file
function analyzeRelatedPosts(filePath, existingPosts, allPosts) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const issues = [];

  // Extract category
  const categoryMatch = content.match(/category:\s*["'`](.*?)["'`]/);
  const category = categoryMatch ? categoryMatch[1] : 'Unknown';

  // Extract related posts
  const relatedMatch = content.match(/const\s+relatedPosts\s*=\s*\[([\s\S]*?)\];/);
  if (!relatedMatch) return { issues: [], suggestions: [] };

  const relatedContent = relatedMatch[1];
  const posts = [];

  // Parse each related post
  const postPattern = /\{\s*title:\s*["'`](.*?)["'`],\s*slug:\s*["'`](.*?)["'`],\s*excerpt:\s*["'`](.*?)["'`],\s*readTime:\s*["'`](.*?)["'`]\s*\}/gs;
  let match;
  while ((match = postPattern.exec(relatedContent)) !== null) {
    posts.push({
      title: match[1],
      slug: match[2],
      excerpt: match[3],
      readTime: match[4]
    });
  }

  const suggestions = [];

  for (const post of posts) {
    const exists = existingPosts.find(p => p.slug === post.slug);
    const scheduled = allPosts.find(p => p.slug === post.slug && p.scheduled);

    if (!exists && !scheduled) {
      const replacement = findBestReplacement(post.slug, post.title, existingPosts, category);

      if (replacement) {
        suggestions.push({
          broken: post,
          replacement: replacement,
          confidence: replacement.score || 'low'
        });
      } else {
        suggestions.push({
          broken: post,
          replacement: null,
          confidence: 'none'
        });
      }
    }
  }

  return { suggestions, category };
}

// Main function
function main() {
  console.log(`\n🔧 Related Articles Link Fixer\n${'='.repeat(50)}\n`);

  const existingPosts = getExistingBlogPosts();
  const scheduledPosts = getScheduledPosts();
  const allPosts = [...existingPosts, ...scheduledPosts];

  console.log(`Found ${existingPosts.length} published posts`);
  console.log(`Found ${scheduledPosts.length} scheduled posts\n`);

  const allFiles = [];

  // Collect all blog files
  const blogDir = path.join(__dirname, '../src/app/blog');
  const publishedDirs = fs.readdirSync(blogDir).filter(item => {
    const itemPath = path.join(blogDir, item);
    return fs.statSync(itemPath).isDirectory() && item !== 'calendar' && item !== 'preview';
  });

  for (const dir of publishedDirs) {
    allFiles.push({
      type: 'published',
      slug: dir,
      path: path.join(blogDir, dir, 'page.tsx')
    });
  }

  // Add scheduled posts
  const scheduledDir = path.join(__dirname, '../content/scheduled-posts');
  const scheduledFiles = fs.readdirSync(scheduledDir).filter(f => f.endsWith('.tsx'));
  for (const file of scheduledFiles) {
    allFiles.push({
      type: 'scheduled',
      slug: file.replace('.tsx', ''),
      path: path.join(scheduledDir, file)
    });
  }

  // Analyze each file
  const fixList = [];

  for (const file of allFiles) {
    const { suggestions, category } = analyzeRelatedPosts(file.path, existingPosts, allPosts);

    if (suggestions.length > 0) {
      const hasIssues = suggestions.some(s => !allPosts.find(p => p.slug === s.broken.slug));
      if (hasIssues) {
        fixList.push({
          file: file,
          category: category,
          suggestions: suggestions.filter(s => !allPosts.find(p => p.slug === s.broken.slug))
        });
      }
    }
  }

  // Generate fix recommendations
  console.log(`Found ${fixList.length} files with broken Related Article links\n`);

  // Group by category for better suggestions
  const byCategory = {};
  for (const item of fixList) {
    if (!byCategory[item.category]) {
      byCategory[item.category] = [];
    }
    byCategory[item.category].push(item);
  }

  console.log('SUGGESTED REPLACEMENTS BY CATEGORY:\n');

  for (const [category, items] of Object.entries(byCategory)) {
    console.log(`\n📂 ${category}`);
    console.log('─'.repeat(50));

    // Get available posts in this category
    const availablePosts = existingPosts.filter(p => p.category === category);
    console.log(`  Available posts in category: ${availablePosts.length}\n`);

    for (const item of items) {
      console.log(`  📄 ${item.file.slug}`);
      for (const suggestion of item.suggestions) {
        if (suggestion.replacement) {
          console.log(`     ❌ "${suggestion.broken.slug}"`);
          console.log(`     ✅ Suggest: "${suggestion.replacement.slug}" (confidence: ${suggestion.confidence})`);
        } else {
          console.log(`     ❌ "${suggestion.broken.slug}" - No good replacement found`);
        }
      }
    }
  }

  // List posts that should be created
  const missingPosts = new Set();
  for (const item of fixList) {
    for (const suggestion of item.suggestions) {
      if (!suggestion.replacement) {
        missingPosts.add(suggestion.broken.slug);
      }
    }
  }

  if (missingPosts.size > 0) {
    console.log('\n\n📝 POSTS THAT SHOULD BE CREATED:');
    console.log('─'.repeat(50));
    for (const slug of missingPosts) {
      console.log(`  • ${slug}`);
    }
  }

  // Generate category-based suggestions for replacements
  console.log('\n\n🎯 BEST EXISTING POSTS FOR EACH CATEGORY:');
  console.log('─'.repeat(50));

  for (const [category, posts] of Object.entries(byCategory)) {
    const categoryPosts = existingPosts.filter(p => p.category === category);
    console.log(`\n${category}:`);
    categoryPosts.slice(0, 5).forEach(p => {
      console.log(`  • ${p.slug}`);
    });
  }
}

// Run the script
main();