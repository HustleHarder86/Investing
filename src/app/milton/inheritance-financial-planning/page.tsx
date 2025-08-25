import { Metadata } from 'next';
import LocationServiceTemplate from '@/components/templates/LocationServiceTemplate';

export const metadata: Metadata = {
  title: 'Inheritance Tax Planning Milton | Young Family Estate Planning | Life Money',
  description: "Expert estate planning for Milton's growing families. Protect your children's future with guardian planning, RESPs, and life insurance strategies.",
  keywords: 'inheritance tax planning Milton, young family estate planning, guardian planning Halton',
};

const miltonData = {
  name: 'Milton',
  slug: 'milton',
  population: '132,000',
  region: 'Halton Region',
  landmarks: [
    'Milton Education Village',
    'Wilfrid Laurier University Milton',
    'Milton Sports Centre',
    'Kelso Conservation Area',
    'Crawford Lake'
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
  description: "Milton's young families require forward-thinking estate planning focused on guardian appointments, education funding, and protecting growing assets for their children's future."
};

const inheritanceServiceData = {
  name: 'Inheritance Financial Planning',
  slug: 'inheritance-financial-planning',
  icon: '🏛️',
  primaryColor: 'from-green-600',
  secondaryColor: 'to-teal-600',
  description: "Forward-thinking estate planning for Milton's young and growing families.",
  benefits: [
    'Guardian appointment planning',
    "Children's trust structures",
    'RESP maximization strategies',
    'Life insurance planning',
    'Disability insurance coordination',
    'First home preservation',
    'Education funding trusts',
    'Young family tax strategies'
  ]
};

const statsData = {
  clientsServed: '280+',
  yearsExperience: '15+',
  successRate: '99%',
  avgSavings: '$95K'
};

export default function MiltonInheritanceFinancialPlanningPage() {
  return (
    <LocationServiceTemplate 
      city={miltonData}
      service={inheritanceServiceData}
      stats={statsData}
    />
  );
}