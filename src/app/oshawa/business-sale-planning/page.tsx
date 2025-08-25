import { Metadata } from 'next';
import LocationServiceTemplate from '@/components/templates/LocationServiceTemplate';

export const metadata: Metadata = {
  title: 'Business Sale Planning Oshawa | Automotive Supplier M&A | Money in Motion',
  description: "Strategic business sale planning for Oshawa automotive suppliers and trades. Expert M&A advisory for parts manufacturers and industrial services.",
  keywords: 'business sale Oshawa, automotive supplier M&A, industrial business sale Durham',
};

const oshawaData = {
  name: 'Oshawa',
  slug: 'oshawa',
  population: '175,000',
  region: 'Durham Region',
  landmarks: [
    'Oshawa Executive Airport',
    'Automotive Parts Manufacturing Zone',
    'Thornton Road Industrial',
    'Farewell Business Park',
    'Stevenson Road Business Corridor'
  ],
  neighborhoods: [
    'South Industrial District',
    'Thornton Business Corridor',
    'Farewell Employment Zone',
    'Stevenson Road Industrial',
    'Colonel Sam Business Park',
    'Ritson Road Commercial',
    'King Street Business',
    'Simcoe Street Shops',
    'Taunton Business Area',
    'Wilson Road Industrial'
  ],
  description: "Oshawa's automotive supply chain and industrial services sector creates unique M&A opportunities for parts manufacturers, tool & die shops, and specialized trades seeking strategic exits."
};

const businessServiceData = {
  name: 'Business Sale Planning',
  slug: 'business-sale-planning',
  icon: '🏢',
  primaryColor: 'from-blue-600',
  secondaryColor: 'to-indigo-600',
  description: "Expert M&A guidance for automotive suppliers and industrial businesses.",
  benefits: [
    'Auto parts manufacturer sales',
    'Tool & die shop valuations',
    'Industrial service transitions',
    'Logistics company exits',
    'Machine shop succession',
    'Skilled trades businesses',
    'Transportation fleet sales',
    'Warehouse operation transfers'
  ]
};

const statsData = {
  clientsServed: '320+',
  yearsExperience: '15+',
  successRate: '96%',
  avgSavings: '$275K'
};

export default function OshawaBusinessSalePlanningPage() {
  return (
    <LocationServiceTemplate 
      city={oshawaData}
      service={businessServiceData}
      stats={statsData}
    />
  );
}