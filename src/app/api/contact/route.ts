import { NextRequest, NextResponse } from 'next/server';

// Basic rate limiting in memory (in production, use Redis)
const submissions = new Map<string, number[]>();

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxSubmissions = 3;

  if (!submissions.has(ip)) {
    submissions.set(ip, []);
  }

  const userSubmissions = submissions.get(ip)!;
  // Remove old submissions outside the window
  const recentSubmissions = userSubmissions.filter(time => now - time < windowMs);
  submissions.set(ip, recentSubmissions);

  return recentSubmissions.length >= maxSubmissions;
}

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
    
    // Rate limiting check
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { success: false, message: 'Too many submissions. Please wait before submitting again.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    
    // Validation
    if (!body.name || !body.email || !body.phone) {
      return NextResponse.json(
        { success: false, message: 'Name, email, and phone are required fields.' },
        { status: 400 }
      );
    }

    if (!isValidEmail(body.email)) {
      return NextResponse.json(
        { success: false, message: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    // Record this submission for rate limiting
    const now = Date.now();
    if (!submissions.has(ip)) {
      submissions.set(ip, []);
    }
    submissions.get(ip)!.push(now);
    
    // Log the submission (in production, you'd save to a database or send email)
    console.log('✅ Contact form submission:', {
      name: body.name,
      email: body.email,
      phone: body.phone,
      service: body.service,
      city: body.city,
      urgency: body.urgency,
      message: body.message,
      timestamp: new Date().toISOString(),
      ip: ip
    });

    // Here you would typically:
    // 1. Save to database (Firebase Firestore)
    // 2. Send notification email
    // 3. Add to CRM system
    // 4. Send confirmation email to client

    // For now, we'll just return success
    return NextResponse.json({ 
      success: true, 
      message: 'Thank you for your inquiry. We\'ll be in touch within 24 hours.' 
    });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { success: false, message: 'There was an error submitting your request. Please try again.' },
      { status: 500 }
    );
  }
}