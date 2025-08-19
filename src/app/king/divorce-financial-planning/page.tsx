import { Metadata } from 'next';
import LocationServiceTemplate from '@/components/templates/LocationServiceTemplate';

export const metadata: Metadata = {
  title: 'Divorce Financial Planning King Township | Ultra High Net Worth CDFA | ProsperBridge',
  description: 'Expert divorce financial planning for King Township\'s ultra-wealthy. Navigate estate divisions, equestrian properties, and multi-million dollar settlements.',
  keywords: 'divorce King Township, ultra high net worth divorce, equestrian property division',
};

const kingData = {
  name: 'King',
  slug: 'king',
  population: '27,000',
  region: 'York Region',
  landmarks: [
    'King City Golf Club',
    'Kingbridge Conference Centre',
    'Cold Creek Conservation',
    'Seneca College King Campus',
    'Mary Lake Monastery'
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
  description: 'King Township\'s ultra-wealthy residents with estates, equestrian facilities, and significant business holdings face Canada\'s most complex divorce scenarios requiring elite financial expertise.'
};

const divorceServiceData = {
  name: 'Divorce Financial Planning',
  slug: 'divorce-financial-planning',
  icon: '💔',
  primaryColor: 'from-purple-600',
  secondaryColor: 'to-pink-600',
  description: 'Navigate ultra high net worth divorce with expertise in estates and equestrian assets.',
  benefits: [
    'Multi-million estate divisions',
    'Equestrian facility valuations',
    'Horse breeding operations',
    'Private company divisions',
    'International asset tracing',
    'Family office unwinding',
    'Trust dissolution strategies',
    'Art & collectible divisions'
  ]
};

const statsData = {
  clientsServed: '120+',
  yearsExperience: '15+',
  successRate: '99%',
  avgSavings: '$185K'
};

export default function KingDivorceFinancialPlanningPage() {
  return (
    <LocationServiceTemplate 
      city={kingData}
      service={divorceServiceData}
      stats={statsData}
    />
  );
}