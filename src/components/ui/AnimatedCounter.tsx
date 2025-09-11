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
    // 1. Immediate trigger for production
    const immediateTimer = setTimeout(triggerAnimation, 50);
    
    // 2. Normal delay-based trigger
    const delayTimer = setTimeout(triggerAnimation, Math.max(200, startDelay));
    
    // 3. Final fallback to ensure animation always triggers
    const fallbackTimer = setTimeout(triggerAnimation, Math.max(800, startDelay + 300));
    
    // 4. Nuclear option - if everything fails, just set the target value
    const nuclearTimer = setTimeout(() => {
      if (!hasAnimated) {
        setCount(target);
        setHasAnimated(true);
      }
    }, 2000);
    
    return () => {
      clearTimeout(immediateTimer);
      clearTimeout(delayTimer);
      clearTimeout(fallbackTimer);
      clearTimeout(nuclearTimer);
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

  // Emergency fallback: if animation completely fails, show target value
  const displayValue = isMounted && count === 0 && hasAnimated ? target : count;

  return (
    <div ref={counterRef} className={className}>
      {formatNumber(displayValue, suffix)}
    </div>
  );
}