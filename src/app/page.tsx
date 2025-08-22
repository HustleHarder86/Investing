import Link from 'next/link';
import { services } from '@/lib/services';
import { getCitiesByTier } from '@/lib/cities';
import ServiceCard from '@/components/ui/ServiceCard';
import ServiceIcon from '@/components/ui/ServiceIcon';
import CityGrid from '@/components/ui/CityGrid';
import ContactForm from '@/components/forms/ContactForm';
import StatsSection from '@/components/ui/StatsSection';
import SmartCalculators from '@/components/calculators/SmartCalculators';
import ChatWidget from '@/components/ai/ChatWidget';
import MobileEnhancements from '@/components/mobile/MobileEnhancements';
import MobileContactForm from '@/components/mobile/MobileContactForm';
import GTAMap from '@/components/ui/GTAMap';

export default function Home() {
  const tier1Cities = getCitiesByTier(1);

  return (
    <div className="min-h-screen bg-white">
      {/* Modern Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200/50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="group flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-display font-bold text-slate-900">ProsperBridge</div>
                  <div className="text-sm text-slate-600 -mt-1 font-medium">Financial Advisory</div>
                </div>
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              {/* Services Mega Menu */}
              <div className="relative group">
                <button className="px-5 py-3 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-all duration-200 font-medium flex items-center" suppressHydrationWarning>
                  Services
                  <svg className="ml-2 w-4 h-4 transition-transform group-hover:rotate-180" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                
                {/* Mega Menu Dropdown */}
                <div className="absolute top-full left-0 mt-2 w-96 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-200/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-lg font-display font-semibold text-slate-900 mb-2">Our Specialized Services</h3>
                      <p className="text-sm text-slate-600">Expert guidance for life's major financial transitions</p>
                    </div>
                    <div className="grid grid-cols-1 gap-3">
                      {services.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          className="flex items-center p-3 rounded-xl hover:bg-slate-50 transition-all duration-200 group/item"
                        >
                          <div className="w-8 h-8 bg-gradient-to-r from-teal-500/20 to-blue-500/20 rounded-lg flex items-center justify-center mr-3">
                            <ServiceIcon 
                              serviceIcon={service.icon} 
                              size="sm" 
                              className={
                                service.icon === 'divorce' ? 'text-teal-600' :
                                service.icon === 'inheritance' ? 'text-purple-600' :
                                service.icon === 'business' ? 'text-emerald-600' :
                                'text-amber-600'
                              } 
                            />
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-slate-900 group-hover/item:text-teal-600 transition-colors">
                              {service.shortName}
                            </div>
                            <div className="text-xs text-slate-500 mt-1">
                              {service.description.slice(0, 60)}...
                            </div>
                          </div>
                          <svg className="w-4 h-4 text-slate-400 group-hover/item:text-teal-600 transition-all duration-200 transform group-hover/item:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                          </svg>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-slate-200">
                      <Link 
                        href="/services" 
                        className="flex items-center justify-center w-full py-2 px-4 bg-gradient-to-r from-teal-600 to-blue-600 rounded-xl text-white font-medium hover:scale-105 transition-all duration-200"
                      >
                        View All Services
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
              <Link href="/locations" className="px-5 py-3 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-all duration-200 font-medium">
                Locations  
              </Link>
              <Link href="/blog" className="px-5 py-3 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-all duration-200 font-medium">
                Blog
              </Link>
              <Link href="/about" className="px-5 py-3 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-all duration-200 font-medium">
                About
              </Link>
              <Link href="/contact" className="px-5 py-3 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-all duration-200 font-medium">
                Contact
              </Link>
            </div>
            
            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              <a 
                href="tel:+16475550123" 
                className="hidden sm:flex items-center px-4 py-2 text-slate-700 font-semibold hover:bg-slate-100 rounded-xl transition-all duration-200 hover-scale"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="text-sm">647-555-0123</span>
              </a>
              <Link 
                href="/contact" 
                className="bg-gradient-to-r from-teal-600 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold text-sm hover:shadow-lg transition-all duration-200"
              >
                Free Consultation
              </Link>
              
              {/* Mobile Menu Button */}
              <button className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-all duration-200">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-teal-500 to-blue-500 transition-all duration-300" style={{width: '0%'}} id="scroll-progress"></div>
      </nav>

      {/* Ultra-Modern Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100">
        {/* Minimal geometric background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Clean gradient orbs */}
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-teal-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '0s', animationDuration: '4s'}}></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-400/15 to-pink-400/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s', animationDuration: '6s'}}></div>
          
          {/* Ultra-minimal floating elements */}
          <div className="absolute top-1/4 right-1/4 w-2 h-32 bg-gradient-to-b from-teal-500/30 to-transparent float-slow"></div>
          <div className="absolute bottom-1/3 left-1/5 w-32 h-2 bg-gradient-to-r from-purple-500/30 to-transparent float-animation"></div>
          <div className="absolute top-1/2 right-1/5 w-8 h-8 border border-teal-500/40 rounded-full float-animation" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Column - Content */}
          <div className="space-y-10 slide-in-left">
            {/* Modern Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-white/90 backdrop-blur-xl rounded-full border border-slate-200/50 shadow-lg">
              <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-slate-700 font-medium text-sm tracking-wide">CFP® Certified • Serving GTA Since 2018</span>
            </div>
            
            {/* Ultra-Modern Headline */}
            <div className="space-y-8">
              <h1 className="text-6xl lg:text-7xl xl:text-8xl font-display font-black text-slate-900 leading-[0.9] tracking-tight">
                Financial Planning
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 mt-2">
                  Reimagined
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed max-w-xl font-light">
                Expert guidance through life's major transitions with personalized strategies that protect and grow your wealth.
              </p>
            </div>
            
            {/* Modern Trust Metrics */}
            <div className="grid grid-cols-3 gap-6">
              <div className="group bg-white/60 backdrop-blur-xl rounded-2xl p-6 border border-white/40 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-3xl font-display font-black text-slate-900 mb-1 group-hover:scale-105 transition-transform duration-300">500+</div>
                <div className="text-sm text-slate-600 font-medium">Families Served</div>
              </div>
              <div className="group bg-white/60 backdrop-blur-xl rounded-2xl p-6 border border-white/40 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-3xl font-display font-black text-slate-900 mb-1 group-hover:scale-105 transition-transform duration-300">21</div>
                <div className="text-sm text-slate-600 font-medium">GTA Cities</div>
              </div>
              <div className="group bg-white/60 backdrop-blur-xl rounded-2xl p-6 border border-white/40 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-3xl font-display font-black text-slate-900 mb-1 group-hover:scale-105 transition-transform duration-300">98%</div>
                <div className="text-sm text-slate-600 font-medium">Satisfaction</div>
              </div>
            </div>
            
            {/* Ultra-Modern CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                href="/contact"
                className="group relative px-8 py-4 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10">Start Your Journey</span>
                <svg className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              
              <a 
                href="tel:+16475550123"
                className="group relative px-8 py-4 bg-white/80 backdrop-blur-xl text-slate-900 rounded-2xl font-semibold text-lg border border-slate-200 shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-105"
              >
                <svg className="w-5 h-5 mr-3 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="relative z-10">647-555-0123</span>
              </a>
            </div>
            
            {/* Primary Credential */}
            <div className="pt-6">
              <div className="inline-flex items-center space-x-3 bg-white/50 backdrop-blur-xl rounded-full px-4 py-2 border border-slate-200/50">
                <div className="w-6 h-6 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-slate-700">CFP® Certified</span>
              </div>
            </div>
          </div>
          
          {/* Right Column - Modern Visual Dashboard */}
          <div className="hidden lg:block slide-in-right">
            <div className="relative">
              {/* Ultra-Modern Dashboard */}
              <div className="relative bg-white/80 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl border border-white/50">
                <div className="space-y-6">
                  {/* Modern Stats Dashboard */}
                  <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 shadow-lg border border-slate-100">
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-slate-900 font-semibold text-lg">Client Portfolio</div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-600 text-sm">Average Growth</span>
                        <span className="text-teal-600 text-sm font-semibold bg-teal-50 px-2 py-1 rounded">+12.5%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-600 text-sm">Tax Savings</span>
                        <span className="text-blue-600 text-sm font-semibold bg-blue-50 px-2 py-1 rounded">$45.2K</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-600 text-sm">Risk Level</span>
                        <span className="text-green-600 text-sm font-semibold bg-green-50 px-2 py-1 rounded">Optimized</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Minimal Floating Elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-teal-400 rounded-full animate-ping"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-60 animate-pulse"></div>
            </div>
          </div>
        </div>
        
        {/* Modern Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-slate-400/40 rounded-full flex justify-center bg-white/60 backdrop-blur-xl">
            <div className="w-1 h-3 bg-slate-600 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Modern Trust & Credibility Section */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Professional Badges */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-xl border border-slate-200/50 rounded-full text-sm font-medium mb-8 shadow-lg">
              <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-slate-700">Trusted by 500+ GTA Families</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6 leading-tight">
              Professional Credentials &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">Client Success</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Our certifications, professional affiliations, and client testimonials demonstrate our commitment to excellence in financial advisory services.
            </p>
          </div>

          {/* Modern Certifications Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            <div className="group bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-200/50 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3 className="font-display font-bold text-slate-900 mb-1">CFP® Certified</h3>
              <p className="text-sm text-slate-600">Divorce Financial Analyst</p>
            </div>

            <div className="group bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-200/50 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-slate-900 mb-1">Fully Insured</h3>
              <p className="text-sm text-slate-600">Professional Liability</p>
            </div>

            <div className="group bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-200/50 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-slate-900 mb-1">CFP Member</h3>
              <p className="text-sm text-slate-600">Certified Financial Planner</p>
            </div>

            <div className="group bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-200/50 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-slate-900 mb-1">Since 2018</h3>
              <p className="text-sm text-slate-600">6+ Years Experience</p>
            </div>
          </div>

          {/* Modern Client Testimonials */}
          <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 md:p-12 border border-slate-200/50 shadow-xl">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-display font-bold text-slate-900 mb-4">
                What Our Clients Say
              </h3>
              <p className="text-slate-600">
                Real experiences from families we've helped navigate major financial transitions
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 border border-slate-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full mr-4 shadow-lg overflow-hidden">
                    {/* Professional woman headshot from Unsplash */}
                    <img 
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces" 
                      alt="Sarah M."
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Sarah M.</div>
                    <div className="text-sm text-slate-600">Divorce Planning Client</div>
                  </div>
                </div>
                <div className="flex text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-700 leading-relaxed">
                  &ldquo;Professional, compassionate guidance during the most difficult time in my life. The CFP® certification made all the difference.&rdquo;
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 border border-slate-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full mr-4 shadow-lg overflow-hidden">
                    {/* Professional man headshot from Unsplash */}
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces" 
                      alt="James K."
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">James K.</div>
                    <div className="text-sm text-slate-600">Business Sale Client</div>
                  </div>
                </div>
                <div className="flex text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-700 leading-relaxed">
                  &ldquo;Sold my business for 40% more than expected thanks to strategic tax planning. Exceptional expertise and results.&rdquo;
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 border border-slate-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full mr-4 shadow-lg overflow-hidden">
                    {/* Professional woman headshot from Unsplash */}
                    <img 
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=faces" 
                      alt="Lisa R."
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Lisa R.</div>
                    <div className="text-sm text-slate-600">Inheritance Planning</div>
                  </div>
                </div>
                <div className="flex text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-700 leading-relaxed">
                  &ldquo;Turned a complex inheritance into a well-structured investment portfolio. Clear communication throughout the process.&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Modern Recognition Section */}
          <div className="text-center mt-16">
            <p className="text-slate-600 font-medium mb-8">Recognized by Leading Financial Publications</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-slate-400 font-semibold text-lg hover:text-slate-600 transition-colors duration-200">Financial Post</div>
              <div className="text-slate-400 font-semibold text-lg hover:text-slate-600 transition-colors duration-200">Globe & Mail</div>
              <div className="text-slate-400 font-semibold text-lg hover:text-slate-600 transition-colors duration-200">Toronto Star</div>
              <div className="text-slate-400 font-semibold text-lg hover:text-slate-600 transition-colors duration-200">CTV News</div>
              <div className="text-slate-400 font-semibold text-lg hover:text-slate-600 transition-colors duration-200">CBC Business</div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Statistics Section */}
      <StatsSection />

      {/* AI-Powered Smart Calculators */}
      <SmartCalculators />

      {/* Mobile-First Enhancements */}
      <MobileEnhancements />


      {/* Modern Services Section */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
        {/* Clean background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-teal-400/8 to-blue-500/8 rounded-full blur-3xl animate-pulse" style={{animationDuration: '4s'}}></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-r from-purple-400/6 to-pink-400/6 rounded-full blur-3xl animate-pulse" style={{animationDuration: '6s'}}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-xl border border-slate-200/50 rounded-full text-sm font-medium mb-8 shadow-lg">
              <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-slate-700">Four Specialized Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-8 leading-tight">
              Expert Financial Planning for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600 block">Life's Major Transitions</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Unlike general financial advisors, we focus exclusively on the four critical life events that require specialized knowledge, experience, and compassionate guidance. Each service includes a comprehensive consultation and personalized strategy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <div key={service.slug} className={`fade-in-up`} style={{ animationDelay: `${index * 0.1}s` }}>
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
          
          {/* Modern CTA Section */}
          <div className="text-center mt-20">
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-slate-200/50">
              <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
                Choose the consultation that matches your situation, or speak with us to determine the best approach for your unique circumstances.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/services"
                  className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  Compare All Services
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
                <Link
                  href="/contact"
                  className="group inline-flex items-center px-8 py-4 bg-white/80 text-slate-700 border border-slate-200 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Book Free Consultation
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Insights Blog Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-slate-50 border border-slate-200/50 rounded-full text-sm font-medium mb-8">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-slate-700">Expert Insights</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-8 leading-tight">
              Stay Informed with Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 block">Financial Planning Blog</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Get practical advice, market insights, and actionable strategies for navigating life's major financial transitions. Our blog covers divorce planning, inheritance strategies, business sales, and career transitions with real GTA examples.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="group bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200/50 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Divorce Planning</h3>
              <p className="text-slate-600 text-sm mb-3">Expert guidance on asset division, support calculations, and post-divorce financial recovery strategies.</p>
              <div className="text-xs text-blue-600 font-medium">Updated 3x weekly</div>
            </div>
            
            <div className="group bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200/50 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Business & Severance</h3>
              <p className="text-slate-600 text-sm mb-3">Tax-efficient business exit strategies and maximizing severance packages during career transitions.</p>
              <div className="text-xs text-green-600 font-medium">Current market insights</div>
            </div>
            
            <div className="group bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200/50 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Inheritance Planning</h3>
              <p className="text-slate-600 text-sm mb-3">Estate strategies, tax minimization, and wealth transfer planning for Ontario families.</p>
              <div className="text-xs text-purple-600 font-medium">Latest tax changes</div>
            </div>
          </div>
          
          <div className="text-center">
            <Link
              href="/blog"
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Read Our Latest Insights
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* GTA Locations Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-xl border border-slate-200/50 rounded-full text-sm font-medium mb-8 shadow-lg">
              <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-slate-700">Your Local GTA Financial Advisor</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-8 leading-tight">
              Local Expertise Across{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600 block">21 GTA Municipalities</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Whether you're in downtown Toronto, suburban Mississauga, or anywhere across the GTA, we provide personalized financial planning services with deep local market knowledge and community connections.
            </p>
          </div>
          
          {/* Interactive Map */}
          <div className="mb-16">
            <GTAMap />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-6 border border-teal-200/50">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Local Market Knowledge</h4>
                </div>
              </div>
              <p className="text-slate-600">Deep understanding of GTA real estate markets, local tax implications, and regional economic factors that impact your financial planning.</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200/50">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Community Connections</h4>
                </div>
              </div>
              <p className="text-slate-600">Established relationships with local lawyers, accountants, and other professionals to support your comprehensive financial planning needs.</p>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-200/50">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Flexible Meeting Options</h4>
                </div>
              </div>
              <p className="text-slate-600">In-person meetings, virtual consultations, or phone calls - we adapt to your preference and location across the entire GTA.</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/locations"
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Explore All GTA Locations
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Modern Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-xl border border-slate-200/50 rounded-full text-sm font-medium mb-8 shadow-lg">
              <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-slate-700">Why Choose Us</span>
            </div>
            <h2 className="text-4xl font-display font-bold text-slate-900 mb-4">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">ProsperBridge</span>?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-white/80 backdrop-blur-xl rounded-2xl p-8 border border-slate-200/50 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM6.39 6.39a5.93 5.93 0 117.24 7.24l-1.39-1.39A3.95 3.95 0 0014 9a4 4 0 00-4-4 3.95 3.95 0 00-3.24 1.76L6.39 6.39z"/>
                  <circle cx="10" cy="10" r="2" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="text-xl font-display font-bold text-slate-900 mb-4">Specialized Expertise</h3>
              <p className="text-slate-600 leading-relaxed">
                Unlike general financial advisors, we focus exclusively on the four major life transitions that require specialized knowledge and experience.
              </p>
            </div>
            
            <div className="group bg-white/80 backdrop-blur-xl rounded-2xl p-8 border border-slate-200/50 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-display font-bold text-slate-900 mb-4">GTA Coverage</h3>
              <p className="text-slate-600 leading-relaxed">
                Headquartered in Mississauga with comprehensive coverage throughout the entire GTA region - from Toronto to Hamilton, and everywhere in between.
              </p>
            </div>
            
            <div className="group bg-white/80 backdrop-blur-xl rounded-2xl p-8 border border-slate-200/50 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-display font-bold text-slate-900 mb-4">Confidential & Compassionate</h3>
              <p className="text-slate-600 leading-relaxed">
                We understand these are sensitive times. All consultations are completely confidential with a judgment-free approach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* City Grid */}
      <CityGrid />

      {/* Modern Contact Section */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-xl border border-slate-200/50 rounded-full text-sm font-medium mb-8 shadow-lg">
              <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-slate-700">Get Started Today</span>
            </div>
            <h2 className="text-4xl font-display font-bold text-slate-900 mb-4">
              Ready to Take Control of Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">Financial Future</span>?
            </h2>
            <p className="text-xl text-slate-600">
              Get expert guidance tailored to your specific situation. Free consultation, no obligation.
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
                  <span className="font-medium">Timeline for implementation</span>
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
              
              <div className="mt-8 pt-6 border-t border-slate-200">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Office Location</div>
                      <div className="text-slate-600">Mississauga, ON</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Service Area</div>
                      <div className="text-slate-600">Complete GTA coverage</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Meeting Options</div>
                      <div className="text-slate-600">In-person, virtual, or phone</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Footer */}
      <footer className="bg-slate-900 text-white relative overflow-hidden">
        {/* Clean background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800"></div>
        
        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-700 py-16 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-display font-bold text-white mb-4">
                  Stay Informed About Financial Planning
                </h3>
                <p className="text-white/80 text-lg">
                  Get monthly insights, tax updates, and financial planning tips delivered to your inbox.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent"
                    suppressHydrationWarning
                  />
                  <button className="bg-gradient-to-r from-teal-600 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold whitespace-nowrap hover:shadow-lg transition-all duration-200" suppressHydrationWarning>
                    Subscribe
                  </button>
                </div>
                <p className="text-xs text-white/60">
                  No spam. Unsubscribe anytime. Privacy protected.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {/* Company Info */}
              <div className="lg:col-span-2">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-display font-bold text-white">ProsperBridge</div>
                    <div className="text-sm text-white/70">Financial Advisory</div>
                  </div>
                </div>
                <p className="text-white/80 mb-6 max-w-md leading-relaxed">
                  CFP®-certified financial advisor specializing in life's major transitions. Proudly supporting GTA families with compassionate, expert guidance since 2018.
                </p>
                
                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-teal-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <a href="tel:+16475550123" className="text-white hover:text-teal-300 transition-colors font-medium">
                      (647) 555-0123
                    </a>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-teal-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <a href="mailto:info@prosperbridge.ca" className="text-white hover:text-teal-300 transition-colors font-medium">
                      info@prosperbridge.ca
                    </a>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-teal-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-white font-medium">Mississauga, ON</span>
                  </div>
                </div>
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

              {/* Locations */}
              <div>
                <h4 className="text-lg font-display font-bold text-white mb-6">Major Cities</h4>
                <ul className="space-y-3">
                  {tier1Cities.slice(0, 6).map(city => (
                    <li key={city.slug}>
                      <Link href={`/locations/${city.slug}`} className="text-white/80 hover:text-teal-300 transition-colors">
                        {city.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link href="/locations" className="text-teal-400 hover:text-teal-300 text-sm font-medium mt-3 block">
                  View all 21 cities →
                </Link>
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
                    <Link href="/privacy" className="text-white/80 hover:text-teal-300 transition-colors">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="text-white/80 hover:text-teal-300 transition-colors">
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-navy-700/50 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-white/60 text-sm mb-4 md:mb-0">
                &copy; 2024 ProsperBridge Financial Advisory. All rights reserved.
              </div>
              
              {/* Professional Badges */}
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gold-500 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-white/80 text-sm font-medium">CFP® Certified</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-white/80 text-sm font-medium">Fully Insured</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Contact Form */}
      <MobileContactForm />

      {/* AI Chat Widget */}
      <ChatWidget />

      {/* Modern Back to Top Button */}
      <div className="fixed bottom-6 left-6 z-50">
        <button className="group glass-light text-navy-700 p-4 rounded-full shadow-2xl magnetic-hover border border-white/20" suppressHydrationWarning>
          <svg className="w-6 h-6 group-hover:-translate-y-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </div>
  );
}