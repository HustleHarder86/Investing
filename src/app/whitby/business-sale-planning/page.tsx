import { Metadata } from 'next';
import LocationServiceTemplate from '@/components/templates/LocationServiceTemplate';

export const metadata: Metadata = {
  title: 'Business Sale Planning Whitby | Durham Business M&A | ProsperBridge',
  description: "Strategic business sale planning for Whitby companies. Expert M&A advisory for professional services, retail businesses, and growing Durham enterprises.",
  keywords: 'business sale Whitby, M&A advisory Durham, company valuation Whitby',
};

const whitbyData = {
  name: 'Whitby',
  slug: 'whitby',
  population: '138,000',
  region: 'Durham Region',
  landmarks: [
    'Whitby Innovation Hub',
    'Thickson Road Business Corridor',
    'Garden Street Business District',
    'Consumer Square',
    'Brooklin Business Park'
  ],
  neighborhoods: [
    'Downtown Business District',
    'Thickson Business Corridor',
    'Garden Street Commercial',
    'Taunton Business Park',
    'Brooklin Village Business',
    'Dundas Street Commerce',
    'Brock Street Shops',
    'Rossland Plaza Area',
    'Burns Street Industrial',
    'South Blair Employment'
  ],
  description: "Whitby's diverse business landscape from historic downtown shops to modern professional services creates varied M&A opportunities for owners seeking strategic exits or succession planning."
};

const businessServiceData = {
  name: 'Business Sale Planning',
  slug: 'business-sale-planning',
  icon: '🏢',
  primaryColor: 'from-blue-600',
  secondaryColor: 'to-indigo-600',
  description: "Expert M&A guidance for Whitby's diverse business community.",
  benefits: [
    'Professional service firms',
    'Healthcare practice sales',
    'Retail business transitions',
    'Restaurant succession planning',
    'Service franchise sales',
    'Brooklin business transfers',
    'Marina business valuations',
    'Family enterprise succession'
  ]
};

const statsData = {
  clientsServed: '230+',
  yearsExperience: '15+',
  successRate: '95%',
  avgSavings: '$195K'
};

export default function WhitbyBusinessSalePlanningPage() {
  return (
    <LocationServiceTemplate 
      city={whitbyData}
      service={businessServiceData}
      stats={statsData}
    />
  );
}