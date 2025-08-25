import { Metadata } from 'next';
import LocationServiceTemplate from '@/components/templates/LocationServiceTemplate';

export const metadata: Metadata = {
  title: 'Business Sale Planning Hamilton | Manufacturing M&A | Life Money',
  description: "Strategic business sale planning for Hamilton manufacturers and industrial companies. Expert guidance for steel industry suppliers and healthcare businesses.",
  keywords: 'business sale planning Hamilton, selling manufacturing business Hamilton, M&A advisor',
};

const hamiltonData = {
  name: 'Hamilton',
  slug: 'hamilton',
  population: '579,000',
  region: 'Golden Horseshoe',
  landmarks: [
    'ArcelorMittal Dofasco',
    'Stelco',
    'Hamilton Port Authority',
    'McMaster Innovation Park',
    'Red Hill Business Park'
  ],
  neighborhoods: [
    'Industrial Sector East',
    'Bayfront Industrial',
    'Red Hill Business Park',
    'Airport Business Park',
    'Stoney Creek Business Park',
    'Ancaster Business Park',
    'Dundas Peak Industrial',
    'Waterdown Commercial',
    'Mount Hope Industrial',
    'Flamborough Business Centre'
  ],
  description: "Hamilton's manufacturing and steel industry heritage creates unique business sale opportunities, from industrial suppliers to healthcare service companies supporting the region's major institutions."
};

const businessServiceData = {
  name: 'Business Sale Planning',
  slug: 'business-sale-planning',
  icon: '🏢',
  primaryColor: 'from-blue-600',
  secondaryColor: 'to-indigo-600',
  description: "Expert M&A guidance for Hamilton's manufacturing and industrial businesses.",
  benefits: [
    'Manufacturing business valuations',
    'Steel industry supplier sales',
    'Healthcare service companies',
    'Industrial equipment dealers',
    'Construction company sales',
    'Family business succession',
    'Capital gains optimization',
    'Environmental liability planning'
  ]
};

const statsData = {
  clientsServed: '280+',
  yearsExperience: '15+',
  successRate: '96%',
  avgSavings: '$310K'
};

export default function HamiltonBusinessSalePlanningPage() {
  return (
    <LocationServiceTemplate 
      city={hamiltonData}
      service={businessServiceData}
      stats={statsData}
    />
  );
}