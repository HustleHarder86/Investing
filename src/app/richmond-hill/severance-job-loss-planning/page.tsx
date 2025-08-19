import { Metadata } from 'next';
import LocationServiceTemplate from '@/components/templates/LocationServiceTemplate';

export const metadata: Metadata = {
  title: 'Severance Package Planning Richmond Hill | Executive Support | ProsperBridge',
  description: 'Expert severance planning for Richmond Hill professionals and executives. Navigate corporate restructuring and maximize packages from professional services.',
  keywords: 'executive severance Richmond Hill, professional job loss planning, severance negotiation York',
};

const richmondHillData = {
  name: 'Richmond Hill',
  slug: 'richmond-hill',
  population: '202,000',
  region: 'York Region',
  landmarks: [
    'Beaver Creek Business Park',
    'Richmond Hill Centre',
    'York Central Hospital',
    'Cosmo Music',
    'Richmond Hill Public Library'
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
  description: 'Richmond Hill\'s professional workforce often faces executive-level severances and corporate restructuring situations requiring sophisticated negotiation and financial planning strategies.'
};

const severanceServiceData = {
  name: 'Severance & Job Loss Planning',
  slug: 'severance-job-loss-planning',
  icon: '💼',
  primaryColor: 'from-orange-600',
  secondaryColor: 'to-red-600',
  description: 'Navigate executive transitions with sophisticated severance planning expertise.',
  benefits: [
    'Executive severance negotiation',
    'Golden parachute optimization',
    'Stock option strategies',
    'Deferred compensation planning',
    'Non-compete buyouts',
    'Benefits continuation',
    'Outplacement maximization',
    'Career transition financing'
  ]
};

const statsData = {
  clientsServed: '240+',
  yearsExperience: '15+',
  successRate: '98%',
  avgSavings: '$52K'
};

export default function RichmondHillSeveranceJobLossPlanningPage() {
  return (
    <LocationServiceTemplate 
      city={richmondHillData}
      service={severanceServiceData}
      stats={statsData}
    />
  );
}