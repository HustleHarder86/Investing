import { Metadata } from 'next';
import LocationServiceTemplate from '@/components/templates/LocationServiceTemplate';

export const metadata: Metadata = {
  title: 'Inheritance Tax Planning Burlington | Retirement Estate Planning | Money in Motion',
  description: "Expert estate planning for Burlington retirees and seniors. Minimize taxes on retirement accounts, waterfront properties, and family cottages.",
  keywords: 'inheritance tax planning Burlington, retirement estate planning, waterfront property estate Halton',
};

const burlingtonData = {
  name: 'Burlington',
  slug: 'burlington',
  population: '186,000',
  region: 'Halton Region',
  landmarks: [
    'LaSalle Park Marina',
    'Bronte Creek Provincial Park',
    'Burlington Beach',
    'Mount Nemo Conservation Area',
    'Ireland House Museum'
  ],
  neighborhoods: [
    'Downtown Burlington',
    'Aldershot',
    'Roseland',
    'Shoreacres',
    'Tyandaga',
    'Millcroft',
    'Headon Forest',
    'Palmer',
    'Brant Hills',
    'Orchard'
  ],
  description: "Burlington's aging population with significant retirement savings and waterfront properties requires careful estate planning to preserve wealth for the next generation while minimizing tax exposure."
};

const inheritanceServiceData = {
  name: 'Inheritance Financial Planning',
  slug: 'inheritance-financial-planning',
  icon: '🏛️',
  primaryColor: 'from-green-600',
  secondaryColor: 'to-teal-600',
  description: "Strategic estate planning for Burlington's retirees and waterfront property owners.",
  benefits: [
    'Retirement account transfers',
    'RRIF estate planning',
    'Waterfront property strategies',
    'Cottage succession planning',
    'Principal residence optimization',
    'Charitable giving strategies',
    'Healthcare directives',
    'Multi-generational planning'
  ]
};

const statsData = {
  clientsServed: '380+',
  yearsExperience: '15+',
  successRate: '99%',
  avgSavings: '$155K'
};

export default function BurlingtonInheritanceFinancialPlanningPage() {
  return (
    <LocationServiceTemplate 
      city={burlingtonData}
      service={inheritanceServiceData}
      stats={statsData}
    />
  );
}