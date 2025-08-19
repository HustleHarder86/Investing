import { Metadata } from 'next';
import LocationServiceTemplate from '@/components/templates/LocationServiceTemplate';

export const metadata: Metadata = {
  title: 'Inheritance Tax Planning Hamilton | Estate Planning | ProsperBridge',
  description: "Expert inheritance and estate planning for Hamilton families. Protect industrial pensions, real estate portfolios, and multi-generational wealth.",
  keywords: 'inheritance tax planning Hamilton, estate planning Hamilton, probate Golden Horseshoe',
};

const hamiltonData = {
  name: 'Hamilton',
  slug: 'hamilton',
  population: '579,000',
  region: 'Golden Horseshoe',
  landmarks: [
    'Hamilton Courthouse',
    "St. Joseph's Healthcare",
    'Hamilton Health Sciences',
    'Royal Botanical Gardens',
    'Canadian Warplane Heritage Museum'
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
  description: "Hamilton's aging industrial workforce and valuable real estate market create complex estate planning needs, from preserving steel worker pensions to managing substantial property portfolios."
};

const inheritanceServiceData = {
  name: 'Inheritance Financial Planning',
  slug: 'inheritance-financial-planning',
  icon: '🏛️',
  primaryColor: 'from-green-600',
  secondaryColor: 'to-teal-600',
  description: "Strategic estate planning for Hamilton's industrial families and property owners.",
  benefits: [
    'Steel worker pension preservation',
    'Industrial benefit transfers',
    'Hamilton real estate strategies',
    'Healthcare professional estates',
    'Multi-property portfolios',
    'Cottage and recreational properties',
    'Business succession planning',
    'Charitable giving to McMaster'
  ]
};

const statsData = {
  clientsServed: '420+',
  yearsExperience: '15+',
  successRate: '99%',
  avgSavings: '$135K'
};

export default function HamiltonInheritanceFinancialPlanningPage() {
  return (
    <LocationServiceTemplate 
      city={hamiltonData}
      service={inheritanceServiceData}
      stats={statsData}
    />
  );
}