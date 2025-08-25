import { Metadata } from 'next';
import LocationServiceTemplate from '@/components/templates/LocationServiceTemplate';

export const metadata: Metadata = {
  title: 'Business Sale Planning Caledon | Aggregate & Trucking M&A | Life Money',
  description: "Strategic business sale planning for Caledon aggregate operations and trucking companies. Expert M&A for quarries, logistics, and rural businesses.",
  keywords: 'business sale Caledon, aggregate business M&A, trucking company sale Bolton',
};

const caledonData = {
  name: 'Caledon',
  slug: 'caledon',
  population: '76,000',
  region: 'Peel Region',
  landmarks: [
    'Bolton Business Park',
    'Coleraine Business Park',
    'Highway 50 Industrial',
    'Airport Road Commerce',
    'Mayfield West Business'
  ],
  neighborhoods: [
    'Bolton Industrial',
    'Coleraine Business Park',
    'Highway 50 Corridor',
    'Airport Road Business',
    'Mayfield West Employment',
    'Tullamore Industrial',
    'Victoria Industrial',
    'Sandhill Business Area',
    'Rural Commercial Zones',
    'Aggregate Operations Areas'
  ],
  description: "Caledon's aggregate industry, trucking companies, and Bolton's growing businesses create unique M&A opportunities in resource extraction, logistics, and rural services."
};

const businessServiceData = {
  name: 'Business Sale Planning',
  slug: 'business-sale-planning',
  icon: '🏢',
  primaryColor: 'from-blue-600',
  secondaryColor: 'to-indigo-600',
  description: "Expert M&A for aggregate operations, trucking companies, and rural businesses.",
  benefits: [
    'Aggregate quarry sales',
    'Trucking company valuations',
    'Logistics business transfers',
    'Heavy equipment operations',
    'Bolton business sales',
    'Rural service companies',
    'Agricultural suppliers',
    'Construction material firms'
  ]
};

const statsData = {
  clientsServed: '170+',
  yearsExperience: '15+',
  successRate: '95%',
  avgSavings: '$265K'
};

export default function CaledonBusinessSalePlanningPage() {
  return (
    <LocationServiceTemplate 
      city={caledonData}
      service={businessServiceData}
      stats={statsData}
    />
  );
}