import { Metadata } from 'next';
import LocationServiceTemplate from '@/components/templates/LocationServiceTemplate';

export const metadata: Metadata = {
  title: 'Severance Package Planning Aurora | Executive Severance Support | Money in Motion',
  description: "Expert severance planning for Aurora executives and professionals. Navigate corporate restructuring and maximize high-value separation packages.",
  keywords: 'executive severance Aurora, job loss planning York Region, golden parachute Aurora',
};

const auroraData = {
  name: 'Aurora',
  slug: 'aurora',
  population: '62,000',
  region: 'York Region',
  landmarks: [
    'Aurora GO Station',
    'Aurora Town Hall',
    'Aurora Chamber of Commerce',
    'State Farm Canada HQ',
    'Magna International Offices'
  ],
  neighborhoods: [
    'Aurora Heights',
    'Aurora Grove',
    'Aurora Village',
    'Bayview Northeast',
    'Bayview Wellington',
    'Beacon Hall Golf Club',
    'Highland Gate',
    'Hills of St. Andrew',
    'Town Park',
    'Wellington Village'
  ],
  description: "Aurora's executive workforce faces high-stakes severance scenarios involving substantial packages, equity compensation, and non-compete agreements requiring sophisticated negotiation strategies."
};

const severanceServiceData = {
  name: 'Severance & Job Loss Planning',
  slug: 'severance-job-loss-planning',
  icon: '💼',
  primaryColor: 'from-orange-600',
  secondaryColor: 'to-red-600',
  description: "Executive-level severance support for Aurora's senior professionals.",
  benefits: [
    'Executive package negotiation',
    'Golden parachute optimization',
    'Equity compensation strategies',
    'Non-compete buyouts',
    'Benefits continuation planning',
    'Deferred comp arrangements',
    'Outplacement maximization',
    'Executive coaching funds'
  ]
};

const statsData = {
  clientsServed: '160+',
  yearsExperience: '15+',
  successRate: '98%',
  avgSavings: '$68K'
};

export default function AuroraSeveranceJobLossPlanningPage() {
  return (
    <LocationServiceTemplate 
      city={auroraData}
      service={severanceServiceData}
      stats={statsData}
    />
  );
}