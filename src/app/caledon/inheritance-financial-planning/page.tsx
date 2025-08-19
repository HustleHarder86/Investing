import { Metadata } from 'next';
import LocationServiceTemplate from '@/components/templates/LocationServiceTemplate';

export const metadata: Metadata = {
  title: 'Inheritance Tax Planning Caledon | Rural Estate Planning | ProsperBridge',
  description: "Expert estate planning for Caledon families. Protect rural properties, aggregate businesses, and agricultural lands for next generation.",
  keywords: 'inheritance planning Caledon, rural estate planning, farm succession Peel',
};

const caledonData = {
  name: 'Caledon',
  slug: 'caledon',
  population: '76,000',
  region: 'Peel Region',
  landmarks: [
    'Caledon Trailway',
    'Heart Lake Conservation',
    'Terra Cotta Conservation',
    'Belfountain Conservation',
    'Credit Valley Conservation'
  ],
  neighborhoods: [
    'Bolton',
    'Caledon East',
    'Caledon Village',
    'Mayfield West',
    'Cheltenham',
    'Inglewood',
    'Alton',
    'Belfountain',
    'Palgrave',
    'Mono Mills'
  ],
  description: "Caledon families often own significant rural acreage, aggregate operations, and agricultural lands requiring specialized estate planning to preserve land use and minimize taxes."
};

const inheritanceServiceData = {
  name: 'Inheritance Financial Planning',
  slug: 'inheritance-financial-planning',
  icon: '🏛️',
  primaryColor: 'from-green-600',
  secondaryColor: 'to-teal-600',
  description: "Strategic estate planning for rural properties and aggregate businesses.",
  benefits: [
    'Rural land preservation',
    'Aggregate business succession',
    'Agricultural estate planning',
    'Greenbelt property strategies',
    'Conservation land benefits',
    'Trucking company transfers',
    'Equipment fleet succession',
    'Multi-generation farming'
  ]
};

const statsData = {
  clientsServed: '240+',
  yearsExperience: '15+',
  successRate: '98%',
  avgSavings: '$155K'
};

export default function CaledonInheritanceFinancialPlanningPage() {
  return (
    <LocationServiceTemplate 
      city={caledonData}
      service={inheritanceServiceData}
      stats={statsData}
    />
  );
}