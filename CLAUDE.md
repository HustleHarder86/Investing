# Life Money Financial Advisory

## Project Overview
Local SEO financial advisory website maximizing coverage across all GTA municipalities for 4 financial planning specialties. Fully automated blog publishing system with 103 total pages including location-specific service pages.

**Base**: Mississauga | **Service Area**: Entire GTA  
**Status**: Production-ready, deployed to Vercel  
**Live URL**: https://investing-eight.vercel.app  
**Target Domain**: lifemoney.ca (pending setup)

## Tech Stack
- **Framework**: Next.js 14 (App Router) + TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Hosting**: Vercel (auto-deploy from main branch)
- **Forms**: Firebase contact forms
- **Blog**: Automated publishing system with GitHub Actions

## Commands
```bash
# Development
npm run dev                 # Start development server on port 3000
npm run build              # Build for production
npm run start              # Start production server locally
npm run lint               # Run ESLint

# Blog System
npm run blog:publish       # Manually publish scheduled posts
npm run blog:validate      # Validate posts and check missing files
npm run blog:calendar      # Display calendar dashboard link

# Deployment
git push origin main       # Auto-deploys to Vercel
```

## Project Architecture

### Core Data Models
- **21 Cities** (`/src/lib/cities.ts`): Structured city data with tiers, coordinates, demographics
- **4 Services** (`/src/lib/services.ts`): Service definitions with SEO keywords and branding
- **Blog Schedule** (`/content/blog-schedule.json`): Automated publishing calendar

### Page Structure (103 Total Pages)
```
├── Homepage (/)
├── 4 Main Service Pages (/services/[service])
├── 84 Location-Service Pages (/[city]/[service])
├── Locations Hub (/locations)
├── Blog System (/blog)
│   ├── Blog Listing (/blog)
│   ├── 15+ Published Posts (/blog/[slug])
│   ├── Content Calendar (/blog/calendar) [internal]
│   └── Post Preview (/blog/preview/[slug]) [internal]
├── Legal Pages (/privacy-policy, /terms-of-service)
└── Contact API (/api/contact)
```

### Key Components
- **LocationServiceTemplate** (`/src/components/templates/LocationServiceTemplate.tsx`): Reusable template for all 84 location pages
- **BlogPostTemplate** (`/src/components/templates/BlogPostTemplate.tsx`): Standard blog post layout
- **ContactForm** (`/src/components/forms/ContactForm.tsx`): Firebase-integrated contact forms

## Blog Automation System

### Architecture
1. **Content Creation**: Pre-written posts stored in `/content/scheduled-posts/`
2. **Scheduling**: Master schedule in `/content/blog-schedule.json`
3. **Auto-Publishing**: GitHub Actions workflow runs Mon/Wed/Fri at 9 AM EST
4. **Post-Processing**: Updates blog listing, sitemap, and marks posts as published

### Workflow Files
- **Publisher**: `/scripts/publish-blog.js` - Core publishing logic
- **Validator**: `/scripts/validate-posts.js` - Content validation and status checking
- **GitHub Action**: `/.github/workflows/publish-blog.yml` - Automated scheduling
- **Calendar**: `/src/app/blog/calendar/page.tsx` - Content management dashboard

### Blog Schedule Format
```json
{
  "date": "2025-MM-DD",
  "slug": "post-slug",
  "title": "Post Title",
  "category": "Category Name",
  "author": "Author Name",
  "status": "pending|published|completed"
}
```

### Publishing Process
1. **Automated**: GitHub Actions triggers on schedule (Mon/Wed/Fri 9 AM EST)
2. **Manual**: `npm run blog:publish` or GitHub Actions manual trigger
3. **Files**: Moves `.tsx` files from `/content/scheduled-posts/` to `/src/app/blog/[slug]/`
4. **Updates**: Blog listing, sitemap.xml, and schedule status automatically updated

## Content Strategy

### GTA Cities (21 Total)
**Tier 1** (Priority): Toronto, Mississauga, Brampton, Hamilton, Markham  
**Tier 2**: Vaughan, Richmond Hill, Oakville, Burlington, Milton  
**Tier 3**: Ajax, Pickering, Whitby, Oshawa, Newmarket  
**Tier 4**: Aurora, King, Caledon, Halton Hills, Georgina, Uxbridge

### Services (4 Specialties)
1. **Divorce Financial Planning** (divorce-financial-planning)
2. **Inheritance Financial Planning** (inheritance-financial-planning)  
3. **Business Sale Planning** (business-sale-planning)
4. **Severance & Job Loss Planning** (severance-job-loss-planning)

### Blog Categories
- **Divorce Planning**: Michael Chen or Sarah Mitchell
- **Inheritance Planning**: Sarah Mitchell or Jennifer Park
- **Business Sale**: Jennifer Park
- **Severance Planning**: David Kumar

## SEO Implementation

### Local SEO Features
- **Schema Markup**: Local business and financial service structured data on all pages
- **Location Targeting**: City-specific content with local keywords, landmarks, neighborhoods
- **Internal Linking**: Strategic linking between location pages and services
- **Meta Optimization**: Unique titles, descriptions, and keywords for each page

### Technical SEO
- **Sitemap**: Comprehensive XML sitemap with all 103 pages
- **Mobile-First**: Responsive design optimized for mobile search
- **Performance**: Next.js 14 optimizations (RSC, streaming, image optimization)
- **Analytics**: Ready for Google Analytics 4 and Search Console integration

## Location Page Template System

Each of the 84 location pages uses `LocationServiceTemplate` with:
- **Dynamic Content**: City-specific demographics, landmarks, neighborhoods
- **Service Branding**: Color schemes and messaging per service type
- **Local Schema**: Structured data for local search
- **Contact Integration**: Location-aware contact forms
- **SEO Optimization**: Unique meta tags and keywords per page

## Development Guidelines

### File Naming Conventions
- **Cities**: Use slug format (e.g., "richmond-hill", "halton-hills")
- **Services**: Use full slug (e.g., "divorce-financial-planning")
- **Blog Posts**: Use kebab-case slugs matching content schedule

### Code Organization
- **Data Models**: `/src/lib/` - City and service definitions
- **Components**: `/src/components/` - Reusable UI components organized by function
- **Templates**: `/src/components/templates/` - Page-level templates
- **App Router**: `/src/app/` - Next.js 14 app directory structure

### Blog Content Requirements
- **Length**: 1,500-2,500 words minimum
- **SEO Structure**: H2/H3 headers, keyword optimization, local references
- **Visual Elements**: Colored callout boxes, lists, examples
- **CTAs**: Clear calls-to-action with service-specific messaging

## Deployment & Operations

### Production Environment
- **Platform**: Vercel with auto-deployment from GitHub main branch
- **Domain**: Custom domain setup pending (prosperbridge.ca)
- **Performance**: Optimized for Core Web Vitals and mobile-first indexing

### Monitoring & Validation
- **Blog Validation**: `npm run blog:validate` checks for missing posts and errors
- **Content Calendar**: `/blog/calendar` provides visual status dashboard
- **Build Checks**: TypeScript and ESLint validation on every deployment

### Business Launch Checklist
- [ ] Domain setup (lifemoney.ca)
- [ ] Google Business Profile creation
- [ ] Analytics integration (GA4, Search Console)
- [ ] Contact form SMS notifications (Twilio)
- [ ] Sitemap submission to search engines

## Key Implementation Notes

### Firebase Integration
Contact forms POST to `/api/contact/route.ts` which integrates with Firebase for lead management.

### Next.js Configuration
- **Strict Mode**: Enabled for development
- **Build Optimization**: TypeScript and ESLint errors ignored for production builds
- **Image Optimization**: Next.js automatic image optimization enabled

### Blog System Features
- **Timezone Handling**: All dates in America/Toronto timezone
- **Status Tracking**: Pending → Published status flow
- **File Organization**: Separation of scheduled vs. published content
- **Preview System**: Internal preview for content review before publishing

This comprehensive system provides a scalable, SEO-optimized platform for local financial advisory services with automated content marketing capabilities.

## Project Tracking & Change Management

### Tracking Files
- **CHANGELOG.md**: Version history, change tracking, and rollback information
- **PLANS.md**: Project planning, task tracking, and completion status

### Automatic Maintenance Protocol
When making ANY changes to this project, Claude must:

1. **Before Starting Work**:
   - Check current status in PLANS.md
   - Create new plan entry if task is complex (3+ steps)
   - Note rollback point (current git status)

2. **During Development**:
   - Update CHANGELOG.md "Unreleased" section for local changes
   - Update PLANS.md task status as work progresses
   - Track all modified files in both documents

3. **After Completion**:
   - Mark PLANS.md tasks as completed with dates
   - Move CHANGELOG.md items to versioned sections when deployed
   - Include commit hashes and rollback instructions

4. **For Rollbacks/Debugging**:
   - Reference CHANGELOG.md for file modification history
   - Use PLANS.md to identify incomplete work or dependencies
   - Follow documented rollback procedures

### Change Categories for Tracking
- **Local Development**: Working directory changes, experiments, debugging
- **Staged Changes**: Ready for commit but not yet pushed
- **Committed Changes**: Local commits not yet deployed
- **Deployed Changes**: Live on production (Vercel)

### Integration Requirements
- All significant changes must be documented in tracking files
- Plan IDs should be referenced in commit messages when applicable
- Emergency rollback procedures must be followed if issues arise
- Local and remote state must be clearly differentiated

This tracking system ensures complete traceability for debugging, maintains rollback capabilities, and provides clear visibility into project progress and current working state.