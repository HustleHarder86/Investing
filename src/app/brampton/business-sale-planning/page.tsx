import { Metadata } from 'next';
import LocationServiceTemplate from '@/components/templates/LocationServiceTemplate';

export const metadata: Metadata = {
  title: 'Business Sale Planning Brampton | M&A Advisors | ProsperBridge',
  description: 'Strategic business sale planning for Brampton entrepreneurs. Maximize value for trucking, logistics, and manufacturing businesses. Expert M&A advisory.',
  keywords: 'business sale planning Brampton, selling business Brampton, M&A advisor Peel',
};

const bramptonData = {
  name: 'Brampton',
  slug: 'brampton',
  population: '656,000',
  region: 'Peel Region',
  landmarks: [
    'CN Intermodal Terminal',
    'Toronto Pearson Airport (nearby)',
    'Brampton Business Centre',
    'Highway 407 ETR Corridor',
    'Queen Street Business District'
  ],
  neighborhoods: [
    'Airport Road Business Corridor',
    'Steeles Industrial Area',
    'Bramalea Business Park',
    'Highway 410 Corridor',
    'Queen Street East',
    'Kennedy Road Business District',
    'Goreway Drive Industrial',
    'Torbram Road Commercial',
    'Dixie Road Business Park',
    'Heritage Heights'
  ],
  description: 'Brampton\'s thriving logistics, trucking, and manufacturing sectors create unique opportunities for business sales, with many family-owned enterprises seeking succession planning.'
};

const businessServiceData = {
  name: 'Business Sale Planning',
  slug: 'business-sale-planning',
  icon: '🏢',
  primaryColor: 'from-blue-600',
  secondaryColor: 'to-indigo-600',
  description: 'Expert guidance for Brampton\'s trucking, logistics, and manufacturing business sales.',
  benefits: [
    'Trucking company valuations',
    'Logistics business expertise',
    'Manufacturing sale strategies',
    'Family business succession',
    'Capital gains optimization ($1,016,836)',
    'Share vs. asset sales',
    'Earnout structuring',
    'Cross-border transactions'
  ]
};

const statsData = {
  clientsServed: '300+',
  yearsExperience: '15+',
  successRate: '97%',
  avgSavings: '$285K'
};

export default function BramptonBusinessSalePlanningPage() {
  return (
    <LocationServiceTemplate 
      city={bramptonData}
      service={businessServiceData}
      stats={statsData}
    />
  );
}