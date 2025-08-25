'use client';

import { useState, useRef, useEffect } from 'react';

interface MobileContactFormProps {
  service?: string;
  city?: string;
}

export default function MobileContactForm({ service, city }: MobileContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: service || '',
    city: city || '',
    message: '',
    urgency: 'normal'
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  
  const formRef = useRef<HTMLDivElement>(null);
  const steps = [
    { title: 'Personal Info', fields: ['name', 'phone', 'email'] },
    { title: 'Service Details', fields: ['service', 'urgency'] },
    { title: 'Tell Us More', fields: ['message'] }
  ];

  // Auto-expand on mobile focus
  useEffect(() => {
    const handleFocus = () => setIsExpanded(true);
    const handleBlur = () => {
      setTimeout(() => setIsExpanded(false), 100);
    };

    const inputs = formRef.current?.querySelectorAll('input, textarea, select');
    inputs?.forEach(input => {
      input.addEventListener('focus', handleFocus);
      input.addEventListener('blur', handleBlur);
    });

    return () => {
      inputs?.forEach(input => {
        input.removeEventListener('focus', handleFocus);
        input.removeEventListener('blur', handleBlur);
      });
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        // Haptic feedback on mobile
        if ('vibrate' in navigator) {
          navigator.vibrate([100, 50, 100]);
        }
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  // Touch navigation
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart) return;
    
    const touchEnd = e.changedTouches[0].clientX;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (Math.abs(distance) > minSwipeDistance) {
      if (distance > 0 && currentStep < steps.length - 1) {
        nextStep();
      } else if (distance < 0 && currentStep > 0) {
        prevStep();
      }
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center m-4">
        <div className="text-green-600 text-5xl mb-4">✓</div>
        <h3 className="text-xl font-display font-bold text-green-900 mb-2">
          Thank You!
        </h3>
        <p className="text-green-700 mb-4">
          We'll get back to you within 24 hours to schedule your free consultation.
        </p>
        <a 
          href="#consultation" 
          className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors duration-200"
        >
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          Call Now: Contact via form
        </a>
      </div>
    );
  }

  return (
    <div 
      ref={formRef}
      className={`lg:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-slate-200/50 shadow-2xl transition-all duration-500 transform z-40 ${
        isExpanded ? 'h-screen' : 'h-auto'
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-slate-200/50">
        <div>
          <h3 className="text-lg font-display font-bold text-slate-900">
            Free Consultation
          </h3>
          <p className="text-sm text-slate-600">
            Step {currentStep + 1} of {steps.length}: {steps[currentStep].title}
          </p>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:bg-slate-200 transition-colors duration-200"
        >
          <svg 
            className={`w-5 h-5 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {/* Progress Bar */}
      <div className="px-4 py-2">
        <div className="flex space-x-2">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full flex-1 transition-all duration-300 ${
                index <= currentStep ? 'bg-gradient-to-r from-teal-600 to-blue-600' : 'bg-slate-200'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="p-4">
        <div
          className="overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-300 ease-out"
            style={{ transform: `translateX(-${currentStep * 100}%)` }}
          >
            {/* Step 1: Personal Info */}
            <div className="w-full flex-shrink-0 space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent text-lg"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent text-lg"
                  placeholder="(647) 555-0123"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent text-lg"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            {/* Step 2: Service Details */}
            <div className="w-full flex-shrink-0 space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Service Needed
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent text-lg"
                >
                  <option value="">Select a service</option>
                  <option value="divorce-financial-planning">Divorce Financial Planning</option>
                  <option value="inheritance-financial-planning">Inheritance Planning</option>
                  <option value="business-sale-planning">Business Sale Planning</option>
                  <option value="severance-job-loss-planning">Severance & Job Loss</option>
                  <option value="general-consultation">General Consultation</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Timeline
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { value: 'urgent', label: 'Urgent', subtitle: 'Within 1 week' },
                    { value: 'soon', label: 'Soon', subtitle: 'Within 2 weeks' },
                    { value: 'normal', label: 'Normal', subtitle: 'Within 1 month' },
                    { value: 'planning', label: 'Planning', subtitle: 'Future planning' }
                  ].map(option => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, urgency: option.value }))}
                      className={`p-3 rounded-xl border-2 text-left transition-all duration-200 ${
                        formData.urgency === option.value
                          ? 'border-teal-500 bg-teal-50 text-teal-700'
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className="font-medium">{option.label}</div>
                      <div className="text-xs text-slate-500">{option.subtitle}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 3: Message */}
            <div className="w-full flex-shrink-0 space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Tell us about your situation
                </label>
                <textarea
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Brief description of your situation and what you're looking for help with..."
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent text-lg resize-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-200">
          <button
            type="button"
            onClick={prevStep}
            disabled={currentStep === 0}
            className="flex items-center space-x-2 px-4 py-2 text-slate-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>Back</span>
          </button>

          {currentStep === steps.length - 1 ? (
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-gradient-to-r from-teal-600 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Sending...</span>
                </>
              ) : (
                <span>Submit Request</span>
              )}
            </button>
          ) : (
            <button
              type="button"
              onClick={nextStep}
              className="flex items-center space-x-2 bg-gradient-to-r from-teal-600 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200"
            >
              <span>Next</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          )}
        </div>

        {/* Swipe hint */}
        <div className="text-center mt-4">
          <p className="text-xs text-slate-500">
            💡 Swipe left/right to navigate steps
          </p>
        </div>
      </form>
    </div>
  );
}