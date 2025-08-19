import Link from 'next/link';
import ContactForm from '@/components/forms/ContactForm';

interface LocationServiceTemplateProps {
  city: {
    name: string;
    slug: string;
    population: string;
    region: string;
    landmarks: string[];
    neighborhoods: string[];
    description: string;
  };
  service: {
    name: string;
    slug: string;
    icon: string;
    primaryColor: string;
    secondaryColor: string;
    description: string;
    benefits: string[];
  };
  stats: {
    clientsServed: string;
    yearsExperience: string;
    successRate: string;
    avgSavings: string;
  };
}

export default function LocationServiceTemplate({ city, service, stats }: LocationServiceTemplateProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200/50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <div>
                <div className="text-2xl font-display font-bold text-slate-900">ProsperBridge</div>
                <div className="text-sm text-slate-600 -mt-1 font-medium">Financial Advisory</div>
              </div>
            </Link>
            <div className="flex items-center space-x-4">
              <Link href={`/services/${service.slug}`} className="text-slate-600 hover:text-slate-900 transition-colors">
                {service.name}
              </Link>
              <Link href="/" className="text-slate-600 hover:text-slate-900 transition-colors">
                Home
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className={`absolute top-20 left-20 w-96 h-96 bg-gradient-to-r ${service.primaryColor}/10 ${service.secondaryColor}/10 rounded-full blur-3xl animate-pulse`}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            {/* Breadcrumbs */}
            <nav className="flex items-center space-x-2 text-sm text-slate-600 mb-8">
              <Link href="/" className="hover:text-slate-900">Home</Link>
              <span>/</span>
              <Link href={`/services/${service.slug}`} className="hover:text-slate-900">{service.name}</Link>
              <span>/</span>
              <span className="text-slate-900 font-medium">{city.name}</span>
            </nav>

            <h1 className="text-5xl md:text-6xl font-display font-bold text-slate-900 mb-8 tracking-tight leading-tight">
              {service.name} Services in{' '}
              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${service.primaryColor} ${service.secondaryColor}`}>
                {city.name}, Ontario
              </span>
            </h1>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-3xl">
              Expert {service.name.toLowerCase()} services for residents of {city.name} and surrounding areas. 
              Serving {city.neighborhoods.slice(0, 3).join(', ')} and all of {city.region}.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link 
                href="#consultation" 
                className={`bg-gradient-to-r ${service.primaryColor} ${service.secondaryColor} text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 text-center`}
              >
                Free Consultation in {city.name}
              </Link>
              <Link 
                href="tel:+16475550123" 
                className="border-2 border-slate-600 text-slate-600 px-8 py-4 rounded-xl font-semibold hover:bg-slate-600 hover:text-white transition-colors duration-200 text-center"
              >
                Call: 647-555-0123
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-slate-900">{stats.clientsServed}</div>
                <div className="text-sm text-slate-600">{city.name} Clients Served</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-slate-900">{stats.yearsExperience}</div>
                <div className="text-sm text-slate-600">Years in {city.region}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-slate-900">{stats.successRate}</div>
                <div className="text-sm text-slate-600">Success Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-slate-900">{stats.avgSavings}</div>
                <div className="text-sm text-slate-600">Avg. Client Savings</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">
                Why Choose ProsperBridge for {service.name} in {city.name}?
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {city.description} With a population of {city.population}, {city.name} residents face unique 
                financial challenges that require local expertise and understanding.
              </p>
              
              <div className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className={`w-8 h-8 bg-gradient-to-r ${service.primaryColor} ${service.secondaryColor} rounded-full flex items-center justify-center mr-4 flex-shrink-0`}>
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-slate-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-display font-bold text-slate-900 mb-6">
                Serving All {city.name} Areas
              </h3>
              <div className="bg-slate-50 rounded-2xl p-8">
                <h4 className="font-semibold text-slate-900 mb-4">Neighborhoods We Serve:</h4>
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {city.neighborhoods.map((neighborhood, index) => (
                    <div key={index} className="text-slate-600">• {neighborhood}</div>
                  ))}
                </div>
                
                <h4 className="font-semibold text-slate-900 mb-4">Near These Landmarks:</h4>
                <div className="space-y-2">
                  {city.landmarks.map((landmark, index) => (
                    <div key={index} className="text-slate-600">• {landmark}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-slate-900 mb-6">
              Our {service.name} Process in {city.name}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A proven approach tailored to {city.name} residents&apos; unique needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className={`w-20 h-20 bg-gradient-to-r ${service.primaryColor} ${service.secondaryColor} rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold`}>
                1
              </div>
              <h3 className="text-xl font-display font-bold text-slate-900 mb-4">Free Consultation</h3>
              <p className="text-slate-600">
                Meet at our {city.name} office or virtually to discuss your situation and goals.
              </p>
            </div>

            <div className="text-center">
              <div className={`w-20 h-20 bg-gradient-to-r ${service.primaryColor} ${service.secondaryColor} rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold`}>
                2
              </div>
              <h3 className="text-xl font-display font-bold text-slate-900 mb-4">Strategic Planning</h3>
              <p className="text-slate-600">
                Develop a customized financial strategy based on Ontario and {city.name} regulations.
              </p>
            </div>

            <div className="text-center">
              <div className={`w-20 h-20 bg-gradient-to-r ${service.primaryColor} ${service.secondaryColor} rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold`}>
                3
              </div>
              <h3 className="text-xl font-display font-bold text-slate-900 mb-4">Implementation</h3>
              <p className="text-slate-600">
                Execute your plan with ongoing support from our {city.name} team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Testimonial */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-12 border border-slate-200 shadow-xl">
            <div className="flex items-center justify-center mb-8">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <blockquote className="text-2xl text-slate-700 text-center mb-8 italic">
              &ldquo;ProsperBridge helped me navigate my {service.name.toLowerCase()} with expertise and compassion. 
              Their knowledge of {city.name}&apos;s specific regulations was invaluable.&rdquo;
            </blockquote>
            <div className="text-center">
              <div className="font-semibold text-slate-900">M. Thompson</div>
              <div className="text-slate-600">{city.name} Resident</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="consultation" className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-display font-bold text-slate-900 mb-6">
                Get Started with {service.name} in {city.name}
              </h2>
              <p className="text-xl text-slate-600 mb-8">
                Schedule your free consultation today. We&apos;re here to help {city.name} residents achieve 
                financial peace of mind during life&apos;s transitions.
              </p>
              
              <div className="bg-slate-50 rounded-2xl p-6 mb-8">
                <h3 className="font-semibold text-slate-900 mb-4">Service Areas Near {city.name}:</h3>
                <div className="grid grid-cols-2 gap-2 text-slate-600">
                  <div>• Mississauga</div>
                  <div>• Brampton</div>
                  <div>• Markham</div>
                  <div>• Vaughan</div>
                  <div>• Richmond Hill</div>
                  <div>• Oakville</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <a href="tel:+16475550123" className="flex items-center text-slate-700 hover:text-slate-900">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  647-555-0123
                </a>
                <a href="mailto:info@prosperbridge.ca" className="flex items-center text-slate-700 hover:text-slate-900">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  info@prosperbridge.ca
                </a>
              </div>
            </div>

            <div>
              <ContactForm service={service.slug} city={city.slug} />
            </div>
          </div>
        </div>
      </section>

      {/* Schema Markup for Local SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FinancialService",
            "name": `ProsperBridge ${service.name} - ${city.name}`,
            "description": `Expert ${service.name.toLowerCase()} services in ${city.name}, Ontario`,
            "areaServed": {
              "@type": "City",
              "name": city.name,
              "containedIn": {
                "@type": "State",
                "name": "Ontario",
                "containedIn": {
                  "@type": "Country",
                  "name": "Canada"
                }
              }
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": city.name,
              "addressRegion": "ON",
              "addressCountry": "CA"
            },
            "telephone": "+1-647-555-0123",
            "email": "info@prosperbridge.ca"
          })
        }}
      />

      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p>&copy; 2025 ProsperBridge Financial Advisory - Serving {city.name} and the Greater Toronto Area</p>
        </div>
      </footer>
    </div>
  );
}