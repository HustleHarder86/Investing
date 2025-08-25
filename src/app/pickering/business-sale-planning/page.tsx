import { Metadata } from 'next';
import LocationServiceTemplate from '@/components/templates/LocationServiceTemplate';

export const metadata: Metadata = {
  title: 'Business Sale Planning Pickering | Nuclear Contractor M&A | Life Money',
  description: "Strategic business sale planning for Pickering nuclear contractors and marine businesses. Expert M&A advisory for OPG suppliers and waterfront enterprises.",
  keywords: 'business sale Pickering, nuclear contractor M&A, marine business sale Durham',
};

const pickeringData = {
  name: 'Pickering',
  slug: 'pickering',
  population: '99,000',
  region: 'Durham Region',
  landmarks: [
    'Pickering Nuclear Business Park',
    'Brock Road Industrial',
    'Liverpool Business Corridor',
    'Nautical Village Marina',
    'Squires Beach Business Area'
  ],
  neighborhoods: [
    'Brock Industrial North',
    'Liverpool Business District',
    'Notion Road Employment',
    'Whites Road Industrial',
    'Finch Business Corridor',
    'Church Street Commercial',
    'Kingston Road Business',
    'Bayly Industrial Park',
    'Squires Beach Commercial',
    'Nautical Village Business'
  ],
  description: "Pickering businesses benefit from nuclear industry contracts and waterfront tourism, creating unique M&A opportunities for specialized service providers and marine-related enterprises."
};

const businessServiceData = {
  name: 'Business Sale Planning',
  slug: 'business-sale-planning',
  icon: '🏢',
  primaryColor: 'from-blue-600',
  secondaryColor: 'to-indigo-600',
  description: "Expert M&A guidance for nuclear contractors and waterfront businesses.",
  benefits: [
    'Nuclear contractor valuations',
    'OPG supplier transitions',
    'Marine business sales',
    'Marina operation transfers',
    'Industrial service companies',
    'Specialized trade exits',
    'Tourism business sales',
    'Waterfront property deals'
  ]
};

const statsData = {
  clientsServed: '210+',
  yearsExperience: '15+',
  successRate: '96%',
  avgSavings: '$225K'
};

export default function PickeringBusinessSalePlanningPage() {
  return (
    <LocationServiceTemplate 
      city={pickeringData}
      service={businessServiceData}
      stats={statsData}
    />
  );
}