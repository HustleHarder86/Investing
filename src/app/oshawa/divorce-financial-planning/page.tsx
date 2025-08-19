import { Metadata } from 'next';
import LocationServiceTemplate from '@/components/templates/LocationServiceTemplate';

export const metadata: Metadata = {
  title: 'Divorce Financial Planning Oshawa | Automotive Worker CFP® | ProsperBridge',
  description: "Expert divorce financial planning for Oshawa automotive families. Navigate GM pensions, union benefits, and skilled trades income division.",
  keywords: 'divorce financial planning Oshawa, automotive worker divorce, GM pension division Durham',
};

const oshawaData = {
  name: 'Oshawa',
  slug: 'oshawa',
  population: '175,000',
  region: 'Durham Region',
  landmarks: [
    'General Motors Canada HQ',
    'Ontario Tech University',
    'Durham College',
    'Oshawa Centre',
    'Parkwood Estate'
  ],
  neighborhoods: [
    'Downtown Oshawa',
    'North Oshawa',
    'Kedron',
    'Windfields',
    "O'Neill",
    'Vanier',
    'Lakeview',
    'McLaughlin',
    'Samac',
    'Northglen'
  ],
  description: "Oshawa's automotive workforce and skilled trades face unique divorce challenges involving GM pensions, Unifor benefits, shift premiums, and decades of accumulated union advantages."
};

const divorceServiceData = {
  name: 'Divorce Financial Planning',
  slug: 'divorce-financial-planning',
  icon: '💔',
  primaryColor: 'from-purple-600',
  secondaryColor: 'to-pink-600',
  description: "Navigate divorce with deep expertise in automotive industry compensation.",
  benefits: [
    'GM pension division expertise',
    'Unifor benefit allocation',
    'Skilled trades income analysis',
    'Shift premium calculations',
    'COLA adjustment planning',
    'Retiree benefit division',
    'Union seniority valuations',
    'Auto sector severance rights'
  ]
};

const statsData = {
  clientsServed: '420+',
  yearsExperience: '15+',
  successRate: '97%',
  avgSavings: '$55K'
};

export default function OshawaDivorceFinancialPlanningPage() {
  return (
    <LocationServiceTemplate 
      city={oshawaData}
      service={divorceServiceData}
      stats={statsData}
    />
  );
}