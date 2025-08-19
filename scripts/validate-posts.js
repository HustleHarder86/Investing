#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Load the blog schedule
const loadSchedule = () => {
  const schedulePath = path.join(__dirname, '..', 'content', 'blog-schedule.json');
  if (!fs.existsSync(schedulePath)) {
    console.log('❌ No blog schedule found');
    return null;
  }
  return JSON.parse(fs.readFileSync(schedulePath, 'utf8'));
};

// Check if a scheduled post file exists
const checkPostFile = (slug) => {
  const postPath = path.join(__dirname, '..', 'content', 'scheduled-posts', `${slug}.tsx`);
  return fs.existsSync(postPath);
};

// Check if a post is already published
const checkPublished = (slug) => {
  const publishedPath = path.join(__dirname, '..', 'src', 'app', 'blog', slug, 'page.tsx');
  return fs.existsSync(publishedPath);
};

// Main validation function
const validatePosts = () => {
  console.log('🔍 Validating Blog Posts...\n');
  
  const schedule = loadSchedule();
  if (!schedule) return;
  
  const today = new Date().toISOString().split('T')[0];
  let hasErrors = false;
  
  // Statistics
  let stats = {
    total: schedule.schedule.length,
    published: 0,
    pending: 0,
    ready: 0,
    missing: 0,
    overdue: 0
  };
  
  // Group posts by status
  const pending = [];
  const missing = [];
  const overdue = [];
  const upcoming = [];
  
  schedule.schedule.forEach(post => {
    if (post.status === 'published') {
      stats.published++;
      // Verify published posts exist
      if (!checkPublished(post.slug)) {
        console.log(`⚠️  Published post missing: ${post.slug}`);
        hasErrors = true;
      }
    } else if (post.status === 'pending') {
      stats.pending++;
      
      // Check if file exists
      const fileExists = checkPostFile(post.slug);
      
      if (post.date < today) {
        // Post is overdue
        stats.overdue++;
        overdue.push({
          ...post,
          fileExists,
          daysOverdue: Math.floor((new Date(today) - new Date(post.date)) / (1000 * 60 * 60 * 24))
        });
      } else {
        // Post is upcoming
        if (fileExists) {
          stats.ready++;
          upcoming.push({ ...post, fileExists: true });
        } else {
          stats.missing++;
          missing.push(post);
        }
      }
    }
  });
  
  // Display results
  console.log('📊 Statistics:');
  console.log(`   Total posts: ${stats.total}`);
  console.log(`   Published: ${stats.published}`);
  console.log(`   Pending: ${stats.pending}`);
  console.log(`   Ready to publish: ${stats.ready}`);
  console.log(`   Missing files: ${stats.missing}`);
  console.log(`   Overdue: ${stats.overdue}\n`);
  
  // Show overdue posts
  if (overdue.length > 0) {
    console.log('🚨 OVERDUE POSTS:');
    overdue.forEach(post => {
      console.log(`   ${post.date} - ${post.title}`);
      console.log(`     Slug: ${post.slug}`);
      console.log(`     Days overdue: ${post.daysOverdue}`);
      console.log(`     File exists: ${post.fileExists ? '✅' : '❌'}`);
      console.log('');
    });
  }
  
  // Show missing files
  if (missing.length > 0) {
    console.log('❌ MISSING FILES:');
    missing.forEach(post => {
      console.log(`   ${post.date} - ${post.title}`);
      console.log(`     Expected file: content/scheduled-posts/${post.slug}.tsx`);
      console.log('');
    });
  }
  
  // Show next 5 upcoming posts
  const nextPosts = upcoming
    .filter(p => p.fileExists)
    .sort((a, b) => a.date.localeCompare(b.date))
    .slice(0, 5);
  
  if (nextPosts.length > 0) {
    console.log('📅 NEXT POSTS READY:');
    nextPosts.forEach(post => {
      const daysUntil = Math.ceil((new Date(post.date) - new Date(today)) / (1000 * 60 * 60 * 24));
      console.log(`   ${post.date} - ${post.title}`);
      console.log(`     Days until publish: ${daysUntil}`);
      console.log('');
    });
  }
  
  // Check for duplicate slugs
  const slugs = new Set();
  const duplicates = [];
  schedule.schedule.forEach(post => {
    if (slugs.has(post.slug)) {
      duplicates.push(post.slug);
    }
    slugs.add(post.slug);
  });
  
  if (duplicates.length > 0) {
    console.log('⚠️  DUPLICATE SLUGS FOUND:');
    duplicates.forEach(slug => {
      console.log(`   ${slug}`);
    });
    hasErrors = true;
  }
  
  // Final status
  if (hasErrors || missing.length > 0 || overdue.length > 0) {
    console.log('\n❌ Validation completed with issues');
    process.exit(1);
  } else {
    console.log('\n✅ All validations passed!');
  }
};

// Run validation
if (require.main === module) {
  validatePosts();
}