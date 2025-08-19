import type { Metadata } from 'next';
import Link from 'next/link';
import { services, getServiceBySlug } from '@/lib/services';
import { getCitiesByTier } from '@/lib/cities';
import LocalSchema from '@/components/seo/LocalSchema';
import ContactForm from '@/components/forms/ContactForm';

export const metadata: Metadata = {
  title: 'Divorce Financial Planning Ontario | CDFA Certified Advisor | ProsperBridge',
  description: 'Expert divorce financial planning across the GTA. CDFA certified guidance for asset division, spousal support, pension splitting, and post-divorce financial security.',
  keywords: 'divorce financial planner Ontario, CDFA Toronto, divorce asset division, spousal support planning, pension splitting Ontario, separation financial advisor',
};

export default function DivorceFinancialPlanningPage() {
  const service = getServiceBySlug('divorce-financial-planning')!;
  const tier1Cities = getCitiesByTier(1);

  const faqs = [
    {
      question: "What is a CDFA and why do I need one for my divorce?",
      answer: "A Certified Divorce Financial Analyst (CDFA) is specially trained to analyze and provide expert assistance in the financial aspects of divorce. Unlike general financial advisors, CDFAs understand the complex intersection of family law and financial planning, ensuring you make informed decisions about asset division, support obligations, and your financial future."
    },
    {
      question: "How is property divided in an Ontario divorce?",
      answer: "Ontario follows an equalization process where each spouse is entitled to half the increase in net worth during the marriage. This includes the matrimonial home, pensions, investments, and business interests. However, certain assets like inheritances and gifts may be excluded. A proper analysis ensures fair division and optimal tax treatment."
    },
    {
      question: "Can I keep the house after divorce in Ontario?",
      answer: "Whether you can keep the matrimonial home depends on several factors including your income, ability to pay the mortgage and expenses, and the overall asset division. We analyze your cash flow, refinancing options, and tax implications to help determine if keeping the home aligns with your long-term financial goals."
    },
    {
      question: "How is spousal support calculated in Ontario?",
      answer: "Spousal support in Ontario is guided by the Spousal Support Advisory Guidelines (SSAGs), which consider factors like income difference, length of marriage, and the presence of children. We help you understand potential obligations or entitlements and structure support in the most tax-efficient manner possible."
    },
    {
      question: "What happens to my pension in divorce?",
      answer: "Pensions are among the most valuable marital assets. In Ontario, pension credits earned during marriage are subject to division. Options include pension splitting, lump sum transfers, or ongoing pension sharing. Each option has different tax implications and risks that require careful analysis."
    },
    {
      question: "How can I protect my children's financial future during divorce?",
      answer: "Children's financial security involves child support calculations, education planning, and ensuring adequate life insurance coverage. We help structure arrangements that meet legal requirements while protecting your children's long-term needs and your ability to contribute to their future."
    },
    {
      question: "Should I mediate or go to court for financial matters?",
      answer: "Mediation and collaborative divorce processes are often more cost-effective and allow for creative financial solutions. However, complex asset situations or uncooperative spouses may require court intervention. We help you understand the financial implications of each approach."
    },
    {
      question: "What are the tax implications of divorce in Ontario?",
      answer: "Divorce triggers various tax considerations including principal residence exemption, capital gains on transferred assets, spousal RRSP transfers, and tax treatment of support payments. Proper planning can save thousands in unnecessary taxes and optimize your post-divorce financial position."
    },
    {
      question: "How do I rebuild my finances after divorce?",
      answer: "Post-divorce financial planning involves establishing new budgets, rebuilding credit, updating beneficiaries and insurance, and creating new investment strategies. We help you transition from coupled to single finances while working toward your independent financial goals."
    },
    {
      question: "When should I hire a divorce financial planner?",
      answer: "The earlier the better. Ideally, engage a CDFA before making major financial decisions or signing agreements. Even if you've already started the process, professional guidance can help you avoid costly mistakes and ensure you're making informed decisions about your financial future."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <LocalSchema service={service} />
      
      {/* Navigation - Same as homepage */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-blue-600">
                ProsperBridge
              </Link>
              <span className="ml-2 text-gray-500 text-sm">Financial Advisory</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/services" className="text-gray-700 hover:text-blue-600 transition-colors">
                Services
              </Link>
              <Link href="/locations" className="text-gray-700 hover:text-blue-600 transition-colors">
                Locations  
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                Contact
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <a href="tel:+16475550123" className="text-blue-600 font-medium">
                647-555-0123
              </a>
              <Link href="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex items-center mb-4">
              <span className="text-4xl mr-4">{service.icon}</span>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">
                  Divorce Financial Planning in Ontario
                </h1>
                <p className="text-xl text-blue-100">
                  CDFA Certified • Serving All GTA • Confidential & Compassionate
                </p>
              </div>
            </div>
            <p className="text-xl leading-relaxed mb-8">
              Navigate the financial complexities of divorce with expert guidance. Protect your assets, optimize your settlement, and secure your financial future with specialized divorce financial planning across the Greater Toronto Area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:+16475550123"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                Urgent Consultation: 647-555-0123
              </a>
              <Link 
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-center"
              >
                Schedule Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Understanding Divorce Financial Planning in Ontario
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 leading-relaxed mb-6">
                  Divorce is one of life&apos;s most challenging transitions, both emotionally and financially. The decisions you make during this process will impact your financial security for decades to come. As a CDFA (Certified Divorce Financial Analyst) serving the Greater Toronto Area, I specialize in helping individuals navigate the complex financial aspects of divorce with clarity and confidence.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Unlike general financial advisors, divorce financial planners understand the intricate interplay between family law and financial planning. We work alongside your legal team to ensure that every financial decision supports your long-term goals while complying with Ontario&apos;s complex divorce regulations.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Whether you&apos;re facing an amicable separation or a contentious divorce, professional financial guidance can help you avoid costly mistakes, optimize your settlement, and emerge from the process with a solid foundation for your financial future.
                </p>
              </div>
            </section>

            {/* Ontario Divorce Law Context */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Ontario Divorce Law & Financial Implications
              </h2>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  Key Ontario Divorce Financial Principles
                </h3>
                <ul className="text-blue-800 space-y-2">
                  <li>• Equalization of net family property (50/50 division)</li>
                  <li>• Spousal support based on needs and means</li>
                  <li>• Child support following Federal Guidelines</li>
                  <li>• Pension credit splitting opportunities</li>
                  <li>• Tax-efficient asset transfer provisions</li>
                </ul>
              </div>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                The Equalization Process
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Ontario&apos;s Family Law Act requires couples to equalize their net family property. This means calculating the increase in each spouse&apos;s net worth during the marriage and ensuring equal sharing of that growth. The process involves:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Included Assets</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Matrimonial home</li>
                    <li>• Investment accounts</li>
                    <li>• Pension benefits</li>
                    <li>• Business interests</li>
                    <li>• Personal property</li>
                    <li>• Life insurance cash value</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Potential Exclusions</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Property owned before marriage</li>
                    <li>• Inheritances received during marriage</li>
                    <li>• Gifts from third parties</li>
                    <li>• Life insurance proceeds</li>
                    <li>• Personal injury awards</li>
                    <li>• Property excluded by agreement</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Common Financial Challenges in Divorce
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Every divorce presents unique financial challenges. However, certain issues consistently arise in Ontario divorces:
              </p>
              <div className="space-y-6">
                <div className="border-l-4 border-orange-400 pl-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Matrimonial Home Decisions</h4>
                  <p className="text-gray-600">
                    The family home often represents the largest asset and carries significant emotional attachment. Decisions about keeping, selling, or transferring ownership require careful analysis of mortgage capacity, carrying costs, tax implications, and long-term affordability.
                  </p>
                </div>
                <div className="border-l-4 border-orange-400 pl-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Pension Division Complexity</h4>
                  <p className="text-gray-600">
                    Defined benefit pensions, particularly government and large corporate plans, represent substantial value but are complex to divide. Options include immediate division, deferred division, or lump sum buyouts, each with different risks and tax consequences.
                  </p>
                </div>
                <div className="border-l-4 border-orange-400 pl-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Business Valuation Issues</h4>
                  <p className="text-gray-600">
                    Family businesses require professional valuation and present unique challenges around goodwill, key person dependency, and liquidity for equalization payments. Professional guidance ensures accurate valuation and practical settlement solutions.
                  </p>
                </div>
              </div>
            </section>

            {/* Our Process */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Comprehensive Divorce Financial Planning Process
              </h2>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-6">
                    <span className="text-blue-600 font-bold text-lg">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Initial Consultation & Financial Discovery
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      We begin with a comprehensive review of your financial situation, including all assets, debts, income sources, and expenses. This confidential discussion helps us understand your priorities, concerns, and goals for the divorce process. We&apos;ll identify potential issues early and develop strategies to address them proactively.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-6">
                    <span className="text-blue-600 font-bold text-lg">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Asset Valuation & Analysis
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Accurate valuation is crucial for fair settlement. We coordinate with appraisers, actuaries, and business valuators as needed to determine the fair value of all marital assets. Our analysis includes liquidity considerations, tax implications, and future growth potential to ensure you understand the true value of different assets.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-6">
                    <span className="text-blue-600 font-bold text-lg">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Settlement Scenario Analysis
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Using sophisticated financial modeling, we analyze different settlement options to show their long-term impact on your financial security. This includes cash flow projections, tax analysis, and retirement planning scenarios to help you make informed decisions about asset division and support arrangements.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-6">
                    <span className="text-blue-600 font-bold text-lg">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Implementation & Post-Divorce Planning
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Once agreements are reached, we help coordinate the transfer of assets, establishment of new accounts, and implementation of support arrangements. We also provide ongoing financial planning to help you adapt to your new financial circumstances and work toward your independent financial goals.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Benefits */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Key Benefits of Professional Divorce Financial Planning
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start p-4 bg-green-50 rounded-lg">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{benefit}</h3>
                      <p className="text-gray-600 text-sm">
                        Professional guidance ensures optimal outcomes and protects your long-term financial interests.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQs */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Locations We Serve */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Serving Divorce Clients Across the GTA
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Based in Mississauga, we provide divorce financial planning services throughout the Greater Toronto Area. Our clients appreciate the flexibility of meeting in-person at our office, virtually via video conference, or by phone for maximum convenience during this challenging time.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {tier1Cities.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/locations/${city.slug}/divorce-financial-planning`}
                    className="group bg-gray-50 rounded-lg p-4 hover:bg-blue-50 hover:border-blue-200 border border-gray-200 transition-all duration-200"
                  >
                    <div className="text-center">
                      <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                        {city.name}
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        Divorce Planning
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="mt-6 text-center">
                <Link
                  href="/locations"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  View all 21 GTA locations we serve →
                </Link>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              {/* Contact Form */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Free Divorce Financial Consultation
                </h3>
                <ContactForm service="divorce-financial-planning" />
              </div>

              {/* Quick Stats */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-4">
                  Why Choose ProsperBridge for Divorce Planning?
                </h3>
                <div className="space-y-4 text-sm">
                  <div className="flex items-center">
                    <span className="text-blue-600 mr-2">📋</span>
                    <span className="text-blue-800">CDFA Certified Professional</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-600 mr-2">🏛️</span>
                    <span className="text-blue-800">Ontario Family Law Expertise</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-600 mr-2">🤝</span>
                    <span className="text-blue-800">Collaborative Approach</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-600 mr-2">🔒</span>
                    <span className="text-blue-800">Complete Confidentiality</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-600 mr-2">📞</span>
                    <span className="text-blue-800">Urgent Consultations Available</span>
                  </div>
                </div>
              </div>

              {/* Related Services */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Related Services
                </h3>
                <div className="space-y-3">
                  {services.filter(s => s.slug !== 'divorce-financial-planning').map(relatedService => (
                    <Link
                      key={relatedService.slug}
                      href={`/services/${relatedService.slug}`}
                      className="block p-3 bg-white rounded border border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all"
                    >
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">{relatedService.icon}</span>
                        <div>
                          <h4 className="font-medium text-gray-900 text-sm">{relatedService.shortName}</h4>
                          <p className="text-gray-600 text-xs mt-1">{relatedService.description.slice(0, 60)}...</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer - Same as homepage */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <span className="text-2xl font-bold text-blue-400">ProsperBridge</span>
                <span className="ml-2 text-gray-300">Financial Advisory</span>
              </div>
              <p className="text-gray-300 mb-4 max-w-md">
                Specialized financial planning for life&apos;s major transitions across the Greater Toronto Area.
              </p>
              <div className="flex space-x-4">
                <a href="tel:+16475550123" className="text-blue-400 hover:text-blue-300">
                  647-555-0123
                </a>
                <a href="mailto:info@prosperbridge.ca" className="text-blue-400 hover:text-blue-300">
                  info@prosperbridge.ca
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                {services.map(service => (
                  <li key={service.slug}>
                    <Link href={`/services/${service.slug}`} className="hover:text-blue-400 transition-colors">
                      {service.shortName}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Major Cities</h4>
              <ul className="space-y-2 text-gray-300">
                {tier1Cities.slice(0, 5).map(city => (
                  <li key={city.slug}>
                    <Link href={`/locations/${city.slug}`} className="hover:text-blue-400 transition-colors">
                      {city.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 ProsperBridge Financial Advisory. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}