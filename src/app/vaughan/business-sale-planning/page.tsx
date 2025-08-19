import { Metadata } from 'next';
import LocationServiceTemplate from '@/components/templates/LocationServiceTemplate';

export const metadata: Metadata = {
  title: 'Business Sale Planning Vaughan | Construction M&A Experts | ProsperBridge',
  description: 'Strategic business sale planning for Vaughan construction companies and family businesses. Expert M&A advisory for contractors, developers, and trades.',
  keywords: 'business sale planning Vaughan, construction company sale, contractor M&A York Region',
};

const vaughanData = {
  name: 'Vaughan',
  slug: 'vaughan',
  population: '323,000',
  region: 'York Region',
  landmarks: [
    'Vaughan Metropolitan Centre',
    'Highway 400 Employment Corridor',
    'CN MacMillan Yard',
    'Vaughan Business Enterprise Zone',
    'Cortellucci Vaughan Hospital'
  ],
  neighborhoods: [
    'Highway 7 Business Corridor',
    'Vaughan Enterprise Zone',
    'Steeles West Industrial',
    'Pine Valley Business Park',
    'Creditstone Business Park',
    'Keele Business Park',
    'Jane-Rutherford Employment',
    'Islington Employment District',
    'Bowes Business Area',
    'Concord Business District'
  ],
  description: 'Vaughan\'s thriving construction industry and family-owned businesses create unique M&A opportunities, from general contractors to specialized trades seeking succession or strategic exits.'
};

const businessServiceData = {
  name: 'Business Sale Planning',
  slug: 'business-sale-planning',
  icon: '🏢',
  primaryColor: 'from-blue-600',
  secondaryColor: 'to-indigo-600',
  description: 'Expert M&A guidance for Vaughan\'s construction companies and family enterprises.',
  benefits: [
    'Construction company valuations',
    'General contractor sales',
    'Trade business succession',
    'Developer exit strategies',
    'Equipment valuation included',
    'Project pipeline transfers',
    'Family business transitions',
    'Real estate holding companies'
  ]
};

const statsData = {
  clientsServed: '260+',
  yearsExperience: '15+',
  successRate: '96%',
  avgSavings: '$295K'
};

export default function VaughanBusinessSalePlanningPage() {
  return (
    <LocationServiceTemplate 
      city={vaughanData}
      service={businessServiceData}
      stats={statsData}
    />
  );
}