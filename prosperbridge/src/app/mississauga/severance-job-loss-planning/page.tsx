import { Metadata } from 'next';
import LocationServiceTemplate from '@/components/templates/LocationServiceTemplate';

export const metadata: Metadata = {
  title: 'Severance Package Planning Mississauga | Job Loss Advisor | ProsperBridge',
  description: 'Expert severance and job transition planning for Mississauga professionals. Maximize packages, optimize taxes. Local expertise from our Mississauga office.',
  keywords: 'severance package Mississauga, job loss financial planning Mississauga, career transition Mississauga',
};

const mississaugaData = {
  name: 'Mississauga',
  slug: 'mississauga',
  population: '721,000',
  region: 'Peel Region',
  landmarks: [
    'Airport Corporate Centre',
    'Microsoft Canada HQ',
    'Oracle Campus',
    'Mississauga Business District',
    'Square One District'
  ],
  neighborhoods: [
    'City Centre',
    'Airport Corporate',
    'Meadowvale Business Park',
    'Erin Mills',
    'Port Credit',
    'Streetsville',
    'Heartland',
    'Cooksville',
    'Clarkson',
    'Lakeview'
  ],
  description: 'With major corporate headquarters and a diverse economy, Mississauga professionals need specialized severance planning strategies.'
};

const severanceServiceData = {
  name: 'Severance & Job Loss Planning',
  slug: 'severance-job-loss-planning',
  icon: '💼',
  primaryColor: 'from-orange-600',
  secondaryColor: 'to-red-600',
  description: 'Navigate career transitions with local Mississauga financial expertise.',
  benefits: [
    'Severance package evaluation',
    'Tax-efficient structuring',
    'RRSP and retiring allowance strategies',
    'Employment Insurance coordination',
    'Benefits continuation planning',
    'Stock option optimization',
    'Emergency fund management',
    'Career pivot financial planning'
  ]
};

const statsData = {
  clientsServed: '350+',
  yearsExperience: '15+',
  successRate: '97%',
  avgSavings: '$32K'
};

export default function MississaugaSeveranceJobLossPlanningPage() {
  return (
    <LocationServiceTemplate 
      city={mississaugaData}
      service={severanceServiceData}
      stats={statsData}
    />
  );
}