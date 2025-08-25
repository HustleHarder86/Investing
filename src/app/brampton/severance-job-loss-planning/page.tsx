import { Metadata } from 'next';
import LocationServiceTemplate from '@/components/templates/LocationServiceTemplate';

export const metadata: Metadata = {
  title: 'Severance Package Planning Brampton | Job Loss Support | Money in Motion',
  description: "Expert severance and job transition planning for Brampton workers. Maximize packages from logistics, manufacturing, and retail sectors. Local Peel Region expertise.",
  keywords: 'severance package Brampton, job loss financial planning Brampton, career transition Peel',
};

const bramptonData = {
  name: 'Brampton',
  slug: 'brampton',
  population: '656,000',
  region: 'Peel Region',
  landmarks: [
    'Amazon Fulfillment Centre',
    'Canadian Tire Distribution Centre',
    'Loblaw Distribution Centre',
    'FedEx Canada Hub',
    'Coca-Cola Bottling Plant'
  ],
  neighborhoods: [
    'Bramalea',
    'Airport Road Employment Area',
    'Steeles Employment District',
    'Highway 407 Business Corridor',
    'Goreway Employment Zone',
    'Queen Street Commercial',
    'Kennedy Business Park',
    'Dixie Employment Area',
    'Torbram Industrial',
    'Chrysler Drive Business Park'
  ],
  description: "With major distribution centers and manufacturing facilities, Brampton workers face unique severance situations requiring specialized planning for warehouse, logistics, and industrial transitions."
};

const severanceServiceData = {
  name: 'Severance & Job Loss Planning',
  slug: 'severance-job-loss-planning',
  icon: '💼',
  primaryColor: 'from-orange-600',
  secondaryColor: 'to-red-600',
  description: "Navigate job transitions with specialized support for Brampton's industrial workforce.",
  benefits: [
    'Warehouse worker severance planning',
    'Manufacturing sector expertise',
    'Distribution center transitions',
    'Union severance negotiations',
    'WSIB coordination',
    'EI benefit optimization',
    'Pension transfer strategies',
    'Retraining fund planning'
  ]
};

const statsData = {
  clientsServed: '450+',
  yearsExperience: '15+',
  successRate: '98%',
  avgSavings: '$28K'
};

export default function BramptonSeveranceJobLossPlanningPage() {
  return (
    <LocationServiceTemplate 
      city={bramptonData}
      service={severanceServiceData}
      stats={statsData}
    />
  );
}