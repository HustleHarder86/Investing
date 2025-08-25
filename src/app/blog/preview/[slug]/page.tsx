import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import path from 'path';
import { promises as fs } from 'fs';
import scheduleData from '@/../../../../content/blog-schedule.json';
import BlogPostTemplate from '@/components/templates/BlogPostTemplate';
import { Calendar, Clock, User, ArrowLeft, Share2, BookOpen } from 'lucide-react';

interface BlogPreviewPageProps {
  params: Promise<{ slug: string }>;
}

export const metadata: Metadata = {
  title: 'Blog Preview | Money in Motion',
  description: "Preview of upcoming blog post",
  robots: 'noindex, nofollow' // Don't index preview pages
};

// Blog Content Component for RRSP vs TFSA post
const RrspVsTfsaBlogContent = () => (
  <>
    <p className="lead text-xl text-gray-700 mb-8">
      When Jennifer and Mark sat in my Toronto office last month, they thought dividing their 
      retirement accounts would be straightforward. "We'll just split everything 50-50," Mark said 
      confidently. But when I explained that their $400,000 RRSP would trigger an immediate $120,000 
      tax bill if handled incorrectly, while their $200,000 TFSA could be divided tax-free, they 
      realized the complexity ahead. In 2025, with new pension legislation and evolving case law in 
      Ontario, understanding the nuanced differences between RRSP and TFSA division has never been 
      more critical for divorcing couples in the Greater Toronto Area.
    </p>

    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
      The Fundamental Difference: Why RRSPs and TFSAs Aren't Equal in Divorce
    </h2>
    
    <p className="mb-6">
      While both RRSPs and TFSAs are registered accounts designed to help Canadians save for the future, 
      they're treated dramatically differently during divorce proceedings. The distinction isn't just 
      academic—it can mean tens of thousands of dollars in unexpected taxes or lost retirement security.
    </p>

    <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
      <h3 className="font-bold text-gray-900 mb-3">🔑 Key Legal Framework</h3>
      <ul className="space-y-2 text-gray-700">
        <li>• <strong>RRSPs:</strong> Considered property under Ontario Family Law Act, subject to equalization</li>
        <li>• <strong>TFSAs:</strong> Also property, but with different tax implications on division</li>
        <li>• <strong>Valuation Date:</strong> Both valued at date of separation, not divorce</li>
        <li>• <strong>Growth After Separation:</strong> Generally excluded from division</li>
        <li>• <strong>Locked-in Accounts:</strong> LIRAs and LIFs have additional restrictions</li>
      </ul>
    </div>

    <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
      RRSP Division: The Tax Trap Waiting to Happen
    </h3>
    
    <p className="mb-4">
      RRSPs represent pre-tax dollars. Every dollar withdrawn triggers income tax at your marginal rate, 
      which in Toronto often exceeds 40% for professionals. During divorce, couples have two main options:
    </p>

    <ol className="space-y-4 text-gray-700 mb-8">
      <li>
        <strong>1. Tax-Free Rollover:</strong> Transfer directly to spouse's RRSP or new Spousal RRSP 
        under Section 146(16) of the Income Tax Act. No immediate tax, but the receiving spouse pays 
        tax on eventual withdrawal.
      </li>
      <li>
        <strong>2. Cash Withdrawal:</strong> Withdraw funds and pay the spouse their share. This triggers 
        immediate taxation at your marginal rate, plus potential early withdrawal penalties.
      </li>
    </ol>

    <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
      TFSA Division: The Simpler Solution
    </h3>
    
    <p className="mb-6">
      TFSAs contain after-tax dollars, making division significantly cleaner. Withdrawals are tax-free, 
      and the contribution room is restored the following calendar year. However, timing matters 
      significantly for maximizing both parties' contribution room.
    </p>

    <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
      Real Numbers: GTA Divorce Scenarios in 2025
    </h2>

    <div className="bg-gray-50 p-6 rounded-lg mb-8">
      <h4 className="font-bold text-gray-900 mb-3">Scenario 1: The Bay Street Couple</h4>
      <ul className="space-y-2 text-gray-700">
        <li><strong>Combined RRSPs:</strong> $800,000</li>
        <li><strong>Combined TFSAs:</strong> $180,000 (maxed out since 2009)</li>
        <li><strong>His Income:</strong> $250,000 (investment banker)</li>
        <li><strong>Her Income:</strong> $95,000 (marketing manager)</li>
        <li><strong>Challenge:</strong> His higher tax bracket makes RRSP division costly</li>
        <li><strong>Solution:</strong> Offset RRSP against matrimonial home equity, divide TFSAs equally</li>
        <li><strong>Tax Savings:</strong> $65,000</li>
      </ul>
    </div>

    <div className="bg-green-50 border-l-4 border-green-600 p-6 mb-8">
      <h3 className="font-bold text-gray-900 mb-3">💬 Ready to Protect Your Retirement Assets?</h3>
      <p className="text-gray-700 mb-4">
        Don't let divorce derail your retirement plans. Our CFP® Certified Financial Planners 
        specialize in creating tax-efficient division strategies for RRSPs, TFSAs, and all retirement 
        accounts. We'll help you understand your options and make informed decisions that protect your 
        financial future.
      </p>
      <p className="text-gray-700">
        <strong>Call 1-800-PROSPER</strong> to schedule your personalized retirement asset division 
        analysis today.
      </p>
    </div>
  </>
);

const relatedPosts = [
  {
    title: 'Post-Pandemic Divorce Trends: Financial Planning in the New Normal',
    slug: 'divorce-financial-planning-after-covid',
    excerpt: 'How remote work and housing market changes are reshaping divorce settlements.',
    readTime: '10 min'
  },
  {
    title: '2025 Ontario Inheritance Tax Changes: What You Need to Know',
    slug: 'ontario-inheritance-tax-changes-2025',
    excerpt: 'Major updates to capital gains inclusion rates and estate planning strategies.',
    readTime: '8 min'
  }
];

async function checkPostExists(slug: string): Promise<boolean> {
  try {
    const scheduledPath = path.join(process.cwd(), 'content', 'scheduled-posts', `${slug}.tsx`);
    await fs.access(scheduledPath);
    return true;
  } catch {
    return false;
  }
}

export default async function BlogPreviewPage({ params }: BlogPreviewPageProps) {
  const { slug } = await params;
  
  // Check if post exists
  const postExists = await checkPostExists(slug);
  if (!postExists) {
    notFound();
  }
  
  // Find post data from schedule
  const postData = scheduleData.schedule.find(post => post.slug === slug);
  if (!postData) {
    notFound();
  }

  // For now, only handle the RRSP post we know exists
  if (slug !== 'rrsp-vs-tfsa-during-divorce') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Preview Not Available</h1>
          <p className="text-gray-600 mb-6">
            This blog post preview is not yet available. Only the RRSP vs TFSA post currently supports preview.
          </p>
          <Link 
            href="/blog/calendar"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            ← Back to Calendar
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Preview Banner */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-yellow-50 border-b border-yellow-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-800">
                <strong>Preview Mode:</strong> This is a preview of a scheduled blog post. It is not yet published to the public site.
              </p>
            </div>
            <div className="ml-auto">
              <Link
                href="/blog/calendar"
                className="text-sm text-yellow-800 hover:text-yellow-900 underline font-medium"
              >
                ← Back to Calendar
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Content - with top padding to account for fixed preview banner */}
      <div className="pt-16">
        <BlogPostTemplate
          title="RRSP vs TFSA During Divorce: Which Assets Are Really Yours?"
          subtitle="A comprehensive guide to understanding how retirement accounts are divided in Ontario divorces, with strategies to minimize taxes and protect your financial future"
          author="Michael Chen"
          authorTitle="CFP®, Divorce Specialist"
          date="2025-08-20"
          readTime="10 min"
          category="Divorce Planning"
          categorySlug="divorce-planning"
          content={<RrspVsTfsaBlogContent />}
          relatedPosts={relatedPosts}
        />
      </div>
    </div>
  );
}