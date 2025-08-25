import { Metadata } from 'next';
import LocationServiceTemplate from '@/components/templates/LocationServiceTemplate';

export const metadata: Metadata = {
  title: 'Inheritance Tax Planning Vaughan | Estate Planning York | Life Money',
  description: "Expert estate planning for Vaughan families. Protect family businesses, real estate portfolios, and multi-generational wealth. Italian succession expertise.",
  keywords: 'inheritance tax planning Vaughan, estate planning Vaughan, Italian succession planning',
};

const vaughanData = {
  name: 'Vaughan',
  slug: 'vaughan',
  population: '323,000',
  region: 'York Region',
  landmarks: [
    'Vaughan Healthcare Centre',
    'Mackenzie Vaughan Hospital',
    'Vaughan Metropolitan Centre',
    'Black Creek Pioneer Village',
    'Boyd Conservation Area'
  ],
  neighborhoods: [
    'Woodbridge',
    'Thornhill',
    'Maple',
    'Kleinburg',
    'Concord',
    'Vellore Village',
    'Carrville',
    'Sonoma Heights',
    'Elder Mills',
    'Block 27'
  ],
  description: "Vaughan's affluent families often have complex estates including construction businesses, multiple properties, and Italian property requiring sophisticated cross-border planning."
};

const inheritanceServiceData = {
  name: 'Inheritance Financial Planning',
  slug: 'inheritance-financial-planning',
  icon: '🏛️',
  primaryColor: 'from-green-600',
  secondaryColor: 'to-teal-600',
  description: "Strategic estate planning for Vaughan's business families and property owners.",
  benefits: [
    'Construction business succession',
    'Italian property coordination',
    'Multiple real estate holdings',
    'Family business transfers',
    'Cross-border estate planning',
    'Trust structures for families',
    'Probate minimization strategies',
    'Charitable giving planning'
  ]
};

const statsData = {
  clientsServed: '410+',
  yearsExperience: '15+',
  successRate: '99%',
  avgSavings: '$145K'
};

export default function VaughanInheritanceFinancialPlanningPage() {
  return (
    <LocationServiceTemplate 
      city={vaughanData}
      service={inheritanceServiceData}
      stats={statsData}
    />
  );
}