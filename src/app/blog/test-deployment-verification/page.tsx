import { Metadata } from 'next';
import BlogPostTemplateEnhanced from '@/components/templates/BlogPostTemplateEnhanced';

export const metadata: Metadata = {
  title: 'Test Deployment Verification | Life Money',
  description: 'This is a test post to verify the blog publishing system is working correctly.',
  keywords: 'test, deployment, verification',
};

const relatedPosts = [];

const blogFAQs = [
  {
    "question": "Is this a test?",
    "answer": "Yes, this is a test post to verify deployment."
  }
];

const keyTakeaways = [
  "• This is a test post",
  "• Deployment verification in progress",
  "• Will be removed after testing"
];

export default function TestDeploymentVerificationPage() {
  return (
    <BlogPostTemplateEnhanced
      title="Test Deployment Verification"
      excerpt="Testing the automated blog publishing system."
      author="System Test"
      authorTitle="Automated Testing"
      date="2025-09-16"
      readTime="1 min"
      category="System Test"
      relatedPosts={relatedPosts}
      blogFAQs={blogFAQs}
      keyTakeaways={keyTakeaways}
    >
      {/* Main Content */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Test Post Content</h2>
        <p className="mb-4">
          This is a test post created to verify that the blog publishing system is working correctly.
          It will be automatically published and then removed after verification.
        </p>
        <p className="mb-4">
          Current timestamp: {new Date().toISOString()}
        </p>
      </section>
    </BlogPostTemplateEnhanced>
  );
}