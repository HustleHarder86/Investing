import { Metadata } from 'next';
import LocationServiceTemplate from '@/components/templates/LocationServiceTemplate';

export const metadata: Metadata = {
  title: 'Severance Package Planning Newmarket | Healthcare Worker Support | ProsperBridge',
  description: "Expert severance planning for Newmarket healthcare workers and professionals. Navigate hospital restructuring and maximize packages from Southlake and York Region.",
  keywords: 'severance Newmarket, healthcare layoffs Southlake, job loss planning York Region',
};

const newmarketData = {
  name: 'Newmarket',
  slug: 'newmarket',
  population: '88,000',
  region: 'York Region',
  landmarks: [
    'Southlake Regional Health Centre',
    'Newmarket GO Station',
    'York Region Administrative Centre',
    'Newmarket Health Centre',
    'Upper Canada Mall'
  ],
  neighborhoods: [
    'Historic Downtown',
    'Stonehaven',
    'Woodland Hill',
    'Glenway',
    'Summerhill',
    'Bristol-London',
    'Huron Heights',
    'Gorham',
    'Armitage',
    'Madsen'
  ],
  description: "Newmarket's large healthcare sector centered around Southlake Regional Health Centre faces restructuring and modernization, affecting thousands of healthcare workers and support staff."
};

const severanceServiceData = {
  name: 'Severance & Job Loss Planning',
  slug: 'severance-job-loss-planning',
  icon: '💼',
  primaryColor: 'from-orange-600',
  secondaryColor: 'to-red-600',
  description: "Specialized severance support for healthcare workers and York Region professionals.",
  benefits: [
    'Healthcare severance expertise',
    'Hospital restructuring support',
    'HOOPP pension continuity',
    'Nurse transition planning',
    'Allied health packages',
    'Public sector negotiations',
    'Union benefit navigation',
    'Career retraining funds'
  ]
};

const statsData = {
  clientsServed: '320+',
  yearsExperience: '15+',
  successRate: '97%',
  avgSavings: '$41K'
};

export default function NewmarketSeveranceJobLossPlanningPage() {
  return (
    <LocationServiceTemplate 
      city={newmarketData}
      service={severanceServiceData}
      stats={statsData}
    />
  );
}