import { Metadata } from 'next';
import LocationServiceTemplate from '@/components/templates/LocationServiceTemplate';

export const metadata: Metadata = {
  title: 'Severance Package Planning Ajax | Nuclear Worker Support | Life Money',
  description: "Expert severance planning for Ajax nuclear industry workers and Durham professionals. Navigate OPG restructuring and maximize separation packages.",
  keywords: 'severance planning Ajax, nuclear worker layoffs, OPG severance packages Durham',
};

const ajaxData = {
  name: 'Ajax',
  slug: 'ajax',
  population: '126,000',
  region: 'Durham Region',
  landmarks: [
    'Ajax GO Station',
    'Pickering Nuclear Generating Station',
    'Ajax Town Centre',
    'Durham Centre',
    'Ajax Community Centre'
  ],
  neighborhoods: [
    'Downtown Ajax',
    'Lakeside',
    'Applecroft',
    'Riverside',
    'Hermitage',
    'Audley',
    'Duffins Bay',
    'Village East',
    'Nottingham',
    'Carruthers Creek'
  ],
  description: "Ajax's nuclear industry workforce faces unique severance situations including plant refurbishments, contractor transitions, and specialized skill redeployments requiring expert navigation of union agreements and benefits."
};

const severanceServiceData = {
  name: 'Severance & Job Loss Planning',
  slug: 'severance-job-loss-planning',
  icon: '💼',
  primaryColor: 'from-orange-600',
  secondaryColor: 'to-red-600',
  description: "Specialized support for nuclear industry workers and Durham professionals.",
  benefits: [
    'OPG severance optimization',
    'Nuclear contractor packages',
    'Power Workers Union navigation',
    'Refurbishment transitions',
    'OMERS continuity planning',
    'Shift premium calculations',
    'Security clearance considerations',
    'Industry redeployment support'
  ]
};

const statsData = {
  clientsServed: '220+',
  yearsExperience: '15+',
  successRate: '97%',
  avgSavings: '$42K'
};

export default function AjaxSeveranceJobLossPlanningPage() {
  return (
    <LocationServiceTemplate 
      city={ajaxData}
      service={severanceServiceData}
      stats={statsData}
    />
  );
}