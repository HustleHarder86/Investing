#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Fix concatenation issues in quickAnswer lines
const fixFile = (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');

  // Fix quickAnswer concatenation issue
  // Pattern: "correct answer."wrong text...";
  const quickAnswerPattern = /const quickAnswer = "([^"]+)"\s*[A-Z][^;]*";/;
  const match = content.match(quickAnswerPattern);

  if (match) {
    const correctAnswer = match[1];
    const fixedLine = `const quickAnswer = "${correctAnswer}";`;
    content = content.replace(quickAnswerPattern, fixedLine);

    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${path.basename(filePath)}`);
    return true;
  }

  return false;
};

// Process all files
console.log('Fixing concatenation issues...\n');

// Fix published posts
const publishedDir = path.join(__dirname, '..', 'src', 'app', 'blog');
const publishedPosts = fs.readdirSync(publishedDir)
  .filter(dir => fs.statSync(path.join(publishedDir, dir)).isDirectory())
  .filter(dir => dir !== 'calendar' && dir !== 'preview');

let fixedCount = 0;
publishedPosts.forEach(dir => {
  const filePath = path.join(publishedDir, dir, 'page.tsx');
  if (fs.existsSync(filePath)) {
    if (fixFile(filePath)) {
      fixedCount++;
    }
  }
});

console.log(`Fixed ${fixedCount} published posts\n`);

// Fix scheduled posts
const scheduledDir = path.join(__dirname, '..', 'content', 'scheduled-posts');
const scheduledPosts = fs.readdirSync(scheduledDir)
  .filter(file => file.endsWith('.tsx'));

fixedCount = 0;
scheduledPosts.forEach(file => {
  const filePath = path.join(scheduledDir, file);
  if (fixFile(filePath)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} scheduled posts\n`);
console.log('✨ Concatenation fixes complete!');