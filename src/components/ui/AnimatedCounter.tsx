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

  // Start animation after component mounts and delay
  useEffect(() => {
    if (!isMounted) return;

    let animationId: ReturnType<typeof requestAnimationFrame> | null = null;
    let startTime: number | null = null;

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

    // Start animation after the specified delay
    const startTimer = setTimeout(() => {
      animationId = requestAnimationFrame(animate);
    }, startDelay);
    
    return () => {
      clearTimeout(startTimer);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
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
      // Display millions properly (e.g., "$2.0M+")
      return '$' + (num / 1000).toFixed(1) + 'M+';
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