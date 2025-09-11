'use client';

import { useState, useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  duration?: number;
  className?: string;
  startDelay?: number;
}

export default function AnimatedCounter({ 
  target, 
  suffix = '', 
  duration = 2000, 
  className = '',
  startDelay = 0 
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  // Handle hydration
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Ultra-simple, bulletproof animation
  useEffect(() => {
    if (!isMounted) return;

    // Start immediately with multiple aggressive fallbacks
    let hasStarted = false;
    
    const startAnimation = () => {
      if (hasStarted) return;
      hasStarted = true;
      
      let animationId: number;
      let startTime: number;
      
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentCount = Math.floor(easeOut * target);
        
        setCount(currentCount);
        
        if (progress < 1) {
          animationId = requestAnimationFrame(animate);
        }
      };
      
      animationId = requestAnimationFrame(animate);
      
      return () => {
        if (animationId) cancelAnimationFrame(animationId);
      };
    };

    // Multiple immediate triggers
    startAnimation();
    
    const timer1 = setTimeout(startAnimation, 10);
    const timer2 = setTimeout(startAnimation, 100);
    const timer3 = setTimeout(startAnimation, Math.max(200, startDelay));
    
    // Absolute fallback - just show the number
    const emergencyTimer = setTimeout(() => {
      setCount(target);
    }, 1000);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(emergencyTimer);
    };
  }, [target, duration, startDelay, isMounted]);

  const formatNumber = (num: number, suffix: string) => {
    if (suffix === 'K+') {
      // Display full number with commas for readability (e.g., "10,000+")
      return num.toLocaleString() + '+';
    }
    if (suffix === 'B+') {
      // Display billions properly (e.g., "$2.0B+")
      return '$' + (num / 1000).toFixed(1) + 'B+';
    }
    if (suffix === 'M+') {
      // Display millions properly (e.g., "$500M+")
      return '$' + num.toString() + 'M+';
    }
    // For numbers without special suffixes, add commas for readability
    if (num >= 1000) {
      return num.toLocaleString() + suffix;
    }
    return num.toString() + suffix;
  };

  return (
    <div ref={counterRef} className={className}>
      {formatNumber(count, suffix)}
    </div>
  );
}