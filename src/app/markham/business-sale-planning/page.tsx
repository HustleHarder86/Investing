import { Metadata } from 'next';
import LocationServiceTemplate from '@/components/templates/LocationServiceTemplate';

export const metadata: Metadata = {
  title: 'Business Sale Planning Markham | Tech Startup Exit Strategy | Life Money',
  description: "Strategic exit planning for Markham tech companies and startups. Expert M&A advisory for software, SaaS, and technology businesses in York Region.",
  keywords: 'tech startup sale Markham, business exit planning Markham, M&A advisor tech York',
};

const markhamData = {
  name: 'Markham',
  slug: 'markham',
  population: '356,000',
  region: 'York Region',
  landmarks: [
    'IBM Canada HQ',
    'AMD Headquarters',
    'Huawei Canada R&D',
    'Markham Convergence Centre',
    'ventureLAB Innovation Hub'
  ],
  neighborhoods: [
    'Highway 7 Tech Corridor',
    'Markham Centre',
    'Buttonville Business Park',
    '404/407 Tech Hub',
    'Allstate Business Park',
    'Commerce Valley Drive',
    'Woodbine Steeles Corporate',
    'Warden Enterprise Zone',
    'Kennedy Commerce Park',
    'McCowan Business District'
  ],
  description: "As Canada's high-tech capital, Markham offers unique opportunities for tech company exits, from software startups to established IT services firms seeking strategic buyers or private equity."
};

const businessServiceData = {
  name: 'Business Sale Planning',
  slug: 'business-sale-planning',
  icon: '🏢',
  primaryColor: 'from-blue-600',
  secondaryColor: 'to-indigo-600',
  description: "Expert M&A guidance for Markham's technology companies and startups.",
  benefits: [
    'SaaS company valuations',
    'Software business exits',
    'Tech startup acquisitions',
    'IP portfolio valuations',
    'Strategic buyer targeting',
    'Private equity preparation',
    'Earnout optimization',
    'Cross-border tech deals'
  ]
};

const statsData = {
  clientsServed: '220+',
  yearsExperience: '15+',
  successRate: '95%',
  avgSavings: '$425K'
};

export default function MarkhamBusinessSalePlanningPage() {
  return (
    <LocationServiceTemplate 
      city={markhamData}
      service={businessServiceData}
      stats={statsData}
    />
  );
}