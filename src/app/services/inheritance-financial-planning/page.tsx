import { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/forms/ContactForm';

export const metadata: Metadata = {
  title: 'Inheritance Tax Planning Ontario 2025 | Save Thousands | Life Money',
  description: "Expert inheritance financial planning in Ontario. Minimize estate taxes, optimize probate fees, and maximize what your beneficiaries receive. Free consultation available.",
  keywords: 'inheritance tax planning Ontario, estate planning, probate fees, tax optimization, inheritance tax, estate tax, will planning, trust structures',
  openGraph: {
    title: 'Inheritance Tax Planning Ontario 2025 | Life Money',
    description: "Minimize inheritance taxes and maximize what your beneficiaries receive with expert estate planning strategies.",
    type: 'website',
  }
};

export default function InheritanceFinancialPlanningPage() {
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
                <div className="text-2xl font-display font-bold text-slate-900">Life Money</div>
                <div className="text-sm text-slate-600 -mt-1 font-medium">Financial Advisory</div>
              </div>
            </Link>
            <Link href="/" className="text-slate-600 hover:text-slate-900 transition-colors">
              ← Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-teal-400/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-green-400/8 to-emerald-400/8 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-xl border border-slate-200/50 rounded-full text-sm font-medium mb-8 shadow-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-slate-700">Estate & Inheritance Planning</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-display font-bold text-slate-900 mb-8 tracking-tight leading-tight">
              Expert Inheritance Financial Planning for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600">
                Ontario Families
              </span>{' '}
              in 2025
            </h1>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-3xl">
              Minimize estate taxes, reduce probate fees, and ensure your beneficiaries receive the maximum inheritance possible with strategic planning tailored to 2025 tax laws.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link 
                href="#consultation" 
                className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 text-center"
              >
                Free Estate Assessment
              </Link>
              <Link 
                href="tel:+16475550123" 
                className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-green-600 hover:text-white transition-colors duration-200 text-center"
              >
                Call: 647-555-0123
              </Link>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-slate-600">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Free Initial Consultation
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                2025 Tax Law Updates
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Serving All GTA
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-slate-900 mb-6">
              Our Inheritance Planning Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive estate planning strategies designed to minimize taxes and maximize your legacy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🏛️',
                title: 'Estate Tax Optimization',
                description: "Strategic planning to minimize provincial and federal estate taxes using 2025 tax law updates and exemptions."
              },
              {
                icon: '📋',
                title: 'Probate Fee Reduction',
                description: "Implement structures to reduce or eliminate probate fees, saving thousands in unnecessary costs."
              },
              {
                icon: '🔒',
                title: 'Trust Structures',
                description: "Establish family trusts and other vehicles to protect assets and provide tax-efficient wealth transfer."
              },
              {
                icon: '🏠',
                title: 'Principal Residence Planning',
                description: "Maximize the principal residence exemption and plan for multiple property ownership scenarios."
              },
              {
                icon: '💼',
                title: 'Business Succession',
                description: "Plan for the tax-efficient transfer of family businesses and professional practices."
              },
              {
                icon: '⚖️',
                title: 'Will & Power of Attorney',
                description: "Coordinate with legal professionals to ensure your estate planning documents align with tax strategies."
              }
            ].map((service, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-display font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2025 Tax Updates */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-xl border border-slate-200/50 rounded-full text-sm font-medium mb-8 shadow-lg">
                <span className="text-slate-700">Updated for 2025</span>
              </div>
              <h2 className="text-4xl font-display font-bold text-slate-900 mb-6">
                2025 Inheritance Tax Changes in Ontario
              </h2>
              <p className="text-xl text-slate-600">
                Stay ahead of the latest tax law changes that could impact your estate planning strategy
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg">
                <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">Capital Gains Tax Updates</h3>
                <p className="text-slate-600 mb-4">
                  The 2025 federal budget introduced significant changes to capital gains taxation that directly impact estate planning. We help you navigate:
                </p>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                  <li>New inclusion rates for capital gains over $250,000</li>
                  <li>Impact on principal residence exemption strategies</li>
                  <li>Planning opportunities for investment properties</li>
                  <li>Charitable donation timing strategies</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg">
                <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">Ontario Probate Fee Changes</h3>
                <p className="text-slate-600 mb-4">
                  Ontario probate fees continue to impact estate values. Our strategies include:
                </p>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                  <li>Joint ownership structures to avoid probate</li>
                  <li>Multiple will strategies for business assets</li>
                  <li>Trust planning to minimize probate exposure</li>
                  <li>Insurance beneficiary designations</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg">
                <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">Family Trust Opportunities</h3>
                <p className="text-slate-600 mb-4">
                  2025 presents new opportunities for family trust planning:
                </p>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                  <li>Income splitting strategies within new tax rules</li>
                  <li>Cottage and recreational property planning</li>
                  <li>Multi-generational wealth transfer planning</li>
                  <li>Protection from creditors and family breakdown</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-slate-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-600">
              Common questions about inheritance planning in Ontario
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                question: "How much inheritance tax will I pay in Ontario in 2025?",
                answer: "Ontario doesn't have a specific inheritance tax, but there are deemed disposition rules that trigger capital gains taxes on death. We help minimize these taxes through strategic planning including principal residence exemptions, charitable giving, and trust structures."
              },
              {
                question: "What are probate fees in Ontario and how can I reduce them?",
                answer: "Ontario probate fees are $15 per $1,000 of estate value (1.5%). For a $1 million estate, that's $15,000. We use strategies like joint ownership, multiple wills, and trusts to significantly reduce or eliminate these fees."
              },
              {
                question: "Should I set up a family trust for inheritance planning?",
                answer: "Family trusts can be excellent tools for tax planning, asset protection, and multi-generational wealth transfer. We analyze your specific situation to determine if a trust structure makes sense and help implement the optimal strategy."
              },
              {
                question: "How do the 2025 capital gains changes affect my estate plan?",
                answer: "The 2025 federal budget changes to capital gains inclusion rates significantly impact estate planning. We review your current plan and recommend adjustments to minimize the tax impact on your beneficiaries."
              },
              {
                question: "What happens to my cottage or vacation property when I die?",
                answer: "Vacation properties are subject to capital gains tax on death unless properly planned. We help with strategies including family trusts, fractional ownership structures, and timing of transfers to minimize taxes."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-8">
                <h3 className="text-xl font-display font-bold text-slate-900 mb-4">{faq.question}</h3>
                <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="consultation" className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-display font-bold text-slate-900 mb-6">
                Get Your Free Estate Planning Assessment
              </h2>
              <p className="text-xl text-slate-600 mb-8">
                Discover how much your beneficiaries could save with proper inheritance planning. Our assessment covers tax optimization, probate reduction, and wealth transfer strategies.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-slate-700">Comprehensive estate tax analysis</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-slate-700">2025 tax law optimization strategies</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-slate-700">Probate fee reduction planning</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-slate-700">Trust and family wealth strategies</span>
                </div>
              </div>

              <div className="text-sm text-slate-500">
                ⭐ Rated 5/5 stars by families across the GTA
              </div>
            </div>

            <div>
              <ContactForm service="inheritance-financial-planning" />
            </div>
          </div>
        </div>
      </section>

      {/* Cities Served */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">
              Serving Families Across the Greater Toronto Area
            </h2>
            <p className="text-slate-600">
              Expert inheritance planning services available throughout Ontario
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            {[
              'Toronto', 'Mississauga', 'Brampton', 'Hamilton', 'Markham', 'Vaughan',
              'Richmond Hill', 'Oakville', 'Burlington', 'Milton', 'Ajax', 'Pickering',
              'Whitby', 'Oshawa', 'Newmarket', 'Aurora', 'King', 'Caledon'
            ].map((city, index) => (
              <Link 
                key={index}
                href={`/${city.toLowerCase().replace(' ', '-')}/inheritance-financial-planning`}
                className="text-slate-600 hover:text-green-600 transition-colors duration-200 py-2"
              >
                {city}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl flex items-center justify-center mr-4">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-display font-bold">Life Money</div>
                  <div className="text-slate-300 text-sm">Financial Advisory</div>
                </div>
              </div>
              <p className="text-slate-300 mb-6 max-w-md">
                Expert inheritance and estate planning services helping GTA families minimize taxes and maximize their legacy.
              </p>
              <div className="flex space-x-4">
                <a href="tel:+16475550123" className="text-slate-300 hover:text-white transition-colors">
                  📞 647-555-0123
                </a>
                <a href="mailto:info@lifemoney.ca" className="text-slate-300 hover:text-white transition-colors">
                  ✉️ info@lifemoney.ca
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-slate-300">
                <li><Link href="/services/inheritance-financial-planning" className="hover:text-white transition-colors">Inheritance Planning</Link></li>
                <li><Link href="/services/divorce-financial-planning" className="hover:text-white transition-colors">Divorce Planning</Link></li>
                <li><Link href="/services/business-sale-planning" className="hover:text-white transition-colors">Business Sale</Link></li>
                <li><Link href="/services/severance-job-loss-planning" className="hover:text-white transition-colors">Job Transition</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-300">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-700 pt-8 mt-8 text-center text-slate-400">
            <p>&copy; 2025 Life Money Financial Advisory. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}