import Link from 'next/link';
import { Service } from '@/lib/services';

interface ServiceCardProps {
  service: Service;
  city?: string;
}

export default function ServiceCard({ service, city }: ServiceCardProps) {
  const href = city 
    ? `/locations/${city}/${service.slug}`
    : `/services/${service.slug}`;

  // Dynamic gradient based on service
  const getServiceGradient = (slug: string) => {
    switch (slug) {
      case 'divorce-financial-planning':
        return 'gradient-navy-teal';
      case 'inheritance-financial-planning':
        return 'gradient-teal-gold';
      case 'business-sale-planning':
        return 'gradient-navy-gold';
      case 'severance-job-loss-planning':
        return 'gradient-gold-teal';
      default:
        return 'gradient-navy-teal';
    }
  };

  return (
    <div className="group relative bg-white/95 backdrop-blur-xl rounded-3xl floating-card border border-navy-100/30 overflow-hidden shadow-xl">
      {/* Dynamic gradient accent */}
      <div className={`absolute top-0 left-0 w-full h-2 ${getServiceGradient(service.slug)}`}></div>
      
      {/* Professional background pattern */}
      <div className="absolute inset-0 opacity-3 dots-pattern"></div>
      
      {/* Modern floating decoration */}
      <div className="absolute top-6 right-6 w-24 h-24 bg-gradient-to-br from-teal-200/15 to-gold-200/15 rounded-full blur-3xl group-hover:scale-125 group-hover:opacity-80 transition-all duration-700 float-slow"></div>
      
      <div className="relative p-8">
        {/* Modern icon section */}
        <div className="flex items-start mb-10">
          <div className={`relative flex-shrink-0 w-24 h-24 rounded-3xl ${getServiceGradient(service.slug)} flex items-center justify-center text-white text-4xl shadow-2xl group-hover:scale-110 group-hover:rotate-2 transition-all duration-500 border border-white/10`}>
            <div className="absolute inset-0 rounded-3xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shimmer"></div>
            <span className="relative z-10 filter drop-shadow-lg">{service.icon}</span>
          </div>
          <div className="ml-8 flex-1">
            <h3 className="text-3xl font-display font-black text-navy-900 group-hover:gradient-text transition-all duration-300 mb-3 tracking-tight">
              {service.shortName}
            </h3>
            {city && (
              <p className="text-sm text-navy-500 font-semibold tracking-wide">in {city}</p>
            )}
            <div className="mt-4 text-xs text-navy-600 bg-navy-50/70 backdrop-blur-sm px-4 py-2 rounded-2xl inline-block font-medium tracking-wide">
              ~45 min consultation
            </div>
          </div>
        </div>
        
        <p className="text-navy-700 mb-10 leading-relaxed text-lg font-light tracking-wide">
          {service.description}
        </p>
        
        {/* Enhanced benefits section */}
        <div className="mb-8">
          <h4 className="text-lg font-display font-semibold text-navy-900 mb-4">What You'll Get:</h4>
          <div className="space-y-3">
            {service.benefits.slice(0, 3).map((benefit, index) => (
              <div key={index} className="flex items-start group/benefit">
                <div className={`flex-shrink-0 w-6 h-6 rounded-xl ${getServiceGradient(service.slug)} flex items-center justify-center mr-4 mt-1 group-hover/benefit:scale-110 transition-transform duration-200`}>
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-navy-700 font-medium group-hover/benefit:text-navy-900 transition-colors duration-200">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Modern CTA button */}
        <div className="space-y-4">
          <Link
            href={href}
            className={`group/btn w-full flex items-center justify-center px-8 py-4 rounded-3xl text-white font-bold text-lg ${getServiceGradient(service.slug)} magnetic-hover shadow-2xl border border-white/10 relative overflow-hidden`}
          >
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 shimmer"></div>
            <span className="relative z-10">Start Your Consultation</span>
            <svg className="ml-3 w-5 h-5 group-hover/btn:translate-x-2 transition-transform duration-300 relative z-10" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
          
          <div className="text-center">
            <Link
              href={href}
              className="text-navy-600 hover:text-navy-800 font-medium text-sm hover:underline transition-all duration-200"
            >
              Learn more about this service →
            </Link>
          </div>
        </div>
      </div>
      
      {/* Enhanced corner decoration */}
      <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-tl from-gold-200/20 to-teal-200/20 rounded-full blur-2xl group-hover:scale-125 transition-all duration-500"></div>
      
      {/* Professional badge */}
      <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-navy-700 opacity-0 group-hover:opacity-100 transition-all duration-300">
        Free Consultation
      </div>
    </div>
  );
}