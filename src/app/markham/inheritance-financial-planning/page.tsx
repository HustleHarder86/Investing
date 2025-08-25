import { Metadata } from 'next';
import LocationServiceTemplate from '@/components/templates/LocationServiceTemplate';

export const metadata: Metadata = {
  title: 'Inheritance Tax Planning Markham | High Net Worth Estate | Money in Motion',
  description: "Expert estate planning for Markham's affluent families. Minimize taxes on tech wealth, real estate portfolios, and international assets. York Region expertise.",
  keywords: 'inheritance tax planning Markham, estate planning Markham tech, high net worth York Region',
};

const markhamData = {
  name: 'Markham',
  slug: 'markham',
  population: '356,000',
  region: 'York Region',
  landmarks: [
    'Markham Stouffville Hospital',
    'Angus Glen Golf Club',
    'Main Street Unionville',
    'CF Markville',
    'York Technology Association'
  ],
  neighborhoods: [
    'Unionville',
    'Downtown Markham',
    'Cornell',
    'Berczy Village',
    'Cathedraltown',
    'Angus Glen',
    'Buttonville',
    'Milliken',
    'Thornhill',
    'Wismer Commons'
  ],
  description: "Markham's tech wealth and substantial real estate holdings create complex estate planning needs, particularly for multi-generational Chinese-Canadian families with international assets."
};

const inheritanceServiceData = {
  name: 'Inheritance Financial Planning',
  slug: 'inheritance-financial-planning',
  icon: '🏛️',
  primaryColor: 'from-green-600',
  secondaryColor: 'to-teal-600',
  description: "Sophisticated estate planning for Markham's tech executives and entrepreneurs.",
  benefits: [
    'Tech equity estate planning',
    'Stock option transfers',
    'International estate coordination',
    'Chinese succession planning',
    'Multiple property strategies',
    'Family trust structures',
    'Cross-border tax planning',
    'Charitable giving to universities'
  ]
};

const statsData = {
  clientsServed: '380+',
  yearsExperience: '15+',
  successRate: '99%',
  avgSavings: '$195K'
};

export default function MarkhamInheritanceFinancialPlanningPage() {
  return (
    <LocationServiceTemplate 
      city={markhamData}
      service={inheritanceServiceData}
      stats={statsData}
    />
  );
}