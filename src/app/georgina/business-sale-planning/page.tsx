import { Metadata } from 'next';
import LocationServiceTemplate from '@/components/templates/LocationServiceTemplate';

export const metadata: Metadata = {
  title: 'Business Sale Planning Georgina | Marina & Tourism M&A | Life Money',
  description: "Strategic business sale planning for Georgina marina operations and tourism businesses. Expert M&A for Lake Simcoe enterprises and local services.",
  keywords: 'business sale Georgina, marina business M&A, tourism business Lake Simcoe',
};

const georginaData = {
  name: 'Georgina',
  slug: 'georgina',
  population: '47,000',
  region: 'York Region',
  landmarks: [
    'Keswick Business Park',
    'Sutton Business District',
    "Jackson's Point Marina",
    'Woodbine Avenue Commerce',
    'Highway 48 Business Corridor'
  ],
  neighborhoods: [
    'Keswick Business District',
    'Sutton Downtown',
    "Jackson's Point Commercial",
    'Pefferlaw Business Area',
    'Woodbine Commerce',
    'Dalton Road Business',
    'Lake Drive Commercial',
    'Metro Road Industrial',
    'Baseline Road Business',
    'Marina Business District'
  ],
  description: "Georgina's tourism-driven economy centered on Lake Simcoe creates unique M&A opportunities for marina operations, hospitality businesses, and seasonal enterprises."
};

const businessServiceData = {
  name: 'Business Sale Planning',
  slug: 'business-sale-planning',
  icon: '🏢',
  primaryColor: 'from-blue-600',
  secondaryColor: 'to-indigo-600',
  description: "Expert M&A for marina operations and Lake Simcoe tourism businesses.",
  benefits: [
    'Marina operation sales',
    'Boat dealership transfers',
    'Tourism business valuations',
    'Restaurant & hospitality',
    'Seasonal business sales',
    'Cottage rental operations',
    'Recreational services',
    'Local retail transitions'
  ]
};

const statsData = {
  clientsServed: '130+',
  yearsExperience: '15+',
  successRate: '94%',
  avgSavings: '$145K'
};

export default function GeorginaBusinessSalePlanningPage() {
  return (
    <LocationServiceTemplate 
      city={georginaData}
      service={businessServiceData}
      stats={statsData}
    />
  );
}