import { Metadata } from 'next';
import LocationServiceTemplate from '@/components/templates/LocationServiceTemplate';

export const metadata: Metadata = {
  title: 'Business Sale Planning Milton | Growing Business M&A | Money in Motion',
  description: "Strategic exit planning for Milton's growing businesses and startups. Expert M&A advisory for service companies and new ventures in Canada's fastest-growing town.",
  keywords: 'business sale planning Milton, startup exit strategy, growing business M&A Halton',
};

const miltonData = {
  name: 'Milton',
  slug: 'milton',
  population: '132,000',
  region: 'Halton Region',
  landmarks: [
    'Milton Innovation Centre',
    'Highway 401 Business Corridor',
    'Derry Green Corporate Centre',
    'Milton Crossroads Business Park',
    'First Gulf Business Park'
  ],
  neighborhoods: [
    'Highway 401 Employment Lands',
    'Derry Green Corporate',
    'Milton Business Park',
    'James Snow Parkway Business',
    'Steeles Avenue Employment',
    'Britannia Road Business',
    'Main Street Commercial',
    'Thompson Road South',
    'Louis St. Laurent Business',
    'Regional Road 25 Corridor'
  ],
  description: "Milton's rapid growth attracts entrepreneurs and new businesses, creating opportunities for startup exits and growing company acquisitions in Canada's fastest-growing municipality."
};

const businessServiceData = {
  name: 'Business Sale Planning',
  slug: 'business-sale-planning',
  icon: '🏢',
  primaryColor: 'from-blue-600',
  secondaryColor: 'to-indigo-600',
  description: "Expert M&A guidance for Milton's startups and rapidly growing businesses.",
  benefits: [
    'Startup exit strategies',
    'Growth company valuations',
    'Service business sales',
    'Home-based business transitions',
    'Franchise resales',
    'Partnership buyouts',
    'Young entrepreneur guidance',
    'Rapid growth planning'
  ]
};

const statsData = {
  clientsServed: '160+',
  yearsExperience: '15+',
  successRate: '95%',
  avgSavings: '$185K'
};

export default function MiltonBusinessSalePlanningPage() {
  return (
    <LocationServiceTemplate 
      city={miltonData}
      service={businessServiceData}
      stats={statsData}
    />
  );
}