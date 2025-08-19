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
    value: 98,
    suffix: '%',
    label: 'Client Satisfaction',
    description: 'Clients achieve their financial goals',
    icon: '⭐'
  },
  {
    value: 2.4,
    suffix: 'M',
    label: 'Assets Protected',
    description: 'In client wealth managed',
    icon: '🛡️'
  },
  {
    value: 15,
    suffix: '+',
    label: 'Years Experience',
    description: 'Combined team expertise',
    icon: '📈'
  },
  {
    value: 500,
    suffix: '+',
    label: 'Families Helped',
    description: 'Successful transitions guided',
    icon: '👨‍👩‍👧‍👦'
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

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentCount = Math.floor(easeOutExpo * target);
      
      setCount(currentCount);

      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      }
    };

    animationId = requestAnimationFrame(animate);
    
    return () => cancelAnimationFrame(animationId);
  }, [target, duration, isVisible]);

  const formatNumber = (num: number, suffix: string) => {
    if (suffix === 'M') {
      return (num / 1000000).toFixed(1) + suffix;
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
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (progress / 100) * circumference;

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const duration = 2000;
      const elapsed = Math.min((currentTime - startTime) / duration, 1);
      
      const easeOutCubic = 1 - Math.pow(1 - elapsed, 3);
      const currentProgress = easeOutCubic * percentage;
      
      setProgress(currentProgress);

      if (elapsed < 1) {
        animationId = requestAnimationFrame(animate);
      }
    };

    animationId = requestAnimationFrame(animate);
    
    return () => cancelAnimationFrame(animationId);
  }, [percentage, isVisible]);

  return (
    <div className="relative">
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
            <stop offset="100%" stopColor="#1e293b" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-2xl font-bold text-navy-800">
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
              <div className="text-6xl mb-6 float-slow group-hover:scale-110 transition-transform duration-500">
                {stat.icon}
              </div>
              
              {/* Animated counter */}
              <div className="mb-4 relative z-10">
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
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            {/* Service success rates */}
            <div className="text-center">
              <ProgressRing 
                percentage={96} 
                size={180} 
                strokeWidth={12} 
                isVisible={isVisible}
              />
              <h4 className="text-xl font-bold text-slate-900 mt-6 mb-2">Divorce Planning</h4>
              <p className="text-slate-600">Successful settlements achieved</p>
            </div>
            
            <div className="text-center">
              <ProgressRing 
                percentage={94} 
                size={180} 
                strokeWidth={12} 
                isVisible={isVisible}
              />
              <h4 className="text-xl font-bold text-slate-900 mt-6 mb-2">Inheritance Planning</h4>
              <p className="text-slate-600">Tax optimization success rate</p>
            </div>
            
            <div className="text-center">
              <ProgressRing 
                percentage={92} 
                size={180} 
                strokeWidth={12} 
                isVisible={isVisible}
              />
              <h4 className="text-xl font-bold text-slate-900 mt-6 mb-2">Business Sale</h4>
              <p className="text-slate-600">Optimal deal structuring</p>
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