import { NextResponse } from 'next/server';

// Test endpoint to manually trigger blog publishing
export async function GET() {
  try {
    // Call the cron endpoint directly
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'}/api/cron/publish-blog`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.CRON_SECRET || 'test'}`,
        },
      }
    );

    const result = await response.json();
    
    return NextResponse.json({
      message: 'Test publish triggered',
      result,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    return NextResponse.json({
      error: 'Failed to trigger test publish',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}