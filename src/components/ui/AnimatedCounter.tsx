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

  // NUCLEAR OPTION: Skip animation entirely - just show the target immediately
  useEffect(() => {
    if (!isMounted) return;
    
    // Just set the target value immediately - no animation at all
    setCount(target);
    
    // Backup in case state doesn't update
    setTimeout(() => setCount(target), 0);
    setTimeout(() => setCount(target), 10);
    setTimeout(() => setCount(target), 100);
    
  }, [target, isMounted]);

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
      DEBUG: target={target}, count={count}, formatted={formatNumber(count, suffix)}
    </div>
  );
}