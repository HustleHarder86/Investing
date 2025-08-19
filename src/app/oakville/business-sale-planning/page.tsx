import { Metadata } from 'next';
import LocationServiceTemplate from '@/components/templates/LocationServiceTemplate';

export const metadata: Metadata = {
  title: 'Business Sale Planning Oakville | Private Company M&A | ProsperBridge',
  description: 'Strategic exit planning for Oakville private companies and family offices. Expert M&A advisory for luxury brands, private equity, and established enterprises.',
  keywords: 'business sale planning Oakville, private company M&A, family business succession Halton',
};

const oakvilleData = {
  name: 'Oakville',
  slug: 'oakville',
  population: '213,000',
  region: 'Halton Region',
  landmarks: [
    'Ford Canada Headquarters',
    'Tim Hortons Head Office',
    'Siemens Canada HQ',
    'Oakville Executive Business Park',
    'Winston Business Park'
  ],
  neighborhoods: [
    'Winston Business Park',
    'Speers Business Park',
    'Oakville Executive Centre',
    'QEW Business Corridor',
    'Bronte Business Park',
    'North Service Road Commerce',
    'South Service Road Industrial',
    'Trafalgar Commercial',
    'Dorval Business District',
    'Heritage Business Park'
  ],
  description: 'Oakville\'s concentration of corporate headquarters and wealthy family businesses creates premium M&A opportunities, from luxury service companies to established manufacturing enterprises.'
};

const businessServiceData = {
  name: 'Business Sale Planning',
  slug: 'business-sale-planning',
  icon: '🏢',
  primaryColor: 'from-blue-600',
  secondaryColor: 'to-indigo-600',
  description: 'Elite M&A advisory for Oakville\'s private companies and family enterprises.',
  benefits: [
    'Private company valuations',
    'Family office transitions',
    'Luxury brand sales',
    'Manufacturing M&A',
    'Cross-border transactions',
    'Management buyouts',
    'Private equity exits',
    'Strategic buyer sourcing'
  ]
};

const statsData = {
  clientsServed: '140+',
  yearsExperience: '15+',
  successRate: '98%',
  avgSavings: '$675K'
};

export default function OakvilleBusinessSalePlanningPage() {
  return (
    <LocationServiceTemplate 
      city={oakvilleData}
      service={businessServiceData}
      stats={statsData}
    />
  );
}