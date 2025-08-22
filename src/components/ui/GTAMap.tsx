'use client';

import { useState } from 'react';
import Link from 'next/link';

interface CityMarker {
  name: string;
  slug: string;
  x: number; // percentage from left
  y: number; // percentage from top
  tier: number;
}

// More geographically accurate positions - zoomed in for better spacing
const cityPositions: CityMarker[] = [
  // Central Core
  { name: 'Toronto', slug: 'toronto', x: 50, y: 75, tier: 1 },
  
  // West of Toronto
  { name: 'Mississauga', slug: 'mississauga', x: 35, y: 80, tier: 1 },
  { name: 'Brampton', slug: 'brampton', x: 28, y: 55, tier: 1 },
  { name: 'Oakville', slug: 'oakville', x: 25, y: 88, tier: 2 },
  { name: 'Burlington', slug: 'burlington', x: 15, y: 92, tier: 2 },
  { name: 'Milton', slug: 'milton', x: 20, y: 70, tier: 2 },
  { name: 'Halton Hills', slug: 'halton-hills', x: 12, y: 60, tier: 4 },
  { name: 'Caledon', slug: 'caledon', x: 18, y: 40, tier: 4 },
  
  // Far West
  { name: 'Hamilton', slug: 'hamilton', x: 10, y: 90, tier: 1 },
  
  // North of Toronto
  { name: 'Vaughan', slug: 'vaughan', x: 45, y: 50, tier: 2 },
  { name: 'Richmond Hill', slug: 'richmond-hill', x: 55, y: 45, tier: 2 },
  { name: 'Markham', slug: 'markham', x: 62, y: 55, tier: 1 },
  { name: 'Aurora', slug: 'aurora', x: 50, y: 32, tier: 4 },
  { name: 'Newmarket', slug: 'newmarket', x: 55, y: 20, tier: 3 },
  { name: 'King', slug: 'king', x: 40, y: 30, tier: 4 },
  
  // Far North
  { name: 'Georgina', slug: 'georgina', x: 60, y: 8, tier: 4 },
  { name: 'Uxbridge', slug: 'uxbridge', x: 75, y: 15, tier: 4 },
  
  // East of Toronto
  { name: 'Pickering', slug: 'pickering', x: 70, y: 70, tier: 3 },
  { name: 'Ajax', slug: 'ajax', x: 78, y: 73, tier: 3 },
  { name: 'Whitby', slug: 'whitby', x: 85, y: 75, tier: 3 },
  { name: 'Oshawa', slug: 'oshawa', x: 93, y: 77, tier: 3 },
];

export default function GTAMap() {
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<string>('divorce-financial-planning');
  const [mapZoom, setMapZoom] = useState<number>(11);
  
  const services = [
    { slug: 'divorce-financial-planning', name: 'Divorce Planning', color: 'from-blue-500 to-indigo-500' },
    { slug: 'inheritance-financial-planning', name: 'Inheritance Planning', color: 'from-purple-500 to-pink-500' },
    { slug: 'business-sale-planning', name: 'Business Sale', color: 'from-emerald-500 to-teal-500' },
    { slug: 'severance-job-loss-planning', name: 'Severance Planning', color: 'from-amber-500 to-orange-500' },
  ];

  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200">
      {/* Service Selector Bar */}
      <div className="bg-white p-4 border-b border-gray-200">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Greater Toronto Area Service Map
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Click any location to explore our services
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {services.map((service) => (
              <button
                key={service.slug}
                onClick={() => setSelectedService(service.slug)}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
                  selectedService === service.slug
                    ? 'bg-blue-100 text-blue-700 border border-blue-200'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {service.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Map Container - Google Maps Style */}
      <div className="relative" style={{ height: '600px' }}>
        {/* Map Background */}
        <div className="absolute inset-0 bg-gray-100">
          {/* Base map layer */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            {/* Water bodies - Lake Ontario */}
            <rect x="0" y="0" width="100" height="100" fill="#f3f4f6" />
            
            {/* Lake Ontario */}
            <path
              d="M 0 85 Q 20 83, 40 84 T 70 85 T 100 86 L 100 100 L 0 100 Z"
              fill="#aec7e3"
              opacity="0.5"
            />
            
            {/* Smaller water bodies */}
            <ellipse cx="75" cy="10" rx="10" ry="5" fill="#aec7e3" opacity="0.3" />
            <ellipse cx="15" cy="25" rx="6" ry="4" fill="#aec7e3" opacity="0.3" />
            
            {/* Major roads/highways - Google Maps style - zoomed in */}
            {/* 401 Highway */}
            <line x1="0" y1="75" x2="100" y2="75" stroke="#fbbf24" strokeWidth="2.5" opacity="0.8" />
            <line x1="0" y1="75" x2="100" y2="75" stroke="#ffffff" strokeWidth="1.5" opacity="0.9" />
            
            {/* 400 Highway */}
            <line x1="50" y1="0" x2="50" y2="85" stroke="#fbbf24" strokeWidth="2" opacity="0.8" />
            <line x1="50" y1="0" x2="50" y2="85" stroke="#ffffff" strokeWidth="1.2" opacity="0.9" />
            
            {/* 407 Highway */}
            <path d="M 5 48 Q 50 45, 95 48" stroke="#fbbf24" strokeWidth="1.8" opacity="0.6" fill="none" />
            <path d="M 5 48 Q 50 45, 95 48" stroke="#ffffff" strokeWidth="1" opacity="0.8" fill="none" />
            
            {/* QEW */}
            <path d="M 5 92 Q 25 85, 45 80" stroke="#fbbf24" strokeWidth="2" opacity="0.8" fill="none" />
            <path d="M 5 92 Q 25 85, 45 80" stroke="#ffffff" strokeWidth="1.2" opacity="0.9" fill="none" />
            
            {/* 404/DVP */}
            <line x1="62" y1="20" x2="62" y2="78" stroke="#fbbf24" strokeWidth="1.5" opacity="0.7" />
            <line x1="62" y1="20" x2="62" y2="78" stroke="#ffffff" strokeWidth="0.9" opacity="0.9" />
            
            {/* Secondary roads grid */}
            <line x1="20" y1="40" x2="80" y2="40" stroke="#e5e7eb" strokeWidth="0.5" opacity="0.5" />
            <line x1="20" y1="50" x2="80" y2="50" stroke="#e5e7eb" strokeWidth="0.5" opacity="0.5" />
            <line x1="20" y1="60" x2="80" y2="60" stroke="#e5e7eb" strokeWidth="0.5" opacity="0.5" />
            <line x1="35" y1="30" x2="35" y2="75" stroke="#e5e7eb" strokeWidth="0.5" opacity="0.5" />
            <line x1="45" y1="30" x2="45" y2="75" stroke="#e5e7eb" strokeWidth="0.5" opacity="0.5" />
            <line x1="65" y1="30" x2="65" y2="75" stroke="#e5e7eb" strokeWidth="0.5" opacity="0.5" />
            
            {/* Parks and green spaces */}
            <rect x="42" y="58" width="8" height="6" fill="#86efac" opacity="0.3" rx="1" />
            <rect x="55" y="45" width="6" height="4" fill="#86efac" opacity="0.3" rx="1" />
            <rect x="30" y="52" width="5" height="5" fill="#86efac" opacity="0.3" rx="1" />
            <rect x="68" y="62" width="7" height="5" fill="#86efac" opacity="0.3" rx="1" />
          </svg>

          {/* Street names overlay */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute text-[11px] text-yellow-700 font-semibold" style={{ left: '48%', top: '72%' }}>401</div>
            <div className="absolute text-[11px] text-yellow-700 font-semibold" style={{ left: '48%', top: '35%' }}>400</div>
            <div className="absolute text-[11px] text-yellow-700 font-semibold" style={{ left: '70%', top: '46%' }}>407</div>
            <div className="absolute text-[11px] text-yellow-700 font-semibold" style={{ left: '60%', top: '40%' }}>404</div>
            <div className="absolute text-[11px] text-yellow-700 font-semibold" style={{ left: '18%', top: '88%' }}>QEW</div>
          </div>
        </div>

        {/* Google Maps style city markers and labels */}
        {cityPositions.map((city) => {
          const isHovered = hoveredCity === city.slug;
          const fontSize = city.tier === 1 ? '13px' : city.tier === 2 ? '12px' : city.tier === 3 ? '11px' : '10px';
          const fontWeight = city.tier === 1 ? '500' : '400';
          
          return (
            <div
              key={city.slug}
              className="absolute"
              style={{ left: `${city.x}%`, top: `${city.y}%`, transform: 'translate(-50%, -50%)' }}
            >
              {/* City label - Google Maps style */}
              <div 
                className="text-gray-700 whitespace-nowrap pointer-events-none select-none"
                style={{ 
                  fontSize: fontSize,
                  fontWeight: fontWeight,
                  fontFamily: 'Roboto, Arial, sans-serif',
                  letterSpacing: city.tier === 1 ? '0.5px' : '0px',
                  textShadow: '1px 1px 2px rgba(255,255,255,0.8), -1px -1px 2px rgba(255,255,255,0.8)'
                }}
              >
                {city.name.toUpperCase()}
              </div>
              
              {/* Clickable marker - Google Maps red pin style */}
              <Link
                href={`/${city.slug}/${selectedService}`}
                className="absolute top-4 left-1/2 transform -translate-x-1/2"
                onMouseEnter={() => setHoveredCity(city.slug)}
                onMouseLeave={() => setHoveredCity(null)}
              >
                <div className="relative">
                  {/* Google Maps style marker */}
                  <svg 
                    width={isHovered ? "28" : "24"} 
                    height={isHovered ? "40" : "35"} 
                    viewBox="0 0 24 35" 
                    className="transition-all duration-200 drop-shadow-md"
                  >
                    <path 
                      d="M12 0C5.373 0 0 5.373 0 12c0 9 12 23 12 23s12-14 12-23c0-6.627-5.373-12-12-12z" 
                      fill="#EA4335"
                    />
                    <circle cx="12" cy="12" r="4" fill="white" />
                  </svg>
                  
                  {/* Hover info window - Google Maps style */}
                  {isHovered && (
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-50">
                      <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-3 whitespace-nowrap">
                        <div className="font-semibold text-gray-900 text-sm">{city.name}</div>
                        <div className="text-xs text-gray-600 mt-1">Click for services</div>
                        <div className="text-xs text-blue-600 mt-1">{services.find(s => s.slug === selectedService)?.name}</div>
                        {/* Arrow pointing down */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 top-full">
                          <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-white"></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </Link>
            </div>
          );
        })}


        {/* Street View Pegman */}
        <div className="absolute right-4 bottom-20 bg-white rounded-lg shadow-md p-2 cursor-pointer hover:bg-gray-100">
          <svg className="w-6 h-6 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
        </div>



        {/* Google logo placeholder */}
        <div className="absolute left-4 bottom-12 bg-white px-2 py-1 rounded shadow-sm">
          <span className="text-xs text-gray-500 font-medium">Maps</span>
        </div>

        {/* Headquarters special marker */}
        <div 
          className="absolute"
          style={{ left: '35%', top: '80%', transform: 'translate(-50%, -50%)' }}
        >
          <div className="relative">
            {/* Special HQ marker */}
            <svg width="32" height="45" viewBox="0 0 24 35" className="drop-shadow-lg">
              <path 
                d="M12 0C5.373 0 0 5.373 0 12c0 9 12 23 12 23s12-14 12-23c0-6.627-5.373-12-12-12z" 
                fill="#1a73e8"
              />
              <circle cx="12" cy="12" r="5" fill="white" />
              <text x="12" y="16" textAnchor="middle" fontSize="10" fill="#1a73e8" fontWeight="bold">HQ</text>
            </svg>
            
            {/* HQ Label */}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 bg-blue-600 text-white text-xs px-2 py-1 rounded whitespace-nowrap font-medium">
              Main Office
            </div>
          </div>
        </div>
      </div>

      {/* Bottom info bar */}
      <div className="bg-gray-50 border-t border-gray-200 px-4 py-3">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-6 text-gray-600">
            <span>21 locations</span>
            <span>•</span>
            <span>4 service types</span>
            <span>•</span>
            <span>Serving 6.4M+ residents</span>
          </div>
          <div className="text-gray-500">
            © Map data
          </div>
        </div>
      </div>
    </div>
  );
}