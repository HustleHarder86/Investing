import { Metadata } from 'next';
import LocationServiceTemplate from '@/components/templates/LocationServiceTemplate';

export const metadata: Metadata = {
  title: 'Inheritance Tax Planning Pickering | OPG Estate Planning | Money in Motion',
  description: "Expert estate planning for Pickering nuclear families. Maximize OPG pensions, navigate survivor benefits, and protect high-value estates in Durham Region.",
  keywords: 'inheritance planning Pickering, OPG estate planning, nuclear worker succession Durham',
};

const pickeringData = {
  name: 'Pickering',
  slug: 'pickering',
  population: '99,000',
  region: 'Durham Region',
  landmarks: [
    'Pickering Nuclear Station',
    "Frenchman's Bay Harbour",
    'Petticoat Creek Conservation',
    'Pickering Recreation Complex',
    'Esplanade Park'
  ],
  neighborhoods: [
    'Bay Ridges',
    'Rosebank',
    'Liverpool',
    'Dunbarton',
    'West Shore',
    'Village East',
    'Woodlands',
    'Highbush',
    'Brock Ridge',
    'Amberlea'
  ],
  description: "Pickering's nuclear workforce has built substantial estates through decades of OPG employment, creating complex succession needs for specialized pensions, survivor benefits, and waterfront properties."
};

const inheritanceServiceData = {
  name: 'Inheritance Financial Planning',
  slug: 'inheritance-financial-planning',
  icon: '🏛️',
  primaryColor: 'from-green-600',
  secondaryColor: 'to-teal-600',
  description: "Sophisticated estate planning for nuclear industry families and retirees.",
  benefits: [
    'OPG pension succession',
    'Nuclear survivor benefits',
    'OMERS estate strategies',
    'Defined benefit transfers',
    'Power Workers Union benefits',
    'Waterfront property planning',
    'Cross-generation wealth transfer',
    'Radiation worker compensation'
  ]
};

const statsData = {
  clientsServed: '380+',
  yearsExperience: '15+',
  successRate: '99%',
  avgSavings: '$145K'
};

export default function PickeringInheritanceFinancialPlanningPage() {
  return (
    <LocationServiceTemplate 
      city={pickeringData}
      service={inheritanceServiceData}
      stats={statsData}
    />
  );
}