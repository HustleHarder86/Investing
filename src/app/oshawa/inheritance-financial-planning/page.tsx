import { Metadata } from 'next';
import LocationServiceTemplate from '@/components/templates/LocationServiceTemplate';

export const metadata: Metadata = {
  title: 'Inheritance Tax Planning Oshawa | Automotive Estate Planning | Life Money',
  description: "Expert estate planning for Oshawa automotive families. Protect GM pensions, union benefits, and skilled trades wealth for next generation.",
  keywords: 'inheritance planning Oshawa, GM pension estate, automotive worker succession Durham',
};

const oshawaData = {
  name: 'Oshawa',
  slug: 'oshawa',
  population: '175,000',
  region: 'Durham Region',
  landmarks: [
    'Canadian Automotive Museum',
    'Lakeview Park',
    'Oshawa Valley Botanical Gardens',
    'Robert McLaughlin Gallery',
    'Tribute Communities Centre'
  ],
  neighborhoods: [
    'Downtown Oshawa',
    'North Oshawa',
    'Kedron',
    'Windfields',
    "O'Neill",
    'Vanier',
    'Lakeview',
    'McLaughlin',
    'Samac',
    'Northglen'
  ],
  description: "Oshawa's automotive legacy has created substantial estates through GM pensions, union benefits, and skilled trades success, requiring specialized planning for complex benefit transfers."
};

const inheritanceServiceData = {
  name: 'Inheritance Financial Planning',
  slug: 'inheritance-financial-planning',
  icon: '🏛️',
  primaryColor: 'from-green-600',
  secondaryColor: 'to-teal-600',
  description: "Sophisticated estate planning for automotive industry families and retirees.",
  benefits: [
    'GM pension succession',
    'Unifor survivor benefits',
    'Retiree healthcare transfers',
    'COLA benefit preservation',
    'Skilled trades estates',
    'Union death benefits',
    'Multi-generation planning',
    'Automotive heritage assets'
  ]
};

const statsData = {
  clientsServed: '460+',
  yearsExperience: '15+',
  successRate: '99%',
  avgSavings: '$135K'
};

export default function OshawaInheritanceFinancialPlanningPage() {
  return (
    <LocationServiceTemplate 
      city={oshawaData}
      service={inheritanceServiceData}
      stats={statsData}
    />
  );
}