import { Metadata } from 'next';
import LocationServiceTemplate from '@/components/templates/LocationServiceTemplate';

export const metadata: Metadata = {
  title: 'Divorce Financial Planning Newmarket | York Region CDFA | ProsperBridge',
  description: 'Expert divorce financial planning for Newmarket families. Navigate complex property division in historic Main Street and modern subdivisions.',
  keywords: 'divorce financial planning Newmarket, CDFA York Region, separation advisor Newmarket',
};

const newmarketData = {
  name: 'Newmarket',
  slug: 'newmarket',
  population: '88,000',
  region: 'York Region',
  landmarks: [
    'Historic Main Street',
    'Southlake Regional Health Centre',
    'Upper Canada Mall',
    'Fairy Lake Park',
    'Newmarket Theatre'
  ],
  neighborhoods: [
    'Historic Downtown',
    'Stonehaven',
    'Woodland Hill',
    'Glenway',
    'Summerhill',
    'Bristol-London',
    'Huron Heights',
    'Gorham',
    'Armitage',
    'Madsen'
  ],
  description: 'Newmarket\'s blend of historic charm and modern growth creates diverse divorce scenarios from heritage property divisions to new subdivision mortgages, requiring tailored financial strategies.'
};

const divorceServiceData = {
  name: 'Divorce Financial Planning',
  slug: 'divorce-financial-planning',
  icon: '💔',
  primaryColor: 'from-purple-600',
  secondaryColor: 'to-pink-600',
  description: 'Navigate divorce with expertise in York Region property and family dynamics.',
  benefits: [
    'Heritage property valuations',
    'Main Street business division',
    'Healthcare worker support',
    'Southlake staff assistance',
    'York Region real estate',
    'Private school considerations',
    'Equestrian property division',
    'Small business separation'
  ]
};

const statsData = {
  clientsServed: '270+',
  yearsExperience: '15+',
  successRate: '97%',
  avgSavings: '$48K'
};

export default function NewmarketDivorceFinancialPlanningPage() {
  return (
    <LocationServiceTemplate 
      city={newmarketData}
      service={divorceServiceData}
      stats={statsData}
    />
  );
}