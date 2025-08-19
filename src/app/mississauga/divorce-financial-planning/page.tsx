import { Metadata } from 'next';
import LocationServiceTemplate from '@/components/templates/LocationServiceTemplate';

export const metadata: Metadata = {
  title: 'Divorce Financial Planning Mississauga | CFP® Advisors | ProsperBridge',
  description: "Expert divorce financial planning in Mississauga. Navigate asset division and support with certified professionals. Serving Square One, Port Credit, Meadowvale, and all Mississauga.",
  keywords: 'divorce financial planning Mississauga, CFP® Mississauga, divorce financial advisor Mississauga',
};

const mississaugaData = {
  name: 'Mississauga',
  slug: 'mississauga',
  population: '721,000',
  region: 'Peel Region',
  landmarks: [
    'Mississauga Court House (7755 Hurontario St)',
    'Square One Shopping Centre',
    'Port Credit',
    'Celebration Square',
    'Mississauga City Centre'
  ],
  neighborhoods: [
    'City Centre',
    'Port Credit',
    'Meadowvale',
    'Streetsville',
    'Erin Mills',
    'Clarkson',
    'Cooksville',
    'Lorne Park',
    'Mineola',
    'Sheridan'
  ],
  description: "As Canada's 6th largest city and home to our headquarters, Mississauga families receive personalized divorce financial planning with deep local expertise."
};

const divorceServiceData = {
  name: 'Divorce Financial Planning',
  slug: 'divorce-financial-planning',
  icon: '⚖️',
  primaryColor: 'from-purple-600',
  secondaryColor: 'to-pink-600',
  description: "Navigate divorce with expert financial guidance tailored to Mississauga residents.",
  benefits: [
    'Certified Divorce Financial Analyst (CFP®) expertise',
    'Fair and equitable asset division strategies',
    'Spousal and child support calculations',
    'Matrimonial home valuation and division',
    'Pension and retirement account splitting',
    'Tax optimization during and after divorce',
    'Court document preparation assistance',
    'Post-divorce budget and financial planning'
  ]
};

const statsData = {
  clientsServed: '300+',
  yearsExperience: '15+',
  successRate: '98%',
  avgSavings: '$42K'
};

export default function MississaugaDivorceFinancialPlanningPage() {
  return (
    <LocationServiceTemplate 
      city={mississaugaData}
      service={divorceServiceData}
      stats={statsData}
    />
  );
}