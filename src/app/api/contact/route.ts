import { NextRequest, NextResponse } from 'next/server';
import twilio from 'twilio';

const AIRTABLE_BASE_ID = 'app0xbxQfZtCRb61r';
const AIRTABLE_TABLE_ID = 'tblPgT5GaiO1ZAiyo';
const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;

const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID;
const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN;
const TWILIO_PHONE_NUMBER = process.env.TWILIO_PHONE_NUMBER;
const NOTIFICATION_PHONE_NUMBER = process.env.NOTIFICATION_PHONE_NUMBER;

const twilioClient = TWILIO_ACCOUNT_SID && TWILIO_AUTH_TOKEN 
  ? twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN) 
  : null;

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

async function saveToAirtable(data: any, sourceUrl: string, ip: string) {
  if (!AIRTABLE_API_KEY) {
    console.warn('Airtable API key not configured, skipping Airtable save');
    return;
  }

  try {
    const response = await fetch(`https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_ID}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fields: {
          'Name': data.name,
          'Email': data.email,
          'Phone': data.phone,
          'Service Interested': data.service || 'Not specified',
          'City/Location': data.city || 'Not specified',
          'Message': data.message || '',
          'Lead Status': 'New',
          'Source Page': sourceUrl,
          'Date Submitted': new Date().toISOString(),
          'Notes': `Urgency: ${data.urgency || 'Not specified'} | IP: ${ip}`
        }
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Airtable API error:', response.status, errorText);
    } else {
      const result = await response.json();
      console.log('✅ Lead saved to Airtable:', result.id);
    }
  } catch (error) {
    console.error('Error saving to Airtable:', error);
  }
}

async function sendSMSNotification(data: any, sourceUrl: string) {
  if (!twilioClient || !TWILIO_PHONE_NUMBER || !NOTIFICATION_PHONE_NUMBER) {
    console.warn('Twilio not configured, skipping SMS notification');
    return;
  }

  try {
    const message = `New lead alert! ${data.name} interested in ${data.service || 'service inquiry'} in ${data.city || 'unspecified location'}.`;

    await twilioClient.messages.create({
      body: message,
      from: TWILIO_PHONE_NUMBER,
      to: NOTIFICATION_PHONE_NUMBER
    });

    console.log('✅ SMS notification sent');
  } catch (error) {
    console.error('Error sending SMS:', error);
  }
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
    
    // Get source URL from referer header or request
    const sourceUrl = request.headers.get('referer') || 'Direct';
    
    // Save to Airtable and send SMS notification
    await Promise.all([
      saveToAirtable(body, sourceUrl, ip),
      sendSMSNotification(body, sourceUrl)
    ]);
    
    // Log the submission
    console.log('✅ Contact form submission:', {
      name: body.name,
      email: body.email,
      phone: body.phone,
      service: body.service,
      city: body.city,
      urgency: body.urgency,
      message: body.message,
      timestamp: new Date().toISOString(),
      ip: ip,
      sourceUrl: sourceUrl
    });
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