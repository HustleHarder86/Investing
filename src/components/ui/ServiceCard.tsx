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
  const getServiceColors = (slug: string) => {
    switch (slug) {
      case 'divorce-financial-planning':
        return {
          gradient: 'from-blue-600 to-indigo-600',
          bg: 'from-blue-50 to-indigo-50',
          border: 'border-blue-200/50',
          icon: 'from-blue-500 to-indigo-500'
        };
      case 'inheritance-financial-planning':
        return {
          gradient: 'from-purple-600 to-pink-600',
          bg: 'from-purple-50 to-pink-50',
          border: 'border-purple-200/50',
          icon: 'from-purple-500 to-pink-500'
        };
      case 'business-sale-planning':
        return {
          gradient: 'from-emerald-600 to-teal-600',
          bg: 'from-emerald-50 to-teal-50',
          border: 'border-emerald-200/50',
          icon: 'from-emerald-500 to-teal-500'
        };
      case 'severance-job-loss-planning':
        return {
          gradient: 'from-amber-600 to-orange-600',
          bg: 'from-amber-50 to-orange-50',
          border: 'border-amber-200/50',
          icon: 'from-amber-500 to-orange-500'
        };
      default:
        return {
          gradient: 'from-teal-600 to-blue-600',
          bg: 'from-teal-50 to-blue-50',
          border: 'border-teal-200/50',
          icon: 'from-teal-500 to-blue-500'
        };
    }
  };

  const colors = getServiceColors(service.slug);

  // Get professional icon based on service
  const getServiceIcon = (slug: string) => {
    switch (slug) {
      case 'divorce-financial-planning':
        return (
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M16 2H8C4.691 2 2 4.691 2 8v13a1 1 0 001 1h13c3.309 0 6-2.691 6-6V8c0-3.309-2.691-6-6-6zm4 14c0 2.206-1.794 4-4 4H4V8c0-2.206 1.794-4 4-4h8c2.206 0 4 1.794 4 4v8z"/>
            <path d="M11 6h2v8h-2zm0 10h2v2h-2z"/>
          </svg>
        );
      case 'inheritance-financial-planning':
        return (
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M5 5v14a1 1 0 001 1h3v-2H7V6h2V4H6a1 1 0 00-1 1zm14.242-.97l-8-2A1 1 0 0011 2H9a1 1 0 00-1 1v9c0 .266.105.52.293.707S8.734 13 9 13h2c.266 0 .52-.105.707-.293S12 12.266 12 12V4.92l7.242 1.82a1 1 0 00.758-.029c.271-.113.469-.346.531-.629l.963-4.807 1.958.392-.963 4.807c-.072.36-.399.652-.759.677z"/>
            <path d="M14 20h-4v-2h4c1.103 0 2-.897 2-2v-4h2v4c0 2.206-1.794 4-4 4z"/>
          </svg>
        );
      case 'business-sale-planning':
        return (
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 6h-3V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2zM9 4h6v2H9V4zm11 15H4V8h16v11z"/>
            <path d="M11 17.414l-3.707-3.707 1.414-1.414L11 14.586l4.293-4.293 1.414 1.414z"/>
          </svg>
        );
      case 'severance-job-loss-planning':
        return (
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
            <path d="M14.829 14.828a4.055 4.055 0 01-1.272.858 4.002 4.002 0 01-4.875-1.45l-1.658 1.119a6.063 6.063 0 001.621 1.62 5.963 5.963 0 002.148.903 6.042 6.042 0 002.415 0 5.972 5.972 0 002.148-.903 6.053 6.053 0 001.621-1.62 5.975 5.975 0 00.903-2.148l-1.95-.423a3.903 3.903 0 01-.577 1.296 4.029 4.029 0 01-.474.348z"/>
          </svg>
        );
      default:
        return (
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
        );
    }
  };

  return (
    <div className={`group relative bg-gradient-to-br ${colors.bg} rounded-2xl ${colors.border} border shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden`}>
      {/* Clean geometric accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/40 to-transparent rounded-bl-full opacity-50"></div>
      
      <div className="relative p-8">
        {/* Modern icon and title section */}
        <div className="flex items-start mb-6">
          <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-r ${colors.icon} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
            {getServiceIcon(service.slug)}
          </div>
          <div className="ml-6 flex-1">
            <h3 className="text-2xl font-display font-bold text-slate-900 mb-2">
              {service.shortName}
            </h3>
            {city && (
              <p className="text-sm text-slate-600 font-medium">in {city}</p>
            )}
          </div>
        </div>
        
        <p className="text-slate-700 mb-6 leading-relaxed">
          {service.description}
        </p>
        
        {/* Clean benefits list */}
        <div className="mb-8">
          <div className="space-y-3">
            {service.benefits.slice(0, 3).map((benefit, index) => (
              <div key={index} className="flex items-start">
                <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r ${colors.gradient} flex items-center justify-center mr-3 mt-0.5`}>
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-slate-600 text-sm">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Modern CTA button */}
        <Link
          href={href}
          className={`group/btn w-full flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r ${colors.gradient} text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300`}
        >
          <span>Learn More</span>
          <svg className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
    </div>
  );
}