'use client';

import { useState, useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  duration?: number;
  className?: string;
  startDelay?: number;
  debug?: boolean;
}

export default function AnimatedCounter({ 
  target, 
  suffix = '', 
  duration = 2000, 
  className = '',
  startDelay = 0,
  debug = false
}: AnimatedCounterProps) {
  const [currentValue, setCurrentValue] = useState(0);
  const [animationState, setAnimationState] = useState<'pending' | 'running' | 'complete'>('pending');
  const [error, setError] = useState<string | null>(null);
  const animationTimeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const intervalRef = useRef<ReturnType<typeof setInterval>>();
  const startTimeRef = useRef<number>(0);

  const formatNumber = (num: number, suffix: string) => {
    if (suffix === 'K+') {
      // Display as "10K+" for thousands
      if (num >= 1000) {
        return (num / 1000).toFixed(0) + 'K+';
      }
      return num.toString() + '+';
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

  useEffect(() => {
    console.log(`[AnimatedCounter] Component mounted. Target: ${target}, Suffix: ${suffix}, Delay: ${startDelay}ms`);
    
    // Clear any existing animations
    if (animationTimeoutRef.current) {
      clearTimeout(animationTimeoutRef.current);
    }
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // Start animation after delay
    animationTimeoutRef.current = setTimeout(() => {
      console.log(`[AnimatedCounter] Starting animation for target: ${target}`);
      setAnimationState('running');
      startTimeRef.current = Date.now();
      
      // Use setInterval as a more reliable approach
      const steps = 60; // 60 updates for smooth animation
      const stepDuration = duration / steps;
      let step = 0;
      
      intervalRef.current = setInterval(() => {
        step++;
        const progress = Math.min(step / steps, 1);
        
        // Use easeOutCubic for smooth animation
        const easeOutCubic = 1 - Math.pow(1 - progress, 3);
        const newValue = Math.floor(target * easeOutCubic);
        
        if (debug) {
          console.log(`[AnimatedCounter] Progress: ${(progress * 100).toFixed(1)}%, Value: ${newValue}/${target}`);
        }
        
        setCurrentValue(newValue);
        
        if (progress >= 1) {
          // Animation complete
          setCurrentValue(target);
          setAnimationState('complete');
          console.log(`[AnimatedCounter] Animation complete for target: ${target}`);
          
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
          }
        }
      }, stepDuration);
      
    }, startDelay);

    // Cleanup function
    return () => {
      console.log(`[AnimatedCounter] Cleaning up for target: ${target}`);
      if (animationTimeoutRef.current) {
        clearTimeout(animationTimeoutRef.current);
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [target, duration, startDelay, suffix, debug]);

  // Fallback: If animation hasn't started after delay + 500ms, show target value
  useEffect(() => {
    const fallbackTimeout = setTimeout(() => {
      if (animationState === 'pending') {
        console.warn(`[AnimatedCounter] Animation failed to start, showing target value: ${target}`);
        setError('Animation failed to start');
        setCurrentValue(target);
        setAnimationState('complete');
      }
    }, startDelay + 500);

    return () => clearTimeout(fallbackTimeout);
  }, [target, startDelay, animationState]);

  // Visual debug indicator
  const getBorderColor = () => {
    switch (animationState) {
      case 'pending': return 'border-yellow-400';
      case 'running': return 'border-green-400';
      case 'complete': return 'border-blue-400';
    }
  };

  return (
    <span 
      className={`${className} ${debug ? `border-2 ${getBorderColor()} px-1` : ''}`}
      title={debug ? `State: ${animationState}, Error: ${error || 'none'}` : undefined}
    >
      {formatNumber(currentValue, suffix)}
      {debug && (
        <span className="text-xs ml-2 text-gray-500">
          ({animationState})
        </span>
      )}
    </span>
  );
}