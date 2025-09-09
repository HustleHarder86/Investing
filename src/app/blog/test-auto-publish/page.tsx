import BlogPostTemplate from '@/components/templates/BlogPostTemplate';

export default function TestAutoPublish() {
  const content = `
    <h2>Testing Auto-Publishing System</h2>
    <p>This is a test post created on September 9, 2025 to verify that our auto-publishing system is working correctly after fixing the GitHub Actions scheduled workflow issues.</p>
    
    <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
      <h3 style="margin-top: 0;">Auto-Publishing Status</h3>
      <p>✅ GitHub Actions workflow renamed to financial-blog-publisher.yml</p>
      <p>✅ StarterPackApp conflicting workflow disabled</p>
      <p>✅ Vercel Cron configured as primary trigger</p>
      <p>✅ Test post successfully published</p>
    </div>

    <h3>System Components Verified</h3>
    <ul>
      <li>Vercel Cron job triggers at scheduled time</li>
      <li>API endpoint successfully calls GitHub API</li>
      <li>GitHub workflow runs and publishes posts</li>
      <li>Blog schedule updates correctly</li>
    </ul>

    <p>This post will be automatically removed after testing is complete.</p>
  `;

  return (
    <BlogPostTemplate
      title="Test: Auto-Publishing System Verification"
      content={content}
      author="System Test"
      date="2025-09-09"
      category="System Test"
      keywords={["test", "auto-publish", "verification"]}
      description="Test post to verify auto-publishing system is working correctly"
      slug="test-auto-publish"
    />
  );
}