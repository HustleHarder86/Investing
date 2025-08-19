import { Metadata } from 'next';
import LocationServiceTemplate from '@/components/templates/LocationServiceTemplate';

export const metadata: Metadata = {
  title: 'Divorce Financial Planning Caledon | Rural Estate CFP® | ProsperBridge',
  description: 'Expert divorce financial planning for Caledon families. Navigate rural property divisions, aggregate industry incomes, and Bolton\'s growing households.',
  keywords: 'divorce financial planning Caledon, rural property division, Bolton divorce advisor',
};

const caledonData = {
  name: 'Caledon',
  slug: 'caledon',
  population: '76,000',
  region: 'Peel Region',
  landmarks: [
    'Forks of the Credit',
    'Cheltenham Badlands',
    'Albion Hills Conservation',
    'Caledon Ski Club',
    'Glen Haffy Conservation'
  ],
  neighborhoods: [
    'Bolton',
    'Caledon East',
    'Caledon Village',
    'Mayfield West',
    'Cheltenham',
    'Inglewood',
    'Alton',
    'Belfountain',
    'Palgrave',
    'Mono Mills'
  ],
  description: 'Caledon\'s mix of rural estates, aggregate industry workers, and Bolton\'s suburban families creates diverse divorce scenarios from acreage divisions to trucking business separations.'
};

const divorceServiceData = {
  name: 'Divorce Financial Planning',
  slug: 'divorce-financial-planning',
  icon: '💔',
  primaryColor: 'from-purple-600',
  secondaryColor: 'to-pink-600',
  description: 'Navigate divorce with expertise in rural properties and aggregate industry incomes.',
  benefits: [
    'Rural estate valuations',
    'Acreage property division',
    'Aggregate industry income',
    'Trucking business separation',
    'Farm asset division',
    'Bolton property strategies',
    'Equipment valuations',
    'Greenbelt considerations'
  ]
};

const statsData = {
  clientsServed: '210+',
  yearsExperience: '15+',
  successRate: '96%',
  avgSavings: '$52K'
};

export default function CaledonDivorceFinancialPlanningPage() {
  return (
    <LocationServiceTemplate 
      city={caledonData}
      service={divorceServiceData}
      stats={statsData}
    />
  );
}