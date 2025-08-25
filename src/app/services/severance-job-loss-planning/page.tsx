import { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/forms/ContactForm';

export const metadata: Metadata = {
  title: 'Severance Financial Planning Toronto 2025 | Maximize Your Package | Money in Motion',
  description: "Expert severance and job transition financial planning in the GTA. Maximize your severance package, optimize taxes, manage benefits continuation, and plan your career pivot.",
  keywords: 'severance package planning, job loss financial planning, career transition, EI optimization, RRSP strategies, severance negotiation, Toronto layoffs 2025',
  openGraph: {
    title: 'Severance & Job Transition Planning Toronto 2025 | Money in Motion',
    description: "Secure your financial future during career transitions with expert severance optimization and planning.",
    type: 'website',
  }
};

export default function SeveranceJobLossPlanningPage() {
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
                <div className="text-2xl font-display font-bold text-slate-900">Money in Motion</div>
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
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-orange-400/10 to-red-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-amber-400/8 to-orange-400/8 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-xl border border-slate-200/50 rounded-full text-sm font-medium mb-8 shadow-lg">
              <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-slate-700">Career Transition Planning</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-display font-bold text-slate-900 mb-8 tracking-tight leading-tight">
              Expert Severance and Career Transition Planning in the{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                GTA
              </span>
            </h1>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-3xl">
              Navigate job loss with confidence. Maximize your severance package, optimize taxes, manage benefits, and create a strategic financial plan for your career transition in 2025.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link 
                href="#consultation" 
                className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 text-center"
              >
                Free Severance Review
              </Link>
              <Link 
                href="tel:+16475550123" 
                className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-xl font-semibold hover:bg-orange-600 hover:text-white transition-colors duration-200 text-center"
              >
                Urgent Help: 647-555-0123
              </Link>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-slate-600">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-orange-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                24-Hour Response
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-orange-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Tech Sector Expertise
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-orange-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Free Consultation
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
              Comprehensive Career Transition Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Expert guidance to secure your financial future during uncertain times
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '💰',
                title: 'Severance Optimization',
                description: "Maximize your package through negotiation strategies and tax-efficient structuring to get the best possible outcome."
              },
              {
                icon: '📊',
                title: 'Tax Planning',
                description: "Minimize tax impact using RRSP contributions, income splitting, and retirement allowance transfers."
              },
              {
                icon: '🏥',
                title: 'Benefits Continuation',
                description: "Navigate health, dental, and insurance coverage options during transition including private plans."
              },
              {
                icon: '📈',
                title: 'Investment Strategy',
                description: "Create a sustainable investment plan for your severance funds to generate income during job search."
              },
              {
                icon: '🎯',
                title: 'EI Optimization',
                description: "Maximize Employment Insurance benefits while coordinating with severance payments and other income."
              },
              {
                icon: '🚀',
                title: 'Career Pivot Planning',
                description: "Financial strategies for career changes, retraining, consulting, or starting your own business."
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

      {/* 2025 Updates Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-xl border border-slate-200/50 rounded-full text-sm font-medium mb-8 shadow-lg">
                <span className="text-slate-700">2025 Employment Landscape</span>
              </div>
              <h2 className="text-4xl font-display font-bold text-slate-900 mb-6">
                Navigating Job Loss in 2025's Economy
              </h2>
              <p className="text-xl text-slate-600">
                Strategic planning for tech layoffs and economic uncertainty
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg">
                <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">Tech Sector Layoffs</h3>
                <p className="text-slate-600 mb-4">
                  Specialized strategies for technology professionals:
                </p>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                  <li>Stock option and RSU optimization</li>
                  <li>Deferred compensation planning</li>
                  <li>Non-compete agreement navigation</li>
                  <li>Startup equity considerations</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg">
                <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">Executive Packages</h3>
                <p className="text-slate-600 mb-4">
                  Senior leadership transition planning:
                </p>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                  <li>Golden parachute optimization</li>
                  <li>Retirement allowance strategies</li>
                  <li>Consulting agreement structuring</li>
                  <li>Executive benefit preservation</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg">
                <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">RRSP Strategies</h3>
                <p className="text-slate-600 mb-4">
                  Maximize tax savings with proper planning:
                </p>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                  <li>Retiring allowance transfers</li>
                  <li>Contribution room optimization</li>
                  <li>Spousal RRSP strategies</li>
                  <li>Pension commutation options</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg">
                <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">Emergency Planning</h3>
                <p className="text-slate-600 mb-4">
                  Financial stability during transition:
                </p>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                  <li>6-12 month emergency fund creation</li>
                  <li>Cash flow management strategies</li>
                  <li>Debt consolidation planning</li>
                  <li>Insurance coverage optimization</li>
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
              Common questions about severance and job transition planning
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                question: "How much severance should I expect in Ontario?",
                answer: "Ontario's Employment Standards Act provides minimums, but common law often entitles you to more. Factors include length of service, age, position, and re-employment prospects. Most employees receive 2-24 months depending on circumstances."
              },
              {
                question: "Should I take a lump sum or salary continuance?",
                answer: "Each has tax implications. Lump sums allow retiring allowance transfers to RRSPs (tax-free up to limits), while continuance maintains benefits but may affect EI eligibility. We analyze your specific situation to recommend the optimal approach."
              },
              {
                question: "How can I minimize taxes on my severance package?",
                answer: "Key strategies include maximizing RRSP contributions, using retiring allowances for pre-1996 service, spreading payments across tax years, and utilizing spousal RRSPs. Proper planning can save thousands in taxes."
              },
              {
                question: "When should I apply for Employment Insurance?",
                answer: "Apply immediately after your last day of work, even if receiving severance. EI may be delayed but not denied due to severance. We help coordinate timing to maximize both severance and EI benefits."
              },
              {
                question: "What happens to my company stock options and RSUs?",
                answer: "This depends on your agreement and termination type. Some vest immediately, others are forfeited. We review your equity compensation to maximize value and plan for tax implications."
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
                Get Your Free Severance Package Review
              </h2>
              <p className="text-xl text-slate-600 mb-8">
                Don't sign anything until you understand your options. Our experts review your package, identify opportunities, and create a strategic plan for your transition.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-slate-700">Package evaluation and negotiation guidance</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-slate-700">Tax optimization strategies</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-slate-700">Benefits and pension guidance</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-slate-700">Career transition financial planning</span>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm">
                <p className="text-amber-800">
                  ⚡ <strong>Urgent?</strong> Facing a deadline? We offer same-day consultations for time-sensitive situations.
                </p>
              </div>
            </div>

            <div>
              <ContactForm service="severance-job-loss-planning" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-slate-400">
            <p>&copy; 2025 Money in Motion Financial Advisory. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}