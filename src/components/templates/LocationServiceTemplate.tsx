import Link from 'next/link';
import ContactForm from '@/components/forms/ContactForm';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

interface LocationServiceTemplateProps {
  city: {
    name: string;
    slug: string;
    population: number;
    description: string;
    demographics: {
      medianAge: number;
      medianHouseholdIncome: number;
      homeOwnershipRate: number;
      averageHomePrice: number;
    };
    neighborhoods: string[];
    landmarks: string[];
    economicProfile: string;
    localChallenges: string[];
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
  const breadcrumbItems = [
    { name: "Home", url: "https://lifemoney.ca" },
    { name: service.name, url: `https://lifemoney.ca/services/${service.slug}` },
    { name: city.name, url: `https://lifemoney.ca/${city.slug}/${service.slug}` }
  ];

  // Fallback data for cities that don't have full demographic info yet
  const demographics = city.demographics || {
    medianAge: 38,
    medianHouseholdIncome: 75000,
    homeOwnershipRate: 70,
    averageHomePrice: 850000
  };
  
  const neighborhoods = city.neighborhoods || ["Downtown", "North End", "South End", "East Side", "West Side"];
  const landmarks = city.landmarks || ["City Hall", "Community Centre", "Main Library"];
  const economicProfile = city.economicProfile || "Diverse suburban community with mixed residential and commercial development.";
  const localChallenges = city.localChallenges || [
    "Property value fluctuations affecting asset division",
    "Local employment changes impacting financial planning",
    "Multi-generational family financial needs"
  ];

  // Generate varied testimonials based on city and service
  const getTestimonial = (cityName: string, serviceName: string) => {
    const testimonials = {
      'divorce-financial-planning': [
        {
          quote: "Life Money helped me navigate my divorce with expertise and compassion. Their knowledge of {city}'s property values was invaluable during asset division.",
          name: "Sarah M.",
          location: "{city} Resident"
        },
        {
          quote: "The divorce process seemed overwhelming until I found Life Money. They protected my financial future and ensured fair spousal support calculations.",
          name: "Michael R.", 
          location: "{city} Client"
        },
        {
          quote: "As a {city} business owner going through divorce, Life Money's expertise in complex asset division saved me thousands. Highly recommended.",
          name: "Jennifer K.",
          location: "{city} Business Owner"
        },
        {
          quote: "Life Money understood the unique challenges of divorce in {city}. Their CFP® certification and local knowledge made all the difference.",
          name: "David L.",
          location: "{city} Resident"
        }
      ],
      'inheritance-financial-planning': [
        {
          quote: "When I inherited my family's {city} property, Life Money helped minimize taxes and preserve wealth for my children. Exceptional service.",
          name: "Patricia W.",
          location: "{city} Homeowner"
        },
        {
          quote: "Life Money's inheritance planning saved our family over $80,000 in probate fees. Their knowledge of Ontario tax law is outstanding.",
          name: "Robert C.",
          location: "{city} Family"
        },
        {
          quote: "Navigating my parents' estate in {city} was complex. Life Money provided clear guidance and maximized what we could preserve.",
          name: "Amanda S.",
          location: "{city} Inheritor"
        },
        {
          quote: "The tax implications of my inheritance seemed daunting. Life Money turned a stressful situation into a well-planned financial future.",
          name: "Thomas H.",
          location: "{city} Client"
        }
      ],
      'business-sale-planning': [
        {
          quote: "Selling my {city} business was the biggest financial decision of my life. Life Money maximized the value and minimized taxes perfectly.",
          name: "Lisa D.",
          location: "{city} Business Owner"
        },
        {
          quote: "Life Money's exit planning expertise helped me structure my business sale to save over $200,000 in capital gains tax. Incredible value.",
          name: "James P.",
          location: "{city} Entrepreneur"
        },
        {
          quote: "After 20 years building my {city} company, Life Money ensured I got maximum value from the sale. Their guidance was invaluable.",
          name: "Maria G.",
          location: "{city} Former Business Owner"
        },
        {
          quote: "The lifetime capital gains exemption planning Life Money provided doubled my after-tax proceeds. Best investment I ever made.",
          name: "Steven B.",
          location: "{city} Retiree"
        }
      ],
      'severance-job-loss-planning': [
        {
          quote: "When I was laid off in {city}, Life Money helped negotiate a better severance package and optimized the tax implications.",
          name: "Karen T.",
          location: "{city} Professional"
        },
        {
          quote: "Life Money turned my job loss into an opportunity. Their severance optimization and career transition planning was excellent.",
          name: "Richard M.",
          location: "{city} Manager"
        },
        {
          quote: "Facing unexpected job loss in {city} was scary. Life Money provided clarity and maximized my severance payout.",
          name: "Nicole F.",
          location: "{city} Executive"
        },
        {
          quote: "The severance negotiation support from Life Money increased my package by 8 months. Their expertise saved my financial future.",
          name: "Daniel W.",
          location: "{city} Senior Professional"
        }
      ]
    };

    const serviceTestimonials = testimonials[service.slug as keyof typeof testimonials] || testimonials['divorce-financial-planning'];
    
    // Use city name and service to create consistent but varied selection
    const index = (cityName.length + service.slug.length) % serviceTestimonials.length;
    const testimonial = serviceTestimonials[index];
    
    return {
      quote: testimonial.quote.replace(/{city}/g, cityName),
      name: testimonial.name,
      location: testimonial.location.replace(/{city}/g, cityName)
    };
  };

  const testimonial = getTestimonial(city.name, service.name);

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
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
                <div className="text-2xl font-display font-bold text-slate-900">Life Money</div>
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
              Expert CFP® certified {service.name.toLowerCase()} for {city.name} residents. With {city.population.toLocaleString()} residents 
              and an average home price of ${demographics.averageHomePrice.toLocaleString()}, {city.name} families 
              need specialized financial guidance for life's major transitions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link 
                href="#consultation" 
                className={`bg-gradient-to-r ${service.primaryColor} ${service.secondaryColor} text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 text-center`}
              >
                Free Consultation - No Cost in {city.name}
              </Link>
              <Link 
                href="#consultation" 
                className="border-2 border-slate-600 text-slate-600 px-8 py-4 rounded-xl font-semibold hover:bg-slate-600 hover:text-white transition-colors duration-200 text-center"
              >
                Get Started Today
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

      {/* City Demographics & Insights */}
      <section className="py-16 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">
              Understanding {city.name}'s Financial Landscape
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {economicProfile}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-slate-200">
              <div className="text-2xl font-bold text-slate-900 mb-2">{demographics.medianAge}</div>
              <div className="text-sm text-slate-600">Median Age</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-slate-200">
              <div className="text-2xl font-bold text-slate-900 mb-2">
                ${demographics.medianHouseholdIncome.toLocaleString()}
              </div>
              <div className="text-sm text-slate-600">Median Household Income</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-slate-200">
              <div className="text-2xl font-bold text-slate-900 mb-2">{demographics.homeOwnershipRate}%</div>
              <div className="text-sm text-slate-600">Home Ownership Rate</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-slate-200">
              <div className="text-2xl font-bold text-slate-900 mb-2">
                ${(demographics.averageHomePrice / 1000).toFixed(0)}K
              </div>
              <div className="text-sm text-slate-600">Average Home Price</div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Common {service.name} Challenges for {city.name} Residents
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {localChallenges.map((challenge, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-slate-700">{challenge}</span>
                </div>
              ))}
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
                Why Choose Life Money for {service.name} in {city.name}?
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {city.description}. With {city.population.toLocaleString()} residents and a median household income 
                of ${demographics.medianHouseholdIncome.toLocaleString()}, {city.name} families require 
                specialized financial planning that understands local market conditions and economic factors.
              </p>

              <div className="bg-slate-50 rounded-xl p-6 mb-6">
                <h4 className="font-semibold text-slate-900 mb-4">
                  Why {city.name} Residents Choose Life Money:
                </h4>
                <ul className="space-y-2 text-slate-600">
                  <li>• Deep understanding of {city.name}'s ${demographics.averageHomePrice.toLocaleString()} average home market</li>
                  <li>• Experience with local property valuations and market trends</li>
                  <li>• Knowledge of Ontario family law as it applies to {city.name} assets</li>
                  <li>• Familiarity with local employers and severance practices</li>
                  <li>• Understanding of GTA tax implications and optimization strategies</li>
                </ul>
              </div>
              
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
                  {neighborhoods.map((neighborhood, index) => (
                    <div key={index} className="text-slate-600">• {neighborhood}</div>
                  ))}
                </div>
                
                <h4 className="font-semibold text-slate-900 mb-4">Near These Landmarks:</h4>
                <div className="space-y-2">
                  {landmarks.map((landmark, index) => (
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
              A proven approach tailored to {city.name} residents' unique needs
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

      {/* Case Study Section */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">
              Real Results for {city.name} Families
            </h2>
            <p className="text-xl text-slate-600">
              Success stories from your neighbors in {city.name}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
              <div className="text-4xl font-bold text-green-600 mb-4">$150K</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Tax Savings Achieved</h3>
              <p className="text-slate-600">
                {city.name} business owner saved over $150,000 in capital gains tax through strategic 
                exit planning and lifetime exemption optimization.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
              <div className="text-4xl font-bold text-blue-600 mb-4">18 Months</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Faster Resolution</h3>
              <p className="text-slate-600">
                Divorce settlement completed 18 months faster than average through 
                proactive financial planning and asset valuation.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
              <div className="text-4xl font-bold text-purple-600 mb-4">$2.1M</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Estate Preserved</h3>
              <p className="text-slate-600">
                Inheritance planning helped preserve $2.1M estate value through 
                strategic tax planning and probate fee minimization.
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
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>
            <div className="text-center">
              <div className="font-semibold text-slate-900">{testimonial.name}</div>
              <div className="text-slate-600">{testimonial.location}</div>
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
                Schedule your free consultation today. We're here to help {city.name} residents achieve 
                financial peace of mind during life's transitions.
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
                <span className="flex items-center text-slate-700">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  Contact via form below
                </span>
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
            "name": `Life Money ${service.name} - ${city.name}`,
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
          })
        }}
      />

      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p>&copy; 2025 Life Money Financial Advisory - Serving {city.name} and the Greater Toronto Area</p>
        </div>
      </footer>
      </div>
    </>
  );
}