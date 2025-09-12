#!/bin/bash
# Claude Code Hook: Automatically optimize blog posts for SEO after creation

# This hook is triggered after a blog post is created or modified
# It runs the SEO optimization script to enhance the post

# Get the file path from the hook context
FILE_PATH="$1"

# Check if it's a blog post file
if [[ "$FILE_PATH" == *"blog"*.tsx ]] || [[ "$FILE_PATH" == *"scheduled-posts"*.tsx ]]; then
    echo "🎯 SEO Hook: Optimizing blog post..."
    
    # Run the optimization script
    node /home/amy/investing/scripts/optimize-blog-seo.js "$FILE_PATH"
    
    echo "✅ SEO Hook: Optimization complete"
fi