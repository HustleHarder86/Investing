import { Metadata } from 'next';
import LocationServiceTemplate from '@/components/templates/LocationServiceTemplate';

export const metadata: Metadata = {
  title: 'Severance Package Planning Pickering | OPG Worker Support | Money in Motion',
  description: "Expert severance planning for Pickering Nuclear Station workers. Navigate refurbishment layoffs, contractor transitions, and maximize OPG separation packages.",
  keywords: 'severance Pickering Nuclear, OPG layoffs, nuclear worker severance Durham',
};

const pickeringData = {
  name: 'Pickering',
  slug: 'pickering',
  population: '99,000',
  region: 'Durham Region',
  landmarks: [
    'Pickering Nuclear Generating Station',
    'Pickering GO Station',
    'Pickering Town Centre',
    'Durham Nuclear Information Centre',
    'OPG Training Centre'
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
  description: "Pickering Nuclear Station's ongoing refurbishment and eventual decommissioning creates unique severance scenarios for thousands of workers requiring specialized transition planning and benefit optimization."
};

const severanceServiceData = {
  name: 'Severance & Job Loss Planning',
  slug: 'severance-job-loss-planning',
  icon: '💼',
  primaryColor: 'from-orange-600',
  secondaryColor: 'to-red-600',
  description: "Specialized severance support for nuclear industry transitions and refurbishments.",
  benefits: [
    'Nuclear refurbishment packages',
    'OPG severance maximization',
    'Contractor transition planning',
    'Decommissioning preparations',
    'Power Workers Union support',
    'OMERS bridge benefits',
    'Retraining fund access',
    'Industry redeployment strategies'
  ]
};

const statsData = {
  clientsServed: '420+',
  yearsExperience: '15+',
  successRate: '98%',
  avgSavings: '$48K'
};

export default function PickeringSeveranceJobLossPlanningPage() {
  return (
    <LocationServiceTemplate 
      city={pickeringData}
      service={severanceServiceData}
      stats={statsData}
    />
  );
}