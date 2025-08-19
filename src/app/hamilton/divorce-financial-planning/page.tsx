import { Metadata } from 'next';
import LocationServiceTemplate from '@/components/templates/LocationServiceTemplate';

export const metadata: Metadata = {
  title: 'Divorce Financial Planning Hamilton | CFP® Advisor | ProsperBridge',
  description: 'Expert divorce financial planning in Hamilton. Specialized support for steel workers, healthcare professionals, and manufacturing families. CFP® certified.',
  keywords: 'divorce financial planning Hamilton, CFP® Hamilton, separation advisor Golden Horseshoe',
};

const hamiltonData = {
  name: 'Hamilton',
  slug: 'hamilton',
  population: '579,000',
  region: 'Golden Horseshoe',
  landmarks: [
    'Hamilton General Hospital',
    'McMaster University',
    'ArcelorMittal Dofasco',
    'Hamilton City Hall',
    'Dundurn Castle'
  ],
  neighborhoods: [
    'Downtown Hamilton',
    'Westdale',
    'Ancaster',
    'Dundas',
    'Stoney Creek',
    'Waterdown',
    'Mountain',
    'Flamborough',
    'Glanbrook',
    'Binbrook'
  ],
  description: 'Hamilton\'s industrial heritage and healthcare sector create unique divorce financial challenges, from steel worker pensions to medical professional practices requiring specialized division strategies.'
};

const divorceServiceData = {
  name: 'Divorce Financial Planning',
  slug: 'divorce-financial-planning',
  icon: '💔',
  primaryColor: 'from-purple-600',
  secondaryColor: 'to-pink-600',
  description: 'Navigate divorce with expertise in Hamilton\'s industrial and healthcare sectors.',
  benefits: [
    'Steel worker pension division',
    'Healthcare professional practices',
    'Union benefit considerations',
    'Industrial injury settlements',
    'McMaster pension plans',
    'Real estate in Hamilton market',
    'Spousal support calculations',
    'Manufacturing severance coordination'
  ]
};

const statsData = {
  clientsServed: '380+',
  yearsExperience: '15+',
  successRate: '97%',
  avgSavings: '$52K'
};

export default function HamiltonDivorceFinancialPlanningPage() {
  return (
    <LocationServiceTemplate 
      city={hamiltonData}
      service={divorceServiceData}
      stats={statsData}
    />
  );
}