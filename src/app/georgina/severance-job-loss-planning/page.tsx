import { Metadata } from 'next';
import LocationServiceTemplate from '@/components/templates/LocationServiceTemplate';

export const metadata: Metadata = {
  title: 'Severance Package Planning Georgina | Seasonal Worker Support | Life Money',
  description: "Expert severance planning for Georgina seasonal workers and tourism employees. Navigate seasonal layoffs and maximize packages.",
  keywords: 'severance Georgina, seasonal worker layoffs, tourism job loss Lake Simcoe',
};

const georginaData = {
  name: 'Georgina',
  slug: 'georgina',
  population: '47,000',
  region: 'York Region',
  landmarks: [
    'Georgina Civic Centre',
    'Keswick Library',
    'Sutton Arena',
    'Georgina Leisure Pool',
    'Ice Palace'
  ],
  neighborhoods: [
    'Keswick',
    'Sutton',
    "Jackson's Point",
    'Pefferlaw',
    'Willow Beach',
    'Virginia',
    'Udora',
    'Port Bolster',
    'Egypt',
    'Baldwin'
  ],
  description: "Georgina's seasonal tourism economy creates unique employment patterns with marina workers, hospitality staff, and recreational services facing regular seasonal transitions."
};

const severanceServiceData = {
  name: 'Severance & Job Loss Planning',
  slug: 'severance-job-loss-planning',
  icon: '💼',
  primaryColor: 'from-orange-600',
  secondaryColor: 'to-red-600',
  description: "Specialized severance support for seasonal and tourism industry workers.",
  benefits: [
    'Seasonal layoff planning',
    'Marina worker packages',
    'Hospitality severance support',
    'Tourism industry transitions',
    'EI for seasonal workers',
    'Off-season income planning',
    'Retirement community staff',
    'Career diversification support'
  ]
};

const statsData = {
  clientsServed: '170+',
  yearsExperience: '15+',
  successRate: '95%',
  avgSavings: '$28K'
};

export default function GeorginaSeveranceJobLossPlanningPage() {
  return (
    <LocationServiceTemplate 
      city={georginaData}
      service={severanceServiceData}
      stats={statsData}
    />
  );
}