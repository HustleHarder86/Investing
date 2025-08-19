# ProsperBridge Financial Planning

A comprehensive financial advisory website serving the Greater Toronto Area with specialized planning for divorce, inheritance, business sales, and severance packages.

## 🚀 Live Site
- Production: [https://investing-eight.vercel.app](https://investing-eight.vercel.app)
- Domain: prosperbridge.ca (pending configuration)

## 📁 Project Structure

```
investing/
├── src/
│   ├── app/                    # Next.js 14 App Router pages
│   │   ├── [city-slug]/        # Location-based pages (21 cities)
│   │   │   ├── divorce-financial-planning/
│   │   │   ├── inheritance-financial-planning/
│   │   │   ├── business-sale-planning/
│   │   │   └── severance-job-loss-planning/
│   │   ├── services/           # Main service pages
│   │   ├── locations/          # Locations hub page
│   │   └── page.tsx           # Homepage
│   ├── components/
│   │   └── templates/
│   │       └── LocationServiceTemplate.tsx  # Reusable location page template
│   └── lib/
│       └── services.ts         # Service definitions and data
├── public/
│   └── sitemap.xml            # SEO sitemap (84 pages)
└── docs/
    ├── DEPLOYMENT-ROADMAP.md   # Deployment strategy
    └── LOCATION-PAGES-GUIDE.md # Guide for adding new locations
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel
- **Font**: Geist (Vercel's font family)

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/HustleHarder86/Investing.git
cd investing

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production
```bash
# Create production build
npm run build

# Test production build locally
npm run start
```

## 📍 Location Pages

The site includes **84 location-specific pages** covering:
- **21 Cities** across the Greater Toronto Area
- **4 Services** per city
- Each page features unique, SEO-optimized content targeting local industries and demographics

### Current Cities
- **Core**: Toronto, Mississauga, Brampton, Hamilton, Markham
- **York Region**: Vaughan, Richmond Hill, Newmarket, Aurora, King, Georgina
- **Halton**: Oakville, Burlington, Milton, Halton Hills
- **Durham**: Oshawa, Whitby, Ajax, Pickering, Uxbridge
- **Peel North**: Caledon

## 📝 Adding New Location Pages

See [LOCATION-PAGES-GUIDE.md](docs/LOCATION-PAGES-GUIDE.md) for detailed instructions on:
- Directory structure and naming conventions
- Template usage and customization
- Localization best practices
- SEO optimization
- Quality checklist

### Quick Start for New City
```bash
# 1. Create directory structure
mkdir -p src/app/[city-slug]/divorce-financial-planning
mkdir -p src/app/[city-slug]/inheritance-financial-planning
mkdir -p src/app/[city-slug]/business-sale-planning
mkdir -p src/app/[city-slug]/severance-job-loss-planning

# 2. Copy and customize template pages
# 3. Update sitemap.xml
# 4. Update locations hub page
```

## 🎨 Component Documentation

### LocationServiceTemplate
The main template component used for all location pages:

```typescript
interface LocationServiceTemplateProps {
  city: {
    name: string;
    slug: string;
    population: string;
    region: string;
    landmarks: string[];
    neighborhoods: string[];
    description: string;
  };
  service: {
    name: string;
    slug: string;
    icon: string;
    primaryColor: string;
    secondaryColor: string;
    description: string;
    benefits: string[];
  };
  stats: {
    clientsServed: string;
    yearsExperience: string;
    successRate: string;
    avgSavings: string;
  };
}
```

## 🔧 Development Commands

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler check

# Deployment
git push origin main # Auto-deploys to Vercel
```

## 📊 SEO & Performance

- **Sitemap**: Comprehensive XML sitemap with all 84 location pages
- **Metadata**: Unique title, description, and keywords for each page
- **Local SEO**: City-specific content targeting local search terms
- **Performance**: Optimized with Next.js 14 features (RSC, streaming, etc.)

## 🚀 Deployment

The site auto-deploys to Vercel on push to the main branch:

1. **GitHub Repository**: HustleHarder86/Investing
2. **Vercel Project**: investing-eight
3. **Production URL**: https://investing-eight.vercel.app

### Environment Variables
No environment variables required for basic operation.

## 📚 Documentation

- [DEPLOYMENT-ROADMAP.md](docs/DEPLOYMENT-ROADMAP.md) - Full deployment strategy and roadmap
- [LOCATION-PAGES-GUIDE.md](docs/LOCATION-PAGES-GUIDE.md) - Guide for adding new location pages

## 🤝 Contributing

When contributing:
1. Follow the existing code structure and patterns
2. Maintain consistent styling with Tailwind CSS
3. Ensure all location pages use the LocationServiceTemplate
4. Update sitemap.xml when adding new pages
5. Test responsive design on mobile and desktop

## 📄 License

Private repository - All rights reserved

## 💬 Support

For questions or issues:
- Repository: [GitHub Issues](https://github.com/HustleHarder86/Investing/issues)
- Deployment: Check Vercel dashboard

---

Built with Next.js 14 and deployed on Vercel