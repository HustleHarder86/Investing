'use client';

import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getCityBySlug } from '@/lib/cities';
import { services } from '@/lib/services';
import ServiceIcon from '@/components/ui/ServiceIcon';
import ContactForm from '@/components/forms/ContactForm';
import Header from '@/components/layout/Header';

interface CityLocationPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CityLocationPage({ params }: CityLocationPageProps) {
  const { slug } = await params;
  const city = getCityBySlug(slug);

  if (!city) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="locations" />

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
              <span className="text-slate-700">
                {city.slug === 'mississauga' ? 'Our Home Base' : `${city.distanceFromMississauga}km from our Mississauga office`}
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-display font-bold text-slate-900 mb-8 leading-tight">
              Financial Planning in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600 block">{city.name}</span>
            </h1>
            
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-8">
              {city.description}. Expert financial planning services for life's major transitions, serving families and professionals throughout {city.name} and the Greater Toronto Area.
            </p>

            {city.slug === 'mississauga' && (
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-teal-50 to-blue-50 border border-teal-200 rounded-full text-teal-700 font-medium mb-8">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Our main office is located here
              </div>
            )}
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Free Consultation in {city.name}
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

      {/* Services Available in This City */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-8 leading-tight">
              Our Services in {city.name}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              All four of our specialized financial planning services are available to {city.name} residents, along with comprehensive financial planning for any money-related situation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-16">
            {services.map((service, index) => (
              <div key={service.slug} className="fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-slate-200/50 hover:shadow-2xl transition-all duration-300 group h-full">
                  {/* Service Icon */}
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg ${
                    service.icon === 'divorce' ? 'bg-gradient-to-r from-teal-500 to-teal-600' :
                    service.icon === 'inheritance' ? 'bg-gradient-to-r from-purple-500 to-purple-600' :
                    service.icon === 'business' ? 'bg-gradient-to-r from-emerald-500 to-emerald-600' :
                    'bg-gradient-to-r from-amber-500 to-amber-600'
                  }`}>
                    <ServiceIcon serviceIcon={service.icon} size="lg" className="text-white" />
                  </div>
                  
                  {/* Service Content */}
                  <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">{service.shortName}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  {/* CTA */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      href={`/${city.slug}/${service.slug}`}
                      className={`flex items-center justify-center px-6 py-3 rounded-xl font-semibold transition-all duration-200 group/cta ${
                        service.icon === 'divorce' ? 'bg-teal-600 hover:bg-teal-700' :
                        service.icon === 'inheritance' ? 'bg-purple-600 hover:bg-purple-700' :
                        service.icon === 'business' ? 'bg-emerald-600 hover:bg-emerald-700' :
                        'bg-amber-600 hover:bg-amber-700'
                      } text-white shadow-lg hover:shadow-xl`}
                    >
                      Learn More in {city.name}
                      <svg className="ml-2 w-4 h-4 group-hover/cta:translate-x-1 transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Services */}
          <div className="text-center">
            <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 shadow-xl border border-slate-200/50">
              <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">
                Plus Comprehensive Financial Planning
              </h3>
              <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                Beyond our specializations, we provide complete financial planning services including retirement planning, investment management, tax optimization, estate planning, and any other money-related situation.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-3xl mx-auto">
                <div className="text-center">
                  <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <div className="w-4 h-4 bg-teal-600 rounded"></div>
                  </div>
                  <div className="text-sm font-medium text-slate-700">Retirement Planning</div>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                  </div>
                  <div className="text-sm font-medium text-slate-700">Investment Management</div>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <div className="w-4 h-4 bg-purple-600 rounded-lg"></div>
                  </div>
                  <div className="text-sm font-medium text-slate-700">Tax Optimization</div>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <div className="w-4 h-4 bg-emerald-600 rounded-full"></div>
                  </div>
                  <div className="text-sm font-medium text-slate-700">Estate Planning</div>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <div className="w-4 h-4 bg-amber-600 rounded-lg"></div>
                  </div>
                  <div className="text-sm font-medium text-slate-700">Any Money Matter</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* City Information Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-display font-bold text-slate-900 mb-8">
                Why Choose Us for Financial Planning in {city.name}?
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Local GTA Expertise</h3>
                    <p className="text-slate-600">
                      Deep understanding of {city.name} residents' needs, local market conditions, and GTA-specific financial planning requirements.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">CFP® Certified</h3>
                    <p className="text-slate-600">
                      Professional certification ensures you receive the highest standard of financial planning advice and ethical service.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Specialized Focus</h3>
                    <p className="text-slate-600">
                      Unlike general advisors, we specialize in the four major life transitions that require expert knowledge and experience.
                    </p>
                  </div>
                </div>

                {city.slug !== 'mississauga' && (
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">Convenient Access</h3>
                      <p className="text-slate-600">
                        Just {city.distanceFromMississauga}km from our Mississauga office, with virtual and phone consultations available for your convenience.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 shadow-xl border border-slate-200/50">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-teal-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-display font-bold text-slate-900 mb-2">
                  Free Consultation
                </h3>
                <p className="text-slate-600 mb-6">
                  Get started with a completely free, no-obligation consultation about your financial situation.
                </p>
              </div>
              
              <div className="space-y-3 text-sm text-slate-600">
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-teal-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Always completely free</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-teal-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>No pressure or obligation</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-teal-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Completely confidential</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-teal-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Available in-person, virtual, or phone</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-slate-900 mb-4">
              Ready to Get Started in {city.name}?
            </h2>
            <p className="text-xl text-slate-600">
              Book your free consultation today. Serving {city.name} residents with expert financial planning.
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
                CFP®-certified financial advisor specializing in life's major transitions. Proudly serving {city.name} and GTA families with expert guidance since 2010.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-display font-bold text-white mb-6">Our Services in {city.name}</h4>
              <ul className="space-y-3">
                {services.map(service => (
                  <li key={service.slug}>
                    <Link href={`/${city.slug}/${service.slug}`} className="text-white/80 hover:text-teal-300 transition-colors flex items-center">
                      <ServiceIcon serviceIcon={service.icon} size="sm" className="mr-2" />
                      {service.shortName}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-display font-bold text-white mb-6">Quick Links</h4>
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
                  <Link href="/locations" className="text-white/80 hover:text-teal-300 transition-colors">
                    All Locations
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-700/50 pt-8 mt-12">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-white/60 text-sm mb-4 md:mb-0">
                &copy; 2024 Life Money. All rights reserved. Serving {city.name} and the GTA.
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