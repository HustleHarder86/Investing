# Changelog

All notable changes to Life Money Financial Advisory will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased] - Local Development
### Added
- Changelog and Plans tracking system for better project management
- About Us page with team story and values
- Contact page with comprehensive consultation form
- Calculators page with retirement, severance, mortgage, and estate planning tools
- Updated navigation to include calculators link
- Enhanced messaging to communicate comprehensive financial planning capabilities
- Updated contact form with broader service options (retirement, investments, etc.)
- Added "Beyond Our Specializations" section to contact page
- Added prominent "Any Financial Situation, We Can Help" section to homepage with 8 visual service cards
- Removed emojis and updated comprehensive services section to match clean professional design
- Updated experience from "15+ years per advisor" to "45+ years of combined experience"
- Google Analytics tracking implementation (G-F33JR25KTN)
- Google Search Console setup and verification for lifemoney.ca
- Google Business Profile creation with 21 GTA service locations
- Domain setup completed for lifemoney.ca
- MCP servers installed for Google Analytics and Search Console integration

### Changed
- Complete rebranding from ProsperBridge to Life Money
- Updated all domain references from prosperbridge.ca to lifemoney.ca
- Corrected brand name from Money in Motion to Life Money (108 files updated)
- Updated all 103+ pages with new brand identity
- Updated SEO metadata, structured data, and sitemap
- Updated all service pages, location pages, and blog content

### Working On (Local Changes)
- **SEO Audit & Optimization (2025-08-26)**
  - Fixed duplicate sitemap entry for RRSP vs TFSA blog post
  - Enhanced LocalSchema component with comprehensive Organization schema
  - Added logo, contact info, social media links, and service areas to schema markup
  - Updated homepage meta descriptions with CFP® certification emphasis
  - Added "FREE consultation" CTAs and location-specific content (Toronto, Mississauga, GTA)
  - Enhanced meta descriptions for all 4 main service pages with urgency language
  - Created FAQSchema component for structured data markup
  - Added FAQ structured data to all main service pages (24 FAQs total)
  - Implemented dual optimization for traditional search engines and LLMs
  - Files modified: layout.tsx, LocalSchema.tsx, FAQSchema.tsx, sitemap.xml, 4 service page files
- **Location Pages Enhancement (2025-08-26)**
  - Created BreadcrumbSchema component for structured navigation data
  - Enhanced LocationServiceTemplate with comprehensive demographic data
  - Added city demographics: median age, income, home ownership, average home price
  - Added local economic profiles and market insights for each city
  - Added neighborhood and landmark-specific content sections
  - Added case study section with success metrics
  - Enhanced Toronto city data as test case with full demographic profile
  - Added fallback system for cities without complete demographic data
  - Implemented breadcrumb structured data for all 84 location pages
  - Enhanced local SEO targeting with city-specific financial challenges
  - Files modified: LocationServiceTemplate.tsx, BreadcrumbSchema.tsx, cities.ts, toronto/divorce-financial-planning/page.tsx
- **Dynamic Testimonials System (2025-08-26)**
  - Created varied testimonial system with 16 unique testimonials across 4 services
  - Added service-specific testimonials for divorce, inheritance, business sale, severance planning
  - Implemented city-specific testimonial selection using deterministic algorithm
  - Added diverse client names and professional titles for authenticity
  - Testimonials now vary by location (Toronto shows different testimonial than Mississauga)
  - Enhanced credibility with realistic client profiles and success stories
  - Files modified: LocationServiceTemplate.tsx

### Staged Changes
- *List staged changes before pushing to GitHub*

### Fixed
- Mobile services dropdown functionality in navigation bar
- Enhanced touch event handling with preventDefault/stopPropagation
- Improved dropdown animation using max-height transition
- Added active states and touch-manipulation for better mobile UX
- Added accessibility attributes (aria-expanded, aria-controls)
- Fixed layout issues with flex-shrink-0 and min-w-0 classes
- Git Commit: e080075

## [1.0.0] - 2025-08-25
### Added
- Complete Life Money Financial Advisory website
- Next.js 14 with App Router and TypeScript
- 103 total pages including location-specific service pages
- Automated blog publishing system with GitHub Actions
- 21 GTA municipalities coverage across 4 financial planning specialties
- Firebase contact form integration
- Comprehensive SEO implementation with local targeting
- LocationServiceTemplate for dynamic city-service pages
- Blog automation system with scheduled publishing
- Content calendar and validation tools

### Infrastructure
- Vercel deployment with auto-deploy from main branch
- GitHub Actions workflow for automated blog publishing (Mon/Wed/Fri 9 AM EST)
- TypeScript and ESLint configuration
- Tailwind CSS styling system

### SEO Features
- XML sitemap with all 103 pages
- Schema markup for local business and financial services
- City-specific content with local keywords and landmarks
- Mobile-first responsive design

### Blog System
- 15+ published blog posts
- Content scheduling and validation system
- Preview system for content review
- Automated file organization and status tracking

---

## Local Development Status

### Current Working Directory State
- **Modified Files**: Check with `git status`
- **Unstaged Changes**: Use `git diff` to see modifications
- **Staged Changes**: Use `git diff --cached` to see staged modifications
- **Local Branches**: Track feature branches and experiments
- **Work in Progress**: Document incomplete features or debugging sessions

### Development Workflow Tracking
1. **Local Changes**: Document modifications before staging
2. **Staged Changes**: List what's ready for commit
3. **Committed Changes**: Track commits before pushing
4. **Pushed Changes**: Update version history when deployed

---

## Version History Format

### Version Numbering
- **Major.Minor.Patch** (e.g., 1.0.0)
- **Major**: Breaking changes or significant feature additions
- **Minor**: New features, backward compatible
- **Patch**: Bug fixes, small improvements

### Change Categories
- **Added**: New features
- **Changed**: Changes in existing functionality
- **Deprecated**: Soon-to-be removed features
- **Removed**: Now removed features
- **Fixed**: Bug fixes
- **Security**: Vulnerability fixes
- **Infrastructure**: Development/deployment changes
- **Working On**: Local development in progress
- **Staged**: Changes ready for commit

### Rollback Information
Each version entry includes:
- Date of deployment
- Key changes summary
- Files modified (for critical changes)
- Rollback instructions (if needed)
- Local state backup information

---

## Current Environment Status
- **Production**: https://investing-eight.vercel.app
- **Target Domain**: prosperbridge.ca (pending setup)
- **Last Deployment**: 2025-08-25
- **Git Commit**: 12a41cb
- **Local Status**: Check git status for current working directory state

### Quick Commands for Status Tracking
```bash
# Check current status
git status
git diff                    # Unstaged changes
git diff --cached          # Staged changes
git log --oneline -10      # Recent commits

# Rollback options
git stash                  # Save local changes
git reset --hard HEAD     # Discard all local changes
git reset --hard <commit>  # Rollback to specific commit
git push --force-with-lease origin main  # Force push (use carefully)

# Local backup before major changes
git stash push -m "backup before major changes"
```