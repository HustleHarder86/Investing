import { Metadata } from 'next';
import LocationServiceTemplate from '@/components/templates/LocationServiceTemplate';

export const metadata: Metadata = {
  title: 'Inheritance Tax Planning Aurora | High Net Worth Estate Planning | ProsperBridge',
  description: 'Expert estate planning for Aurora\'s wealthy families. Minimize taxes on luxury estates, investment portfolios, and family businesses.',
  keywords: 'inheritance planning Aurora, high net worth estate planning, wealth preservation Aurora',
};

const auroraData = {
  name: 'Aurora',
  slug: 'aurora',
  population: '62,000',
  region: 'York Region',
  landmarks: [
    'Aurora Arboretum',
    'Sheppard\'s Bush Conservation',
    'Aurora Community Arboretum',
    'McKenzie Marsh',
    'Beacon Hall Golf & Country Club'
  ],
  neighborhoods: [
    'Aurora Heights',
    'Aurora Grove',
    'Aurora Village',
    'Bayview Northeast',
    'Bayview Wellington',
    'Beacon Hall Golf Club',
    'Highland Gate',
    'Hills of St. Andrew',
    'Town Park',
    'Wellington Village'
  ],
  description: 'Aurora\'s wealthy residents have accumulated significant estates through business ownership, executive careers, and real estate, requiring sophisticated tax minimization and succession strategies.'
};

const inheritanceServiceData = {
  name: 'Inheritance Financial Planning',
  slug: 'inheritance-financial-planning',
  icon: '🏛️',
  primaryColor: 'from-green-600',
  secondaryColor: 'to-teal-600',
  description: 'Sophisticated estate planning for Aurora\'s high net worth families.',
  benefits: [
    'Multi-million estate strategies',
    'Private company succession',
    'Investment portfolio transfers',
    'Luxury property planning',
    'Golf club membership transfers',
    'Family trust structures',
    'Philanthropic foundations',
    'Art collection planning'
  ]
};

const statsData = {
  clientsServed: '220+',
  yearsExperience: '15+',
  successRate: '99%',
  avgSavings: '$215K'
};

export default function AuroraInheritanceFinancialPlanningPage() {
  return (
    <LocationServiceTemplate 
      city={auroraData}
      service={inheritanceServiceData}
      stats={statsData}
    />
  );
}