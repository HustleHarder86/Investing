import { Metadata } from 'next';
import LocationServiceTemplate from '@/components/templates/LocationServiceTemplate';

export const metadata: Metadata = {
  title: 'Business Sale Planning Toronto | M&A Financial Advisors | Life Money',
  description: "Strategic business sale planning for Toronto entrepreneurs. Maximize value, minimize taxes with capital gains exemption. Expert M&A advisory in the GTA.",
  keywords: 'business sale planning Toronto, selling business Toronto, capital gains exemption Toronto, M&A advisor Toronto, business valuation Toronto',
  openGraph: {
    title: 'Business Sale Planning Toronto | Life Money',
    description: "Maximize your business sale value in Toronto. Tax optimization and exit strategy experts.",
    type: 'website',
  }
};

const torontoData = {
  name: 'Toronto',
  slug: 'toronto',
  population: '2.9 million',
  region: 'Greater Toronto Area',
  landmarks: [
    'Financial District - Bay Street',
    'Toronto Stock Exchange',
    'MaRS Discovery District',
    'King West Tech Hub',
    'Liberty Village'
  ],
  neighborhoods: [
    'Financial District',
    'King West',
    'Liberty Village',
    'Yorkville',
    'North York Centre',
    'Scarborough Business District',
    'Etobicoke Corporate Centre',
    'Downtown Core',
    'The Junction',
    'Leslieville'
  ],
  description: "As Canada's business capital, Toronto offers unique opportunities and challenges for business sales, with active M&A markets and sophisticated buyers."
};

const businessServiceData = {
  name: 'Business Sale Planning',
  slug: 'business-sale-planning',
  icon: '🏢',
  primaryColor: 'from-blue-600',
  secondaryColor: 'to-indigo-600',
  description: "Strategic planning to maximize your business value and minimize taxes on sale.",
  benefits: [
    'Business valuation and value enhancement',
    'Lifetime capital gains exemption optimization ($1,016,836)',
    'Share vs. asset sale structuring',
    'Due diligence preparation and support',
    'Tax-efficient deal structuring',
    'Earnout and vendor financing strategies',
    'Family business succession planning',
    'Post-sale wealth management'
  ]
};

const statsData = {
  clientsServed: '400+',
  yearsExperience: '15+',
  successRate: '95%',
  avgSavings: '$275K'
};

export default function TorontoBusinessSalePlanningPage() {
  return (
    <LocationServiceTemplate 
      city={torontoData}
      service={businessServiceData}
      stats={statsData}
    />
  );
}