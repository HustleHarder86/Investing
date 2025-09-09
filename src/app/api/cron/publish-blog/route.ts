import { NextResponse } from 'next/server';

// This endpoint is called by Vercel Cron to trigger blog publishing
export async function GET(request: Request) {
  // Verify this is from Vercel Cron (in production)
  const authHeader = request.headers.get('authorization');
  if (process.env.CRON_SECRET && authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    // Get GitHub token from environment
    const githubToken = process.env.GITHUB_TOKEN || process.env.GITHUB_PAT;
    
    if (!githubToken) {
      console.error('No GitHub token found in environment variables');
      return NextResponse.json({ 
        error: 'GitHub token not configured',
        timestamp: new Date().toISOString()
      }, { status: 500 });
    }

    // Trigger the GitHub Actions workflow
    const response = await fetch(
      'https://api.github.com/repos/HustleHarder86/Investing/actions/workflows/financial-blog-publisher.yml/dispatches',
      {
        method: 'POST',
        headers: {
          'Authorization': `token ${githubToken}`,
          'Accept': 'application/vnd.github.v3+json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          ref: 'main',
          inputs: {
            trigger_source: 'vercel_cron'
          }
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error('GitHub API error:', response.status, errorText);
      return NextResponse.json({ 
        error: 'Failed to trigger workflow',
        status: response.status,
        details: errorText,
        timestamp: new Date().toISOString()
      }, { status: response.status });
    }

    // Log successful trigger
    console.log('Blog publisher workflow triggered successfully via Vercel Cron');
    
    return NextResponse.json({ 
      success: true,
      message: 'Blog publisher workflow triggered',
      timestamp: new Date().toISOString(),
      trigger: 'vercel_cron'
    });
    
  } catch (error) {
    console.error('Error triggering blog publisher:', error);
    return NextResponse.json({ 
      error: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString()
    }, { status: 500 });
  }
}

// Also support POST for manual testing
export async function POST(request: Request) {
  return GET(request);
}