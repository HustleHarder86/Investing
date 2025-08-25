import { Metadata } from 'next';
import LocationServiceTemplate from '@/components/templates/LocationServiceTemplate';

export const metadata: Metadata = {
  title: 'Divorce Financial Planning Georgina | Lake Simcoe CFP® | Money in Motion',
  description: "Expert divorce financial planning for Georgina families. Navigate waterfront property divisions, cottage separations, and Keswick household splits.",
  keywords: 'divorce financial planning Georgina, Lake Simcoe divorce, Keswick separation advisor',
};

const georginaData = {
  name: 'Georgina',
  slug: 'georgina',
  population: '47,000',
  region: 'York Region',
  landmarks: [
    'Lake Simcoe Waterfront',
    'Sibbald Point Provincial Park',
    'Georgina Ice Palace',
    "Jackson's Point Harbour",
    'The ROC Recreation Centre'
  ],
  neighborhoods: [
    'Keswick',
    'Sutton',
    "Jackson's Point",
    'Pefferlaw',
    'Willow Beach',
    'Virginia',
    'Udora',
    'Port Bolster',
    'Egypt',
    'Baldwin'
  ],
  description: "Georgina's Lake Simcoe waterfront properties and cottage country lifestyle create unique divorce scenarios involving seasonal properties, marina assets, and recreational property divisions."
};

const divorceServiceData = {
  name: 'Divorce Financial Planning',
  slug: 'divorce-financial-planning',
  icon: '💔',
  primaryColor: 'from-purple-600',
  secondaryColor: 'to-pink-600',
  description: "Navigate divorce with expertise in waterfront properties and cottage assets.",
  benefits: [
    'Waterfront property valuations',
    'Cottage asset division',
    'Marina slip allocations',
    'Boat & recreational vehicles',
    'Seasonal property strategies',
    'Keswick home divisions',
    'Retirement community splits',
    'Lake Simcoe real estate'
  ]
};

const statsData = {
  clientsServed: '160+',
  yearsExperience: '15+',
  successRate: '96%',
  avgSavings: '$41K'
};

export default function GeorginaDivorceFinancialPlanningPage() {
  return (
    <LocationServiceTemplate 
      city={georginaData}
      service={divorceServiceData}
      stats={statsData}
    />
  );
}