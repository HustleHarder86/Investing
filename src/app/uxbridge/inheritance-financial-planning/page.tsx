import { Metadata } from 'next';
import LocationServiceTemplate from '@/components/templates/LocationServiceTemplate';

export const metadata: Metadata = {
  title: 'Inheritance Tax Planning Uxbridge | Rural Estate Planning Durham | ProsperBridge',
  description: 'Expert estate planning for Uxbridge families. Protect horse farms, rural estates, and heritage properties for next generation.',
  keywords: 'inheritance planning Uxbridge, rural estate Durham, horse farm succession',
};

const uxbridgeData = {
  name: 'Uxbridge',
  slug: 'uxbridge',
  population: '22,000',
  region: 'Durham Region',
  landmarks: [
    'York Durham Heritage Railway',
    'Wooden Sticks Golf Club',
    'Durham Regional Forest',
    'Lucy Maud Montgomery Home',
    'Uxbridge-Scott Museum'
  ],
  neighborhoods: [
    'Downtown Uxbridge',
    'Quaker Village',
    'Zephyr',
    'Sandford',
    'Leaskdale',
    'Udora',
    'Siloam',
    'Goodwood',
    'Glen Major',
    'Coppins Corners'
  ],
  description: 'Uxbridge families often own significant rural acreage, equestrian facilities, and heritage properties requiring sophisticated estate planning to preserve agricultural use and family legacy.'
};

const inheritanceServiceData = {
  name: 'Inheritance Financial Planning',
  slug: 'inheritance-financial-planning',
  icon: '🏛️',
  primaryColor: 'from-green-600',
  secondaryColor: 'to-teal-600',
  description: 'Strategic estate planning for rural properties and equestrian operations.',
  benefits: [
    'Horse farm succession',
    'Rural estate preservation',
    'Agricultural land planning',
    'Heritage property transfers',
    'Conservation easements',
    'Equestrian business succession',
    'Trail property strategies',
    'Multi-generation farming'
  ]
};

const statsData = {
  clientsServed: '160+',
  yearsExperience: '15+',
  successRate: '98%',
  avgSavings: '$115K'
};

export default function UxbridgeInheritanceFinancialPlanningPage() {
  return (
    <LocationServiceTemplate 
      city={uxbridgeData}
      service={inheritanceServiceData}
      stats={statsData}
    />
  );
}