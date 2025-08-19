import { Metadata } from 'next';
import LocationServiceTemplate from '@/components/templates/LocationServiceTemplate';

export const metadata: Metadata = {
  title: 'Divorce Financial Planning Vaughan | Italian Community Expert | ProsperBridge',
  description: 'Expert divorce financial planning in Vaughan. Specialized support for business owners and construction industry families. CDFA certified.',
  keywords: 'divorce financial planning Vaughan, CDFA Vaughan, separation advisor York Region',
};

const vaughanData = {
  name: 'Vaughan',
  slug: 'vaughan',
  population: '323,000',
  region: 'York Region',
  landmarks: [
    'Vaughan Mills',
    'Canada\'s Wonderland',
    'Vaughan City Hall',
    'Kortright Centre',
    'McMichael Canadian Art Collection'
  ],
  neighborhoods: [
    'Woodbridge',
    'Thornhill',
    'Maple',
    'Kleinburg',
    'Concord',
    'Vellore Village',
    'Carrville',
    'Sonoma Heights',
    'Elder Mills',
    'Block 27'
  ],
  description: 'Vaughan\'s strong Italian-Canadian community and construction industry create unique divorce situations involving family businesses, real estate holdings, and complex asset structures.'
};

const divorceServiceData = {
  name: 'Divorce Financial Planning',
  slug: 'divorce-financial-planning',
  icon: '💔',
  primaryColor: 'from-purple-600',
  secondaryColor: 'to-pink-600',
  description: 'Navigate divorce with expertise in family businesses and construction industry assets.',
  benefits: [
    'Construction business division',
    'Family business valuation',
    'Real estate portfolio splitting',
    'Italian inheritance considerations',
    'Multiple property strategies',
    'Cash business valuations',
    'Contractor income analysis',
    'Investment property division'
  ]
};

const statsData = {
  clientsServed: '340+',
  yearsExperience: '15+',
  successRate: '98%',
  avgSavings: '$58K'
};

export default function VaughanDivorceFinancialPlanningPage() {
  return (
    <LocationServiceTemplate 
      city={vaughanData}
      service={divorceServiceData}
      stats={statsData}
    />
  );
}