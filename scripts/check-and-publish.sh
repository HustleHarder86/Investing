#!/bin/bash

# Check and Publish Script
# This script checks if today's blog post has been published and publishes it if not

echo "🔍 Blog Publishing Status Check"
echo "================================"
echo "📅 Current date: $(date +'%Y-%m-%d')"
echo "🕐 Current time: $(date +'%H:%M %Z')"
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Not in project root directory"
    exit 1
fi

# Check the blog schedule
echo "📋 Checking blog schedule..."
TODAY=$(date +'%Y-%m-%d')

# Use node to check the schedule
node -e "
const fs = require('fs');
const schedule = JSON.parse(fs.readFileSync('content/blog-schedule.json', 'utf8'));
const today = '$TODAY';
const todayPost = schedule.schedule.find(p => p.date === today);

if (!todayPost) {
    console.log('📭 No post scheduled for today');
    process.exit(0);
}

console.log('📬 Found post for today:');
console.log('   Title: ' + todayPost.title);
console.log('   Status: ' + todayPost.status);
console.log('   Slug: ' + todayPost.slug);

if (todayPost.status === 'published') {
    console.log('✅ Today\'s post is already published');
    process.exit(0);
} else {
    console.log('⚠️  Today\'s post needs to be published');
    process.exit(1);
}
"

if [ $? -eq 1 ]; then
    echo ""
    echo "🚀 Running blog publisher..."
    node scripts/publish-blog.js
    
    if [ $? -eq 0 ]; then
        echo ""
        echo "✅ Blog post published successfully!"
        echo ""
        echo "📝 Committing changes..."
        git add .
        git commit -m "📚 Manual publish of scheduled blog post for $(date +'%Y-%m-%d')"
        git push
        echo "✅ Changes pushed to repository"
    else
        echo "❌ Error publishing blog post"
        exit 1
    fi
fi

echo ""
echo "🎯 Blog publishing check complete!"