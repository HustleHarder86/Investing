# Blog Writing Guide for Life Money

## Quick Reference Template

When creating a new blog post, follow this exact structure to maintain consistency across all articles.

## File Structure

```
src/app/blog/[blog-slug]/page.tsx
```

Example: `src/app/blog/rrsp-contribution-strategies-2025/page.tsx`

## Complete Blog Post Template

```typescript
import { Metadata } from 'next';
import BlogPostTemplateEnhanced from '@/components/templates/BlogPostTemplateEnhanced';
import QuickAnswer from '@/components/seo/QuickAnswer';
import FAQSection from '@/components/seo/FAQSection';
import KeyTakeaways from '@/components/seo/KeyTakeaways';
import RelatedQuestions from '@/components/seo/RelatedQuestions';

// 1. SEO METADATA (Required)
export const metadata: Metadata = {
  title: '[Title] | Life Money',  // 60 chars max
  description: '[Description with keywords]',  // 155-160 chars
  keywords: '[primary keyword], [secondary keywords], [location keywords]',
};

// 2. RELATED POSTS (2-3 posts)
const relatedPosts = [
  {
    title: 'Related Article Title',
    slug: 'article-slug',
    excerpt: 'Brief description of the article.',
    readTime: 'X min'
  },
  // Add 2-3 related posts
];

// 3. SEO DATA (Required for AI/Search optimization)
const blogFAQs = [
  {
    question: "What is the best approach to [topic] in Toronto?",
    answer: "The best approach involves working with a qualified financial advisor who understands the Greater Toronto Area market and can provide personalized strategies based on your unique situation."
  },
  {
    question: "How much does [service] cost in the GTA?",
    answer: "Costs vary based on complexity and scope, but most financial planning services in the GTA range from consultation fees to percentage-based asset management."
  },
  {
    question: "When should I start [planning type]?",
    answer: "The best time to start is now. Early planning provides more options and better outcomes."
  }
];

const keyTakeaways = [
  "Key insight or statistic from the article",
  "Important action item for readers",
  "Common mistake to avoid",
  "Time-sensitive consideration",
  "Local GTA-specific insight"
];

const relatedQuestions = [
  "Where can I find [service] in Toronto?",
  "What documents do I need for [process] in Ontario?",
  "How much does [service] cost in the GTA?",
  "Are there free [service] resources in Toronto?",
  "What are common [topic] mistakes to avoid?"
];

const quickAnswer = "Brief 150-200 character answer to the main question posed by the article title. This appears in search results.";

// 4. BLOG CONTENT COMPONENT
const BlogContent = () => (
  <>
    {/* OPENING PARAGRAPH - Hook the reader */}
    <p className="lead text-xl text-gray-700 mb-8">
      Strong opening that establishes the problem/topic and why it matters NOW.
      Reference current year (2025), recent changes, or trending issues.
      Include GTA/Toronto/Ontario location references.
    </p>

    {/* MAIN SECTIONS - Use H2 headers */}
    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
      Main Section Title
    </h2>
    
    <p className="mb-6">
      Section content...
    </p>

    {/* COLORED CALLOUT BOXES - Use throughout for emphasis */}
    <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
      <h3 className="font-bold text-gray-900 mb-3">🔑 Key Point Title</h3>
      <p className="text-gray-700">
        Important information or tips
      </p>
    </div>

    {/* SUB-SECTIONS - Use H3 headers */}
    <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
      Subsection Title
    </h3>

    {/* LISTS - Bullet or numbered */}
    <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
      <li>Point one with detail</li>
      <li>Point two with detail</li>
    </ul>

    {/* EXAMPLE/CASE STUDY BOX */}
    <div className="bg-gray-50 p-6 rounded-lg mb-8">
      <h4 className="font-bold text-gray-900 mb-3">Example: Real Scenario</h4>
      <ul className="space-y-2 text-gray-700">
        <li><strong>Situation:</strong> Details</li>
        <li><strong>Challenge:</strong> Details</li>
        <li><strong>Solution:</strong> Details</li>
        <li><strong>Result:</strong> Details</li>
      </ul>
    </div>

    {/* CONCLUSION */}
    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
      Conclusion: [Action-Oriented Title]
    </h2>

    <p className="mb-6">
      Summarize key points and inspire action.
    </p>

    {/* FINAL CTA BOX */}
    <div className="bg-green-50 border-l-4 border-green-600 p-6 mb-8">
      <h3 className="font-bold text-gray-900 mb-3">💬 Ready to Take Action?</h3>
      <p className="text-gray-700 mb-4">
        Personalized CTA message related to the blog topic.
      </p>
      <p className="text-gray-700">
        <strong>Call 1-800-PROSPER</strong> to [specific action].
      </p>
    </div>
  </>
);

// 5. EXPORT DEFAULT FUNCTION
export default function [BlogSlug]Page() {
  return (
    <BlogPostTemplateEnhanced
      title="Full Blog Title"
      subtitle="Compelling subtitle that expands on the title"
      author="Author Name"
      authorTitle="CFP®, Specialist Title"
      date="2025-08-XX"
      readTime="X min"
      category="Category Name"
      categorySlug="category-slug"
      relatedPosts={relatedPosts}
      quickAnswer={quickAnswer}
      keyTakeaways={keyTakeaways}
      faqs={blogFAQs}
      relatedQuestions={relatedQuestions}
    >
      <BlogContent />
    </BlogPostTemplateEnhanced>
  );
}
```

## Content Guidelines

### 1. Length Requirements
- **Minimum**: 1,500 words
- **Optimal**: 2,000-2,500 words
- **Maximum**: 3,000 words

### 2. SEO Structure
- **Title**: Include primary keyword, location (GTA/Toronto/Ontario), current year
- **H2 Headers**: 5-8 main sections
- **H3 Headers**: 2-3 subsections per main section
- **Keywords**: Natural density of 1-2%
- **Internal Links**: 3-5 links to services or other blogs

### 3. SEO Components (Required)

#### Quick Answer
- 150-200 characters answering the main question
- Appears in search results and AI summaries
- Should be concise and actionable

#### FAQs (3-5 questions)
- Common questions about the topic
- Include location-specific questions
- Answers should be 50-150 words
- Use schema.org FAQ markup

#### Key Takeaways (5 items)
- Bullet points of main insights
- Each should be self-contained
- Include statistics when possible
- Focus on actionable items

#### Related Questions (5 items)
- "People Also Ask" style questions
- Include location variations
- Cover adjacent topics
- Help with long-tail SEO

### 4. Content Elements to Include

#### Opening (150-200 words)
- Hook with current statistics or trends
- Establish the problem
- Preview what the article covers
- Include location references (GTA, Toronto, Ontario)

#### Body Sections
Each main section should include:
- Clear H2 header
- 2-3 paragraphs of explanation
- Supporting data/statistics
- Real examples or scenarios
- Bullet points or numbered lists
- At least one colored callout box

#### Callout Box Colors & Usage
```html
<!-- Blue: Key Information -->
<div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">

<!-- Green: Tips/Positive -->
<div className="bg-green-50 border-l-4 border-green-600 p-6 mb-8">

<!-- Yellow: Warnings/Cautions -->
<div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 mb-8">

<!-- Purple: Checklists/Action Items -->
<div className="bg-purple-50 border-l-4 border-purple-600 p-6 mb-8">

<!-- Red: Critical Warnings -->
<div className="bg-red-50 border-l-4 border-red-600 p-6 mb-8">

<!-- Gray: Examples/Case Studies -->
<div className="bg-gray-50 p-6 rounded-lg mb-8">
```

### 5. Writing Style

#### Tone
- Professional but conversational
- Empathetic and understanding
- Action-oriented and solution-focused
- Local and relevant (GTA-specific examples)

#### Voice
- Second person ("you") for direct engagement
- Active voice for clarity
- Present tense for current information
- Avoid jargon without explanation

### 6. Required Components

#### Statistics & Data
- Current year references (2025/2026)
- Local GTA statistics when available
- Industry-specific data
- Source citations where appropriate

#### Examples & Scenarios
- Real-world situations
- Specific dollar amounts
- Named locations (Toronto neighborhoods, etc.)
- Industry-specific examples (tech workers, nuclear industry, etc.)

#### Lists & Breakdowns
- Bullet points for quick scanning
- Numbered lists for processes
- Checklists for action items
- Comparison tables when relevant

### 7. Categories & Tags

#### Main Categories (use exactly as shown)
- **Divorce Planning** (slug: divorce-planning)
- **Inheritance Planning** (slug: inheritance-planning)
- **Business Sale** (slug: business-sale)
- **Severance Planning** (slug: severance-planning)

#### Author Names & Titles
- Sarah Mitchell, CFP®, Estate Planning Specialist
- Michael Chen, CFP®, Divorce Specialist
- David Kumar, CFP®, Career Transition Advisor
- Jennifer Park, CPA, Tax Planning Expert

### 8. Blog Post Ideas & Topics

#### Divorce Planning Topics
- Matrimonial home strategies in hot markets
- Hidden assets in high-net-worth divorces
- Impact of inflation on support payments
- Gray divorce retirement planning
- Business valuation in divorce

#### Inheritance Planning Topics
- Cottage succession planning
- Probate fee minimization strategies
- Trust structures for 2025
- Cross-border estate planning
- Charitable giving strategies

#### Business Sale Topics
- Timing your business exit
- Valuation methods explained
- Tax-efficient sale structures
- Earnout agreement pitfalls
- Succession vs. sale decisions

#### Severance Planning Topics
- Industry-specific severance norms
- Non-compete negotiation
- Benefits continuation strategies
- Career pivot financing
- EI optimization techniques

## Technical Checklist

Before publishing any blog post:

- [ ] File follows naming convention: `kebab-case-slug`
- [ ] Metadata includes title, description, keywords
- [ ] Related posts array has 2-3 relevant articles
- [ ] Quick Answer is 150-200 characters
- [ ] FAQs include 3-5 questions with schema markup
- [ ] Key Takeaways has 5 actionable points
- [ ] Related Questions has 5 "People Also Ask" items
- [ ] Using BlogPostTemplateEnhanced (not old BlogPostTemplate)
- [ ] Content uses BlogContent component structure
- [ ] All className attributes use consistent styling
- [ ] Images have alt text (if used)
- [ ] Internal links use Next.js Link component
- [ ] External links include rel="noopener noreferrer"
- [ ] Date follows YYYY-MM-DD format
- [ ] Read time is accurate (250 words/minute)
- [ ] Category matches one of the four main categories
- [ ] Author info is consistent with other posts
- [ ] Mobile responsive (test all breakpoints)
- [ ] No console errors
- [ ] Build succeeds locally

## Adding a New Blog Post - Step by Step

1. **Create the file**:
   ```bash
   mkdir src/app/blog/your-blog-slug
   touch src/app/blog/your-blog-slug/page.tsx
   ```

2. **Copy the template** from this guide

3. **Write content** following the structure

4. **Update the blog listing** in `/src/app/blog/page.tsx`:
   ```typescript
   const blogPosts = [
     // Add your new post to this array
     {
       slug: 'your-blog-slug',
       title: 'Your Blog Title',
       excerpt: 'Brief excerpt',
       author: 'Author Name',
       authorTitle: 'Title',
       date: '2025-08-XX',
       readTime: 'X min',
       category: 'Category',
       categorySlug: 'category-slug',
       featured: false
     },
     // ... existing posts
   ];
   ```

5. **Update sitemap.xml** in `/public/sitemap.xml`:
   ```xml
   <url>
     <loc>https://lifemoney.ca/blog/your-blog-slug</loc>
     <lastmod>2025-08-XX</lastmod>
     <changefreq>monthly</changefreq>
     <priority>0.8</priority>
   </url>
   ```

6. **Test locally**:
   ```bash
   npm run dev
   # Visit http://localhost:3000/blog/your-blog-slug
   ```

7. **Build and deploy**:
   ```bash
   npm run build
   git add .
   git commit -m "Add blog post: [Title]"
   git push origin main
   ```

## Content Calendar Template

Plan your blog posts with this structure:

```markdown
## Month 2025

### Week 1: [Topic Category]
- **Title**: [Blog Title]
- **Target Keywords**: [Primary, Secondary]
- **Author**: [Name]
- **Tie-in**: [Current event/season/tax deadline]

### Week 2: [Topic Category]
- **Title**: [Blog Title]
- **Target Keywords**: [Primary, Secondary]
- **Author**: [Name]
- **Tie-in**: [Current event/season/tax deadline]
```

## Quality Standards

Every blog post must:
1. Provide genuine value to readers
2. Include actionable advice
3. Reference current laws/regulations
4. Use local GTA examples
5. Maintain professional tone
6. Include clear CTAs
7. Link to relevant services
8. Be thoroughly proofread
9. Pass accessibility standards
10. Load quickly (optimize images)

---

**Last Updated**: September 12, 2025
**Major Update**: Added SEO enhancement components for Google and AI platform optimization
**Next Review**: Monthly

**Note**: This guide ensures all Life Money blog content maintains consistent quality, structure, and branding. Follow it exactly for each new blog post.