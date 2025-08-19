import { Metadata } from 'next';
import LocationServiceTemplate from '@/components/templates/LocationServiceTemplate';

export const metadata: Metadata = {
  title: 'Inheritance Tax Planning King Township | Ultra Wealthy Estate Planning | ProsperBridge',
  description: 'Expert estate planning for King Township\'s ultra-wealthy families. Protect estates, equestrian operations, and family dynasties.',
  keywords: 'estate planning King Township, ultra wealthy inheritance, equestrian estate planning',
};

const kingData = {
  name: 'King',
  slug: 'king',
  population: '27,000',
  region: 'York Region',
  landmarks: [
    'Oak Ridges Moraine',
    'Holland Marsh',
    'King Township Museum',
    'Happy Valley Forest',
    'Jokers Hill Research Station'
  ],
  neighborhoods: [
    'King City',
    'Nobleton',
    'Schomberg',
    'Kettleby',
    'Lloydtown',
    'Laskay',
    'Pottageville',
    'Eversley',
    'Snowball',
    'Strange'
  ],
  description: 'King Township\'s ultra-wealthy families own vast estates, equestrian facilities, and agricultural operations requiring sophisticated succession planning to preserve dynastic wealth.'
};

const inheritanceServiceData = {
  name: 'Inheritance Financial Planning',
  slug: 'inheritance-financial-planning',
  icon: '🏛️',
  primaryColor: 'from-green-600',
  secondaryColor: 'to-teal-600',
  description: 'Dynasty planning for King Township\'s wealthiest families and estates.',
  benefits: [
    'Dynasty trust planning',
    'Equestrian operation succession',
    'Agricultural land preservation',
    'Multi-generational trusts',
    'Family office continuity',
    'International estate planning',
    'Art collection succession',
    'Philanthropic legacy structures'
  ]
};

const statsData = {
  clientsServed: '140+',
  yearsExperience: '15+',
  successRate: '100%',
  avgSavings: '$425K'
};

export default function KingInheritanceFinancialPlanningPage() {
  return (
    <LocationServiceTemplate 
      city={kingData}
      service={inheritanceServiceData}
      stats={statsData}
    />
  );
}