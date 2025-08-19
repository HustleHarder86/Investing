import { Metadata } from 'next';
import LocationServiceTemplate from '@/components/templates/LocationServiceTemplate';

export const metadata: Metadata = {
  title: 'Divorce Financial Planning Burlington | Retirement & Estate Division | ProsperBridge',
  description: "Expert divorce financial planning for Burlington retirees and established families. Specialized in pension division, waterfront properties, and retirement assets.",
  keywords: 'divorce financial planning Burlington, retirement divorce Halton, pension division Burlington',
};

const burlingtonData = {
  name: 'Burlington',
  slug: 'burlington',
  population: '186,000',
  region: 'Halton Region',
  landmarks: [
    'Burlington Waterfront',
    'Joseph Brant Hospital',
    'Royal Botanical Gardens',
    'Burlington Golf & Country Club',
    'Spencer Smith Park'
  ],
  neighborhoods: [
    'Downtown Burlington',
    'Aldershot',
    'Roseland',
    'Shoreacres',
    'Tyandaga',
    'Millcroft',
    'Headon Forest',
    'Palmer',
    'Brant Hills',
    'Orchard'
  ],
  description: "Burlington's mature population and waterfront properties create unique divorce challenges, particularly for retirees dividing pensions, retirement savings, and valuable lakefront estates."
};

const divorceServiceData = {
  name: 'Divorce Financial Planning',
  slug: 'divorce-financial-planning',
  icon: '💔',
  primaryColor: 'from-purple-600',
  secondaryColor: 'to-pink-600',
  description: "Navigate grey divorce with expertise in retirement assets and waterfront properties.",
  benefits: [
    'Grey divorce specialization',
    'Pension division strategies',
    'CPP credit splitting',
    'Retirement account division',
    'Waterfront property valuation',
    'Cottage and recreational assets',
    'Estate planning updates',
    'Healthcare benefit considerations'
  ]
};

const statsData = {
  clientsServed: '320+',
  yearsExperience: '15+',
  successRate: '98%',
  avgSavings: '$55K'
};

export default function BurlingtonDivorceFinancialPlanningPage() {
  return (
    <LocationServiceTemplate 
      city={burlingtonData}
      service={divorceServiceData}
      stats={statsData}
    />
  );
}