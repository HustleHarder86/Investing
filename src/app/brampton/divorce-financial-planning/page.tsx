import { Metadata } from 'next';
import LocationServiceTemplate from '@/components/templates/LocationServiceTemplate';

export const metadata: Metadata = {
  title: 'Divorce Financial Planning Brampton | CFP® Advisor | Life Money',
  description: "Expert divorce financial planning in Brampton. Specialized support for diverse families. CFP® certified guidance for asset division and spousal support.",
  keywords: 'divorce financial planning Brampton, CFP® Brampton, separation advisor Peel Region',
};

const bramptonData = {
  name: 'Brampton',
  slug: 'brampton',
  population: '656,000',
  region: 'Peel Region',
  landmarks: [
    'Brampton Civic Hospital',
    'Rose Theatre',
    'Gage Park',
    'Chinguacousy Park',
    'Downtown Brampton'
  ],
  neighborhoods: [
    'Bramalea',
    'Heart Lake',
    'Springdale',
    'Mount Pleasant',
    "Fletcher's Creek",
    'Credit Valley',
    'Castlemore',
    'Sandalwood',
    'Downtown Brampton',
    'Bram West'
  ],
  description: "With one of Canada's most diverse populations and strong family values, Brampton families need culturally sensitive divorce financial planning that respects both traditional and modern approaches."
};

const divorceServiceData = {
  name: 'Divorce Financial Planning',
  slug: 'divorce-financial-planning',
  icon: '💔',
  primaryColor: 'from-purple-600',
  secondaryColor: 'to-pink-600',
  description: "Navigate divorce with expert financial guidance tailored to Brampton's diverse community.",
  benefits: [
    'Culturally sensitive approach',
    'Multi-generational asset planning',
    'International asset division',
    'Spousal support optimization',
    'Child support calculations',
    'Pension and RRSP division',
    'Matrimonial home decisions',
    'Tax-efficient settlements'
  ]
};

const statsData = {
  clientsServed: '400+',
  yearsExperience: '15+',
  successRate: '98%',
  avgSavings: '$47K'
};

export default function BramptonDivorceFinancialPlanningPage() {
  return (
    <LocationServiceTemplate 
      city={bramptonData}
      service={divorceServiceData}
      stats={statsData}
    />
  );
}