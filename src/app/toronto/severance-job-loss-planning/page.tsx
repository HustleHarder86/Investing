import { Metadata } from 'next';
import LocationServiceTemplate from '@/components/templates/LocationServiceTemplate';

export const metadata: Metadata = {
  title: 'Severance Package Planning Toronto | Job Loss Financial Advisor | Money in Motion',
  description: "Expert severance and job transition planning for Toronto professionals. Maximize packages, optimize taxes, manage tech layoffs. Financial planning for career transitions.",
  keywords: 'severance package Toronto, job loss financial planning Toronto, tech layoffs Toronto, career transition Toronto, severance negotiation Toronto',
  openGraph: {
    title: 'Severance & Job Loss Planning Toronto | Money in Motion',
    description: "Navigate job loss with expert financial planning in Toronto. Maximize your severance package.",
    type: 'website',
  }
};

const torontoData = {
  name: 'Toronto',
  slug: 'toronto',
  population: '2.9 million',
  region: 'Greater Toronto Area',
  landmarks: [
    'Financial District',
    'Tech Hub - King West',
    'MaRS Innovation District',
    'Liberty Village Tech Corridor',
    'North York Corporate Centre'
  ],
  neighborhoods: [
    'Financial District',
    'King West',
    'Liberty Village',
    'North York Centre',
    'Downtown Core',
    'Yorkville',
    'The Annex',
    'Leslieville',
    'Riverside',
    'Junction Triangle'
  ],
  description: "Toronto's dynamic job market, especially in tech and finance sectors, requires specialized severance planning strategies for professionals navigating career transitions."
};

const severanceServiceData = {
  name: 'Severance & Job Loss Planning',
  slug: 'severance-job-loss-planning',
  icon: '💼',
  primaryColor: 'from-orange-600',
  secondaryColor: 'to-red-600',
  description: "Strategic financial planning for job transitions and severance optimization.",
  benefits: [
    'Severance package evaluation and negotiation',
    'Tax-efficient lump sum vs. continuance planning',
    'RRSP and retiring allowance strategies',
    'Employment Insurance coordination',
    'Benefits continuation planning',
    'Stock option and RSU optimization',
    'Emergency fund management',
    'Career pivot financial planning'
  ]
};

const statsData = {
  clientsServed: '600+',
  yearsExperience: '15+',
  successRate: '97%',
  avgSavings: '$35K'
};

export default function TorontoSeveranceJobLossPlanningPage() {
  return (
    <LocationServiceTemplate 
      city={torontoData}
      service={severanceServiceData}
      stats={statsData}
    />
  );
}