import { Metadata } from 'next';
import LocationServiceTemplate from '@/components/templates/LocationServiceTemplate';

export const metadata: Metadata = {
  title: 'Divorce Financial Planning Ajax | Durham Region CDFA | ProsperBridge',
  description: 'Expert divorce financial planning for Ajax families. Specialized support for nuclear industry professionals and Durham Region commuters.',
  keywords: 'divorce financial planning Ajax, CDFA Durham Region, separation advisor Ajax',
};

const ajaxData = {
  name: 'Ajax',
  slug: 'ajax',
  population: '126,000',
  region: 'Durham Region',
  landmarks: [
    'Ajax Waterfront',
    'Pickering Nuclear Generating Station',
    'Ajax Downs',
    'Greenwood Conservation Area',
    'Veterans\' Point Gardens'
  ],
  neighborhoods: [
    'Downtown Ajax',
    'Lakeside',
    'Applecroft',
    'Riverside',
    'Hermitage',
    'Audley',
    'Duffins Bay',
    'Village East',
    'Nottingham',
    'Carruthers Creek'
  ],
  description: 'Ajax\'s nuclear industry professionals and Toronto commuters face unique divorce challenges involving specialized pensions, shift work considerations, and dual-income household divisions.'
};

const divorceServiceData = {
  name: 'Divorce Financial Planning',
  slug: 'divorce-financial-planning',
  icon: '💔',
  primaryColor: 'from-purple-600',
  secondaryColor: 'to-pink-600',
  description: 'Navigate divorce with expertise in nuclear industry benefits and commuter lifestyles.',
  benefits: [
    'Nuclear industry pension division',
    'OPG benefit considerations',
    'Shift work income calculations',
    'Commuter expense allocations',
    'Durham real estate division',
    'GO Train pass considerations',
    'Union benefit navigation',
    'Emergency worker support'
  ]
};

const statsData = {
  clientsServed: '260+',
  yearsExperience: '15+',
  successRate: '97%',
  avgSavings: '$48K'
};

export default function AjaxDivorceFinancialPlanningPage() {
  return (
    <LocationServiceTemplate 
      city={ajaxData}
      service={divorceServiceData}
      stats={statsData}
    />
  );
}