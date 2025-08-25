import { Metadata } from 'next';
import LocationServiceTemplate from '@/components/templates/LocationServiceTemplate';

export const metadata: Metadata = {
  title: 'Business Sale Planning Ajax | Durham Region M&A Advisors | Life Money',
  description: "Strategic business sale planning for Ajax contractors and service businesses. Expert M&A advisory for nuclear industry suppliers and Durham enterprises.",
  keywords: 'business sale planning Ajax, Durham business brokers, contractor M&A Ajax',
};

const ajaxData = {
  name: 'Ajax',
  slug: 'ajax',
  population: '126,000',
  region: 'Durham Region',
  landmarks: [
    'Ajax Business Park',
    'Salem Road Business Corridor',
    'Harwood Avenue Plaza',
    'Westney Road Commercial',
    'Kingston Road East Corridor'
  ],
  neighborhoods: [
    'Salem Industrial',
    'Westney Business District',
    'Harwood Commercial',
    'Kingston Road Corridor',
    'Taunton Business Park',
    'Rossland Employment Area',
    'Church Street Commercial',
    'Bayly Industrial',
    'Monarch Business Area',
    'Hunt Street Commerce'
  ],
  description: "Ajax businesses, from nuclear industry suppliers to local contractors, benefit from Durham's growth and proximity to Pickering Nuclear, creating valuable M&A opportunities for strategic exits."
};

const businessServiceData = {
  name: 'Business Sale Planning',
  slug: 'business-sale-planning',
  icon: '🏢',
  primaryColor: 'from-blue-600',
  secondaryColor: 'to-indigo-600',
  description: "Expert M&A guidance for Ajax contractors and nuclear industry suppliers.",
  benefits: [
    'Nuclear supplier valuations',
    'OPG contractor sales',
    'Service business transitions',
    'Trade contractor exits',
    'Industrial supply companies',
    'Durham market positioning',
    'Waterfront business sales',
    'Family succession planning'
  ]
};

const statsData = {
  clientsServed: '180+',
  yearsExperience: '15+',
  successRate: '95%',
  avgSavings: '$185K'
};

export default function AjaxBusinessSalePlanningPage() {
  return (
    <LocationServiceTemplate 
      city={ajaxData}
      service={businessServiceData}
      stats={statsData}
    />
  );
}