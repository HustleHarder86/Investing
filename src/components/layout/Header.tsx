'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { services } from '@/lib/services';
import ServiceIcon from '@/components/ui/ServiceIcon';

interface HeaderProps {
  currentPage?: string;
}

export default function Header({ currentPage = '' }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setIsMobileMenuOpen(false);
      setIsServicesOpen(false);
    };

    if (isMobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Modern Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200/50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="group flex items-center" onClick={closeMobileMenu}>
                <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-display font-bold text-slate-900">Life Money</div>
                  <div className="text-sm text-slate-600 -mt-1 font-medium">Financial Advisory</div>
                </div>
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              {/* Services Mega Menu */}
              <div className="relative group">
                <button 
                  className={`px-5 py-3 rounded-xl font-medium flex items-center transition-all duration-200 ${
                    currentPage === 'services' 
                      ? 'text-teal-600 bg-teal-50' 
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  Services
                  <svg className="ml-2 w-4 h-4 transition-transform group-hover:rotate-180" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                
                {/* Mega Menu Dropdown */}
                <div className="absolute top-full left-0 mt-2 w-96 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-200/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-lg font-display font-semibold text-slate-900 mb-2">Our Specializations</h3>
                      <p className="text-sm text-slate-600">Expert guidance for major transitions + comprehensive planning</p>
                    </div>
                    <div className="grid grid-cols-1 gap-3">
                      {services.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          className="flex items-center p-3 rounded-xl hover:bg-slate-50 transition-all duration-200 group/item"
                        >
                          <div className="w-8 h-8 bg-gradient-to-r from-teal-500/20 to-blue-500/20 rounded-lg flex items-center justify-center mr-3">
                            <ServiceIcon 
                              serviceIcon={service.icon} 
                              size="sm" 
                              className={
                                service.icon === 'divorce' ? 'text-teal-600' :
                                service.icon === 'inheritance' ? 'text-purple-600' :
                                service.icon === 'business' ? 'text-emerald-600' :
                                'text-amber-600'
                              } 
                            />
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-slate-900 group-hover/item:text-teal-600 transition-colors">
                              {service.shortName}
                            </div>
                            <div className="text-xs text-slate-500 mt-1">
                              {service.description.slice(0, 60)}...
                            </div>
                          </div>
                          <svg className="w-4 h-4 text-slate-400 group-hover/item:text-teal-600 transition-all duration-200 transform group-hover/item:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                          </svg>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-slate-200">
                      <Link 
                        href="/services" 
                        className="flex items-center justify-center w-full py-2 px-4 bg-gradient-to-r from-teal-600 to-blue-600 rounded-xl text-white font-medium hover:scale-105 transition-all duration-200"
                      >
                        View All Services
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
              <Link 
                href="/locations" 
                className={`px-5 py-3 rounded-xl font-medium transition-all duration-200 ${
                  currentPage === 'locations' 
                    ? 'text-teal-600 bg-teal-50' 
                    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                Locations  
              </Link>
              <Link 
                href="/blog" 
                className={`px-5 py-3 rounded-xl font-medium transition-all duration-200 ${
                  currentPage === 'blog' 
                    ? 'text-teal-600 bg-teal-50' 
                    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                Blog
              </Link>
              <Link 
                href="/calculators" 
                className={`px-5 py-3 rounded-xl font-medium transition-all duration-200 ${
                  currentPage === 'calculators' 
                    ? 'text-teal-600 bg-teal-50' 
                    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                Calculators
              </Link>
              <Link 
                href="/about" 
                className={`px-5 py-3 rounded-xl font-medium transition-all duration-200 ${
                  currentPage === 'about' 
                    ? 'text-teal-600 bg-teal-50' 
                    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className={`px-5 py-3 rounded-xl font-medium transition-all duration-200 ${
                  currentPage === 'contact' 
                    ? 'text-teal-600 bg-teal-50' 
                    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                Contact
              </Link>
            </div>
            
            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              <Link 
                href="/contact" 
                className="hidden sm:inline-flex bg-gradient-to-r from-teal-600 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold text-sm hover:shadow-lg transition-all duration-200"
              >
                Free Consultation
              </Link>
              
              {/* Mobile Menu Button */}
              <button 
                onClick={toggleMobileMenu}
                className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-all duration-200 relative z-50"
                aria-label="Toggle mobile menu"
              >
                <svg 
                  className={`w-6 h-6 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-teal-500 to-blue-500 transition-all duration-300" style={{width: '0%'}} id="scroll-progress"></div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={closeMobileMenu}
          />
          
          {/* Menu Panel */}
          <div className="absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white/95 backdrop-blur-xl border-l border-slate-200/50 shadow-2xl animate-in slide-in-from-right duration-300">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-slate-200/50">
                <div className="text-lg font-display font-bold text-slate-900">Menu</div>
                <button 
                  onClick={closeMobileMenu}
                  className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-all duration-200"
                  aria-label="Close menu"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {/* Navigation Links */}
              <div className="flex-1 overflow-y-auto p-6">
                <div className="space-y-2">
                  {/* Services Section */}
                  <div className="mb-6">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setIsServicesOpen(!isServicesOpen);
                      }}
                      className="flex items-center justify-between w-full p-3 rounded-xl text-slate-700 hover:bg-slate-100 active:bg-slate-200 transition-all duration-200 font-medium touch-manipulation"
                      aria-expanded={isServicesOpen}
                      aria-controls="services-dropdown"
                    >
                      <span>Services</span>
                      <svg 
                        className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                    
                    <div 
                      id="services-dropdown"
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isServicesOpen 
                          ? 'max-h-96 opacity-100' 
                          : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="ml-4 mt-2 space-y-2 pb-2">
                        {services.map((service) => (
                          <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            onClick={closeMobileMenu}
                            className="flex items-center p-3 rounded-xl hover:bg-slate-50 active:bg-slate-100 transition-all duration-200 group touch-manipulation"
                          >
                            <div className="w-6 h-6 bg-gradient-to-r from-teal-500/20 to-blue-500/20 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                              <ServiceIcon 
                                serviceIcon={service.icon} 
                                size="xs" 
                                className={
                                  service.icon === 'divorce' ? 'text-teal-600' :
                                  service.icon === 'inheritance' ? 'text-purple-600' :
                                  service.icon === 'business' ? 'text-emerald-600' :
                                  'text-amber-600'
                                } 
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="font-medium text-slate-900 group-hover:text-teal-600 transition-colors text-sm">
                                {service.shortName}
                              </div>
                            </div>
                          </Link>
                        ))}
                        <Link
                          href="/services"
                          onClick={closeMobileMenu}
                          className="flex items-center justify-center w-full py-3 px-4 bg-gradient-to-r from-teal-600 to-blue-600 rounded-xl text-white font-medium mt-3 hover:shadow-lg active:scale-95 transition-all duration-200 touch-manipulation"
                        >
                          View All Services
                        </Link>
                      </div>
                    </div>
                  </div>
                  
                  {/* Main Navigation Links */}
                  <Link 
                    href="/locations" 
                    onClick={closeMobileMenu}
                    className={`block p-3 rounded-xl font-medium transition-all duration-200 ${
                      currentPage === 'locations' 
                        ? 'text-teal-600 bg-teal-50' 
                        : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    Locations
                  </Link>
                  <Link 
                    href="/blog" 
                    onClick={closeMobileMenu}
                    className={`block p-3 rounded-xl font-medium transition-all duration-200 ${
                      currentPage === 'blog' 
                        ? 'text-teal-600 bg-teal-50' 
                        : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    Blog
                  </Link>
                  <Link 
                    href="/calculators" 
                    onClick={closeMobileMenu}
                    className={`block p-3 rounded-xl font-medium transition-all duration-200 ${
                      currentPage === 'calculators' 
                        ? 'text-teal-600 bg-teal-50' 
                        : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    Calculators
                  </Link>
                  <Link 
                    href="/about" 
                    onClick={closeMobileMenu}
                    className={`block p-3 rounded-xl font-medium transition-all duration-200 ${
                      currentPage === 'about' 
                        ? 'text-teal-600 bg-teal-50' 
                        : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    About
                  </Link>
                  <Link 
                    href="/contact" 
                    onClick={closeMobileMenu}
                    className={`block p-3 rounded-xl font-medium transition-all duration-200 ${
                      currentPage === 'contact' 
                        ? 'text-teal-600 bg-teal-50' 
                        : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    Contact
                  </Link>
                </div>
              </div>
              
              {/* CTA Button */}
              <div className="p-6 border-t border-slate-200/50">
                <Link 
                  href="/contact" 
                  onClick={closeMobileMenu}
                  className="flex items-center justify-center w-full bg-gradient-to-r from-teal-600 to-blue-600 text-white px-6 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-200"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}