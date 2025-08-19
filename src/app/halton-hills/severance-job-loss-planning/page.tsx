import { Metadata } from 'next';
import LocationServiceTemplate from '@/components/templates/LocationServiceTemplate';

export const metadata: Metadata = {
  title: 'Severance Package Planning Halton Hills | Manufacturing Worker Support | ProsperBridge',
  description: "Expert severance planning for Halton Hills manufacturing workers. Navigate factory closures and maximize packages in Georgetown and Acton.",
  keywords: 'severance Halton Hills, manufacturing layoffs Georgetown, job loss Acton',
};

const haltonHillsData = {
  name: 'Halton Hills',
  slug: 'halton-hills',
  population: '62,000',
  region: 'Halton Region',
  landmarks: [
    'Georgetown GO Station',
    'Acton GO Station',
    'Halton Hills Town Hall',
    'Georgetown Library',
    'Acton Arena'
  ],
  neighborhoods: [
    'Georgetown',
    'Acton',
    'Glen Williams',
    'Limehouse',
    'Norval',
    'Stewarttown',
    'Ashgrove',
    'Speyside',
    'Silver Creek',
    'Bannockburn'
  ],
  description: "Halton Hills' manufacturing sector faces ongoing restructuring with factory closures and modernization affecting workers in Georgetown and Acton requiring severance support."
};

const severanceServiceData = {
  name: 'Severance & Job Loss Planning',
  slug: 'severance-job-loss-planning',
  icon: '💼',
  primaryColor: 'from-orange-600',
  secondaryColor: 'to-red-600',
  description: "Specialized severance support for manufacturing workers and local professionals.",
  benefits: [
    'Manufacturing severance packages',
    'Factory closure support',
    'Union negotiation assistance',
    'Skilled trades transitions',
    'Retraining program access',
    'EI optimization strategies',
    'Pension bridge planning',
    'Career transition support'
  ]
};

const statsData = {
  clientsServed: '220+',
  yearsExperience: '15+',
  successRate: '97%',
  avgSavings: '$34K'
};

export default function HaltonHillsSeveranceJobLossPlanningPage() {
  return (
    <LocationServiceTemplate 
      city={haltonHillsData}
      service={severanceServiceData}
      stats={statsData}
    />
  );
}