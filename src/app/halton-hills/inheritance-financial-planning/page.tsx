import { Metadata } from 'next';
import LocationServiceTemplate from '@/components/templates/LocationServiceTemplate';

export const metadata: Metadata = {
  title: 'Inheritance Tax Planning Halton Hills | Estate Planning Georgetown | ProsperBridge',
  description: "Expert estate planning for Halton Hills families. Protect Georgetown properties, Acton businesses, and manufacturing wealth for next generation.",
  keywords: 'inheritance planning Halton Hills, estate planning Georgetown, Acton wealth transfer',
};

const haltonHillsData = {
  name: 'Halton Hills',
  slug: 'halton-hills',
  population: '62,000',
  region: 'Halton Region',
  landmarks: [
    'Georgetown Hospital',
    'Halton Hills Cultural Centre',
    'Dominion Gardens Park',
    'Hungry Hollow Ravine',
    'Credit River'
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
  description: "Halton Hills families have built wealth through Georgetown real estate appreciation and Acton's manufacturing success, requiring strategic estate planning for property and business transfers."
};

const inheritanceServiceData = {
  name: 'Inheritance Financial Planning',
  slug: 'inheritance-financial-planning',
  icon: '🏛️',
  primaryColor: 'from-green-600',
  secondaryColor: 'to-teal-600',
  description: "Strategic estate planning for Georgetown properties and Acton businesses.",
  benefits: [
    'Georgetown property transfers',
    'Acton business succession',
    'Manufacturing wealth planning',
    'Small town estate strategies',
    'Family business preservation',
    'Rural property planning',
    'RRSP/TFSA optimization',
    'Multi-generation transfers'
  ]
};

const statsData = {
  clientsServed: '210+',
  yearsExperience: '15+',
  successRate: '99%',
  avgSavings: '$105K'
};

export default function HaltonHillsInheritanceFinancialPlanningPage() {
  return (
    <LocationServiceTemplate 
      city={haltonHillsData}
      service={inheritanceServiceData}
      stats={statsData}
    />
  );
}