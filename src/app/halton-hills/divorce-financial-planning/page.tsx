import { Metadata } from 'next';
import LocationServiceTemplate from '@/components/templates/LocationServiceTemplate';

export const metadata: Metadata = {
  title: 'Divorce Financial Planning Halton Hills | Georgetown CFP® | ProsperBridge',
  description: 'Expert divorce financial planning for Halton Hills families. Navigate Georgetown property divisions and Acton\'s working family separations.',
  keywords: 'divorce financial planning Halton Hills, Georgetown divorce advisor, Acton separation planning',
};

const haltonHillsData = {
  name: 'Halton Hills',
  slug: 'halton-hills',
  population: '62,000',
  region: 'Halton Region',
  landmarks: [
    'Georgetown GO Station',
    'Acton Town Hall',
    'Georgetown Fairgrounds',
    'Willow Park Ecology Centre',
    'Terra Cotta Conservation'
  ],
  neighborhoods: [
    'Georgetown',
    'Acton',
    'Glen Williams',
    'Limehouse',
    'Norval',
    'Stewarttown',
    'Ashgrove',
    'Speyside',
    'Silver Creek',
    'Bannockburn'
  ],
  description: 'Halton Hills\' mix of Georgetown professionals and Acton\'s manufacturing families creates diverse divorce scenarios from GO Train commuters to skilled trades workers.'
};

const divorceServiceData = {
  name: 'Divorce Financial Planning',
  slug: 'divorce-financial-planning',
  icon: '💔',
  primaryColor: 'from-purple-600',
  secondaryColor: 'to-pink-600',
  description: 'Navigate divorce with expertise in suburban properties and manufacturing incomes.',
  benefits: [
    'Georgetown property division',
    'Acton home valuations',
    'Manufacturing income analysis',
    'GO commuter considerations',
    'Small town business splits',
    'Rural property strategies',
    'Pension division planning',
    'Family support calculations'
  ]
};

const statsData = {
  clientsServed: '190+',
  yearsExperience: '15+',
  successRate: '97%',
  avgSavings: '$43K'
};

export default function HaltonHillsDivorceFinancialPlanningPage() {
  return (
    <LocationServiceTemplate 
      city={haltonHillsData}
      service={divorceServiceData}
      stats={statsData}
    />
  );
}