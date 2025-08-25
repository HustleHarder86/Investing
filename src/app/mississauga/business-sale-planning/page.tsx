import { Metadata } from 'next';
import LocationServiceTemplate from '@/components/templates/LocationServiceTemplate';

export const metadata: Metadata = {
  title: 'Business Sale Planning Mississauga | M&A Advisors | Money in Motion',
  description: "Strategic business sale planning for Mississauga entrepreneurs. Maximize value, minimize taxes. Expert M&A advisory from our Mississauga headquarters.",
  keywords: 'business sale planning Mississauga, selling business Mississauga, M&A advisor Mississauga',
};

const mississaugaData = {
  name: 'Mississauga',
  slug: 'mississauga',
  population: '721,000',
  region: 'Peel Region',
  landmarks: [
    'Airport Corporate Centre',
    'Mississauga Business District',
    'Heartland Business Community',
    'Meadowvale Business Park',
    'Gateway Corporate Centre'
  ],
  neighborhoods: [
    'Airport Corporate Centre',
    'City Centre',
    'Meadowvale Business Park',
    'Heartland',
    'Gateway District',
    'Dixie Business Corridor',
    'Southdown Industrial',
    'Mavis-Erindale',
    'Sheridan Park',
    'Churchill Business Community'
  ],
  description: "Home to over 60,000 businesses and Fortune 500 headquarters, Mississauga offers unique opportunities for business sales and acquisitions."
};

const businessServiceData = {
  name: 'Business Sale Planning',
  slug: 'business-sale-planning',
  icon: '🏢',
  primaryColor: 'from-blue-600',
  secondaryColor: 'to-indigo-600',
  description: "Maximize your business value with local Mississauga expertise.",
  benefits: [
    'Business valuation and enhancement',
    'Capital gains exemption optimization ($1,016,836)',
    'Share vs. asset sale structuring',
    'Due diligence preparation',
    'Tax-efficient deal structuring',
    'Earnout and vendor financing',
    'Family business succession',
    'Post-sale wealth management'
  ]
};

const statsData = {
  clientsServed: '250+',
  yearsExperience: '15+',
  successRate: '96%',
  avgSavings: '$265K'
};

export default function MississaugaBusinessSalePlanningPage() {
  return (
    <LocationServiceTemplate 
      city={mississaugaData}
      service={businessServiceData}
      stats={statsData}
    />
  );
}