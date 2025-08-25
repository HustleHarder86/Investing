import { Metadata } from 'next';
import LocationServiceTemplate from '@/components/templates/LocationServiceTemplate';

export const metadata: Metadata = {
  title: 'Inheritance Tax Planning Newmarket | Estate Planning York | Money in Motion',
  description: "Expert estate planning for Newmarket's established families. Protect heritage properties, healthcare professional practices, and multi-generational wealth.",
  keywords: 'inheritance planning Newmarket, estate tax York Region, wealth preservation Newmarket',
};

const newmarketData = {
  name: 'Newmarket',
  slug: 'newmarket',
  population: '88,000',
  region: 'York Region',
  landmarks: [
    'Old Town Hall',
    'Elman W. Campbell Museum',
    'Newmarket Historical Society',
    'Pine Orchard Cemetery',
    'Rogers Reservoir'
  ],
  neighborhoods: [
    'Historic Downtown',
    'Stonehaven',
    'Woodland Hill',
    'Glenway',
    'Summerhill',
    'Bristol-London',
    'Huron Heights',
    'Gorham',
    'Armitage',
    'Madsen'
  ],
  description: "Newmarket's established families often own heritage properties, healthcare practices, and Main Street businesses requiring sophisticated estate planning to preserve wealth and family legacy."
};

const inheritanceServiceData = {
  name: 'Inheritance Financial Planning',
  slug: 'inheritance-financial-planning',
  icon: '🏛️',
  primaryColor: 'from-green-600',
  secondaryColor: 'to-teal-600',
  description: "Sophisticated estate planning for Newmarket's established and professional families.",
  benefits: [
    'Heritage property preservation',
    'Healthcare practice succession',
    'Main Street business transfers',
    'Historic home tax planning',
    'Medical professional estates',
    'Multi-property portfolios',
    'Family farm preservation',
    'Charitable foundation planning'
  ]
};

const statsData = {
  clientsServed: '310+',
  yearsExperience: '15+',
  successRate: '99%',
  avgSavings: '$125K'
};

export default function NewmarketInheritanceFinancialPlanningPage() {
  return (
    <LocationServiceTemplate 
      city={newmarketData}
      service={inheritanceServiceData}
      stats={statsData}
    />
  );
}