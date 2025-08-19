import { Metadata } from 'next';
import LocationServiceTemplate from '@/components/templates/LocationServiceTemplate';

export const metadata: Metadata = {
  title: 'Inheritance Tax Planning Toronto | Estate Planning Experts | ProsperBridge',
  description: 'Expert inheritance and estate planning in Toronto. Minimize taxes, reduce probate fees, maximize beneficiary inheritance. Serving all Toronto neighborhoods.',
  keywords: 'inheritance tax planning Toronto, estate planning Toronto, probate fees Toronto, will planning Toronto, trust planning Toronto',
  openGraph: {
    title: 'Inheritance Financial Planning Toronto | ProsperBridge',
    description: 'Minimize estate taxes and maximize inheritance for Toronto families. Free consultation.',
    type: 'website',
  }
};

const torontoData = {
  name: 'Toronto',
  slug: 'toronto',
  population: '2.9 million',
  region: 'Greater Toronto Area',
  landmarks: [
    'Toronto Estate Court',
    'Financial District',
    'Bay Street Corridor',
    'University of Toronto',
    'Mount Pleasant Cemetery'
  ],
  neighborhoods: [
    'Downtown Core',
    'North York',
    'Etobicoke',
    'Scarborough',
    'Forest Hill',
    'Rosedale',
    'Lawrence Park',
    'The Bridle Path',
    'Yorkville',
    'Casa Loma'
  ],
  description: 'Toronto&apos;s high property values and diverse population require sophisticated estate planning strategies to protect wealth across generations.'
};

const inheritanceServiceData = {
  name: 'Inheritance Financial Planning',
  slug: 'inheritance-financial-planning',
  icon: '🏛️',
  primaryColor: 'from-green-600',
  secondaryColor: 'to-teal-600',
  description: 'Strategic estate planning to minimize taxes and maximize what your beneficiaries receive.',
  benefits: [
    'Estate tax minimization strategies',
    'Probate fee reduction planning',
    'Principal residence exemption optimization',
    'Family trust establishment and management',
    'Charitable giving strategies',
    'Business succession planning',
    'Cross-border estate planning',
    'Will and power of attorney coordination'
  ]
};

const statsData = {
  clientsServed: '750+',
  yearsExperience: '15+',
  successRate: '99%',
  avgSavings: '$125K'
};

export default function TorontoInheritanceFinancialPlanningPage() {
  return (
    <LocationServiceTemplate 
      city={torontoData}
      service={inheritanceServiceData}
      stats={statsData}
    />
  );
}