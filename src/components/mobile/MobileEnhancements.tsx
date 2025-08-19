'use client';

import { useState, useEffect, useRef } from 'react';

interface TouchGestureProps {
  children: React.ReactNode;
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  onSwipeUp?: () => void;
  onSwipeDown?: () => void;
  className?: string;
}

function TouchGesture({ 
  children, 
  onSwipeLeft, 
  onSwipeRight, 
  onSwipeUp, 
  onSwipeDown, 
  className = '' 
}: TouchGestureProps) {
  const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(null);
  const [touchEnd, setTouchEnd] = useState<{ x: number; y: number } | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart({
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY
    });
    setIsDragging(true);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!touchStart) return;
    
    setTouchEnd({
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY
    });
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distanceX = touchStart.x - touchEnd.x;
    const distanceY = touchStart.y - touchEnd.y;
    const isLeftSwipe = distanceX > minSwipeDistance;
    const isRightSwipe = distanceX < -minSwipeDistance;
    const isUpSwipe = distanceY > minSwipeDistance;
    const isDownSwipe = distanceY < -minSwipeDistance;

    if (isLeftSwipe && onSwipeLeft) {
      onSwipeLeft();
    }
    if (isRightSwipe && onSwipeRight) {
      onSwipeRight();
    }
    if (isUpSwipe && onSwipeUp) {
      onSwipeUp();
    }
    if (isDownSwipe && onSwipeDown) {
      onSwipeDown();
    }
    
    setIsDragging(false);
  };

  return (
    <div
      className={`${className} ${isDragging ? 'select-none' : ''}`}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {children}
    </div>
  );
}

interface SwipeableCardProps {
  children: React.ReactNode;
  index: number;
  onSwipe?: (direction: 'left' | 'right', index: number) => void;
}

function SwipeableCard({ children, index, onSwipe }: SwipeableCardProps) {
  const [swipeOffset, setSwipeOffset] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleSwipeLeft = () => {
    if (onSwipe) {
      setIsAnimating(true);
      setSwipeOffset(-100);
      setTimeout(() => {
        onSwipe('left', index);
        setSwipeOffset(0);
        setIsAnimating(false);
      }, 300);
    }
  };

  const handleSwipeRight = () => {
    if (onSwipe) {
      setIsAnimating(true);
      setSwipeOffset(100);
      setTimeout(() => {
        onSwipe('right', index);
        setSwipeOffset(0);
        setIsAnimating(false);
      }, 300);
    }
  };

  return (
    <TouchGesture
      onSwipeLeft={handleSwipeLeft}
      onSwipeRight={handleSwipeRight}
      className="w-full"
    >
      <div
        ref={cardRef}
        className={`transform transition-transform duration-300 ${isAnimating ? 'ease-out' : 'ease-in-out'}`}
        style={{ transform: `translateX(${swipeOffset}%)` }}
      >
        {children}
      </div>
    </TouchGesture>
  );
}

interface MobileServicesCarouselProps {
  services: Array<{
    title: string;
    description: string;
    icon: string;
    color: string;
  }>;
}

function MobileServicesCarousel({ services }: MobileServicesCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % services.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [services.length, isAutoPlay]);

  const handleSwipe = (direction: 'left' | 'right') => {
    setIsAutoPlay(false);
    if (direction === 'left') {
      setCurrentIndex(prev => (prev + 1) % services.length);
    } else {
      setCurrentIndex(prev => (prev - 1 + services.length) % services.length);
    }
    
    // Re-enable autoplay after 10 seconds
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  return (
    <div className="relative overflow-hidden">
      <div className="relative h-80">
        {services.map((service, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-500 ${
              index === currentIndex 
                ? 'opacity-100 transform translate-x-0 scale-100' 
                : index < currentIndex
                ? 'opacity-0 transform -translate-x-full scale-95'
                : 'opacity-0 transform translate-x-full scale-95'
            }`}
          >
            <SwipeableCard index={index} onSwipe={handleSwipe}>
              <div className={`h-full bg-gradient-to-br ${service.color} rounded-3xl p-8 text-white relative overflow-hidden`}>
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 right-4 text-6xl opacity-20">{service.icon}</div>
                  <div className="absolute bottom-4 left-4 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                </div>
                
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-2xl font-display font-bold mb-4">{service.title}</h3>
                    <p className="text-white/90 leading-relaxed">{service.description}</p>
                  </div>
                  
                  <div className="flex items-center justify-between mt-6">
                    <button className="bg-white/20 backdrop-blur-xl border border-white/30 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-200">
                      Learn More
                    </button>
                    <div className="text-white/60 text-sm">
                      Swipe for next →
                    </div>
                  </div>
                </div>
              </div>
            </SwipeableCard>
          </div>
        ))}
      </div>
      
      {/* Indicators */}
      <div className="flex justify-center space-x-2 mt-6">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              setIsAutoPlay(false);
              setTimeout(() => setIsAutoPlay(true), 10000);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-teal-600 scale-125' 
                : 'bg-slate-300 hover:bg-slate-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

interface PullToRefreshProps {
  onRefresh: () => Promise<void>;
  children: React.ReactNode;
}

function PullToRefresh({ onRefresh, children }: PullToRefreshProps) {
  const [pullDistance, setPullDistance] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [startY, setStartY] = useState(0);
  
  const maxPullDistance = 100;
  const triggerDistance = 70;

  const handleTouchStart = (e: React.TouchEvent) => {
    if (window.scrollY === 0) {
      setStartY(e.touches[0].clientY);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (window.scrollY > 0 || isRefreshing) return;
    
    const currentY = e.touches[0].clientY;
    const distance = Math.max(0, Math.min(maxPullDistance, currentY - startY));
    setPullDistance(distance);
  };

  const handleTouchEnd = async () => {
    if (pullDistance >= triggerDistance && !isRefreshing) {
      setIsRefreshing(true);
      try {
        await onRefresh();
      } finally {
        setIsRefreshing(false);
      }
    }
    setPullDistance(0);
  };

  return (
    <div
      className="relative"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Pull indicator */}
      <div 
        className={`fixed top-0 left-0 right-0 z-40 bg-gradient-to-r from-teal-600 to-blue-600 text-white text-center py-4 transition-transform duration-200 ${
          pullDistance > 0 ? 'transform translate-y-0' : 'transform -translate-y-full'
        }`}
        style={{ transform: `translateY(${Math.min(0, pullDistance - maxPullDistance)}px)` }}
      >
        <div className="flex items-center justify-center space-x-2">
          {isRefreshing ? (
            <>
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              <span>Refreshing...</span>
            </>
          ) : pullDistance >= triggerDistance ? (
            <>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
              </svg>
              <span>Release to refresh</span>
            </>
          ) : (
            <>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              <span>Pull to refresh</span>
            </>
          )}
        </div>
      </div>
      
      <div style={{ transform: `translateY(${pullDistance * 0.5}px)` }}>
        {children}
      </div>
    </div>
  );
}

export default function MobileEnhancements() {
  const services = [
    {
      title: 'Divorce Planning',
      description: 'Navigate financial complexities during divorce with expert guidance on asset division and tax implications.',
      icon: '⚖️',
      color: 'from-purple-600 to-pink-600'
    },
    {
      title: 'Inheritance Planning',
      description: 'Maximize what your beneficiaries receive through strategic tax planning and estate optimization.',
      icon: '🏛️',
      color: 'from-green-600 to-teal-600'
    },
    {
      title: 'Business Sale Planning',
      description: 'Optimize your business exit strategy with comprehensive financial planning and tax strategies.',
      icon: '🏢',
      color: 'from-blue-600 to-indigo-600'
    },
    {
      title: 'Job Transition',
      description: 'Secure your financial future during career changes with severance optimization and planning.',
      icon: '💼',
      color: 'from-orange-600 to-red-600'
    }
  ];

  const handleRefresh = async () => {
    // Simulate refresh action
    await new Promise(resolve => setTimeout(resolve, 2000));
  };

  return (
    <div className="lg:hidden"> {/* Only show on mobile */}
      <PullToRefresh onRefresh={handleRefresh}>
        <section className="py-16 px-4">
          <div className="max-w-sm mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">
                Swipe to Explore
              </h2>
              <p className="text-slate-600">
                Touch-friendly navigation designed for mobile
              </p>
            </div>
            
            <MobileServicesCarousel services={services} />
            
            <div className="mt-8 text-center">
              <div className="inline-flex items-center space-x-2 text-sm text-slate-500">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                </svg>
                <span>Swipe left/right to navigate</span>
              </div>
            </div>
          </div>
        </section>
      </PullToRefresh>
    </div>
  );
}

// Export individual components for use elsewhere
export { TouchGesture, SwipeableCard, MobileServicesCarousel, PullToRefresh };