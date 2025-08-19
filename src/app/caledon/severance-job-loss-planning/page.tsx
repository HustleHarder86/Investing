import { Metadata } from 'next';
import LocationServiceTemplate from '@/components/templates/LocationServiceTemplate';

export const metadata: Metadata = {
  title: 'Severance Package Planning Caledon | Aggregate Worker Support | ProsperBridge',
  description: 'Expert severance planning for Caledon aggregate workers and trucking professionals. Navigate industry downturns and maximize separation packages.',
  keywords: 'severance Caledon, aggregate worker layoffs, trucking job loss Bolton',
};

const caledonData = {
  name: 'Caledon',
  slug: 'caledon',
  population: '76,000',
  region: 'Peel Region',
  landmarks: [
    'Caledon Community Complex',
    'Bolton Camp',
    'Caledon Centre for Recreation',
    'Mayfield Recreation Complex',
    'Albion Bolton Community Centre'
  ],
  neighborhoods: [
    'Bolton',
    'Caledon East',
    'Caledon Village',
    'Mayfield West',
    'Cheltenham',
    'Inglewood',
    'Alton',
    'Belfountain',
    'Palgrave',
    'Mono Mills'
  ],
  description: 'Caledon\'s aggregate industry and trucking sector face cyclical employment patterns and seasonal layoffs requiring specialized severance planning for equipment operators and drivers.'
};

const severanceServiceData = {
  name: 'Severance & Job Loss Planning',
  slug: 'severance-job-loss-planning',
  icon: '💼',
  primaryColor: 'from-orange-600',
  secondaryColor: 'to-red-600',
  description: 'Specialized severance support for aggregate workers and trucking professionals.',
  benefits: [
    'Aggregate worker packages',
    'Trucking severance planning',
    'Seasonal layoff support',
    'Equipment operator transitions',
    'Heavy machinery training',
    'CDL career transitions',
    'Union benefit navigation',
    'Industry redeployment'
  ]
};

const statsData = {
  clientsServed: '190+',
  yearsExperience: '15+',
  successRate: '96%',
  avgSavings: '$36K'
};

export default function CaledonSeveranceJobLossPlanningPage() {
  return (
    <LocationServiceTemplate 
      city={caledonData}
      service={severanceServiceData}
      stats={statsData}
    />
  );
}