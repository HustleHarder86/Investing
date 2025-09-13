#!/bin/bash

# Fix all published blog posts with incorrect import
for file in src/app/blog/*/page.tsx; do
  if grep -q "BlogPostTemplateEnhancedEnhanced" "$file"; then
    echo "Fixing: $file"
    sed -i "s/import BlogPostTemplateEnhancedEnhanced from '@\/components\/templates\/BlogPostTemplateEnhancedEnhanced'/import BlogPostTemplateEnhanced from '@\/components\/templates\/BlogPostTemplateEnhanced'/g" "$file"
    sed -i "s/<BlogPostTemplateEnhancedEnhanced/<BlogPostTemplateEnhanced/g" "$file"
    sed -i "s/<\/BlogPostTemplateEnhancedEnhanced>/<\/BlogPostTemplateEnhanced>/g" "$file"
  fi
done

echo "✅ Fixed all published blog posts"