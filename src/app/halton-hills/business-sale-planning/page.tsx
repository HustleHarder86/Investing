import { Metadata } from 'next';
import LocationServiceTemplate from '@/components/templates/LocationServiceTemplate';

export const metadata: Metadata = {
  title: 'Business Sale Planning Halton Hills | Manufacturing M&A Georgetown | Money in Motion',
  description: "Strategic business sale planning for Halton Hills manufacturers and Main Street businesses. Expert M&A for Georgetown shops and Acton industries.",
  keywords: 'business sale Halton Hills, manufacturing M&A Georgetown, Acton business sale',
};

const haltonHillsData = {
  name: 'Halton Hills',
  slug: 'halton-hills',
  population: '62,000',
  region: 'Halton Region',
  landmarks: [
    'Georgetown Marketplace',
    'Acton Business Park',
    'Premier Gateway Employment',
    'Georgetown Industrial',
    'Main Street Georgetown'
  ],
  neighborhoods: [
    'Georgetown Downtown',
    'Acton Industrial',
    'Premier Gateway',
    'Guelph Street Business',
    'Main Street Commercial',
    'Mill Street Shops',
    'Armstrong Avenue Industrial',
    'Winston Churchill Employment',
    'Steeles Avenue Business',
    'Rural Commercial Areas'
  ],
  description: "Halton Hills' manufacturing heritage and Georgetown's Main Street businesses create M&A opportunities from industrial operations to boutique retail requiring specialized valuation."
};

const businessServiceData = {
  name: 'Business Sale Planning',
  slug: 'business-sale-planning',
  icon: '🏢',
  primaryColor: 'from-blue-600',
  secondaryColor: 'to-indigo-600',
  description: "Expert M&A for manufacturing companies and Main Street businesses.",
  benefits: [
    'Manufacturing company sales',
    'Industrial operation transfers',
    'Main Street shop valuations',
    'Georgetown retail transitions',
    'Acton business succession',
    'Service company sales',
    'Family business transfers',
    'Small town M&A expertise'
  ]
};

const statsData = {
  clientsServed: '150+',
  yearsExperience: '15+',
  successRate: '95%',
  avgSavings: '$165K'
};

export default function HaltonHillsBusinessSalePlanningPage() {
  return (
    <LocationServiceTemplate 
      city={haltonHillsData}
      service={businessServiceData}
      stats={statsData}
    />
  );
}