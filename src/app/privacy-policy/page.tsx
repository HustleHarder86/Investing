import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | ProsperBridge Financial Advisory',
  description: "Privacy policy for ProsperBridge Financial Advisory. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
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
                <div className="text-2xl font-display font-bold text-slate-900">ProsperBridge</div>
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
        <h1 className="text-4xl font-display font-bold text-slate-900 mb-8">Privacy Policy</h1>
        <p className="text-slate-600 mb-8">Effective Date: August 19, 2025</p>

        <div className="prose prose-slate max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">1. Information We Collect</h2>
            <p className="text-slate-600 mb-4">
              ProsperBridge Financial Advisory collects information you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>Personal identification information (name, email, phone number)</li>
              <li>Financial information relevant to our services</li>
              <li>Information submitted through our contact forms</li>
              <li>Communications between you and our team</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">2. How We Use Your Information</h2>
            <p className="text-slate-600 mb-4">We use collected information to:</p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>Provide financial advisory services</li>
              <li>Respond to inquiries and consultations</li>
              <li>Send important updates about our services</li>
              <li>Comply with legal and regulatory requirements</li>
              <li>Improve our services and website functionality</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">3. Information Protection</h2>
            <p className="text-slate-600 mb-4">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>Secure SSL encryption for data transmission</li>
              <li>Regular security assessments</li>
              <li>Limited access to personal information</li>
              <li>Employee confidentiality agreements</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">4. Information Sharing</h2>
            <p className="text-slate-600 mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share information only:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>With your explicit consent</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and safety</li>
              <li>With trusted service providers who assist in our operations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">5. Your Rights</h2>
            <p className="text-slate-600 mb-4">Under Canadian privacy laws, you have the right to:</p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
              <li>Lodge a complaint with privacy authorities</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">6. Cookies and Tracking</h2>
            <p className="text-slate-600 mb-4">
              Our website uses cookies to enhance user experience. You can control cookie preferences through your browser settings. We use:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>Essential cookies for website functionality</li>
              <li>Analytics cookies to understand usage patterns</li>
              <li>Performance cookies to improve website speed</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">7. Contact Information</h2>
            <p className="text-slate-600 mb-4">
              For privacy-related inquiries or to exercise your rights, contact us at:
            </p>
            <div className="bg-slate-50 rounded-xl p-6">
              <p className="text-slate-700 font-semibold">ProsperBridge Financial Advisory</p>
              <p className="text-slate-600">Email: privacy@prosperbridge.ca</p>
              <p className="text-slate-600">Phone: 647-555-0123</p>
              <p className="text-slate-600">Address: Mississauga, Ontario, Canada</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">8. Changes to This Policy</h2>
            <p className="text-slate-600">
              We may update this privacy policy periodically. Changes will be posted on this page with an updated effective date. Continued use of our services constitutes acceptance of any changes.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}