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
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  // Handle hydration
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Reliable animation triggering with multiple fallbacks
  useEffect(() => {
    if (!isMounted || hasAnimated) return;

    let animationId: ReturnType<typeof requestAnimationFrame> | null = null;
    let startTime: number | null = null;

    const triggerAnimation = () => {
      if (hasAnimated) return;
      
      setHasAnimated(true);
      
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

      animationId = requestAnimationFrame(animate);
    };

    // Multiple fallback strategies for reliable animation
    // 1. Normal delay-based trigger
    const delayTimer = setTimeout(triggerAnimation, startDelay);
    
    // 2. Immediate fallback for production issues
    const immediateTimer = setTimeout(triggerAnimation, Math.max(100, startDelay / 2));
    
    // 3. Final fallback to ensure animation always triggers
    const fallbackTimer = setTimeout(triggerAnimation, Math.max(1000, startDelay + 500));
    
    return () => {
      clearTimeout(delayTimer);
      clearTimeout(immediateTimer);
      clearTimeout(fallbackTimer);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [target, duration, startDelay, isMounted, hasAnimated]);

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