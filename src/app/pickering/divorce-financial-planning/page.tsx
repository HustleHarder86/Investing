import { Metadata } from 'next';
import LocationServiceTemplate from '@/components/templates/LocationServiceTemplate';

export const metadata: Metadata = {
  title: 'Divorce Financial Planning Pickering | Nuclear Worker CFP® | ProsperBridge',
  description: 'Expert divorce financial planning for Pickering Nuclear Station families. Specialized support for OPG employees navigating pension division and benefit allocation.',
  keywords: 'divorce financial planning Pickering, nuclear worker divorce, OPG pension division Durham',
};

const pickeringData = {
  name: 'Pickering',
  slug: 'pickering',
  population: '99,000',
  region: 'Durham Region',
  landmarks: [
    'Pickering Nuclear Generating Station',
    'Pickering Town Centre',
    'Nautical Village Marina',
    'Frenchman\'s Bay',
    'Pickering Museum Village'
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
  description: 'Pickering\'s nuclear workforce faces complex divorce scenarios involving substantial OPG pensions, shift premiums, overtime calculations, and specialized benefits requiring expert financial navigation.'
};

const divorceServiceData = {
  name: 'Divorce Financial Planning',
  slug: 'divorce-financial-planning',
  icon: '💔',
  primaryColor: 'from-purple-600',
  secondaryColor: 'to-pink-600',
  description: 'Navigate divorce with deep expertise in nuclear industry compensation structures.',
  benefits: [
    'OPG pension division expertise',
    'Nuclear premium calculations',
    'Shift work income analysis',
    'Overtime inclusion strategies',
    'Power Workers Union benefits',
    'OMERS pension navigation',
    'Security clearance impacts',
    'Radiation exposure benefits'
  ]
};

const statsData = {
  clientsServed: '340+',
  yearsExperience: '15+',
  successRate: '98%',
  avgSavings: '$52K'
};

export default function PickeringDivorceFinancialPlanningPage() {
  return (
    <LocationServiceTemplate 
      city={pickeringData}
      service={divorceServiceData}
      stats={statsData}
    />
  );
}