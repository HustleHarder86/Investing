import { Metadata } from 'next';
import LocationServiceTemplate from '@/components/templates/LocationServiceTemplate';

export const metadata: Metadata = {
  title: 'Business Sale Planning Aurora | Executive Business M&A | ProsperBridge',
  description: 'Strategic business sale planning for Aurora companies. Expert M&A advisory for professional services, luxury retail, and family enterprises.',
  keywords: 'business sale Aurora, M&A advisory York Region, luxury business sale Aurora',
};

const auroraData = {
  name: 'Aurora',
  slug: 'aurora',
  population: '62,000',
  region: 'York Region',
  landmarks: [
    'Aurora Business Park',
    'Wellington Street Business District',
    'Yonge Street Commerce Corridor',
    'Edward Street Business Centre',
    'Industrial Parkway Zone'
  ],
  neighborhoods: [
    'Wellington Business District',
    'Yonge Street Corridor',
    'Industrial Parkway',
    'Edward Business Centre',
    'Bayview Commerce',
    'Leslie Street Business',
    'Vandorf Business Area',
    'St. John\'s Sideroad Commerce',
    'Henderson Drive Business',
    'Mary Street Industrial'
  ],
  description: 'Aurora\'s upscale businesses from professional services to luxury retail create premium M&A opportunities for owners seeking strategic exits at maximum valuations.'
};

const businessServiceData = {
  name: 'Business Sale Planning',
  slug: 'business-sale-planning',
  icon: '🏢',
  primaryColor: 'from-blue-600',
  secondaryColor: 'to-indigo-600',
  description: 'Expert M&A guidance for Aurora\'s premium businesses and professional firms.',
  benefits: [
    'Professional service valuations',
    'Luxury retail transitions',
    'Private practice sales',
    'Boutique business transfers',
    'Executive consulting firms',
    'Wealth management practices',
    'High-end service businesses',
    'Family enterprise succession'
  ]
};

const statsData = {
  clientsServed: '140+',
  yearsExperience: '15+',
  successRate: '96%',
  avgSavings: '$285K'
};

export default function AuroraBusinessSalePlanningPage() {
  return (
    <LocationServiceTemplate 
      city={auroraData}
      service={businessServiceData}
      stats={statsData}
    />
  );
}