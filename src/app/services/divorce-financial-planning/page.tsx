import { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/forms/ContactForm';

export const metadata: Metadata = {
  title: 'Divorce Financial Planning Ontario 2025 | CFP® Certified | Money in Motion',
  description: "Expert divorce financial planning in Ontario. CFP® certified advisor for asset division, spousal support, and pension splitting. Protect your financial future.",
  keywords: 'divorce financial planning Ontario, CFP® Toronto, asset division, spousal support, pension splitting, separation financial advisor',
  openGraph: {
    title: 'Divorce Financial Planning Ontario 2025 | Money in Motion',
    description: "Navigate divorce with expert financial guidance. Protect assets, optimize settlements, secure your future.",
    type: 'website',
  }
};

export default function DivorceFinancialPlanningPage() {
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
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-indigo-400/8 to-purple-400/8 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-xl border border-slate-200/50 rounded-full text-sm font-medium mb-8 shadow-lg">
              <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-slate-700">Divorce Financial Planning</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-display font-bold text-slate-900 mb-8 tracking-tight leading-tight">
              Expert Divorce Financial Planning for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Ontario Families
              </span>{' '}
              in 2025
            </h1>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-3xl">
              Navigate the financial complexities of divorce with CFP® certified guidance. Protect your assets, optimize your settlement, and secure your financial future with specialized planning across the GTA.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link 
                href="#consultation" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 text-center"
              >
                Free Divorce Consultation
              </Link>
              <Link 
                href="tel:+16475550123" 
                className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-purple-600 hover:text-white transition-colors duration-200 text-center"
              >
                Urgent: 647-555-0123
              </Link>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-slate-600">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-purple-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                CFP® Certified Expert
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-purple-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Confidential Process
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-purple-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Serving All GTA
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-12 text-center">
            Why Choose Professional Divorce Financial Planning?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
              <div className="w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Protect Your Assets</h3>
              <p className="text-slate-600 leading-relaxed">
                Ensure fair division of marital property while protecting exempt assets. Navigate complex valuations of homes, pensions, and businesses with expert guidance.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
              <div className="w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Optimize Tax Strategy</h3>
              <p className="text-slate-600 leading-relaxed">
                Structure settlements to minimize tax implications. Understand spousal support deductibility, RRSP transfers, and capital gains exemptions.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
              <div className="w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Secure Your Future</h3>
              <p className="text-slate-600 leading-relaxed">
                Create realistic post-divorce budgets and financial plans. Rebuild credit, update beneficiaries, and establish independent financial security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ontario Divorce Law Context */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-8">
            Understanding Ontario Divorce Law & Finances in 2025
          </h2>

          <div className="bg-purple-100 border-l-4 border-purple-600 p-6 rounded-xl mb-8">
            <h3 className="text-lg font-semibold text-purple-900 mb-4">
              Key Ontario Divorce Financial Principles for 2025
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-purple-800">
              <ul className="space-y-2">
                <li>• Equalization of net family property (50/50)</li>
                <li>• Updated spousal support guidelines</li>
                <li>• Federal child support tables (2025 rates)</li>
                <li>• Pension credit splitting opportunities</li>
              </ul>
              <ul className="space-y-2">
                <li>• Tax-efficient asset transfers</li>
                <li>• Principal residence exemption rules</li>
                <li>• RRSP/TFSA division strategies</li>
                <li>• Business valuation requirements</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">Included in Net Family Property</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3 mt-1">•</span>
                  <span>Matrimonial home (full value)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3 mt-1">•</span>
                  <span>Investment accounts & RRSPs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3 mt-1">•</span>
                  <span>Pension benefits earned during marriage</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3 mt-1">•</span>
                  <span>Business interests & professional practices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3 mt-1">•</span>
                  <span>Life insurance cash value</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3 mt-1">•</span>
                  <span>Vehicles & personal property</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">Potential Exclusions</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start">
                  <span className="text-pink-600 mr-3 mt-1">•</span>
                  <span>Property owned before marriage</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-3 mt-1">•</span>
                  <span>Inheritances during marriage</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-3 mt-1">•</span>
                  <span>Gifts from third parties</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-3 mt-1">•</span>
                  <span>Life insurance proceeds</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-3 mt-1">•</span>
                  <span>Personal injury settlements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-3 mt-1">•</span>
                  <span>Property excluded by marriage contract</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-12">
            Our Comprehensive Divorce Financial Planning Process
          </h2>

          <div className="space-y-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mr-6">
                <span className="text-white font-bold">1</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Initial Consultation & Financial Discovery
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Comprehensive review of your financial situation including all assets, debts, income sources, and expenses. We identify potential issues early and develop proactive strategies to protect your interests throughout the divorce process.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mr-6">
                <span className="text-white font-bold">2</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Asset Valuation & Net Worth Analysis
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Coordinate with appraisers, actuaries, and business valuators to determine fair market values. Analyze liquidity, tax implications, and future growth potential to understand the true value of different assets in your settlement.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mr-6">
                <span className="text-white font-bold">3</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Settlement Scenario Modeling
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Use sophisticated financial modeling to analyze different settlement options. Compare long-term impacts on cash flow, taxes, and retirement security to make informed decisions about asset division and support arrangements.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mr-6">
                <span className="text-white font-bold">4</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Implementation & Post-Divorce Planning
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Coordinate asset transfers, establish new accounts, and implement support arrangements. Provide ongoing financial planning to help you adapt to your new circumstances and achieve independent financial goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Challenges */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-12">
            Common Financial Challenges We Help Resolve
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 border-l-4 border-purple-600">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                🏠 Matrimonial Home Decisions
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Should you keep the house or sell? We analyze mortgage capacity, carrying costs, refinancing options, and long-term affordability to help you make the right decision for your financial future.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border-l-4 border-pink-600">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                💼 Pension Division Complexity
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Defined benefit pensions require careful analysis. We evaluate immediate division, deferred division, or lump sum buyouts to maximize value while minimizing tax implications.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border-l-4 border-purple-600">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                🏢 Business Valuation Issues
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Family businesses need professional valuation. We address goodwill, key person dependency, and liquidity challenges to ensure accurate valuation and practical settlement solutions.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border-l-4 border-pink-600">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                💰 Support Payment Structures
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Optimize spousal and child support arrangements for tax efficiency. Balance immediate needs with long-term financial security for both parties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-12">
            Frequently Asked Questions About Divorce Financial Planning
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                What is a CFP® and why do I need one?
              </h3>
              <p className="text-slate-600">
                A Certified Financial Planner (CFP®) specializes in the financial aspects of divorce. We understand the complex intersection of family law and financial planning, ensuring informed decisions about your financial future.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                How is property divided in Ontario?
              </h3>
              <p className="text-slate-600">
                Ontario follows equalization where each spouse gets half the increase in net worth during marriage. This includes the home, pensions, investments, and businesses, with certain exclusions for inheritances and gifts.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                Can I keep the house after divorce?
              </h3>
              <p className="text-slate-600">
                It depends on your income, mortgage capacity, and overall asset division. We analyze cash flow, refinancing options, and tax implications to determine if keeping the home aligns with your long-term goals.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                How is spousal support calculated?
              </h3>
              <p className="text-slate-600">
                Spousal support follows the Spousal Support Advisory Guidelines (SSAGs), considering income differences, marriage length, and children. We help structure support in the most tax-efficient manner possible.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                What happens to my pension?
              </h3>
              <p className="text-slate-600">
                Pension credits earned during marriage are subject to division. Options include pension splitting, lump sum transfers, or ongoing sharing. Each has different tax implications requiring careful analysis.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                When should I hire a divorce financial planner?
              </h3>
              <p className="text-slate-600">
                The earlier the better. Ideally, engage a CFP® before making major decisions or signing agreements. Professional guidance helps avoid costly mistakes and ensures informed decisions about your future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-display font-bold text-white mb-6">
            Take Control of Your Financial Future
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Get expert guidance through your divorce with a free, confidential consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="#consultation" 
              className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-purple-50 transition-colors duration-200"
            >
              Book Free Consultation
            </Link>
            <Link 
              href="tel:+16475550123" 
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-200"
            >
              Call Now: 647-555-0123
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="consultation" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-8 text-center">
            Request Your Free Divorce Financial Consultation
          </h2>
          <div className="bg-slate-50 rounded-2xl p-8">
            <ContactForm service="divorce-financial-planning" />
          </div>
        </div>
      </section>

      {/* Cities We Serve */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-8 text-center">
            Serving Divorce Clients Across the GTA
          </h2>
          <p className="text-xl text-slate-600 mb-12 text-center max-w-3xl mx-auto">
            Based in Mississauga, we provide divorce financial planning throughout the Greater Toronto Area. Meet in-person, virtually, or by phone.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {['Toronto', 'Mississauga', 'Brampton', 'Hamilton', 'Markham', 'Vaughan', 'Richmond Hill', 'Oakville'].map((city) => (
              <Link
                key={city}
                href={`/${city.toLowerCase().replace(' ', '-')}/divorce-financial-planning`}
                className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-all duration-200 border border-slate-200 hover:border-purple-300"
              >
                <h3 className="font-semibold text-slate-900">{city}</h3>
                <p className="text-sm text-slate-600 mt-1">Divorce Planning</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-teal-600 to-blue-600 rounded-xl flex items-center justify-center mr-3">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <div>
                  <div className="text-xl font-display font-bold">Money in Motion</div>
                  <div className="text-sm text-slate-400">Financial Advisory</div>
                </div>
              </div>
              <p className="text-slate-400 mb-4 max-w-md">
                Expert financial planning for life's major transitions. Serving families across the Greater Toronto Area since 2010.
              </p>
              <div className="flex space-x-4">
                <a href="tel:+16475550123" className="text-teal-400 hover:text-teal-300">
                  647-555-0123
                </a>
                <a href="mailto:info@lifemoney.ca" className="text-teal-400 hover:text-teal-300">
                  info@lifemoney.ca
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="/services/divorce-financial-planning" className="hover:text-teal-400 transition-colors">
                    Divorce Planning
                  </Link>
                </li>
                <li>
                  <Link href="/services/inheritance-financial-planning" className="hover:text-teal-400 transition-colors">
                    Inheritance Planning
                  </Link>
                </li>
                <li>
                  <Link href="/services/business-sale-planning" className="hover:text-teal-400 transition-colors">
                    Business Sale
                  </Link>
                </li>
                <li>
                  <Link href="/services/severance-job-loss-planning" className="hover:text-teal-400 transition-colors">
                    Severance Planning
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="/privacy-policy" className="hover:text-teal-400 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-service" className="hover:text-teal-400 transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2025 Money in Motion. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}