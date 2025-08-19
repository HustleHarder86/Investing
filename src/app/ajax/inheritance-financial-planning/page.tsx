import { Metadata } from 'next';
import LocationServiceTemplate from '@/components/templates/LocationServiceTemplate';

export const metadata: Metadata = {
  title: 'Inheritance Tax Planning Ajax | Nuclear Industry Estates | ProsperBridge',
  description: 'Expert estate planning for Ajax nuclear industry families. Navigate OPG pensions, specialized benefits, and high-value estates in Durham Region.',
  keywords: 'inheritance tax planning Ajax, estate planning nuclear workers, OPG pension succession',
};

const ajaxData = {
  name: 'Ajax',
  slug: 'ajax',
  population: '126,000',
  region: 'Durham Region',
  landmarks: [
    'Ajax Waterfront Park',
    'Pickering Nuclear Station',
    'Ajax Downs Racetrack',
    'Greenwood Conservation',
    'Paradise Beach'
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
  description: 'Ajax\'s nuclear industry workforce has accumulated significant wealth through OPG pensions and benefits, creating complex estate planning needs for specialized retirement packages and beneficiary designations.'
};

const inheritanceServiceData = {
  name: 'Inheritance Financial Planning',
  slug: 'inheritance-financial-planning',
  icon: '🏛️',
  primaryColor: 'from-green-600',
  secondaryColor: 'to-teal-600',
  description: 'Specialized estate planning for nuclear industry families and Durham professionals.',
  benefits: [
    'OPG pension maximization',
    'Nuclear worker benefits transfer',
    'OMERS pension strategies',
    'Power Workers Union benefits',
    'Defined benefit plan succession',
    'Survivor benefit optimization',
    'Durham property transfers',
    'Cross-border planning for US workers'
  ]
};

const statsData = {
  clientsServed: '290+',
  yearsExperience: '15+',
  successRate: '99%',
  avgSavings: '$125K'
};

export default function AjaxInheritanceFinancialPlanningPage() {
  return (
    <LocationServiceTemplate 
      city={ajaxData}
      service={inheritanceServiceData}
      stats={statsData}
    />
  );
}