#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Get today's date in YYYY-MM-DD format (Toronto timezone)
const getTodayDate = () => {
  const now = new Date();
  const toronto = new Date(now.toLocaleString("en-US", {timeZone: "America/Toronto"}));
  const year = toronto.getFullYear();
  const month = String(toronto.getMonth() + 1).padStart(2, '0');
  const day = String(toronto.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

// Load the blog schedule
const loadSchedule = () => {
  const schedulePath = path.join(__dirname, '..', 'content', 'blog-schedule.json');
  if (!fs.existsSync(schedulePath)) {
    console.log('No blog schedule found');
    return null;
  }
  return JSON.parse(fs.readFileSync(schedulePath, 'utf8'));
};

// Save the updated schedule
const saveSchedule = (schedule) => {
  const schedulePath = path.join(__dirname, '..', 'content', 'blog-schedule.json');
  fs.writeFileSync(schedulePath, JSON.stringify(schedule, null, 2));
};

// Check if a blog post file exists
const checkPostExists = (slug) => {
  const postPath = path.join(__dirname, '..', 'content', 'scheduled-posts', `${slug}.tsx`);
  return fs.existsSync(postPath);
};

// Publish a blog post
const publishPost = (post) => {
  const sourcePath = path.join(__dirname, '..', 'content', 'scheduled-posts', `${post.slug}.tsx`);
  const destDir = path.join(__dirname, '..', 'src', 'app', 'blog', post.slug);
  const destPath = path.join(destDir, 'page.tsx');
  
  // Check if source file exists
  if (!fs.existsSync(sourcePath)) {
    console.log(`⚠️  Source file not found for ${post.slug}, skipping...`);
    return false;
  }
  
  // Create destination directory
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  
  // Copy the file
  fs.copyFileSync(sourcePath, destPath);
  
  // Remove the source file
  fs.unlinkSync(sourcePath);
  
  console.log(`✅ Published: ${post.title}`);
  return true;
};

// Update blog listing page
const updateBlogListing = (post) => {
  const listingPath = path.join(__dirname, '..', 'src', 'app', 'blog', 'page.tsx');
  
  if (!fs.existsSync(listingPath)) {
    console.log('⚠️  Blog listing page not found');
    return;
  }
  
  let content = fs.readFileSync(listingPath, 'utf8');
  
  // Find the blogPosts array
  const blogPostsMatch = content.match(/const blogPosts = \[([\s\S]*?)\];/);
  if (!blogPostsMatch) {
    console.log('⚠️  Could not find blogPosts array in listing page');
    return;
  }
  
  // Create new blog post entry
  const newPost = `  {
    slug: '${post.slug}',
    title: '${post.title.replace(/'/g, "\\'")}',
    excerpt: 'Expert insights on ${post.category.toLowerCase()} to help you navigate your financial transition.',
    author: '${post.author}',
    authorTitle: '${getAuthorTitle(post.author)}',
    date: '${post.date}',
    readTime: '${getReadTime(post.category)}',
    category: '${post.category}',
    categorySlug: '${getCategorySlug(post.category)}',
    featured: false
  },`;
  
  // Insert at the beginning of the array (after the opening bracket)
  const updatedContent = content.replace(
    /const blogPosts = \[/,
    `const blogPosts = [\n${newPost}`
  );
  
  fs.writeFileSync(listingPath, updatedContent);
  console.log('✅ Updated blog listing page');
};

// Update sitemap
const updateSitemap = (post) => {
  const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
  
  if (!fs.existsSync(sitemapPath)) {
    console.log('⚠️  Sitemap not found');
    return;
  }
  
  let content = fs.readFileSync(sitemapPath, 'utf8');
  
  // Find the blog section (look for the last blog entry)
  const lastBlogEntry = content.lastIndexOf('</url>\n  <url>\n    <loc>https://lifemoney.ca/blog/');
  if (lastBlogEntry === -1) {
    console.log('⚠️  Could not find blog section in sitemap');
    return;
  }
  
  // Find the end of that blog entry
  const endOfLastBlog = content.indexOf('</url>', lastBlogEntry) + 6;
  
  // Create new sitemap entry
  const newEntry = `
  <url>
    <loc>https://lifemoney.ca/blog/${post.slug}</loc>
    <lastmod>${post.date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`;
  
  // Insert the new entry
  const updatedContent = content.slice(0, endOfLastBlog) + newEntry + content.slice(endOfLastBlog);
  
  fs.writeFileSync(sitemapPath, updatedContent);
  console.log('✅ Updated sitemap');
};

// Helper functions
const getAuthorTitle = (author) => {
  const titles = {
    'Sarah Mitchell': 'CFP®, Estate Planning Specialist',
    'Michael Chen': 'CFP®, Divorce Specialist',
    'David Kumar': 'CFP®, Career Transition Advisor',
    'Jennifer Park': 'CPA, Tax Planning Expert'
  };
  return titles[author] || 'Financial Planning Specialist';
};

const getReadTime = (category) => {
  const times = {
    'Divorce Planning': '10 min',
    'Inheritance Planning': '8 min',
    'Business Sale': '12 min',
    'Severance Planning': '9 min'
  };
  return times[category] || '8 min';
};

const getCategorySlug = (category) => {
  const slugs = {
    'Divorce Planning': 'divorce-planning',
    'Inheritance Planning': 'inheritance-planning',
    'Business Sale': 'business-sale',
    'Severance Planning': 'severance-planning'
  };
  return slugs[category] || 'general';
};

// Main function
const main = () => {
  console.log('🚀 Blog Publisher Running...');
  console.log(`📅 Today's date: ${getTodayDate()}`);
  
  // Load schedule
  const schedule = loadSchedule();
  if (!schedule) {
    console.log('❌ No schedule found, exiting...');
    return;
  }
  
  // Find posts scheduled for today or earlier that haven't been published yet
  const today = getTodayDate();
  const postsToPublish = schedule.schedule.filter(
    post => post.date <= today && post.status === 'pending'
  );
  
  if (postsToPublish.length === 0) {
    console.log('📭 No posts scheduled for publishing');
    return;
  }
  
  console.log(`📬 Found ${postsToPublish.length} post(s) to publish (scheduled for today or earlier)`);
  
  // Publish each post
  postsToPublish.forEach(post => {
    console.log(`\n📝 Publishing: ${post.title}`);
    
    if (publishPost(post)) {
      // Update blog listing
      updateBlogListing(post);
      
      // Update sitemap
      updateSitemap(post);
      
      // Update schedule status
      const postIndex = schedule.schedule.findIndex(p => p.slug === post.slug);
      if (postIndex !== -1) {
        schedule.schedule[postIndex].status = 'published';
      }
    }
  });
  
  // Save updated schedule
  saveSchedule(schedule);
  console.log('\n✨ Publishing complete!');
};

// Run the script
if (require.main === module) {
  main();
}