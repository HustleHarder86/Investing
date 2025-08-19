import { Metadata } from 'next';
import LocationServiceTemplate from '@/components/templates/LocationServiceTemplate';

export const metadata: Metadata = {
  title: 'Inheritance Tax Planning Georgina | Lake Simcoe Estate Planning | ProsperBridge',
  description: 'Expert estate planning for Georgina families. Protect waterfront cottages, Lake Simcoe properties, and retirement wealth for next generation.',
  keywords: 'inheritance planning Georgina, cottage succession Lake Simcoe, estate planning Keswick',
};

const georginaData = {
  name: 'Georgina',
  slug: 'georgina',
  population: '47,000',
  region: 'York Region',
  landmarks: [
    'Lake Simcoe',
    'Georgina Pioneer Village',
    'Briars Resort',
    'De La Salle Park',
    'Willow Beach Conservation'
  ],
  neighborhoods: [
    'Keswick',
    'Sutton',
    'Jackson\'s Point',
    'Pefferlaw',
    'Willow Beach',
    'Virginia',
    'Udora',
    'Port Bolster',
    'Egypt',
    'Baldwin'
  ],
  description: 'Georgina families often own valuable Lake Simcoe waterfront properties and cottages passed down through generations, requiring careful planning to preserve family legacy and minimize taxes.'
};

const inheritanceServiceData = {
  name: 'Inheritance Financial Planning',
  slug: 'inheritance-financial-planning',
  icon: '🏛️',
  primaryColor: 'from-green-600',
  secondaryColor: 'to-teal-600',
  description: 'Strategic estate planning for waterfront properties and cottage country wealth.',
  benefits: [
    'Cottage succession planning',
    'Waterfront property transfers',
    'Marina asset preservation',
    'Multi-generation cottages',
    'Recreational property strategies',
    'Retirement wealth transfers',
    'Family compound planning',
    'Lake Simcoe estate strategies'
  ]
};

const statsData = {
  clientsServed: '180+',
  yearsExperience: '15+',
  successRate: '98%',
  avgSavings: '$95K'
};

export default function GeorginaInheritanceFinancialPlanningPage() {
  return (
    <LocationServiceTemplate 
      city={georginaData}
      service={inheritanceServiceData}
      stats={statsData}
    />
  );
}