import React from 'react';
import BlogPostTemplate from '@/components/templates/BlogPostTemplate';

export default function TestAutoPublishPost() {
  return (
    <BlogPostTemplate
      title="TEST: Auto-Publish Verification Post"
      author="Sarah Mitchell"
      date="2025-09-09"
      category="Inheritance Planning"
      excerpt="This is a test post to verify GitHub Actions scheduled workflow is functioning correctly."
      keywords={['test', 'auto-publish', 'workflow', 'verification']}
      readTime="1 min"
      slug="test-auto-publish"
    >
      <div className="space-y-8">
        <div className="bg-green-50 border-l-4 border-green-500 p-6">
          <h2 className="text-2xl font-bold text-green-800 mb-4">
            🎉 Auto-Publish Test Successful!
          </h2>
          <p className="text-green-700 mb-4">
            If you're seeing this post on the live site, it means the GitHub Actions scheduled workflow is working correctly.
          </p>
          <p className="text-green-700 mb-4">
            <strong>Test Details:</strong>
          </p>
          <ul className="list-disc list-inside text-green-700 space-y-2">
            <li>Created: September 9, 2025 at 10:09 AM EST</li>
            <li>Scheduled for: Immediate publication</li>
            <li>Purpose: Verify scheduled workflow triggers</li>
            <li>Expected Result: Auto-publish via GitHub Actions</li>
          </ul>
        </div>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
          <h3 className="text-xl font-bold text-blue-800 mb-3">
            Workflow Information
          </h3>
          <p className="text-blue-700">
            This test confirms that:
          </p>
          <ul className="list-disc list-inside text-blue-700 space-y-2 mt-3">
            <li>GitHub Actions scheduled triggers are working</li>
            <li>The blog publishing script runs correctly</li>
            <li>Files are moved from scheduled-posts to blog directory</li>
            <li>The blog schedule is updated properly</li>
            <li>Changes are committed and pushed automatically</li>
          </ul>
        </div>
        
        <p className="text-gray-600">
          This test post can be deleted after verification is complete.
        </p>
      </div>
    </BlogPostTemplate>
  );
}