'use client';

import { useState, useEffect, useRef } from 'react';

interface StatData {
  value: number;
  suffix: string;
  label: string;
  description: string;
  icon: string;
}

const stats: StatData[] = [
  {
    value: 10000,
    suffix: '+',
    label: 'Families Helped',
    description: 'Successful transitions guided',
    icon: 'family'
  },
  {
    value: 250,
    suffix: 'M',
    label: 'Assets Managed',
    description: 'In client wealth under management',
    icon: 'shield'
  },
  {
    value: 45,
    suffix: '+',
    label: 'Years Experience',
    description: 'Combined team expertise',
    icon: 'chart'
  },
  {
    value: 21,
    suffix: '',
    label: 'GTA Cities',
    description: 'Comprehensive local coverage',
    icon: 'satisfaction'
  }
];

interface AnimatedCounterProps {
  target: number;
  duration: number;
  suffix: string;
  isVisible: boolean;
}

function AnimatedCounter({ target, duration, suffix, isVisible }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!isVisible || hasAnimated) return;

    setHasAnimated(true);
    let startTime: number;
    let animationId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Simple easing function
      const easeOutQuad = progress * (2 - progress);
      const currentCount = Math.floor(easeOutQuad * target);
      
      setCount(currentCount);

      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      }
    };

    // Start animation immediately when visible
    animationId = requestAnimationFrame(animate);
    
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [target, duration, isVisible, hasAnimated]);

  const formatNumber = (num: number, suffix: string) => {
    if (suffix === 'M') {
      // Display millions properly (e.g., "$2000M" or "$2.0B")
      if (num >= 1000) {
        return '$' + (num / 1000).toFixed(1) + 'B';
      }
      return '$' + num.toString() + 'M';
    }
    if (suffix === 'K') {
      // Display thousands properly (e.g., "10K")
      return (num / 1000).toFixed(0) + 'K';
    }
    if (num >= 10000) {
      // For large numbers without suffix, show with K
      return (num / 1000).toFixed(0) + 'K' + suffix;
    }
    // For numbers with + suffix, add commas for readability
    if (suffix === '+' && num >= 1000) {
      return num.toLocaleString() + suffix;
    }
    return num.toString() + suffix;
  };

  return (
    <span className="text-5xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
      {formatNumber(count, suffix)}
    </span>
  );
}

interface ProgressRingProps {
  percentage: number;
  size: number;
  strokeWidth: number;
  isVisible: boolean;
}

function ProgressRing({ percentage, size, strokeWidth, isVisible }: ProgressRingProps) {
  const [progress, setProgress] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (progress / 100) * circumference;

  useEffect(() => {
    if (!isVisible || hasAnimated) return;

    setHasAnimated(true);
    let startTime: number;
    let animationId: number;
    const duration = 2000;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = Math.min((currentTime - startTime) / duration, 1);
      
      // Simple easing function
      const easeOutQuad = elapsed * (2 - elapsed);
      const currentProgress = easeOutQuad * percentage;
      
      setProgress(currentProgress);

      if (elapsed < 1) {
        animationId = requestAnimationFrame(animate);
      }
    };

    // Start with slight delay for staggered effect
    const startTimer = setTimeout(() => {
      animationId = requestAnimationFrame(animate);
    }, 500);
    
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      clearTimeout(startTimer);
    };
  }, [percentage, isVisible, hasAnimated]);

  return (
    <div className="relative inline-block">
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Background ring */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="rgba(20, 184, 166, 0.1)"
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        {/* Progress ring */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="url(#progressGradient)"
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
        />
        <defs>
          <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#14b8a6" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-3xl font-display font-bold text-slate-900">
          {Math.round(progress)}%
        </span>
      </div>
    </div>
  );
}

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simplified visibility detection
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '100px 0px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Simplified fallback - trigger after 3 seconds if not already visible
    const fallbackTimer = setTimeout(() => {
      if (!isVisible) {
        setIsVisible(true);
      }
    }, 3000);

    return () => {
      observer.disconnect();
      clearTimeout(fallbackTimer);
    };
  }, [isVisible]);

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 bg-gradient-to-b from-slate-50 to-white overflow-hidden"
    >
      {/* Clean modern background elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-teal-400/10 to-blue-500/10 rounded-full blur-3xl animate-pulse" style={{animationDuration: '4s'}}></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-r from-purple-400/8 to-pink-400/8 rounded-full blur-3xl animate-pulse" style={{animationDuration: '6s'}}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Modern section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-xl border border-slate-200/50 rounded-full text-sm font-medium mb-8 shadow-lg">
            <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 animate-pulse"></div>
            <span className="text-slate-700">Proven Track Record</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6 tracking-tight">
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">Thousands</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Real results from real families who trusted us during their most important financial transitions
          </p>
        </div>

        {/* Interactive statistics grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="group relative bg-white/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 shadow-lg hover:shadow-xl overflow-hidden p-8 text-center transition-all duration-300"
            >
              {/* Clean hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-teal-50/50 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Icon with floating animation */}
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-teal-500/10 to-blue-500/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500">
                {stat.icon === 'satisfaction' && (
                  <svg className="w-10 h-10 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                )}
                {stat.icon === 'shield' && (
                  <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                )}
                {stat.icon === 'chart' && (
                  <svg className="w-10 h-10 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                  </svg>
                )}
                {stat.icon === 'family' && (
                  <svg className="w-10 h-10 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                )}
              </div>
              
              {/* Animated counter */}
              <div className="mb-4 relative z-10 stats-counter">
                <AnimatedCounter 
                  target={stat.value} 
                  duration={2500} 
                  suffix={stat.suffix}
                  isVisible={isVisible}
                />
              </div>
              
              {/* Label and description */}
              <h3 className="text-2xl font-display font-bold text-slate-900 mb-3 relative z-10">
                {stat.label}
              </h3>
              <p className="text-slate-600 font-medium leading-relaxed relative z-10">
                {stat.description}
              </p>
              
              {/* Modern bottom accent */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>

        {/* Modern progress rings section */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-slate-200/50 p-12 shadow-xl">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-display font-bold text-slate-900 mb-4">
              Our Service <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">Excellence</span>
            </h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Measurable results across all our specialized financial planning services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Service success rates */}
            <div className="flex flex-col items-center">
              <div className="progress-ring">
                <ProgressRing 
                  percentage={96} 
                  size={180} 
                  strokeWidth={12} 
                  isVisible={isVisible}
                />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mt-6 mb-2">Divorce Planning</h4>
              <p className="text-slate-600 text-center">Successful settlements achieved</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="progress-ring">
                <ProgressRing 
                  percentage={94} 
                  size={180} 
                  strokeWidth={12} 
                  isVisible={isVisible}
                />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mt-6 mb-2">Inheritance Planning</h4>
              <p className="text-slate-600 text-center">Tax optimization success rate</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="progress-ring">
                <ProgressRing 
                  percentage={92} 
                  size={180} 
                  strokeWidth={12} 
                  isVisible={isVisible}
                />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mt-6 mb-2">Business Sale</h4>
              <p className="text-slate-600 text-center">Optimal deal structuring</p>
            </div>
          </div>
        </div>

        {/* Modern call to action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-white/90 backdrop-blur-xl rounded-full px-8 py-4 border border-slate-200/50 shadow-lg">
            <span className="text-slate-700 font-medium">Ready to join our success stories?</span>
            <button className="bg-gradient-to-r from-teal-600 to-blue-600 text-white px-6 py-3 rounded-full text-sm font-semibold hover:shadow-lg transition-all duration-200">
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}