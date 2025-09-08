import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import scheduleData from '@/../../../../content/blog-schedule.json';

interface BlogPreviewPageProps {
  params: Promise<{ slug: string }>;
}

export const metadata: Metadata = {
  title: 'Blog Preview | Life Money',
  description: "Preview of upcoming blog post",
  robots: 'noindex, nofollow' // Don't index preview pages
};

export default async function BlogPreviewPage({ params }: BlogPreviewPageProps) {
  const { slug } = await params;
  
  if (!slug) {
    notFound();
  }
  
  // Find post data from schedule
  const postData = scheduleData.schedule.find(post => post.slug === slug);
  if (!postData) {
    notFound();
  }

  // Try to dynamically import the scheduled post
  let PostComponent;
  try {
    PostComponent = dynamic(
      () => import(`@/../../../../content/scheduled-posts/${slug}.tsx`),
      {
        loading: () => (
          <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading preview...</p>
            </div>
          </div>
        ),
      }
    );
  } catch (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Preview Not Available</h1>
          <p className="text-gray-600 mb-6">
            This blog post preview is not yet available. The post may not have been written yet.
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
                <strong>Preview Mode:</strong> Scheduled for {postData.date} • Status: {postData.status}
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
        <PostComponent />
      </div>
    </div>
  );
}