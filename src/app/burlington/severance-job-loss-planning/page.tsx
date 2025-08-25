import { Metadata } from 'next';
import LocationServiceTemplate from '@/components/templates/LocationServiceTemplate';

export const metadata: Metadata = {
  title: 'Severance Package Planning Burlington | Pre-Retirement Transitions | Money in Motion',
  description: "Expert severance planning for Burlington professionals and pre-retirees. Navigate early retirement packages and career transitions in Halton Region.",
  keywords: 'severance package Burlington, early retirement planning, job loss pre-retirement Halton',
};

const burlingtonData = {
  name: 'Burlington',
  slug: 'burlington',
  population: '186,000',
  region: 'Halton Region',
  landmarks: [
    'Joseph Brant Hospital',
    'Cogeco Corporate Office',
    'Evertz Technologies',
    'Boehringer Ingelheim',
    'Crossroads Centre'
  ],
  neighborhoods: [
    'Downtown Burlington',
    'Aldershot',
    'Roseland',
    'Shoreacres',
    'Tyandaga',
    'Millcroft',
    'Headon Forest',
    'Palmer',
    'Brant Hills',
    'Orchard'
  ],
  description: "Burlington's mature workforce often faces early retirement packages and pre-retirement severances, requiring careful planning to bridge the gap to full retirement benefits."
};

const severanceServiceData = {
  name: 'Severance & Job Loss Planning',
  slug: 'severance-job-loss-planning',
  icon: '💼',
  primaryColor: 'from-orange-600',
  secondaryColor: 'to-red-600',
  description: "Navigate pre-retirement transitions with specialized severance planning expertise.",
  benefits: [
    'Early retirement packages',
    'Bridge to retirement planning',
    'Pension bridging strategies',
    'Healthcare continuation to 65',
    'RRSP contribution timing',
    'CPP/OAS optimization',
    'Part-time work transitions',
    'Consulting arrangement setup'
  ]
};

const statsData = {
  clientsServed: '310+',
  yearsExperience: '15+',
  successRate: '98%',
  avgSavings: '$38K'
};

export default function BurlingtonSeveranceJobLossPlanningPage() {
  return (
    <LocationServiceTemplate 
      city={burlingtonData}
      service={severanceServiceData}
      stats={statsData}
    />
  );
}