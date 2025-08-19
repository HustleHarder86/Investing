import { Metadata } from 'next';
import LocationServiceTemplate from '@/components/templates/LocationServiceTemplate';

export const metadata: Metadata = {
  title: 'Inheritance Tax Planning Mississauga | Estate Planning | ProsperBridge',
  description: "Expert inheritance and estate planning in Mississauga. Minimize taxes, reduce probate fees. Serving all Mississauga neighborhoods from our local office.",
  keywords: 'inheritance tax planning Mississauga, estate planning Mississauga, probate fees Mississauga',
};

const mississaugaData = {
  name: 'Mississauga',
  slug: 'mississauga',
  population: '721,000',
  region: 'Peel Region',
  landmarks: [
    'Mississauga City Hall',
    'Square One',
    'Port Credit Harbour',
    'Credit Valley Hospital',
    'University of Toronto Mississauga'
  ],
  neighborhoods: [
    'City Centre',
    'Port Credit',
    'Lorne Park',
    'Mineola',
    'Erin Mills',
    'Meadowvale',
    'Streetsville',
    'Clarkson',
    'Cooksville',
    'Churchill Meadows'
  ],
  description: "Mississauga's diverse and affluent communities require sophisticated estate planning to protect multi-generational wealth."
};

const inheritanceServiceData = {
  name: 'Inheritance Financial Planning',
  slug: 'inheritance-financial-planning',
  icon: '🏛️',
  primaryColor: 'from-green-600',
  secondaryColor: 'to-teal-600',
  description: "Strategic estate planning for Mississauga families to preserve wealth.",
  benefits: [
    'Estate tax minimization strategies',
    'Probate fee reduction planning',
    'Principal residence exemption optimization',
    'Family trust establishment',
    'Charitable giving strategies',
    'Business succession planning',
    'Cross-border estate planning',
    'Will and power of attorney coordination'
  ]
};

const statsData = {
  clientsServed: '450+',
  yearsExperience: '15+',
  successRate: '99%',
  avgSavings: '$115K'
};

export default function MississaugaInheritanceFinancialPlanningPage() {
  return (
    <LocationServiceTemplate 
      city={mississaugaData}
      service={inheritanceServiceData}
      stats={statsData}
    />
  );
}