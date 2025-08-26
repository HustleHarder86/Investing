import { Metadata } from 'next';
import LocationServiceTemplate from '@/components/templates/LocationServiceTemplate';
import { cities } from '@/lib/cities';
import { getServiceBySlug } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Divorce Financial Planning Toronto | CFP® Certified Advisors | Life Money',
  description: "Expert divorce financial planning in Toronto. Navigate asset division, spousal support, and tax implications with certified professionals. Serving downtown Toronto, North York, Etobicoke, and Scarborough.",
  keywords: 'divorce financial planning Toronto, CFP® Toronto, divorce financial advisor Toronto, asset division Toronto, spousal support Toronto',
  openGraph: {
    title: 'Divorce Financial Planning Toronto | Life Money',
    description: "Expert divorce financial planning services for Toronto residents. Free consultation available.",
    type: 'website',
  }
};

const torontoCity = cities.find(city => city.slug === 'toronto')!;
const divorceService = getServiceBySlug('divorce-financial-planning')!;

const statsData = {
  clientsServed: '500+',
  yearsExperience: '15+',
  successRate: '98%',
  avgSavings: '$45K'
};

export default function TorontoDivorceFinancialPlanningPage() {
  return (
    <LocationServiceTemplate 
      city={torontoCity}
      service={divorceService}
      stats={statsData}
    />
  );
}