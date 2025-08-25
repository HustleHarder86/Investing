import { Metadata } from 'next';
import LocationServiceTemplate from '@/components/templates/LocationServiceTemplate';

export const metadata: Metadata = {
  title: 'Severance Package Planning Vaughan | Construction Worker Support | Life Money',
  description: "Expert severance planning for Vaughan construction workers and trades. Navigate layoffs, maximize packages, and plan career transitions in York Region.",
  keywords: 'severance package Vaughan, construction layoffs, job loss planning York Region',
};

const vaughanData = {
  name: 'Vaughan',
  slug: 'vaughan',
  population: '323,000',
  region: 'York Region',
  landmarks: [
    'Vaughan Mills Shopping Centre',
    'National Soccer Stadium',
    'Mackenzie Vaughan Hospital',
    'TTC Vaughan Extension',
    'Vaughan Metropolitan Centre Station'
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
  description: "Vaughan's construction industry cycles and seasonal employment patterns create unique severance situations, particularly for trades workers and contractors facing project completions or economic downturns."
};

const severanceServiceData = {
  name: 'Severance & Job Loss Planning',
  slug: 'severance-job-loss-planning',
  icon: '💼',
  primaryColor: 'from-orange-600',
  secondaryColor: 'to-red-600',
  description: "Specialized support for Vaughan's construction workers and skilled trades.",
  benefits: [
    'Construction severance expertise',
    'Seasonal layoff planning',
    'Trade union considerations',
    'Contractor transition support',
    'WSIB claim coordination',
    'EI for construction workers',
    'Apprenticeship continuity',
    'Career pivot strategies'
  ]
};

const statsData = {
  clientsServed: '380+',
  yearsExperience: '15+',
  successRate: '97%',
  avgSavings: '$31K'
};

export default function VaughanSeveranceJobLossPlanningPage() {
  return (
    <LocationServiceTemplate 
      city={vaughanData}
      service={severanceServiceData}
      stats={statsData}
    />
  );
}