import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, Award, Users, TrendingUp, Shield, Heart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Life Money | Certified Financial Planners Serving the GTA',
  description: 'Meet the Life Money team - certified financial planners with 15+ years of experience each, dedicated to providing trustworthy and understandable financial guidance across the Greater Toronto Area.',
  keywords: 'about Life Money, certified financial planners GTA, experienced financial advisors Toronto, financial planning team',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">About Life Money</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              A trusted team of certified financial planners dedicated to making financial guidance 
              accessible and understandable for everyday Canadians across the Greater Toronto Area.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Our Story Section */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="text-lg text-gray-700 space-y-6">
              <p>
                Life Money was founded by a group of certified financial planners who came together 
                with a shared vision: to create a place of trust where exceptional financial service 
                meets clear, understandable guidance for everyday people.
              </p>
              <p>
                After witnessing too many families struggle with complex financial jargon and 
                overwhelming investment options, our founders decided to do things differently. 
                We believe that sound financial planning should be accessible to everyone, 
                not just the wealthy elite.
              </p>
              <p>
                Today, Life Money serves families and individuals across the Greater Toronto Area, 
                specializing in life's most significant financial transitions: divorce, inheritance, 
                business sales, and career changes. Our approach is simple yet powerful: 
                listen first, explain clearly, and act with integrity.
              </p>
            </div>
          </div>
        </div>

        {/* Our Values Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Trust & Integrity</h3>
              <p className="text-gray-600">
                We believe trust is earned through transparency, honesty, and always 
                putting our clients' interests first in every decision we make.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Accessibility</h3>
              <p className="text-gray-600">
                Financial planning shouldn't be complicated. We translate complex concepts 
                into clear, actionable guidance that makes sense for your life.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Results-Driven</h3>
              <p className="text-gray-600">
                We measure our success by your financial security and peace of mind. 
                Every strategy is designed with your long-term prosperity in mind.
              </p>
            </div>
          </div>
        </div>

        {/* Our Expertise Section */}
        <div className="mb-16 bg-white rounded-lg shadow-lg p-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Our Expertise</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Award className="w-6 h-6 text-blue-600 mr-2" />
                  Professional Credentials
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Certified Financial Planner (CFP®) designations
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Personal Financial Planner (PFP) certifications
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Chartered Professional Accountant (CPA) expertise
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Estate Planning Specialist certifications
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Users className="w-6 h-6 text-blue-600 mr-2" />
                  Experience That Matters
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    45+ years of combined experience
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Hundreds of successful financial transitions
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Deep understanding of Ontario tax law
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Specialized expertise in life transitions
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-blue-900">Our Comprehensive Approach</h3>
              <p className="text-blue-800 mb-4">
                As comprehensive financial planners, we handle any situation involving money. 
                While we specialize in the four most significant financial transitions people face, 
                our expertise extends to all areas of financial planning:
              </p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-blue-900 mb-2">Our Specializations:</h4>
                <div className="grid sm:grid-cols-2 gap-2">
                  <div className="flex items-center text-blue-700">
                    <CheckCircle className="w-4 h-4 text-blue-600 mr-2" />
                    Divorce Financial Planning
                  </div>
                  <div className="flex items-center text-blue-700">
                    <CheckCircle className="w-4 h-4 text-blue-600 mr-2" />
                    Inheritance Financial Planning
                  </div>
                  <div className="flex items-center text-blue-700">
                    <CheckCircle className="w-4 h-4 text-blue-600 mr-2" />
                    Business Sale Planning
                  </div>
                  <div className="flex items-center text-blue-700">
                    <CheckCircle className="w-4 h-4 text-blue-600 mr-2" />
                    Severance & Job Loss Planning
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-blue-900 mb-2">We Also Handle:</h4>
                <div className="grid sm:grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center text-blue-700">
                    <CheckCircle className="w-4 h-4 text-blue-600 mr-2" />
                    Retirement Planning
                  </div>
                  <div className="flex items-center text-blue-700">
                    <CheckCircle className="w-4 h-4 text-blue-600 mr-2" />
                    Investment Management
                  </div>
                  <div className="flex items-center text-blue-700">
                    <CheckCircle className="w-4 h-4 text-blue-600 mr-2" />
                    Tax Planning & Optimization
                  </div>
                  <div className="flex items-center text-blue-700">
                    <CheckCircle className="w-4 h-4 text-blue-600 mr-2" />
                    Estate Planning
                  </div>
                  <div className="flex items-center text-blue-700">
                    <CheckCircle className="w-4 h-4 text-blue-600 mr-2" />
                    Insurance Planning
                  </div>
                  <div className="flex items-center text-blue-700">
                    <CheckCircle className="w-4 h-4 text-blue-600 mr-2" />
                    Sudden Wealth Management
                  </div>
                  <div className="flex items-center text-blue-700">
                    <CheckCircle className="w-4 h-4 text-blue-600 mr-2" />
                    Education Planning
                  </div>
                  <div className="flex items-center text-blue-700">
                    <CheckCircle className="w-4 h-4 text-blue-600 mr-2" />
                    Any Money-Related Situation
                  </div>
                </div>
              </div>

              <p className="text-blue-700 text-sm mt-3 italic">
                From lottery winnings to career changes, from starting a family to planning retirement - 
                if it involves money, we can help you navigate it successfully.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Life Money Section */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Why Choose Life Money?</h2>
            
            <div className="space-y-6 text-lg text-gray-700">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-gray-900">Local GTA Expertise:</strong> We understand the unique 
                  financial landscape of the Greater Toronto Area, from real estate markets to employment 
                  trends and municipal tax considerations.
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-gray-900">Transition Specialists:</strong> Major life changes 
                  require specialized knowledge. We've guided hundreds of clients through divorce settlements, 
                  inheritance planning, business exits, and career transitions.
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-gray-900">Clear Communication:</strong> No financial jargon, 
                  no confusing terminology. We explain everything in plain language so you can make 
                  informed decisions with confidence.
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-gray-900">Holistic Planning:</strong> We don't just manage 
                  investments. We create comprehensive strategies that address taxes, estate planning, 
                  insurance, and cash flow management.
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-gray-900">Personalized Service:</strong> Every client receives 
                  individual attention and a customized financial strategy tailored to their unique 
                  situation and goals.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Experience the Life Money Difference?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Whether you're facing a major life transition or simply want to secure your financial future, 
            our experienced team is here to guide you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Schedule a Consultation
            </Link>
            <Link
              href="/services/divorce-financial-planning"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-colors"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}