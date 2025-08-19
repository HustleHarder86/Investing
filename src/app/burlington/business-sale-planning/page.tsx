import { Metadata } from 'next';
import LocationServiceTemplate from '@/components/templates/LocationServiceTemplate';

export const metadata: Metadata = {
  title: 'Business Sale Planning Burlington | Retirement Business Exit | ProsperBridge',
  description: "Strategic exit planning for Burlington business owners approaching retirement. Expert M&A advisory for established local businesses and professional practices.",
  keywords: 'business sale planning Burlington, retirement business exit, small business M&A Halton',
};

const burlingtonData = {
  name: 'Burlington',
  slug: 'burlington',
  population: '186,000',
  region: 'Halton Region',
  landmarks: [
    'Burlington Centre',
    'Mapleview Shopping Centre',
    'Burlington Mall',
    'Appleby Line Business District',
    'Plains Road Commerce Park'
  ],
  neighborhoods: [
    'Appleby Business District',
    'Plains Road Commerce',
    'Upper Middle Business Park',
    'Burlington Corporate Park',
    'Harvester Business Park',
    'New Street Commercial',
    'Guelph Line Business',
    "Walker's Line Commerce",
    'Fairview Street Business',
    'Brant Street Downtown'
  ],
  description: "Burlington's established business owners approaching retirement create consistent M&A opportunities, from family-run retail to professional services seeking succession solutions."
};

const businessServiceData = {
  name: 'Business Sale Planning',
  slug: 'business-sale-planning',
  icon: '🏢',
  primaryColor: 'from-blue-600',
  secondaryColor: 'to-indigo-600',
  description: "Expert M&A guidance for Burlington's retiring business owners and established firms.",
  benefits: [
    'Retirement exit planning',
    'Small business valuations',
    'Professional practice sales',
    'Retail business transitions',
    'Family succession planning',
    'Employee buyout structures',
    'Asset vs share sales',
    'Vendor financing options'
  ]
};

const statsData = {
  clientsServed: '240+',
  yearsExperience: '15+',
  successRate: '97%',
  avgSavings: '$235K'
};

export default function BurlingtonBusinessSalePlanningPage() {
  return (
    <LocationServiceTemplate 
      city={burlingtonData}
      service={businessServiceData}
      stats={statsData}
    />
  );
}