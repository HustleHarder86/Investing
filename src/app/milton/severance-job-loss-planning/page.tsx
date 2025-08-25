import { Metadata } from 'next';
import LocationServiceTemplate from '@/components/templates/LocationServiceTemplate';

export const metadata: Metadata = {
  title: 'Severance Package Planning Milton | Young Professional Support | Money in Motion',
  description: "Expert severance planning for Milton's young professionals and growing families. Navigate job loss with mortgage obligations and family responsibilities.",
  keywords: 'severance package Milton, job loss young families, career transition Milton Halton',
};

const miltonData = {
  name: 'Milton',
  slug: 'milton',
  population: '132,000',
  region: 'Halton Region',
  landmarks: [
    'Gordon Krantz Milton Centre',
    'Milton GO Station',
    'Milton CrossIron Mills',
    'Milton Education Village',
    'Mattamy Athletic Centre'
  ],
  neighborhoods: [
    'Dempsey',
    'Willmott',
    'Clarke',
    'Harrison',
    'Scott',
    'Beaty',
    'Cobban',
    'Bristol Survey',
    'Boyne Survey',
    'Ford'
  ],
  description: "Milton's young professionals with new mortgages and growing families face unique challenges during job loss, requiring careful planning to maintain financial stability during transitions."
};

const severanceServiceData = {
  name: 'Severance & Job Loss Planning',
  slug: 'severance-job-loss-planning',
  icon: '💼',
  primaryColor: 'from-orange-600',
  secondaryColor: 'to-red-600',
  description: "Navigate job loss with specialized support for young families and new homeowners.",
  benefits: [
    'Young family cash flow planning',
    'Mortgage payment strategies',
    'Emergency fund optimization',
    'Childcare cost management',
    'EI family supplement',
    'Spousal income planning',
    'RESP contribution decisions',
    'Career pivot financing'
  ]
};

const statsData = {
  clientsServed: '190+',
  yearsExperience: '15+',
  successRate: '97%',
  avgSavings: '$26K'
};

export default function MiltonSeveranceJobLossPlanningPage() {
  return (
    <LocationServiceTemplate 
      city={miltonData}
      service={severanceServiceData}
      stats={statsData}
    />
  );
}