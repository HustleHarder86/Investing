import { Metadata } from 'next';
import LocationServiceTemplate from '@/components/templates/LocationServiceTemplate';

export const metadata: Metadata = {
  title: 'Divorce Financial Planning Markham | Tech Professional CFP® | Life Money',
  description: "Expert divorce financial planning for Markham tech professionals and entrepreneurs. Specialized in stock options, RSUs, and startup equity division.",
  keywords: 'divorce financial planning Markham, tech divorce advisor, CFP® Markham York Region',
};

const markhamData = {
  name: 'Markham',
  slug: 'markham',
  population: '356,000',
  region: 'York Region',
  landmarks: [
    'IBM Canada HQ',
    'AMD Headquarters',
    'Markham Civic Centre',
    'Pacific Mall',
    'Downtown Markham'
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
  description: "As Canada's high-tech capital with affluent professionals and entrepreneurs, Markham divorces often involve complex tech equity, stock options, and international assets requiring sophisticated financial planning."
};

const divorceServiceData = {
  name: 'Divorce Financial Planning',
  slug: 'divorce-financial-planning',
  icon: '💔',
  primaryColor: 'from-purple-600',
  secondaryColor: 'to-pink-600',
  description: "Navigate high-net-worth divorce with tech equity and international asset expertise.",
  benefits: [
    'Tech stock option division',
    'RSU and equity planning',
    'Startup valuation strategies',
    'International asset division',
    'High-income support calculations',
    'Executive compensation packages',
    'Cross-border considerations',
    'Complex investment portfolios'
  ]
};

const statsData = {
  clientsServed: '320+',
  yearsExperience: '15+',
  successRate: '98%',
  avgSavings: '$75K'
};

export default function MarkhamDivorceFinancialPlanningPage() {
  return (
    <LocationServiceTemplate 
      city={markhamData}
      service={divorceServiceData}
      stats={statsData}
    />
  );
}