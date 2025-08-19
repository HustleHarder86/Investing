import { Metadata } from 'next';
import LocationServiceTemplate from '@/components/templates/LocationServiceTemplate';

export const metadata: Metadata = {
  title: 'Business Sale Planning Uxbridge | Equestrian Business M&A | ProsperBridge',
  description: "Strategic business sale planning for Uxbridge equestrian operations and Main Street businesses. Expert M&A for horse farms and trail town enterprises.",
  keywords: 'business sale Uxbridge, equestrian business M&A, trail town business sale',
};

const uxbridgeData = {
  name: 'Uxbridge',
  slug: 'uxbridge',
  population: '22,000',
  region: 'Durham Region',
  landmarks: [
    'Uxbridge Business Park',
    'Brock Street Business District',
    'Toronto Street Shops',
    'Reach Industrial Park',
    'Regional Road 8 Commerce'
  ],
  neighborhoods: [
    'Downtown Business District',
    'Brock Street Commercial',
    'Toronto Street Shops',
    'Reach Industrial',
    'Regional Road Commerce',
    'Equestrian Business Zone',
    'Agricultural Business Area',
    'Trail Business District',
    'Heritage Business Core',
    'Rural Commercial'
  ],
  description: "Uxbridge's unique blend of equestrian businesses, trail tourism, and historic Main Street shops creates specialized M&A opportunities requiring expertise in rural and recreational enterprises."
};

const businessServiceData = {
  name: 'Business Sale Planning',
  slug: 'business-sale-planning',
  icon: '🏢',
  primaryColor: 'from-blue-600',
  secondaryColor: 'to-indigo-600',
  description: "Expert M&A for equestrian operations and trail town businesses.",
  benefits: [
    'Equestrian business sales',
    'Horse training facilities',
    'Trail tourism operations',
    'Main Street shop valuations',
    'Agricultural businesses',
    'Feed & tack stores',
    'Rural service companies',
    'Heritage business transfers'
  ]
};

const statsData = {
  clientsServed: '110+',
  yearsExperience: '15+',
  successRate: '95%',
  avgSavings: '$155K'
};

export default function UxbridgeBusinessSalePlanningPage() {
  return (
    <LocationServiceTemplate 
      city={uxbridgeData}
      service={businessServiceData}
      stats={statsData}
    />
  );
}