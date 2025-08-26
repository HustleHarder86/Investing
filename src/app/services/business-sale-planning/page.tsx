import { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/forms/ContactForm';
import FAQSchema from '@/components/seo/FAQSchema';

export const metadata: Metadata = {
  title: 'Business Sale Planning GTA 2025 | Maximize Your Exit | Life Money',
  description: "Maximize your business sale value by millions! CFP® certified exit planning in Toronto & GTA. FREE consultation for capital gains exemption & tax optimization. Don't lose $$ to taxes!",
  keywords: 'business sale planning, capital gains exemption, business exit strategy, selling business Ontario, lifetime capital gains exemption, business valuation, tax optimization',
  openGraph: {
    title: 'Business Sale Planning GTA 2025 | Life Money',
    description: "Maximize your business sale value and minimize taxes with expert exit planning strategies.",
    type: 'website',
  }
};

export default function BusinessSalePlanningPage() {
  const faqData = [
    {
      question: "What is the lifetime capital gains exemption for business sales?",
      answer: "The lifetime capital gains exemption allows up to $1 million in tax-free capital gains on qualified small business corporation shares. This can save you over $250,000 in taxes on your business sale if structured properly."
    },
    {
      question: "How is my business valued for sale purposes?",
      answer: "Business valuations consider assets, earnings, cash flow, market comparables, and growth potential. Professional valuators use multiple approaches including asset-based, income-based, and market-based methods to determine fair value."
    },
    {
      question: "What tax planning strategies can maximize my business sale proceeds?",
      answer: "Strategies include capital gains exemption planning, income splitting with family members, defer/spread income recognition, estate freezes, and structuring the sale as asset vs share transaction for optimal tax treatment."
    },
    {
      question: "Should I sell my business assets or shares?",
      answer: "Share sales typically qualify for capital gains treatment and the lifetime exemption. Asset sales may result in recapture and regular income tax. The optimal structure depends on your business type, buyer preferences, and tax situation."
    },
    {
      question: "How much money do I need to retire after selling my business?",
      answer: "This depends on your desired retirement lifestyle, expenses, other income sources, and time horizon. A CFP® will analyze your post-sale financial picture to determine if you have enough to achieve your retirement goals."
    },
    {
      question: "When should I start planning my business exit strategy?",
      answer: "Ideally 3-5 years before your planned exit. This allows time for tax planning, business optimization, management development, and maximizing sale value. Earlier planning typically results in better outcomes and more options."
    }
  ];

  return (
    <>
      <FAQSchema faqs={faqData} />
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
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-400/8 to-blue-400/8 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-xl border border-slate-200/50 rounded-full text-sm font-medium mb-8 shadow-lg">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-slate-700">Business Exit Strategy</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-display font-bold text-slate-900 mb-8 tracking-tight leading-tight">
              Strategic Business Sale Planning for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                GTA Entrepreneurs
              </span>
            </h1>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-3xl">
              Maximize your business sale value with expert tax planning. Access the full $1,016,836 lifetime capital gains exemption and optimize your exit strategy for 2025.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link 
                href="#consultation" 
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 text-center"
              >
                Free Business Valuation
              </Link>
              <Link 
                href="#consultation" 
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-200 text-center"
              >
                Call: Contact via form
              </Link>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-slate-600">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Free Initial Assessment
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Tax-Optimized Exit Plans
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                M&A Expertise
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
              Comprehensive Business Sale Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              End-to-end support to maximize your business value and minimize taxes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '💰',
                title: 'Business Valuation',
                description: "Professional valuation services to establish fair market value and identify value enhancement opportunities before sale."
              },
              {
                icon: '📊',
                title: 'Tax Optimization',
                description: "Strategic planning to access the full $1,016,836 lifetime capital gains exemption and minimize tax liability."
              },
              {
                icon: '🤝',
                title: 'Deal Structuring',
                description: "Optimize the sale structure including share vs. asset sales, earnouts, and vendor take-back financing."
              },
              {
                icon: '📈',
                title: 'Pre-Sale Planning',
                description: "Enhance business value through operational improvements and financial optimization before going to market."
              },
              {
                icon: '⚖️',
                title: 'Succession Planning',
                description: "Family business transitions, management buyouts, and employee share ownership plans (ESOP)."
              },
              {
                icon: '🏆',
                title: 'Post-Sale Wealth',
                description: "Investment strategies and tax planning for your post-sale wealth to ensure long-term financial security."
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

      {/* 2025 Capital Gains Exemption */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-xl border border-slate-200/50 rounded-full text-sm font-medium mb-8 shadow-lg">
                <span className="text-slate-700">2025 Tax Updates</span>
              </div>
              <h2 className="text-4xl font-display font-bold text-slate-900 mb-6">
                Lifetime Capital Gains Exemption: $1,016,836
              </h2>
              <p className="text-xl text-slate-600">
                Maximize your tax-free proceeds with strategic planning
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg">
                <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">Qualifying Your Business</h3>
                <p className="text-slate-600 mb-4">
                  To access the lifetime capital gains exemption, your business must meet specific criteria:
                </p>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                  <li>Qualified Small Business Corporation (QSBC) shares</li>
                  <li>90% active business assets at time of sale</li>
                  <li>50% active business assets for 24 months prior</li>
                  <li>Shares held personally for at least 24 months</li>
                  <li>Canadian-controlled private corporation</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg">
                <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">Multiplication Strategies</h3>
                <p className="text-slate-600 mb-4">
                  Maximize tax savings for your family:
                </p>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                  <li>Family trust structures to multiply the exemption</li>
                  <li>Spousal share ownership planning</li>
                  <li>Adult children participation strategies</li>
                  <li>Estate freeze techniques for future gains</li>
                  <li>Crystallization of gains before sale</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg">
                <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">Timing Considerations</h3>
                <p className="text-slate-600 mb-4">
                  Critical timing factors for 2025:
                </p>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                  <li>Federal budget changes to capital gains inclusion rates</li>
                  <li>Provincial tax considerations in Ontario</li>
                  <li>Market conditions and industry multiples</li>
                  <li>Personal retirement planning timeline</li>
                  <li>Economic outlook and buyer financing availability</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Focus */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-slate-900 mb-6">
              Industry Expertise
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Specialized knowledge across GTA's key business sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Technology & SaaS', icon: '💻', focus: 'Recurring revenue models, IP valuation' },
              { name: 'Manufacturing', icon: '🏭', focus: 'Asset optimization, supply chain value' },
              { name: 'Professional Services', icon: '💼', focus: 'Client retention, earnout structures' },
              { name: 'Healthcare', icon: '🏥', focus: 'Regulatory compliance, patient base value' },
              { name: 'Construction', icon: '🏗️', focus: 'Project pipeline, equipment valuation' },
              { name: 'Retail & E-commerce', icon: '🛍️', focus: 'Inventory optimization, brand value' },
              { name: 'Real Estate', icon: '🏢', focus: 'Portfolio optimization, REIT structures' },
              { name: 'Hospitality', icon: '🏨', focus: 'Location value, franchise considerations' }
            ].map((industry, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-all duration-300">
                <div className="text-3xl mb-3">{industry.icon}</div>
                <h3 className="text-lg font-display font-bold text-slate-900 mb-2">{industry.name}</h3>
                <p className="text-sm text-slate-600">{industry.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-slate-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-600">
              Common questions about selling your business in Ontario
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                question: "When is the best time to sell my business in 2025?",
                answer: "The optimal timing depends on multiple factors including your industry's market conditions, your business performance, and tax considerations. With 2025's capital gains changes, planning 6-12 months ahead is crucial to maximize value and minimize taxes."
              },
              {
                question: "How can I maximize my business sale price?",
                answer: "Value maximization starts 1-2 years before sale. Key strategies include improving recurring revenue, documenting processes, strengthening management teams, cleaning up financials, and optimizing working capital. We help identify and implement value drivers specific to your industry."
              },
              {
                question: "Should I sell shares or assets?",
                answer: "Share sales typically offer better tax treatment for sellers through the capital gains exemption, while buyers often prefer asset purchases. We structure deals to balance tax efficiency with marketability, sometimes using hybrid structures to optimize both."
              },
              {
                question: "How much tax will I pay when selling my business?",
                answer: "With proper planning, you can shelter up to $1,016,836 tax-free using the lifetime capital gains exemption. Additional gains are taxed at capital gains rates. We develop strategies to minimize taxes through timing, structure, and family participation."
              },
              {
                question: "What is my business worth?",
                answer: "Business valuation depends on industry, size, profitability, growth potential, and market conditions. Most small businesses sell for 2-6x EBITDA, but strategic buyers may pay premiums. We provide detailed valuations and identify value enhancement opportunities."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 border border-slate-200">
                <h3 className="text-xl font-display font-bold text-slate-900 mb-4">{faq.question}</h3>
                <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-slate-900 mb-6">
              Your Business Sale Timeline
            </h2>
            <p className="text-xl text-slate-600">
              A strategic approach to maximizing value
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-600 to-indigo-600"></div>
            
            {[
              { phase: '12-24 Months Before', title: 'Pre-Sale Planning', tasks: ['Business valuation', 'Tax structure optimization', 'Value enhancement initiatives', 'QSBC qualification'] },
              { phase: '6-12 Months Before', title: 'Market Preparation', tasks: ['Financial documentation', 'Legal due diligence prep', 'Management team strengthening', 'Operational improvements'] },
              { phase: '3-6 Months Before', title: 'Go to Market', tasks: ['Buyer identification', 'Marketing materials', 'Confidential information memorandum', 'Initial negotiations'] },
              { phase: 'Closing Period', title: 'Deal Execution', tasks: ['Due diligence support', 'Purchase agreement negotiation', 'Tax optimization finalization', 'Transition planning'] },
              { phase: 'Post-Sale', title: 'Wealth Management', tasks: ['Investment strategy', 'Tax planning', 'Estate planning update', 'Retirement optimization'] }
            ].map((phase, index) => (
              <div key={index} className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'}`}>
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-lg">
                    <div className="text-sm text-blue-600 font-semibold mb-2">{phase.phase}</div>
                    <h3 className="text-xl font-display font-bold text-slate-900 mb-3">{phase.title}</h3>
                    <ul className={`text-slate-600 space-y-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      {phase.tasks.map((task, i) => (
                        <li key={i}>• {task}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
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
                Get Your Free Business Sale Assessment
              </h2>
              <p className="text-xl text-slate-600 mb-8">
                Discover your business value and tax-saving opportunities. Our assessment includes valuation analysis, tax optimization strategies, and exit planning roadmap.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-slate-700">Professional business valuation</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-slate-700">Capital gains exemption qualification</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-slate-700">Tax optimization strategies</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-slate-700">Exit strategy roadmap</span>
                </div>
              </div>

              <div className="text-sm text-slate-500">
                ⭐ Trusted by 500+ GTA business owners
              </div>
            </div>

            <div>
              <ContactForm service="business-sale-planning" />
            </div>
          </div>
        </div>
      </section>

      {/* Cities Served */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">
              Serving Business Owners Across the GTA
            </h2>
            <p className="text-slate-600">
              Expert business sale planning throughout the Greater Toronto Area
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
                href={`/${city.toLowerCase().replace(' ', '-')}/business-sale-planning`}
                className="text-slate-600 hover:text-blue-600 transition-colors duration-200 py-2"
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
                Strategic business sale planning helping GTA entrepreneurs maximize value and minimize taxes on exit.
              </p>
              <div className="flex space-x-4">
                <a href="#consultation" className="text-slate-300 hover:text-white transition-colors">
                  📞 Contact via form
                </a>
                <a href="#consultation" className="text-slate-300 hover:text-white transition-colors">
                  ✉️ Contact via form
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-slate-300">
                <li><Link href="/services/business-sale-planning" className="hover:text-white transition-colors">Business Sale</Link></li>
                <li><Link href="/services/divorce-financial-planning" className="hover:text-white transition-colors">Divorce Planning</Link></li>
                <li><Link href="/services/inheritance-financial-planning" className="hover:text-white transition-colors">Inheritance Planning</Link></li>
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
    </>
  );
}