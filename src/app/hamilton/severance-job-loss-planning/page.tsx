import { Metadata } from 'next';
import LocationServiceTemplate from '@/components/templates/LocationServiceTemplate';

export const metadata: Metadata = {
  title: 'Severance Package Planning Hamilton | Steel Worker Support | ProsperBridge',
  description: 'Expert severance planning for Hamilton steel workers and manufacturing employees. Maximize packages, navigate union agreements, and plan transitions.',
  keywords: 'severance package Hamilton, steel worker layoffs Hamilton, job loss planning',
};

const hamiltonData = {
  name: 'Hamilton',
  slug: 'hamilton',
  population: '579,000',
  region: 'Golden Horseshoe',
  landmarks: [
    'ArcelorMittal Dofasco',
    'Stelco',
    'Hamilton Health Sciences',
    'McMaster University',
    'National Steel Car'
  ],
  neighborhoods: [
    'Industrial Sector East',
    'North End',
    'Downtown Hamilton',
    'Stoney Creek Industrial',
    'Mountain Industrial Park',
    'Dundas',
    'Ancaster Business Park',
    'Waterdown',
    'Red Hill Valley',
    'Bayfront'
  ],
  description: 'Hamilton\'s steel industry restructuring and manufacturing transitions require specialized severance planning, particularly for unionized workers with complex benefit packages and pension considerations.'
};

const severanceServiceData = {
  name: 'Severance & Job Loss Planning',
  slug: 'severance-job-loss-planning',
  icon: '💼',
  primaryColor: 'from-orange-600',
  secondaryColor: 'to-red-600',
  description: 'Specialized support for Hamilton\'s steel workers and manufacturing workforce.',
  benefits: [
    'Steel worker severance expertise',
    'USW union package navigation',
    'Manufacturing sector transitions',
    'Pension bridging strategies',
    'WSIB claim coordination',
    'Healthcare benefit continuation',
    'Retraining program funding',
    'EI benefit maximization'
  ]
};

const statsData = {
  clientsServed: '520+',
  yearsExperience: '15+',
  successRate: '98%',
  avgSavings: '$35K'
};

export default function HamiltonSeveranceJobLossPlanningPage() {
  return (
    <LocationServiceTemplate 
      city={hamiltonData}
      service={severanceServiceData}
      stats={statsData}
    />
  );
}