'use client';

import { useState } from 'react';

interface ContactFormProps {
  service?: string;
  city?: string;
}

export default function ContactForm({ service, city }: ContactFormProps) {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: service || '',
          city: city || '',
          message: '',
          urgency: 'normal'
        });
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

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <div className="text-green-600 text-4xl mb-4">✓</div>
        <h3 className="text-lg font-medium text-green-900 mb-2">
          Thank You for Reaching Out!
        </h3>
        <p className="text-green-700">
          We'll get back to you within 24 hours to schedule your free consultation.
          For urgent matters, please call us directly at <a href="tel:+16475550123" className="underline">647-555-0123</a>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Free Consultation Request
        </h3>
        <p className="text-gray-600">
          Get expert financial guidance for your situation. No obligation, completely confidential.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            suppressHydrationWarning
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            suppressHydrationWarning
          />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          suppressHydrationWarning
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
            Service Needed
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            suppressHydrationWarning
          >
            <option value="">Select a service</option>
            <optgroup label="Our Specializations">
              <option value="divorce-financial-planning">Divorce Financial Planning</option>
              <option value="inheritance-financial-planning">Inheritance Planning</option>
              <option value="business-sale-planning">Business Sale Planning</option>
              <option value="severance-job-loss-planning">Severance & Job Loss</option>
            </optgroup>
            <optgroup label="Other Financial Planning">
              <option value="retirement-planning">Retirement Planning</option>
              <option value="investment-management">Investment Management</option>
              <option value="tax-planning">Tax Planning & Optimization</option>
              <option value="estate-planning">Estate Planning</option>
              <option value="insurance-planning">Insurance Planning</option>
              <option value="sudden-wealth">Sudden Wealth Management</option>
              <option value="education-planning">Education Planning</option>
              <option value="general-consultation">General Financial Consultation</option>
              <option value="other">Other Financial Situation</option>
            </optgroup>
          </select>
        </div>

        <div>
          <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-1">
            Timeline
          </label>
          <select
            id="urgency"
            name="urgency"
            value={formData.urgency}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            suppressHydrationWarning
          >
            <option value="urgent">Urgent (within 1 week)</option>
            <option value="soon">Soon (within 2 weeks)</option>
            <option value="normal">Normal (within 1 month)</option>
            <option value="planning">Planning ahead</option>
          </select>
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Tell us about your situation
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Brief description of your situation and what you're looking for help with..."
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 text-white font-medium py-3 px-4 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        suppressHydrationWarning
      >
        {isSubmitting ? 'Sending...' : 'Request Free Consultation'}
      </button>

      <p className="text-xs text-gray-500 mt-3 text-center">
        Your information is completely confidential and will never be shared.
      </p>
    </form>
  );
}