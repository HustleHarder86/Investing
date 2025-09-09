# Blog Automation Guide

## Overview

Life Money uses an automated blog publishing system to maintain consistent content delivery 3 times per week (Monday, Wednesday, Friday). This system ensures Google sees regular publishing activity rather than bulk content dumps, improving SEO performance.

## System Components

### 1. Content Schedule (`content/blog-schedule.json`)
- Master schedule of all planned blog posts
- Tracks publication dates, titles, authors, categories, and status
- 6-month rolling schedule (78 posts total)

### 2. Scheduled Posts Directory (`content/scheduled-posts/`)
- Storage location for pre-written blog posts
- Posts are TypeScript files matching the blog post template
- Files are named using the slug: `slug-name.tsx`

### 3. GitHub Actions Workflow (`.github/workflows/publish-blog.yml`)
- Runs automatically Mon/Wed/Fri at 9 AM EST
- Can be manually triggered via GitHub Actions UI
- Publishes posts scheduled for the current date

### 4. Publishing Script (`scripts/publish-blog.js`)
- Core logic for publishing posts
- Moves posts from scheduled to live directory
- Updates blog listing and sitemap
- Tracks publication status

### 5. Content Calendar Dashboard (`/blog/calendar`)
- Visual overview of upcoming posts
- Shows publication status and schedule
- Internal tool for content management

## How It Works

1. **Content Creation**: Blog posts are written in advance and saved to `content/scheduled-posts/`
2. **Scheduling**: Posts are registered in `content/blog-schedule.json` with publication dates
3. **Automatic Publishing**: GitHub Actions runs on schedule and:
   - Checks for posts scheduled for today
   - Moves post files to live blog directory
   - Updates blog listing page
   - Updates sitemap
   - Commits changes to repository
4. **Live Publication**: Changes auto-deploy to Vercel, making posts live

## Adding New Scheduled Posts

### Step 1: Write the Blog Post

Create a new file in `content/scheduled-posts/` using this template:

```typescript
import { Metadata } from 'next';
import BlogPostTemplate from '@/components/templates/BlogPostTemplate';

export const metadata: Metadata = {
  title: '[Title] | Life Money',
  description: '[Description]',
  keywords: '[keywords]',
};

const relatedPosts = [
  // Add 2-3 related posts
];

const BlogContent = () => (
  <>
    {/* Blog content here - follow BLOG-WRITING-GUIDE.md */}
  </>
);

export default function BlogPostPage() {
  return (
    <BlogPostTemplate
      title="[Title]"
      subtitle="[Subtitle]"
      author="[Author Name]"
      authorTitle="[Author Title]"
      date="[YYYY-MM-DD]"
      readTime="[X min]"
      category="[Category]"
      categorySlug="[category-slug]"
      content={<BlogContent />}
      relatedPosts={relatedPosts}
    />
  );
}
```

### Step 2: Add to Schedule

Update `content/blog-schedule.json`:

```json
{
  "date": "2025-MM-DD",
  "slug": "your-post-slug",
  "title": "Your Post Title",
  "category": "Category Name",
  "author": "Author Name",
  "status": "pending"
}
```

### Step 3: Test Locally

```bash
# Test the publishing script
node scripts/publish-blog.js

# Check the calendar dashboard
npm run dev
# Visit http://localhost:3000/blog/calendar
```

## Manual Publishing

If you need to publish a post immediately:

### Option 1: GitHub Actions Manual Trigger
1. Go to GitHub repository
2. Navigate to Actions tab
3. Select "Publish Scheduled Blog Posts"
4. Click "Run workflow"

### Option 2: Local Publishing
```bash
# Run the publisher script locally
node scripts/publish-blog.js

# Commit and push changes
git add .
git commit -m "Manual blog publish: [post title]"
git push
```

## Content Categories

Posts are organized into four main categories:

1. **Divorce Planning** (divorce-planning)
   - Author: Michael Chen or Sarah Mitchell
   - Focus: Separation, asset division, support payments

2. **Inheritance Planning** (inheritance-planning)
   - Author: Sarah Mitchell or Jennifer Park
   - Focus: Estate planning, probate, tax strategies

3. **Business Sale** (business-sale)
   - Author: Jennifer Park
   - Focus: Exit planning, valuations, tax optimization

4. **Severance Planning** (severance-planning)
   - Author: David Kumar
   - Focus: Job loss, severance negotiation, career transition

## Publishing Schedule

### Regular Schedule
- **Monday**: Primary content day
- **Wednesday**: Mid-week update
- **Friday**: Week-end planning content

### Holiday Adjustments
Posts are not published on major holidays:
- Christmas Eve/Day
- Boxing Day
- New Year's Eve/Day

## Monitoring & Maintenance

### Check Publishing Status
```bash
# View recent GitHub Actions runs
gh run list --workflow=publish-blog.yml

# Check calendar dashboard
open https://lifemoney.ca/blog/calendar
```

### Common Issues & Solutions

**Post didn't publish:**
1. Check if post file exists in `content/scheduled-posts/`
2. Verify date in schedule matches today
3. Check GitHub Actions logs for errors
4. Ensure post status is "pending" not "published"

**Wrong date published:**
- Check timezone settings (should be America/Toronto)
- Verify cron schedule in workflow file

**Build errors after publish:**
- Check post syntax and imports
- Ensure all required fields are present
- Validate TypeScript compilation

## SEO Considerations

### Benefits of Automated Publishing
- Consistent publishing schedule signals active site to Google
- Fresh content improves crawl frequency
- Gradual content release vs bulk uploads
- Regular updates boost domain authority

### Best Practices
1. Maintain consistent publishing times
2. Keep content relevant to current events/seasons
3. Update old posts periodically
4. Monitor search console for indexing

## Backup & Recovery

### Backup Schedule
The `content/blog-schedule.json` should be backed up regularly:
```bash
cp content/blog-schedule.json content/blog-schedule.backup.json
```

### Recovery Process
If posts are lost or publishing fails:
1. Check git history for lost files
2. Restore from backup schedule
3. Manually publish missed posts
4. Update schedule status

## Future Enhancements

Potential improvements to consider:
- Email notifications on publish
- Slack integration for status updates
- Analytics tracking per post
- A/B testing publication times
- Social media auto-posting
- Content performance dashboard

## Support

For issues or questions:
1. Check this documentation
2. Review GitHub Actions logs
3. Check the content calendar dashboard
4. Contact technical team if needed

---

**Last Updated**: August 19, 2025
**Version**: 1.0.0