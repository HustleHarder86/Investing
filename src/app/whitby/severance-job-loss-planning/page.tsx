import { Metadata } from 'next';
import LocationServiceTemplate from '@/components/templates/LocationServiceTemplate';

export const metadata: Metadata = {
  title: 'Severance Package Planning Whitby | Professional Job Loss Support | Life Money',
  description: "Expert severance planning for Whitby professionals. Navigate corporate downsizing, maximize packages, and plan career transitions in Durham Region.",
  keywords: 'severance planning Whitby, job loss support Durham, career transition Whitby',
};

const whitbyData = {
  name: 'Whitby',
  slug: 'whitby',
  population: '138,000',
  region: 'Durham Region',
  landmarks: [
    'Whitby GO Station',
    'Durham College Whitby Campus',
    'Whitby Town Hall',
    'McKinney Centre',
    'Abilities Centre'
  ],
  neighborhoods: [
    'Downtown Whitby',
    'Port Whitby',
    'Brooklin',
    'Pringle Creek',
    'Williamsburg',
    'Rolling Acres',
    'Taunton North',
    'Lynde Creek',
    'West Lynde',
    'Ashburn'
  ],
  description: "Whitby's professional workforce and Toronto commuters face corporate restructuring and downsizing scenarios requiring expert severance negotiation and strategic career transition planning."
};

const severanceServiceData = {
  name: 'Severance & Job Loss Planning',
  slug: 'severance-job-loss-planning',
  icon: '💼',
  primaryColor: 'from-orange-600',
  secondaryColor: 'to-red-600',
  description: "Professional severance support for Whitby's workforce and Toronto commuters.",
  benefits: [
    'Corporate severance negotiation',
    'Package enhancement strategies',
    'Benefits continuation planning',
    'Commuter cost adjustments',
    'Career transition financing',
    'Outplacement maximization',
    'Professional retraining funds',
    'Family income protection'
  ]
};

const statsData = {
  clientsServed: '280+',
  yearsExperience: '15+',
  successRate: '97%',
  avgSavings: '$38K'
};

export default function WhitbySeveranceJobLossPlanningPage() {
  return (
    <LocationServiceTemplate 
      city={whitbyData}
      service={severanceServiceData}
      stats={statsData}
    />
  );
}