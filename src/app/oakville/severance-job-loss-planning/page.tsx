import { Metadata } from 'next';
import LocationServiceTemplate from '@/components/templates/LocationServiceTemplate';

export const metadata: Metadata = {
  title: 'Severance Package Planning Oakville | C-Suite Executive Support | Life Money',
  description: "Expert severance planning for Oakville executives and senior professionals. Navigate corporate exits, golden parachutes, and executive transitions.",
  keywords: 'executive severance Oakville, C-suite transition planning, golden parachute Halton',
};

const oakvilleData = {
  name: 'Oakville',
  slug: 'oakville',
  population: '213,000',
  region: 'Halton Region',
  landmarks: [
    'Ford Canada Headquarters',
    'Tim Hortons Head Office',
    'Siemens Canada',
    'GE Water & Process Technologies',
    'Magellan Aerospace'
  ],
  neighborhoods: [
    'Old Oakville',
    'Bronte',
    'Glen Abbey',
    'Morrison',
    'Eastlake',
    'West Oak Trails',
    'River Oaks',
    'Clearview',
    'College Park',
    'Joshua Creek'
  ],
  description: "Oakville's C-suite executives and senior professionals often receive substantial severance packages with complex terms including equity compensation, deferred bonuses, and extensive benefit continuations."
};

const severanceServiceData = {
  name: 'Severance & Job Loss Planning',
  slug: 'severance-job-loss-planning',
  icon: '💼',
  primaryColor: 'from-orange-600',
  secondaryColor: 'to-red-600',
  description: "Elite severance planning for Oakville's C-suite executives and senior leaders.",
  benefits: [
    'C-suite severance expertise',
    'Golden parachute optimization',
    'Equity compensation timing',
    'Deferred bonus strategies',
    'Executive benefit continuation',
    'Non-compete negotiations',
    'Consulting agreement structures',
    'Executive outplacement'
  ]
};

const statsData = {
  clientsServed: '160+',
  yearsExperience: '15+',
  successRate: '99%',
  avgSavings: '$95K'
};

export default function OakvilleSeveranceJobLossPlanningPage() {
  return (
    <LocationServiceTemplate 
      city={oakvilleData}
      service={severanceServiceData}
      stats={statsData}
    />
  );
}