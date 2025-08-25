import { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock, MessageCircle, Shield } from 'lucide-react';
import ContactForm from '@/components/forms/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Life Money | Schedule Your Free Financial Consultation',
  description: 'Get in touch with Life Money\'s certified financial planners. Schedule a free consultation for divorce, inheritance, business sale, or severance planning across the GTA.',
  keywords: 'contact Life Money, financial planning consultation GTA, free financial advisor meeting Toronto',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Get In Touch</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Ready to take control of your financial future? Our certified financial planners 
              are here to guide you through life's most important financial transitions.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Contact Methods and Form Grid */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            
            {/* Contact Details */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">
                      <a href="tel:+16475550123" className="hover:text-blue-600 transition-colors">
                        (647) 555-0123
                      </a>
                    </p>
                    <p className="text-sm text-gray-500">Mon-Fri: 8:00 AM - 6:00 PM</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@lifemoney.ca" className="hover:text-blue-600 transition-colors">
                        info@lifemoney.ca
                      </a>
                    </p>
                    <p className="text-sm text-gray-500">We respond within 4 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Service Area</h3>
                    <p className="text-gray-600">Greater Toronto Area</p>
                    <p className="text-sm text-gray-500">Serving all 21 GTA municipalities</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Office Hours</h3>
                    <div className="text-gray-600 text-sm space-y-1">
                      <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 2:00 PM</p>
                      <p>Sunday: By appointment only</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Consultation Process */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-900 mb-4 flex items-center">
                <MessageCircle className="w-6 h-6 mr-2" />
                What to Expect
              </h3>
              <div className="space-y-3 text-blue-800">
                <div className="flex items-start space-x-2">
                  <span className="font-bold text-blue-600">1.</span>
                  <p className="text-sm">We'll schedule a free 30-minute consultation at your convenience</p>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="font-bold text-blue-600">2.</span>
                  <p className="text-sm">Our advisor will listen to your situation and goals</p>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="font-bold text-blue-600">3.</span>
                  <p className="text-sm">You'll receive personalized recommendations and next steps</p>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="font-bold text-blue-600">4.</span>
                  <p className="text-sm">No pressure, no obligation - just expert guidance</p>
                </div>
              </div>
            </div>

            {/* Privacy Notice */}
            <div className="bg-gray-100 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Shield className="w-5 h-5 text-gray-600" />
                <h4 className="font-semibold text-gray-900">Your Privacy Matters</h4>
              </div>
              <p className="text-sm text-gray-600">
                All consultations are completely confidential. We adhere to strict professional 
                standards and will never share your information with third parties.
              </p>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Schedule Your Free Consultation
              </h2>
              <p className="text-gray-600">
                Tell us about your situation and we'll match you with the right financial planning specialist. 
                All consultations are completely free and confidential.
              </p>
            </div>
            
            <ContactForm />
          </div>
        </div>

        {/* Specialization Areas */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            When to Contact Life Money
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-red-500 rounded-full"></div>
              </div>
              <h3 className="font-semibold mb-2 text-red-700">Divorce Planning</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Asset division strategies</li>
                <li>Spousal support planning</li>
                <li>RRSP/TFSA splitting</li>
                <li>Child support optimization</li>
              </ul>
            </div>
            
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-green-500 rounded-full"></div>
              </div>
              <h3 className="font-semibold mb-2 text-green-700">Inheritance Planning</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Estate tax minimization</li>
                <li>Probate fee strategies</li>
                <li>Investment restructuring</li>
                <li>Trust planning</li>
              </ul>
            </div>
            
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-purple-500 rounded-full"></div>
              </div>
              <h3 className="font-semibold mb-2 text-purple-700">Business Sale Planning</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Capital gains deferral</li>
                <li>Retirement transition</li>
                <li>Tax optimization</li>
                <li>Succession planning</li>
              </ul>
            </div>
            
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
              </div>
              <h3 className="font-semibold mb-2 text-blue-700">Severance Planning</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Income replacement</li>
                <li>EI benefit optimization</li>
                <li>Career transition funds</li>
                <li>Emergency planning</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Frequently Asked Questions */}
        <div className="bg-gray-100 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Frequently Asked Questions
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Is the initial consultation really free?
                </h3>
                <p className="text-gray-600 text-sm">
                  Yes, absolutely. We offer a comprehensive 30-minute consultation at no cost 
                  to understand your situation and provide initial guidance.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Do you work with clients outside the GTA?
                </h3>
                <p className="text-gray-600 text-sm">
                  While we specialize in the Greater Toronto Area, we can assist clients 
                  throughout Ontario via virtual consultations for certain services.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  How quickly can I get an appointment?
                </h3>
                <p className="text-gray-600 text-sm">
                  Most clients can be scheduled within 2-3 business days. For urgent situations, 
                  we offer same-day consultations when possible.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  What should I bring to the consultation?
                </h3>
                <p className="text-gray-600 text-sm">
                  Just come as you are. While financial documents can be helpful, they're not 
                  required for the initial consultation. We'll guide you on what to gather for follow-ups.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Are your services covered by insurance?
                </h3>
                <p className="text-gray-600 text-sm">
                  Financial planning services are typically not covered by insurance, but many 
                  clients find our guidance saves them far more than our fees through better decisions.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Can you help with urgent financial decisions?
                </h3>
                <p className="text-gray-600 text-sm">
                  Yes, we understand financial emergencies happen. We offer expedited consultations 
                  for time-sensitive decisions and urgent planning needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}