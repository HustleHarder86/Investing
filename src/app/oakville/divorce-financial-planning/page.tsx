import { Metadata } from 'next';
import LocationServiceTemplate from '@/components/templates/LocationServiceTemplate';

export const metadata: Metadata = {
  title: 'Divorce Financial Planning Oakville | Ultra High Net Worth CFP® | ProsperBridge',
  description: "Expert divorce financial planning for Oakville's ultra-wealthy families. Specialized in executive compensation, private equity, and waterfront estates.",
  keywords: 'divorce financial planning Oakville, high net worth divorce Halton, luxury estate division',
};

const oakvilleData = {
  name: 'Oakville',
  slug: 'oakville',
  population: '213,000',
  region: 'Halton Region',
  landmarks: [
    'Oakville Harbour',
    'Glen Abbey Golf Club',
    'Bronte Creek Provincial Park',
    'Oakville Centre for the Arts',
    'Sheridan College'
  ],
  neighborhoods: [
    'Old Oakville',
    'Bronte',
    'Glen Abbey',
    'Morrison',
    'Eastlake',
    'West Oak Trails',
    'River Oaks',
    'Clearview',
    'College Park',
    'Joshua Creek'
  ],
  description: "Oakville's ultra-high net worth families and C-suite executives face complex divorces involving waterfront estates, private company holdings, and sophisticated compensation packages requiring elite financial expertise."
};

const divorceServiceData = {
  name: 'Divorce Financial Planning',
  slug: 'divorce-financial-planning',
  icon: '💔',
  primaryColor: 'from-purple-600',
  secondaryColor: 'to-pink-600',
  description: "Navigate ultra-high net worth divorce with expertise in executive assets and luxury estates.",
  benefits: [
    'Waterfront estate valuations',
    'Executive compensation analysis',
    'Private equity holdings',
    'Stock option portfolios',
    'Yacht and aircraft division',
    'Private school agreements',
    'Country club memberships',
    'International property division'
  ]
};

const statsData = {
  clientsServed: '180+',
  yearsExperience: '15+',
  successRate: '99%',
  avgSavings: '$125K'
};

export default function OakvilleDivorceFinancialPlanningPage() {
  return (
    <LocationServiceTemplate 
      city={oakvilleData}
      service={divorceServiceData}
      stats={statsData}
    />
  );
}