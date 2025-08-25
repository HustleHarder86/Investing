'use client';

import Link from 'next/link';
import { services } from '@/lib/services';
import { getCitiesByTier } from '@/lib/cities';
import ServiceCard from '@/components/ui/ServiceCard';
import ServiceIcon from '@/components/ui/ServiceIcon';
import ContactForm from '@/components/forms/ContactForm';
import Header from '@/components/layout/Header';

// Metadata is handled by parent layout for client components

export default function ServicesPage() {
  const tier1Cities = getCitiesByTier(1);

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="services" />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-teal-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '0s', animationDuration: '4s'}}></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-400/15 to-pink-400/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s', animationDuration: '6s'}}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-xl border border-slate-200/50 rounded-full text-sm font-medium mb-8 shadow-lg">
              <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-slate-700">Comprehensive Financial Planning</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-display font-bold text-slate-900 mb-8 leading-tight">
              Financial Planning Services for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600 block">Life's Major Transitions</span>
            </h1>
            
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-12">
              As comprehensive financial planners, we handle any situation involving money. However, we specialize in these four critical life events that require specialized knowledge, experience, and compassionate guidance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Free Consultation - No Cost
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link
                href="/calculators"
                className="group inline-flex items-center px-8 py-4 bg-white/80 text-slate-700 border border-slate-200 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Try Our Calculators
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-8 leading-tight">
              Our Specialized Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Each service is designed with specialized expertise and tailored approaches for complex financial situations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <div key={service.slug} className="fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive Planning Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-slate-900 mb-6">
              Plus Comprehensive Financial Planning
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Beyond our specializations, we provide complete financial planning services for any money-related situation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-6 border border-slate-200/50 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <div className="w-6 h-6 bg-gradient-to-r from-teal-600 to-blue-600 rounded"></div>
              </div>
              <h3 className="font-display font-semibold text-slate-900 mb-1">Retirement Planning</h3>
              <p className="text-sm text-slate-600">RRSP/TFSA optimization</p>
            </div>
            
            <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-6 border border-slate-200/50 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <div className="w-6 h-6 bg-gradient-to-r from-teal-600 to-blue-600 rounded-full"></div>
              </div>
              <h3 className="font-display font-semibold text-slate-900 mb-1">Investment Management</h3>
              <p className="text-sm text-slate-600">Portfolio construction</p>
            </div>
            
            <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-6 border border-slate-200/50 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <div className="w-6 h-6 bg-gradient-to-r from-teal-600 to-blue-600 rounded-lg"></div>
              </div>
              <h3 className="font-display font-semibold text-slate-900 mb-1">Sudden Wealth</h3>
              <p className="text-sm text-slate-600">Lottery, inheritance, windfalls</p>
            </div>
            
            <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-6 border border-slate-200/50 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <div className="w-6 h-6 bg-gradient-to-r from-teal-600 to-blue-600 rounded-full"></div>
              </div>
              <h3 className="font-display font-semibold text-slate-900 mb-1">Estate Planning</h3>
              <p className="text-sm text-slate-600">Wills, trusts, tax efficiency</p>
            </div>
            
            <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-6 border border-slate-200/50 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <div className="w-6 h-6 bg-gradient-to-r from-teal-600 to-blue-600 rounded-lg"></div>
              </div>
              <h3 className="font-display font-semibold text-slate-900 mb-1">Any Money Matter</h3>
              <p className="text-sm text-slate-600">If it involves finances, we help</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-slate-900 mb-6">
              Serving the Complete GTA
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Based in Mississauga, we provide comprehensive financial planning services across all 21 municipalities in the Greater Toronto Area.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {tier1Cities.map(city => (
              <Link
                key={city.slug}
                href={`/locations/${city.slug}`}
                className="group bg-slate-50 hover:bg-gradient-to-br hover:from-teal-50 hover:to-blue-50 rounded-xl p-4 text-center transition-all duration-300 hover:shadow-lg border border-slate-200/50"
              >
                <h3 className="font-semibold text-slate-900 group-hover:text-teal-600 transition-colors">
                  {city.name}
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  All 4 Services
                </p>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/locations"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-200"
            >
              View All 21 Cities
              <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="consultation" className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-slate-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-slate-600">
              Book your free consultation today. Always no cost, no obligation, completely confidential.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 shadow-lg p-8">
              <h3 className="text-2xl font-display font-bold text-slate-900 mb-6">
                What to Expect in Your Consultation
              </h3>
              <ul className="space-y-4 text-slate-600">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-medium">Confidential discussion of your situation</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-medium">Clear explanation of your options</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-medium">Customized strategy recommendations</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-medium">No pressure, no obligation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-display font-bold text-white">Life Money</div>
                  <div className="text-sm text-white/70">Financial Advisory</div>
                </div>
              </div>
              <p className="text-white/80 mb-6 max-w-md leading-relaxed">
                CFP®-certified financial advisor specializing in life's major transitions. Proudly supporting GTA families with compassionate, expert guidance since 2010.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-display font-bold text-white mb-6">Our Services</h4>
              <ul className="space-y-3">
                {services.map(service => (
                  <li key={service.slug}>
                    <Link href={`/services/${service.slug}`} className="text-white/80 hover:text-teal-300 transition-colors flex items-center">
                      <ServiceIcon serviceIcon={service.icon} size="sm" className="mr-2" />
                      {service.shortName}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-lg font-display font-bold text-white mb-6">Resources</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/about" className="text-white/80 hover:text-teal-300 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-white/80 hover:text-teal-300 transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-white/80 hover:text-teal-300 transition-colors">
                    Financial Blog
                  </Link>
                </li>
                <li>
                  <Link href="/calculators" className="text-white/80 hover:text-teal-300 transition-colors">
                    Calculators
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="text-white/80 hover:text-teal-300 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-service" className="text-white/80 hover:text-teal-300 transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-700/50 pt-8 mt-12">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-white/60 text-sm mb-4 md:mb-0">
                &copy; 2024 Life Money. All rights reserved.
              </div>
              
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-white/80 text-sm font-medium">CFP® Certified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}