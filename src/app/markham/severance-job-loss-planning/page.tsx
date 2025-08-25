import { Metadata } from 'next';
import LocationServiceTemplate from '@/components/templates/LocationServiceTemplate';

export const metadata: Metadata = {
  title: 'Severance Package Planning Markham | Tech Layoff Support | Money in Motion',
  description: "Expert severance planning for Markham tech professionals. Navigate layoffs from IBM, AMD, and startups. Maximize packages and stock option considerations.",
  keywords: 'tech severance Markham, tech layoff financial planning, IBM AMD severance York',
};

const markhamData = {
  name: 'Markham',
  slug: 'markham',
  population: '356,000',
  region: 'York Region',
  landmarks: [
    'IBM Canada Headquarters',
    'AMD Global Headquarters',
    'Qualcomm Canada',
    'Honeywell Canada',
    'Avaya Canada'
  ],
  neighborhoods: [
    'Highway 7 Tech Corridor',
    'Downtown Markham',
    'Buttonville',
    'Commerce Valley',
    'Allstate Parkway',
    'Woodbine Corporate',
    'Warden Tech District',
    'Kennedy Business Zone',
    'Markham Centre',
    '404 Employment Corridor'
  ],
  description: "With major tech employers and numerous startups, Markham professionals face unique severance situations involving stock options, RSUs, and complex compensation packages requiring specialized planning."
};

const severanceServiceData = {
  name: 'Severance & Job Loss Planning',
  slug: 'severance-job-loss-planning',
  icon: '💼',
  primaryColor: 'from-orange-600',
  secondaryColor: 'to-red-600',
  description: "Navigate tech sector transitions with specialized expertise for Markham professionals.",
  benefits: [
    'Tech severance optimization',
    'Stock option acceleration',
    'RSU vesting strategies',
    'Non-compete navigation',
    'Executive package negotiation',
    'Startup equity handling',
    'Benefits continuation planning',
    'Career pivot financing'
  ]
};

const statsData = {
  clientsServed: '290+',
  yearsExperience: '15+',
  successRate: '97%',
  avgSavings: '$45K'
};

export default function MarkhamSeveranceJobLossPlanningPage() {
  return (
    <LocationServiceTemplate 
      city={markhamData}
      service={severanceServiceData}
      stats={statsData}
    />
  );
}