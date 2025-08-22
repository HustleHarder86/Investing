'use client';

import { useState, useEffect, useRef } from 'react';

interface LiveMetric {
  id: string;
  label: string;
  value: number;
  target: number;
  unit: string;
  trend: 'up' | 'down' | 'stable';
  change: number;
  icon: string;
  color: string;
}

interface Testimonial {
  id: string;
  name: string;
  location: string;
  service: string;
  content: string;
  rating: number;
  avatar: string;
  verified: boolean;
  date: string;
}

function AnimatedMetric({ metric, isVisible }: { metric: LiveMetric; isVisible: boolean }) {
  const [currentValue, setCurrentValue] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    setIsAnimating(true);
    let startTime: number;
    let animationId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / 2500, 1);
      
      const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const value = Math.floor(easeOutExpo * metric.target);
      
      setCurrentValue(value);

      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      } else {
        setIsAnimating(false);
      }
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [metric.target, isVisible]);

  const getTrendIcon = () => {
    if (metric.trend === 'up') return (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd"/>
      </svg>
    );
    if (metric.trend === 'down') return (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd"/>
      </svg>
    );
    return (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
      </svg>
    );
  };

  const getTrendColor = () => {
    if (metric.trend === 'up') return 'text-green-600';
    if (metric.trend === 'down') return 'text-red-600';
    return 'text-slate-600';
  };

  return (
    <div className={`bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-200/50 shadow-lg hover:shadow-xl transition-all duration-500 ${isAnimating ? 'animate-pulse' : ''}`}>
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 ${metric.color} rounded-xl flex items-center justify-center shadow-lg`}>
          {metric.icon === 'clients' && (
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
            </svg>
          )}
          {metric.icon === 'success' && (
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
          )}
          {metric.icon === 'savings' && (
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"/>
            </svg>
          )}
          {metric.icon === 'response' && (
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
            </svg>
          )}
        </div>
        <div className={`flex items-center space-x-1 ${getTrendColor()} text-sm font-medium`}>
          {getTrendIcon()}
          <span>{metric.change > 0 ? '+' : ''}{metric.change}%</span>
        </div>
      </div>
      
      <div className="mb-2">
        <div className="text-3xl font-display font-bold text-slate-900 mb-1">
          {currentValue.toLocaleString()}{metric.unit}
        </div>
        <div className="text-slate-600 font-medium">{metric.label}</div>
      </div>
      
      {/* Live indicator */}
      <div className="flex items-center space-x-2 text-xs text-slate-500">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        <span>Live data</span>
      </div>
    </div>
  );
}

function LiveTestimonials({ testimonials }: { testimonials: Testimonial[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length, isVisible]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div ref={sectionRef} className="relative">
      <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-3xl p-8 border border-teal-100 shadow-xl overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-200/30 to-blue-200/30 rounded-full blur-3xl"></div>
        
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-slate-700">Live Testimonials</span>
            </div>
            <div className="flex space-x-1">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-teal-600 scale-125' : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="transition-all duration-500 transform">
            <div className="flex items-start space-x-4 mb-6">
              <div className={`w-16 h-16 ${currentTestimonial.avatar} rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                {currentTestimonial.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <h4 className="font-semibold text-slate-900">{currentTestimonial.name}</h4>
                  {currentTestimonial.verified && (
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
                <div className="text-sm text-slate-600 mb-2">
                  {currentTestimonial.location} • {currentTestimonial.service}
                </div>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${i < currentTestimonial.rating ? 'text-yellow-400' : 'text-slate-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>

            <blockquote className="text-slate-700 text-lg leading-relaxed italic mb-4">
              &ldquo;{currentTestimonial.content}&rdquo;
            </blockquote>
            
            <div className="text-xs text-slate-500">
              {currentTestimonial.date}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RealTimeUpdates() {
  const [updates, setUpdates] = useState([
    { id: '1', text: 'Client consultation scheduled in Mississauga', time: '2 min ago', type: 'appointment' },
    { id: '2', text: 'Business sale plan approved in Toronto', time: '15 min ago', type: 'success' },
    { id: '3', text: 'Inheritance strategy implemented in Oakville', time: '1 hour ago', type: 'implementation' },
  ]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const newUpdate = {
        id: Date.now().toString(),
        text: [
          'New client consultation booked in Brampton',
          'Divorce settlement optimized in Richmond Hill',
          'Tax strategy consultation in Hamilton',
          'Severance negotiation completed in Vaughan',
          'Estate planning review in Burlington'
        ][Math.floor(Math.random() * 5)],
        time: 'Just now',
        type: ['appointment', 'success', 'implementation'][Math.floor(Math.random() * 3)]
      };

      setUpdates(prev => [newUpdate, ...prev.slice(0, 2)]);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const getUpdateIcon = (type: string) => {
    switch (type) {
      case 'appointment': return (
        <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
        </svg>
      );
      case 'success': return (
        <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
        </svg>
      );
      case 'implementation': return (
        <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
        </svg>
      );
      default: return (
        <svg className="w-5 h-5 text-slate-600" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
          <path fillRule="evenodd" d="M4 5a2 2 0 012-2 1 1 0 000 2H6a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 00-2-2H4V5z" clipRule="evenodd"/>
        </svg>
      );
    }
  };

  if (!isVisible) return null;

  return (
    <div className="bg-white/90 backdrop-blur-xl rounded-2xl border border-slate-200/50 shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-teal-600 to-blue-600 px-4 py-3">
        <div className="flex items-center space-x-2 text-white">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <span className="font-semibold text-sm">Live Activity</span>
        </div>
      </div>
      
      <div className="divide-y divide-slate-100">
        {updates.map((update, index) => (
          <div 
            key={update.id}
            className={`p-4 transition-all duration-500 transform ${
              index === 0 ? 'animate-slideInLeft bg-teal-50/50' : ''
            }`}
          >
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">{getUpdateIcon(update.type)}</div>
              <div className="flex-1">
                <div className="text-sm text-slate-900 font-medium">{update.text}</div>
                <div className="text-xs text-slate-500 mt-1">{update.time}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function LiveTrustElements() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const liveMetrics: LiveMetric[] = [
    {
      id: '1',
      label: 'Active Clients',
      value: 0,
      target: 247,
      unit: '',
      trend: 'up',
      change: 12,
      icon: 'clients',
      color: 'bg-gradient-to-r from-blue-500 to-blue-600'
    },
    {
      id: '2',
      label: 'Success Rate',
      value: 0,
      target: 98,
      unit: '%',
      trend: 'stable',
      change: 0,
      icon: 'success',
      color: 'bg-gradient-to-r from-green-500 to-green-600'
    },
    {
      id: '3',
      label: 'Avg. Tax Savings',
      value: 0,
      target: 47,
      unit: 'K',
      trend: 'up',
      change: 8,
      icon: 'savings',
      color: 'bg-gradient-to-r from-yellow-500 to-yellow-600'
    },
    {
      id: '4',
      label: 'Response Time',
      value: 0,
      target: 4,
      unit: 'hrs',
      trend: 'down',
      change: -15,
      icon: 'response',
      color: 'bg-gradient-to-r from-purple-500 to-purple-600'
    }
  ];

  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Sarah Johnson',
      location: 'Mississauga',
      service: 'Divorce Planning',
      content: 'The team helped me navigate the most difficult time in my life with professionalism and care. Their guidance saved me thousands in taxes.',
      rating: 5,
      avatar: 'bg-gradient-to-r from-pink-500 to-rose-500',
      verified: true,
      date: '2 days ago'
    },
    {
      id: '2',
      name: 'Michael Chen',
      location: 'Toronto',
      service: 'Business Sale',
      content: 'Exceptional service during our business sale. They optimized our tax structure and helped us achieve the best possible outcome.',
      rating: 5,
      avatar: 'bg-gradient-to-r from-blue-500 to-indigo-500',
      verified: true,
      date: '1 week ago'
    },
    {
      id: '3',
      name: 'Emily Rodriguez',
      location: 'Oakville',
      service: 'Inheritance Planning',
      content: 'Professional, knowledgeable, and responsive. They made a complex inheritance situation simple and saved our family significant money.',
      rating: 5,
      avatar: 'bg-gradient-to-r from-green-500 to-teal-500',
      verified: true,
      date: '3 days ago'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-teal-400/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-r from-purple-400/8 to-pink-400/8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
          <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-xl border border-slate-200/50 rounded-full text-sm font-medium mb-8 shadow-lg">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
            <span className="text-slate-700">Live Trust Indicators</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6 tracking-tight">
            Real-Time <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">Performance</span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            See our live performance metrics and real client feedback as it happens
          </p>
        </div>

        {/* Live metrics grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
          {liveMetrics.map(metric => (
            <AnimatedMetric key={metric.id} metric={metric} isVisible={isVisible} />
          ))}
        </div>

        {/* Live testimonials and activity */}
        <div className={`grid grid-cols-1 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
          <div className="lg:col-span-2">
            <LiveTestimonials testimonials={testimonials} />
          </div>
          <div>
            <RealTimeUpdates />
          </div>
        </div>

        {/* Trust badges */}
        <div className={`mt-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-200/50 shadow-xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-display font-bold text-slate-900 mb-2">
                Trusted & Verified
              </h3>
              <p className="text-slate-600">
                Our credentials and certifications ensure the highest standards
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: 'CFP® Certified', icon: 'certified', desc: 'Certified Divorce Financial Analyst' },
                { name: 'Fully Insured', icon: 'insured', desc: 'Comprehensive liability coverage' },
                { name: 'BBB A+ Rating', icon: 'rating', desc: 'Better Business Bureau accredited' },
                { name: '15+ Years', icon: 'experience', desc: 'Combined team experience' }
              ].map((badge, index) => (
                <div 
                  key={badge.name}
                  className="text-center p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-all duration-300 magnetic-hover"
                  style={{animationDelay: `${index * 150}ms`}}
                >
                  <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-teal-500/10 to-blue-500/10 rounded-xl flex items-center justify-center">
                    {badge.icon === 'certified' && (
                      <svg className="w-7 h-7 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                      </svg>
                    )}
                    {badge.icon === 'insured' && (
                      <svg className="w-7 h-7 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                    )}
                    {badge.icon === 'rating' && (
                      <svg className="w-7 h-7 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    )}
                    {badge.icon === 'experience' && (
                      <svg className="w-7 h-7 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
                      </svg>
                    )}
                  </div>
                  <div className="font-semibold text-slate-900 mb-1">{badge.name}</div>
                  <div className="text-xs text-slate-600">{badge.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}