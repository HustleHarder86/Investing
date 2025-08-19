import { Metadata } from 'next';
import LocationServiceTemplate from '@/components/templates/LocationServiceTemplate';

export const metadata: Metadata = {
  title: 'Severance Package Planning Oshawa | Auto Worker Support | ProsperBridge',
  description: "Expert severance planning for Oshawa automotive workers. Navigate GM restructuring, supplier layoffs, and maximize union-negotiated packages.",
  keywords: 'severance Oshawa GM, automotive layoffs Durham, Unifor severance packages',
};

const oshawaData = {
  name: 'Oshawa',
  slug: 'oshawa',
  population: '175,000',
  region: 'Durham Region',
  landmarks: [
    'General Motors Canadian HQ',
    'Oshawa GO Station',
    'Durham Regional HQ',
    'Ontario Tech University',
    'Durham College'
  ],
  neighborhoods: [
    'Downtown Oshawa',
    'North Oshawa',
    'Kedron',
    'Windfields',
    "O'Neill",
    'Vanier',
    'Lakeview',
    'McLaughlin',
    'Samac',
    'Northglen'
  ],
  description: "Oshawa's automotive sector transformation creates complex severance scenarios for thousands of workers, from GM employees to parts suppliers, requiring expert navigation of union agreements."
};

const severanceServiceData = {
  name: 'Severance & Job Loss Planning',
  slug: 'severance-job-loss-planning',
  icon: '💼',
  primaryColor: 'from-orange-600',
  secondaryColor: 'to-red-600',
  description: "Specialized severance support for automotive industry transitions.",
  benefits: [
    'GM severance maximization',
    'Unifor package negotiation',
    'Supplier layoff support',
    'SUB benefit optimization',
    'Retraining fund access',
    'Pension bridge strategies',
    'Skilled trades transitions',
    'Industry redeployment planning'
  ]
};

const statsData = {
  clientsServed: '540+',
  yearsExperience: '15+',
  successRate: '98%',
  avgSavings: '$58K'
};

export default function OshawaSeveranceJobLossPlanningPage() {
  return (
    <LocationServiceTemplate 
      city={oshawaData}
      service={severanceServiceData}
      stats={statsData}
    />
  );
}