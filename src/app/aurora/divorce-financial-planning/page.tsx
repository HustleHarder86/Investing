import { Metadata } from 'next';
import LocationServiceTemplate from '@/components/templates/LocationServiceTemplate';

export const metadata: Metadata = {
  title: 'Divorce Financial Planning Aurora | Affluent Family CFP® | ProsperBridge',
  description: 'Expert divorce financial planning for Aurora\'s affluent families. Navigate high-asset divorces, executive compensation, and luxury property division.',
  keywords: 'divorce financial planning Aurora, high net worth divorce York, CFP® Aurora Ontario',
};

const auroraData = {
  name: 'Aurora',
  slug: 'aurora',
  population: '62,000',
  region: 'York Region',
  landmarks: [
    'Aurora Town Park',
    'Hillary House',
    'Aurora Cultural Centre',
    'St. Andrew\'s College',
    'Aurora Family Leisure Complex'
  ],
  neighborhoods: [
    'Aurora Heights',
    'Aurora Grove',
    'Aurora Village',
    'Bayview Northeast',
    'Bayview Wellington',
    'Beacon Hall Golf Club',
    'Highland Gate',
    'Hills of St. Andrew',
    'Town Park',
    'Wellington Village'
  ],
  description: 'Aurora\'s affluent families face complex high-asset divorces involving executive compensation packages, private school considerations, and luxury estate divisions requiring sophisticated strategies.'
};

const divorceServiceData = {
  name: 'Divorce Financial Planning',
  slug: 'divorce-financial-planning',
  icon: '💔',
  primaryColor: 'from-purple-600',
  secondaryColor: 'to-pink-600',
  description: 'Navigate high-asset divorce with expertise in executive compensation and estates.',
  benefits: [
    'Executive compensation division',
    'Stock option strategies',
    'Luxury estate valuations',
    'Private school agreements',
    'Golf club memberships',
    'Investment portfolio splits',
    'Business ownership division',
    'Trust fund considerations'
  ]
};

const statsData = {
  clientsServed: '180+',
  yearsExperience: '15+',
  successRate: '98%',
  avgSavings: '$75K'
};

export default function AuroraDivorceFinancialPlanningPage() {
  return (
    <LocationServiceTemplate 
      city={auroraData}
      service={divorceServiceData}
      stats={statsData}
    />
  );
}