import { Metadata } from 'next';
import LocationServiceTemplate from '@/components/templates/LocationServiceTemplate';

export const metadata: Metadata = {
  title: 'Divorce Financial Planning Uxbridge | Rural Durham CDFA | ProsperBridge',
  description: 'Expert divorce financial planning for Uxbridge families. Navigate rural property divisions, equestrian assets, and trail town household separations.',
  keywords: 'divorce financial planning Uxbridge, rural divorce Durham, equestrian property division',
};

const uxbridgeData = {
  name: 'Uxbridge',
  slug: 'uxbridge',
  population: '22,000',
  region: 'Durham Region',
  landmarks: [
    'Uxbridge Historical Centre',
    'Durham Forest',
    'Elgin Pond',
    'Uxbridge Music Hall',
    'Trans Canada Trail'
  ],
  neighborhoods: [
    'Downtown Uxbridge',
    'Quaker Village',
    'Zephyr',
    'Sandford',
    'Leaskdale',
    'Udora',
    'Siloam',
    'Goodwood',
    'Glen Major',
    'Coppins Corners'
  ],
  description: 'Uxbridge\'s "Trail Capital of Canada" status and equestrian culture create unique divorce scenarios involving rural estates, horse farms, and heritage properties requiring specialized expertise.'
};

const divorceServiceData = {
  name: 'Divorce Financial Planning',
  slug: 'divorce-financial-planning',
  icon: '💔',
  primaryColor: 'from-purple-600',
  secondaryColor: 'to-pink-600',
  description: 'Navigate divorce with expertise in rural properties and equestrian assets.',
  benefits: [
    'Rural estate divisions',
    'Horse farm valuations',
    'Equestrian facility splits',
    'Heritage property strategies',
    'Trail town business division',
    'Agricultural asset allocation',
    'Conservation land planning',
    'Small town considerations'
  ]
};

const statsData = {
  clientsServed: '140+',
  yearsExperience: '15+',
  successRate: '96%',
  avgSavings: '$46K'
};

export default function UxbridgeDivorceFinancialPlanningPage() {
  return (
    <LocationServiceTemplate 
      city={uxbridgeData}
      service={divorceServiceData}
      stats={statsData}
    />
  );
}