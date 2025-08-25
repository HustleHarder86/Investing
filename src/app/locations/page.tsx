import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Users, Building2, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Locations | Greater Toronto Area Financial Planning | Money in Motion',
  description: "Money in Motion serves all Greater Toronto Area communities with expert financial planning for divorce, inheritance, business sales, and severance.",
  keywords: 'GTA financial planning locations, Toronto area financial advisors, Ontario CFP® locations',
};

const locations = [
  {
    region: 'Core Urban Centres',
    description: "Major metropolitan areas with diverse populations and complex financial needs",
    cities: [
      { name: 'Toronto', slug: 'toronto', population: '2.8M', specialty: 'Corporate executives & urban professionals' },
      { name: 'Mississauga', slug: 'mississauga', population: '761K', specialty: 'Airport workers & corporate headquarters' },
      { name: 'Brampton', slug: 'brampton', population: '656K', specialty: 'Logistics industry & diverse families' },
      { name: 'Hamilton', slug: 'hamilton', population: '579K', specialty: 'Steel workers & manufacturing' },
      { name: 'Markham', slug: 'markham', population: '353K', specialty: 'Tech professionals & entrepreneurs' },
    ]
  },
  {
    region: 'York Region',
    description: "Affluent communities with high net worth families and businesses",
    cities: [
      { name: 'Vaughan', slug: 'vaughan', population: '323K', specialty: 'Construction industry & trades' },
      { name: 'Richmond Hill', slug: 'richmond-hill', population: '202K', specialty: 'Professional services & healthcare' },
      { name: 'Newmarket', slug: 'newmarket', population: '88K', specialty: 'Healthcare workers & Main Street businesses' },
      { name: 'Aurora', slug: 'aurora', population: '62K', specialty: 'Executive families & luxury estates' },
      { name: 'King', slug: 'king', population: '27K', specialty: 'Ultra-wealthy & equestrian estates' },
      { name: 'Georgina', slug: 'georgina', population: '47K', specialty: 'Lake Simcoe cottages & tourism' },
    ]
  },
  {
    region: 'Halton Region',
    description: "Waterfront luxury and rapidly growing family communities",
    cities: [
      { name: 'Oakville', slug: 'oakville', population: '213K', specialty: 'Ultra-wealthy waterfront estates' },
      { name: 'Burlington', slug: 'burlington', population: '186K', specialty: 'Established wealth & retirees' },
      { name: 'Milton', slug: 'milton', population: '132K', specialty: 'Young families & fastest growth' },
      { name: 'Halton Hills', slug: 'halton-hills', population: '62K', specialty: 'Manufacturing & Main Street businesses' },
    ]
  },
  {
    region: 'Durham Region',
    description: "Nuclear industry hub and eastern GTA growth corridor",
    cities: [
      { name: 'Oshawa', slug: 'oshawa', population: '175K', specialty: 'Automotive workers & GM pensions' },
      { name: 'Whitby', slug: 'whitby', population: '138K', specialty: 'Growing families & professionals' },
      { name: 'Ajax', slug: 'ajax', population: '126K', specialty: 'Nuclear industry & OPG workers' },
      { name: 'Pickering', slug: 'pickering', population: '99K', specialty: 'Nuclear station & waterfront' },
      { name: 'Uxbridge', slug: 'uxbridge', population: '22K', specialty: 'Rural estates & equestrian farms' },
    ]
  },
  {
    region: 'Peel Region - North',
    description: "Rural estates and aggregate industry",
    cities: [
      { name: 'Caledon', slug: 'caledon', population: '76K', specialty: 'Aggregate industry & rural properties' },
    ]
  }
];

const services = [
  { name: 'Divorce Financial Planning', slug: 'divorce-financial-planning', icon: '💔' },
  { name: 'Inheritance Planning', slug: 'inheritance-financial-planning', icon: '🏛️' },
  { name: 'Business Sale Planning', slug: 'business-sale-planning', icon: '🏢' },
  { name: 'Severance Planning', slug: 'severance-job-loss-planning', icon: '💼' },
];

export default function LocationsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Money in Motion
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/services/divorce-financial-planning" className="text-gray-700 hover:text-blue-600 transition-colors">Services</Link>
              <Link href="/locations" className="text-blue-600 font-semibold">Locations</Link>
              <a 
                href="tel:1-800-PROSPER" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300"
              >
                1-800-PROSPER
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Serving All of Greater Toronto
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            With deep local expertise across 21 communities, Money in Motion delivers specialized financial planning 
            tailored to your city's unique industries, demographics, and opportunities.
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-gray-900">21</div>
              <div className="text-sm text-gray-600">Cities Served</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <Users className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-gray-900">6.5M+</div>
              <div className="text-sm text-gray-600">Population Reach</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <Building2 className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-gray-900">84</div>
              <div className="text-sm text-gray-600">Local Offices</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <TrendingUp className="w-8 h-8 text-orange-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-gray-900">15+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations by Region */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {locations.map((region, regionIdx) => (
            <div key={regionIdx} className="mb-12">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">{region.region}</h2>
                <p className="text-gray-600">{region.description}</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {region.cities.map((city, cityIdx) => (
                  <div key={cityIdx} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{city.name}</h3>
                          <p className="text-sm text-gray-500">Population: {city.population}</p>
                        </div>
                        <MapPin className="w-6 h-6 text-blue-600" />
                      </div>
                      
                      <p className="text-gray-600 mb-6 text-sm">{city.specialty}</p>
                      
                      <div className="space-y-2">
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Services Available:</p>
                        <div className="grid grid-cols-2 gap-2">
                          {services.map((service, serviceIdx) => (
                            <Link
                              key={serviceIdx}
                              href={`/${city.slug}/${service.slug}`}
                              className="text-sm bg-gray-50 hover:bg-blue-50 rounded-lg px-3 py-2 text-gray-700 hover:text-blue-600 transition-all duration-200 text-center"
                            >
                              <span className="mr-1">{service.icon}</span>
                              <span className="hidden sm:inline">{service.name.split(' ')[0]}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                      
                      <Link 
                        href={`/${city.slug}/divorce-financial-planning`}
                        className="mt-4 block text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg py-2 hover:shadow-lg transition-all duration-300"
                      >
                        View {city.name} Services
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Service Matrix */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Comprehensive Coverage Across All Services
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Available in all 21 Greater Toronto Area locations with specialized local expertise.
                </p>
                <div className="text-sm text-gray-500">
                  <span className="font-semibold">84 local offices</span> ready to serve you
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Find Your Local Money in Motion Office
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            With offices in every major GTA community, expert financial planning is always nearby.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:1-800-PROSPER" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300"
            >
              Call 1-800-PROSPER
            </a>
            <Link 
              href="/toronto/divorce-financial-planning" 
              className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-all duration-300"
            >
              Browse Toronto Offices
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Money in Motion</h3>
              <p className="text-gray-400">
                Greater Toronto's trusted financial planning partner for life's major transitions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Major Cities</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/toronto/divorce-financial-planning" className="hover:text-white">Toronto</Link></li>
                <li><Link href="/mississauga/divorce-financial-planning" className="hover:text-white">Mississauga</Link></li>
                <li><Link href="/brampton/divorce-financial-planning" className="hover:text-white">Brampton</Link></li>
                <li><Link href="/hamilton/divorce-financial-planning" className="hover:text-white">Hamilton</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/services/divorce-financial-planning" className="hover:text-white">Divorce Planning</Link></li>
                <li><Link href="/services/inheritance-financial-planning" className="hover:text-white">Inheritance Planning</Link></li>
                <li><Link href="/services/business-sale-planning" className="hover:text-white">Business Sale</Link></li>
                <li><Link href="/services/severance-job-loss-planning" className="hover:text-white">Severance Planning</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>1-800-PROSPER</li>
                <li>info@lifemoney.ca</li>
                <li>Mon-Fri 9AM-6PM EST</li>
                <li>Sat 10AM-4PM EST</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Money in Motion Financial Planning. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}