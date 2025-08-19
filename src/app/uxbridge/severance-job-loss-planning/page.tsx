import { Metadata } from 'next';
import LocationServiceTemplate from '@/components/templates/LocationServiceTemplate';

export const metadata: Metadata = {
  title: 'Severance Package Planning Uxbridge | Rural Worker Support | ProsperBridge',
  description: 'Expert severance planning for Uxbridge agricultural and equestrian workers. Navigate seasonal employment and maximize rural industry packages.',
  keywords: 'severance Uxbridge, agricultural worker layoffs, equestrian job loss Durham',
};

const uxbridgeData = {
  name: 'Uxbridge',
  slug: 'uxbridge',
  population: '22,000',
  region: 'Durham Region',
  landmarks: [
    'Uxbridge Arena',
    'Township Office',
    'Uxbridge Library',
    'Uxpool',
    'Fields of Uxbridge'
  ],
  neighborhoods: [
    'Downtown Uxbridge',
    'Quaker Village',
    'Zephyr',
    'Sandford',
    'Leaskdale',
    'Udora',
    'Siloam',
    'Goodwood',
    'Glen Major',
    'Coppins Corners'
  ],
  description: 'Uxbridge\'s agricultural and equestrian sectors face seasonal employment patterns with farm workers, stable hands, and trail operators requiring specialized severance support.'
};

const severanceServiceData = {
  name: 'Severance & Job Loss Planning',
  slug: 'severance-job-loss-planning',
  icon: '💼',
  primaryColor: 'from-orange-600',
  secondaryColor: 'to-red-600',
  description: 'Specialized severance support for agricultural and equestrian workers.',
  benefits: [
    'Agricultural worker packages',
    'Equestrian staff severance',
    'Seasonal employment planning',
    'Farm worker transitions',
    'Stable hand support',
    'Trail operator packages',
    'Rural industry transitions',
    'Small town job planning'
  ]
};

const statsData = {
  clientsServed: '120+',
  yearsExperience: '15+',
  successRate: '95%',
  avgSavings: '$29K'
};

export default function UxbridgeSeveranceJobLossPlanningPage() {
  return (
    <LocationServiceTemplate 
      city={uxbridgeData}
      service={severanceServiceData}
      stats={statsData}
    />
  );
}