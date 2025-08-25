import { Metadata } from 'next';
import LocationServiceTemplate from '@/components/templates/LocationServiceTemplate';

export const metadata: Metadata = {
  title: 'Severance Package Planning King Township | Estate Worker Support | Money in Motion',
  description: "Expert severance planning for King Township estate workers and luxury service professionals. Navigate unique employment transitions in ultra-wealthy households.",
  keywords: 'severance King Township, estate worker packages, luxury service job loss',
};

const kingData = {
  name: 'King',
  slug: 'king',
  population: '27,000',
  region: 'York Region',
  landmarks: [
    'King City GO Station',
    'King Township Municipal Centre',
    'Seneca College King Campus',
    'Kingbridge Centre',
    'Country Day School'
  ],
  neighborhoods: [
    'King City',
    'Nobleton',
    'Schomberg',
    'Kettleby',
    'Lloydtown',
    'Laskay',
    'Pottageville',
    'Eversley',
    'Snowball',
    'Strange'
  ],
  description: "King Township's unique employment landscape includes estate management, equestrian operations, and luxury services, creating specialized severance situations for household and agricultural workers."
};

const severanceServiceData = {
  name: 'Severance & Job Loss Planning',
  slug: 'severance-job-loss-planning',
  icon: '💼',
  primaryColor: 'from-orange-600',
  secondaryColor: 'to-red-600',
  description: "Specialized severance support for estate workers and luxury service professionals.",
  benefits: [
    'Estate worker severance',
    'Household staff packages',
    'Equestrian staff transitions',
    'Agricultural worker support',
    'Live-in employee rights',
    'Accommodation transitions',
    'Confidentiality agreements',
    'Reference negotiation'
  ]
};

const statsData = {
  clientsServed: '110+',
  yearsExperience: '15+',
  successRate: '96%',
  avgSavings: '$35K'
};

export default function KingSeveranceJobLossPlanningPage() {
  return (
    <LocationServiceTemplate 
      city={kingData}
      service={severanceServiceData}
      stats={statsData}
    />
  );
}