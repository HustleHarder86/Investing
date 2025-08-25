import { Metadata } from 'next';
import LocationServiceTemplate from '@/components/templates/LocationServiceTemplate';

export const metadata: Metadata = {
  title: 'Business Sale Planning King Township | Equestrian Business M&A | Life Money',
  description: "Strategic business sale planning for King Township equestrian operations and luxury businesses. Expert M&A for farms, stables, and high-end enterprises.",
  keywords: 'business sale King Township, equestrian business M&A, farm sale York Region',
};

const kingData = {
  name: 'King',
  slug: 'king',
  population: '27,000',
  region: 'York Region',
  landmarks: [
    'King Township Business Park',
    'Highway 400 Employment Lands',
    'Nobleton Business District',
    'Schomberg Main Street',
    'King City Core'
  ],
  neighborhoods: [
    'King City Business District',
    'Nobleton Commercial',
    'Schomberg Main Street',
    'Highway 400 Corridor',
    'Jane Street Business',
    'Dufferin Street Commerce',
    'Keele Street Corridor',
    'Agricultural Business Zone',
    'Equestrian Business District',
    'Rural Commercial Areas'
  ],
  description: "King Township's unique businesses from world-class equestrian facilities to agricultural operations and luxury services create specialized M&A opportunities requiring expert valuation."
};

const businessServiceData = {
  name: 'Business Sale Planning',
  slug: 'business-sale-planning',
  icon: '🏢',
  primaryColor: 'from-blue-600',
  secondaryColor: 'to-indigo-600',
  description: "Expert M&A for equestrian operations and luxury King Township businesses.",
  benefits: [
    'Equestrian facility sales',
    'Horse breeding operations',
    'Agricultural business transfers',
    'Luxury service businesses',
    'Golf course transactions',
    'Event venue sales',
    'Boutique retail transitions',
    'High-end hospitality M&A'
  ]
};

const statsData = {
  clientsServed: '90+',
  yearsExperience: '15+',
  successRate: '97%',
  avgSavings: '$385K'
};

export default function KingBusinessSalePlanningPage() {
  return (
    <LocationServiceTemplate 
      city={kingData}
      service={businessServiceData}
      stats={statsData}
    />
  );
}