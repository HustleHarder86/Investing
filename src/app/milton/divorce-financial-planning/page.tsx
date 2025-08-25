import { Metadata } from 'next';
import LocationServiceTemplate from '@/components/templates/LocationServiceTemplate';

export const metadata: Metadata = {
  title: 'Divorce Financial Planning Milton | Young Family Specialist | Money in Motion',
  description: "Expert divorce financial planning for Milton's young families. Specialized in child support, daycare costs, and growing family asset division.",
  keywords: 'divorce financial planning Milton, young family divorce, child support Milton Halton',
};

const miltonData = {
  name: 'Milton',
  slug: 'milton',
  population: '132,000',
  region: 'Halton Region',
  landmarks: [
    'Milton District Hospital',
    'Mattamy National Cycling Centre',
    'Country Heritage Park',
    'Conservation Halton',
    'Milton Mall'
  ],
  neighborhoods: [
    'Dempsey',
    'Willmott',
    'Clarke',
    'Harrison',
    'Scott',
    'Beaty',
    'Cobban',
    'Bristol Survey',
    'Boyne Survey',
    'Ford'
  ],
  description: "As Canada's fastest-growing municipality with young families, Milton divorces often involve recent home purchases, young children, and dual-income professionals requiring careful financial planning."
};

const divorceServiceData = {
  name: 'Divorce Financial Planning',
  slug: 'divorce-financial-planning',
  icon: '💔',
  primaryColor: 'from-purple-600',
  secondaryColor: 'to-pink-600',
  description: "Navigate divorce with expertise in young family dynamics and growing assets.",
  benefits: [
    'Young family specialization',
    'Child support calculations',
    'Daycare cost considerations',
    'New mortgage qualifications',
    'RESP division strategies',
    'Parental leave impacts',
    'Future income projections',
    'Co-parenting expense planning'
  ]
};

const statsData = {
  clientsServed: '220+',
  yearsExperience: '15+',
  successRate: '97%',
  avgSavings: '$42K'
};

export default function MiltonDivorceFinancialPlanningPage() {
  return (
    <LocationServiceTemplate 
      city={miltonData}
      service={divorceServiceData}
      stats={statsData}
    />
  );
}