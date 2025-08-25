import { Metadata } from 'next';
import LocationServiceTemplate from '@/components/templates/LocationServiceTemplate';

export const metadata: Metadata = {
  title: 'Business Sale Planning Newmarket | Main Street M&A | Life Money',
  description: "Strategic business sale planning for Newmarket Main Street shops and professional practices. Expert M&A advisory for heritage businesses and healthcare practices.",
  keywords: 'business sale Newmarket, Main Street business M&A, healthcare practice sale York',
};

const newmarketData = {
  name: 'Newmarket',
  slug: 'newmarket',
  population: '88,000',
  region: 'York Region',
  landmarks: [
    'Historic Main Street Business District',
    'Upper Canada Mall',
    'Harry Walker Business Park',
    'Leslie Street Business Corridor',
    'Davis Drive Commercial'
  ],
  neighborhoods: [
    'Main Street Heritage District',
    'Davis Drive Business',
    'Leslie Business Corridor',
    'Yonge Street Commerce',
    'Harry Walker Park',
    'Green Lane Industrial',
    'Mulock Drive Commercial',
    'Eagle Street Business',
    'Bayview Business District',
    'Bristol Road Commerce'
  ],
  description: "Newmarket's historic Main Street businesses and modern professional services create unique M&A opportunities from heritage retail shops to medical practices near Southlake hospital."
};

const businessServiceData = {
  name: 'Business Sale Planning',
  slug: 'business-sale-planning',
  icon: '🏢',
  primaryColor: 'from-blue-600',
  secondaryColor: 'to-indigo-600',
  description: "Expert M&A guidance for Main Street businesses and healthcare practices.",
  benefits: [
    'Main Street shop valuations',
    'Heritage business sales',
    'Medical practice transitions',
    'Dental office sales',
    'Retail succession planning',
    'Restaurant business transfers',
    'Professional service firms',
    'Healthcare facility sales'
  ]
};

const statsData = {
  clientsServed: '190+',
  yearsExperience: '15+',
  successRate: '95%',
  avgSavings: '$175K'
};

export default function NewmarketBusinessSalePlanningPage() {
  return (
    <LocationServiceTemplate 
      city={newmarketData}
      service={businessServiceData}
      stats={statsData}
    />
  );
}