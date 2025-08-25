import { Metadata } from 'next';
import LocationServiceTemplate from '@/components/templates/LocationServiceTemplate';

export const metadata: Metadata = {
  title: 'Inheritance Tax Planning Oakville | Ultra Wealthy Estate Planning | Money in Motion',
  description: "Expert estate planning for Oakville's wealthiest families. Minimize taxes on multi-million dollar estates, private companies, and waterfront properties.",
  keywords: 'inheritance tax planning Oakville, ultra high net worth estate, wealth preservation Halton',
};

const oakvilleData = {
  name: 'Oakville',
  slug: 'oakville',
  population: '213,000',
  region: 'Halton Region',
  landmarks: [
    'Oakville Trafalgar Hospital',
    'Oakville Harbour',
    'Gairloch Gardens',
    'Coronation Park',
    'Ford Motor Company Canadian HQ'
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
  description: "Oakville's ultra-wealthy families require sophisticated estate planning for waterfront properties, private company holdings, and multi-generational wealth preservation strategies exceeding typical estate thresholds."
};

const inheritanceServiceData = {
  name: 'Inheritance Financial Planning',
  slug: 'inheritance-financial-planning',
  icon: '🏛️',
  primaryColor: 'from-green-600',
  secondaryColor: 'to-teal-600',
  description: "Elite estate planning for Oakville's wealthiest families and waterfront estates.",
  benefits: [
    'Ultra-high net worth strategies',
    'Waterfront property planning',
    'Private company succession',
    'Family office coordination',
    'Multiple estate properties',
    'Art and collectibles planning',
    'Yacht and aircraft transfers',
    'Philanthropic legacy planning'
  ]
};

const statsData = {
  clientsServed: '210+',
  yearsExperience: '15+',
  successRate: '99%',
  avgSavings: '$385K'
};

export default function OakvilleInheritanceFinancialPlanningPage() {
  return (
    <LocationServiceTemplate 
      city={oakvilleData}
      service={inheritanceServiceData}
      stats={statsData}
    />
  );
}