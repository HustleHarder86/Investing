import { Metadata } from 'next';
import LocationServiceTemplate from '@/components/templates/LocationServiceTemplate';

export const metadata: Metadata = {
  title: 'Inheritance Tax Planning Brampton | Estate Planning | Life Money',
  description: "Expert inheritance and estate planning for Brampton families. Minimize taxes, protect multi-generational wealth. Serving Peel Region's diverse communities.",
  keywords: 'inheritance tax planning Brampton, estate planning Brampton, probate Peel Region',
};

const bramptonData = {
  name: 'Brampton',
  slug: 'brampton',
  population: '656,000',
  region: 'Peel Region',
  landmarks: [
    'Peel Region Courthouse',
    'Brampton City Hall',
    'Gore Meadows Community Centre',
    'Cassie Campbell Community Centre',
    'CAA Centre'
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
  description: "Brampton's multi-cultural families often have complex international estate planning needs, requiring expertise in cross-border inheritance and multi-generational wealth transfer strategies."
};

const inheritanceServiceData = {
  name: 'Inheritance Financial Planning',
  slug: 'inheritance-financial-planning',
  icon: '🏛️',
  primaryColor: 'from-green-600',
  secondaryColor: 'to-teal-600',
  description: "Strategic estate planning for Brampton's diverse multi-generational families.",
  benefits: [
    'Cross-border estate planning',
    'Multi-generational wealth transfer',
    'Islamic inheritance planning',
    'Hindu succession planning',
    'Probate fee minimization',
    'Trust structures for families',
    'Charitable giving strategies',
    'Principal residence planning'
  ]
};

const statsData = {
  clientsServed: '500+',
  yearsExperience: '15+',
  successRate: '99%',
  avgSavings: '$125K'
};

export default function BramptonInheritanceFinancialPlanningPage() {
  return (
    <LocationServiceTemplate 
      city={bramptonData}
      service={inheritanceServiceData}
      stats={statsData}
    />
  );
}