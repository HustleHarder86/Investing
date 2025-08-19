import { Metadata } from 'next';
import LocationServiceTemplate from '@/components/templates/LocationServiceTemplate';

export const metadata: Metadata = {
  title: 'Divorce Financial Planning Whitby | Durham Professional CFP® | ProsperBridge',
  description: 'Expert divorce financial planning for Whitby professionals and growing families. Navigate complex property division and dual-income household separations.',
  keywords: 'divorce financial planning Whitby, CFP® Durham Region, separation advisor Whitby',
};

const whitbyData = {
  name: 'Whitby',
  slug: 'whitby',
  population: '138,000',
  region: 'Durham Region',
  landmarks: [
    'Whitby Harbour Marina',
    'Cullen Central Park',
    'Heber Down Conservation',
    'Whitby Entertainment Centrum',
    'Station Gallery'
  ],
  neighborhoods: [
    'Downtown Whitby',
    'Port Whitby',
    'Brooklin',
    'Pringle Creek',
    'Williamsburg',
    'Rolling Acres',
    'Taunton North',
    'Lynde Creek',
    'West Lynde',
    'Ashburn'
  ],
  description: 'Whitby\'s rapid growth and young professional families create complex divorce scenarios involving new mortgages, daycare arrangements, and competing career demands requiring sophisticated financial planning.'
};

const divorceServiceData = {
  name: 'Divorce Financial Planning',
  slug: 'divorce-financial-planning',
  icon: '💔',
  primaryColor: 'from-purple-600',
  secondaryColor: 'to-pink-600',
  description: 'Navigate divorce with expertise in suburban family dynamics and professional careers.',
  benefits: [
    'New construction home division',
    'Daycare cost allocation',
    'Commuter expense planning',
    'Durham property valuations',
    'Professional income analysis',
    'RESP division strategies',
    'Mortgage assumption guidance',
    'Family business separation'
  ]
};

const statsData = {
  clientsServed: '310+',
  yearsExperience: '15+',
  successRate: '97%',
  avgSavings: '$45K'
};

export default function WhitbyDivorceFinancialPlanningPage() {
  return (
    <LocationServiceTemplate 
      city={whitbyData}
      service={divorceServiceData}
      stats={statsData}
    />
  );
}