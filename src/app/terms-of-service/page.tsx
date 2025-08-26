import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service | Life Money Financial Advisory',
  description: "Terms of service for Life Money Financial Advisory. Our agreement for providing financial planning services.",
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200/50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <div>
                <div className="text-2xl font-display font-bold text-slate-900">Life Money</div>
                <div className="text-sm text-slate-600 -mt-1 font-medium">Financial Advisory</div>
              </div>
            </Link>
            <Link href="/" className="text-slate-600 hover:text-slate-900 transition-colors">
              ← Back to Home
            </Link>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-16 max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-display font-bold text-slate-900 mb-8">Terms of Service</h1>
        <p className="text-slate-600 mb-8">Effective Date: August 19, 2025</p>

        <div className="prose prose-slate max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">1. Agreement to Terms</h2>
            <p className="text-slate-600">
              By accessing or using Life Money Financial Advisory services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">2. Services Description</h2>
            <p className="text-slate-600 mb-4">Life Money provides financial planning and advisory services including:</p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>Divorce financial planning</li>
              <li>Inheritance and estate planning</li>
              <li>Business sale planning</li>
              <li>Severance and job transition planning</li>
              <li>General financial consultation</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">3. Professional Disclaimer</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 text-amber-900">
              <p className="font-semibold mb-2">Important Notice:</p>
              <p>
                Life Money provides financial planning services for informational purposes. We are not lawyers, accountants, or registered investment advisors unless specifically stated. Always consult appropriate professionals for legal, tax, or investment advice.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">4. Client Responsibilities</h2>
            <p className="text-slate-600 mb-4">As our client, you agree to:</p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>Provide accurate and complete information</li>
              <li>Promptly notify us of any changes to your financial situation</li>
              <li>Review and understand all recommendations before implementation</li>
              <li>Maintain confidentiality of any proprietary information shared</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">5. Fees and Payment</h2>
            <p className="text-slate-600 mb-4">
              Our fee structure will be clearly communicated before engagement. Fees may include:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>Initial consultation fees (if applicable)</li>
              <li>Project-based fees for specific services</li>
              <li>Ongoing advisory fees</li>
              <li>Additional services as agreed upon</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">6. Limitation of Liability</h2>
            <p className="text-slate-600">
              To the maximum extent permitted by law, Life Money shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services, even if we have been advised of the possibility of such damages.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">7. Confidentiality</h2>
            <p className="text-slate-600">
              We maintain strict confidentiality of all client information. Information will only be disclosed with your consent or as required by law. Our confidentiality obligations survive termination of our relationship.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">8. Intellectual Property</h2>
            <p className="text-slate-600">
              All content, materials, and intellectual property on our website and in our services remain the property of Life Money. You may not reproduce, distribute, or create derivative works without our written permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">9. Termination</h2>
            <p className="text-slate-600">
              Either party may terminate the advisory relationship with written notice. Upon termination, all outstanding fees become immediately due. We will provide reasonable assistance in transitioning your affairs.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">10. Governing Law</h2>
            <p className="text-slate-600">
              These Terms of Service are governed by the laws of Ontario, Canada. Any disputes shall be resolved in the courts of Ontario.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">11. Contact Information</h2>
            <div className="bg-slate-50 rounded-xl p-6">
              <p className="text-slate-700 font-semibold">Life Money Financial Advisory</p>
              <p className="text-slate-600">Contact: Via form only</p>
              <p className="text-slate-600">Address: Mississauga, Ontario, Canada</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">12. Amendments</h2>
            <p className="text-slate-600">
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use of our services constitutes acceptance of revised terms.
            </p>
          </section>
        </div>

        <div className="mt-12 p-6 bg-slate-50 rounded-xl">
          <p className="text-sm text-slate-600 text-center">
            Last Updated: August 19, 2025 | Version 1.0
          </p>
        </div>
      </div>
    </div>
  );
}