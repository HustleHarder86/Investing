# Location Pages Guide

## Overview
This guide documents the structure and patterns used for Life Money location pages to ensure consistency when adding new cities or services in the future.

## Directory Structure

```
src/app/
├── [city-slug]/
│   ├── divorce-financial-planning/
│   │   └── page.tsx
│   ├── inheritance-financial-planning/
│   │   └── page.tsx
│   ├── business-sale-planning/
│   │   └── page.tsx
│   └── severance-job-loss-planning/
│       └── page.tsx
```

### Naming Conventions
- **City slugs**: Use lowercase with hyphens for multi-word cities (e.g., `richmond-hill`, `halton-hills`)
- **Service slugs**: Always use these exact service slugs:
  - `divorce-financial-planning`
  - `inheritance-financial-planning`
  - `business-sale-planning`
  - `severance-job-loss-planning`

## Page Template Structure

All location pages use the `LocationServiceTemplate` component. Here's the required structure:

```typescript
import { Metadata } from 'next';
import LocationServiceTemplate from '@/components/templates/LocationServiceTemplate';

// 1. Metadata - SEO optimized for city + service
export const metadata: Metadata = {
  title: '[Service] [City] | [Industry Focus] | Life Money',
  description: '[60-160 chars describing service for city residents with local focus]',
  keywords: '[service keywords] [city], [local industry keywords], [region keywords]',
};

// 2. City Data - Local information
const [cityName]Data = {
  name: 'City Name',
  slug: 'city-slug',
  population: 'XXX,XXX',
  region: 'Region Name', // e.g., 'York Region', 'Durham Region'
  landmarks: [
    // 5 notable local landmarks/institutions
  ],
  neighborhoods: [
    // 10 local neighborhoods/areas
  ],
  description: 'City-specific context explaining unique challenges/demographics'
};

// 3. Service Data - Localized service benefits
const [service]ServiceData = {
  name: 'Service Full Name',
  slug: 'service-slug',
  icon: '🔣', // Use consistent emoji per service
  primaryColor: 'from-color-600',
  secondaryColor: 'to-color-600',
  description: 'One-line service description with local focus',
  benefits: [
    // 8 benefits specific to local industries/demographics
  ]
};

// 4. Stats Data - Adjust based on city size/demographics
const statsData = {
  clientsServed: 'XXX+',
  yearsExperience: '15+',
  successRate: 'XX%',
  avgSavings: '$XXK'
};

// 5. Page Component
export default function [CityName][ServiceName]Page() {
  return (
    <LocationServiceTemplate 
      city={[cityName]Data}
      service={[service]ServiceData}
      stats={statsData}
    />
  );
}
```

## Service-Specific Guidelines

### 1. Divorce Financial Planning
- **Icon**: 💔
- **Colors**: from-purple-600 to-pink-600
- **Focus**: Local property markets, industry-specific income, family demographics
- **Keywords**: CFP®, separation advisor, divorce financial planning

### 2. Inheritance Financial Planning
- **Icon**: 🏛️
- **Colors**: from-green-600 to-teal-600
- **Focus**: Estate planning, wealth preservation, local property values
- **Keywords**: estate planning, inheritance tax, wealth transfer

### 3. Business Sale Planning
- **Icon**: 🏢
- **Colors**: from-blue-600 to-indigo-600
- **Focus**: Local business types, M&A opportunities, industry specializations
- **Keywords**: business sale, M&A advisory, company valuation

### 4. Severance & Job Loss Planning
- **Icon**: 💼
- **Colors**: from-orange-600 to-red-600
- **Focus**: Major employers, industry-specific layoffs, union considerations
- **Keywords**: severance package, job loss planning, career transition

## Localization Best Practices

### 1. Research Local Context
Before creating pages for a new city, research:
- Major employers and industries
- Demographics (age, income, family structure)
- Notable landmarks and neighborhoods
- Economic characteristics (growth, decline, transformation)
- Unique challenges (e.g., nuclear industry, automotive sector)

### 2. Industry-Specific Content
Tailor benefits to local industries:
- **Nuclear workers**: OPG pensions, shift premiums, radiation benefits
- **Automotive**: GM/Unifor benefits, COLA adjustments
- **Tech sector**: Stock options, RSUs, startup equity
- **Construction**: Seasonal work, union benefits, equipment assets
- **Healthcare**: HOOPP pensions, shift work, professional practices

### 3. Demographics Targeting
Adjust tone and focus based on city demographics:
- **Affluent areas**: High net worth language, complex assets, tax optimization
- **Working class**: Union benefits, pension protection, job security
- **Young families**: Daycare costs, new mortgages, growth planning
- **Retirees**: Estate planning, pension maximization, wealth preservation

### 4. Stats Guidelines
Adjust stats based on city characteristics:
- **Clients Served**: 
  - Major cities (Toronto, Mississauga): 500+
  - Large cities (Hamilton, Brampton): 400+
  - Medium cities (Burlington, Oakville): 300+
  - Smaller cities (Aurora, King): 100-200+
  
- **Success Rate**: 
  - Standard: 96-97%
  - Premium markets: 98-99%
  - Specialized services: 95%

- **Average Savings**:
  - Ultra-wealthy areas: $150K-$400K
  - Affluent areas: $75K-$150K
  - Middle-income areas: $35K-$75K
  - Adjust based on service type and local wealth levels

## Adding a New City

### Step 1: Create Directory Structure
```bash
mkdir -p src/app/[new-city-slug]/divorce-financial-planning
mkdir -p src/app/[new-city-slug]/inheritance-financial-planning
mkdir -p src/app/[new-city-slug]/business-sale-planning
mkdir -p src/app/[new-city-slug]/severance-job-loss-planning
```

### Step 2: Create Four Service Pages
Use the template structure above for each service, ensuring:
- Unique local content for each page
- Consistent service icons and colors
- Appropriate stats for city size/demographics
- Industry-specific benefits

### Step 3: Update Infrastructure

#### A. Update Sitemap.xml
Add entries for all four services in alphabetical order by city:
```xml
<!-- [City Name] Location Pages -->
<url>
  <loc>https://lifemoney.ca/[city-slug]/divorce-financial-planning</loc>
  <lastmod>2025-08-19</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
<!-- Repeat for all 4 services -->
```

#### B. Update Locations Hub Page
Add city to appropriate region in `/src/app/locations/page.tsx`:
```typescript
{
  name: 'City Name',
  slug: 'city-slug',
  population: 'XXK',
  specialty: 'Key industry & demographic focus'
}
```

### Step 4: Test All Pages
1. Navigate to each new page
2. Verify template renders correctly
3. Check all links work
4. Ensure consistent styling
5. Test mobile responsiveness

## Quality Checklist

Before deploying new location pages, ensure:

- [ ] All 4 service pages created for the city
- [ ] Unique, localized content (no generic copy)
- [ ] Industry-specific benefits included
- [ ] Local landmarks and neighborhoods accurate
- [ ] Population data current
- [ ] SEO metadata optimized
- [ ] Sitemap.xml updated
- [ ] Locations hub page updated
- [ ] All pages tested and working
- [ ] Mobile responsive
- [ ] No spelling/grammar errors
- [ ] Stats appropriate for city size/wealth

## Common Patterns by Region

### York Region
- Focus on affluence, professional services
- Emphasize commuter considerations
- Highlight private schools, golf clubs

### Durham Region  
- Nuclear industry (Ajax, Pickering)
- Automotive sector (Oshawa)
- Growing suburban families (Whitby)

### Halton Region
- Waterfront luxury (Oakville)
- Rapid growth (Milton)
- Established wealth (Burlington)

### Peel Region
- Logistics/transportation (Brampton)
- Corporate headquarters (Mississauga)
- Aggregate/rural (Caledon)

## Notes for Future Expansion

### Potential New Cities to Add
1. **Scarborough** - Could be separate from Toronto
2. **North York** - Could be separate from Toronto  
3. **Etobicoke** - Could be separate from Toronto
4. **Stouffville** - Growing York Region community
5. **Bradford** - Simcoe County border town
6. **Innisfil** - Growing Lake Simcoe community

### Potential New Services to Add
If adding new services, maintain pattern:
1. Create new service pages in each city directory
2. Use consistent slug format (e.g., `retirement-financial-planning`)
3. Add to all cities simultaneously for consistency
4. Update sitemap and navigation

## Support

For questions about location page structure or adding new cities, refer to:
- This guide: `/docs/LOCATION-PAGES-GUIDE.md`
- Template component: `/src/components/templates/LocationServiceTemplate.tsx`
- Example city: `/src/app/toronto/` (reference implementation)
- Locations hub: `/src/app/locations/page.tsx`