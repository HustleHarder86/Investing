import { Metadata } from 'next';
import LocationServiceTemplate from '@/components/templates/LocationServiceTemplate';

export const metadata: Metadata = {
  title: 'Inheritance Tax Planning Richmond Hill | Wealth Preservation | Life Money',
  description: "Expert estate planning for Richmond Hill's wealthy families. Minimize taxes on professional practices, investment portfolios, and luxury properties.",
  keywords: 'inheritance tax planning Richmond Hill, estate planning affluent families, wealth preservation York',
};

const richmondHillData = {
  name: 'Richmond Hill',
  slug: 'richmond-hill',
  population: '202,000',
  region: 'York Region',
  landmarks: [
    'Richmond Hill Heritage Centre',
    'Lake Wilcox',
    'Oak Ridges Moraine',
    'Bond Lake',
    'Richmond Hill Golf Club'
  ],
  neighborhoods: [
    'Oak Ridges',
    'Bayview Hill',
    'Jefferson',
    'Mill Pond',
    'Crosby',
    'Observatory Hill',
    'Langstaff',
    'North Richvale',
    'South Richvale',
    'Rouge Woods'
  ],
  description: "Richmond Hill's wealthy families often have sophisticated estates including professional practices, multiple properties, and significant investment portfolios requiring advanced tax planning strategies."
};

const inheritanceServiceData = {
  name: 'Inheritance Financial Planning',
  slug: 'inheritance-financial-planning',
  icon: '🏛️',
  primaryColor: 'from-green-600',
  secondaryColor: 'to-teal-600',
  description: "Sophisticated estate planning for Richmond Hill's affluent families and professionals.",
  benefits: [
    'Professional practice succession',
    'Medical/dental practice transfers',
    'High-value estate strategies',
    'Multiple property planning',
    'Investment portfolio transfers',
    'Family trust structures',
    'Private company shares',
    'Philanthropic planning'
  ]
};

const statsData = {
  clientsServed: '350+',
  yearsExperience: '15+',
  successRate: '99%',
  avgSavings: '$175K'
};

export default function RichmondHillInheritanceFinancialPlanningPage() {
  return (
    <LocationServiceTemplate 
      city={richmondHillData}
      service={inheritanceServiceData}
      stats={statsData}
    />
  );
}