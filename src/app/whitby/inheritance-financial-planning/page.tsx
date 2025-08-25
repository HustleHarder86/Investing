import { Metadata } from 'next';
import LocationServiceTemplate from '@/components/templates/LocationServiceTemplate';

export const metadata: Metadata = {
  title: 'Inheritance Tax Planning Whitby | Estate Planning Durham | Life Money',
  description: "Expert estate planning for Whitby families. Protect growing wealth, family homes, and professional assets while minimizing tax on intergenerational transfers.",
  keywords: 'inheritance planning Whitby, estate tax Durham, wealth transfer Whitby',
};

const whitbyData = {
  name: 'Whitby',
  slug: 'whitby',
  population: '138,000',
  region: 'Durham Region',
  landmarks: [
    'Whitby Historic Downtown',
    'Lynde Shores Conservation',
    'Whitby Courthouse',
    'Iroquois Park Sports Centre',
    'Brooklin Village'
  ],
  neighborhoods: [
    'Downtown Whitby',
    'Port Whitby',
    'Brooklin',
    'Pringle Creek',
    'Williamsburg',
    'Rolling Acres',
    'Taunton North',
    'Lynde Creek',
    'West Lynde',
    'Ashburn'
  ],
  description: "Whitby's established families and growing professional population are building significant estates through real estate appreciation and career success, requiring strategic planning for tax-efficient wealth transfers."
};

const inheritanceServiceData = {
  name: 'Inheritance Financial Planning',
  slug: 'inheritance-financial-planning',
  icon: '🏛️',
  primaryColor: 'from-green-600',
  secondaryColor: 'to-teal-600',
  description: "Strategic estate planning for Whitby's growing families and established wealth.",
  benefits: [
    'Family home preservation',
    'Cottage succession planning',
    'Professional practice transfers',
    'RRSP/TFSA optimization',
    'Education funding trusts',
    'Multi-generational planning',
    'Brooklin property strategies',
    'Port Whitby marina assets'
  ]
};

const statsData = {
  clientsServed: '340+',
  yearsExperience: '15+',
  successRate: '99%',
  avgSavings: '$115K'
};

export default function WhitbyInheritanceFinancialPlanningPage() {
  return (
    <LocationServiceTemplate 
      city={whitbyData}
      service={inheritanceServiceData}
      stats={statsData}
    />
  );
}