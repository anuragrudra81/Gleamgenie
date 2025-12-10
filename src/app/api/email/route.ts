
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

const contactFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

const quoteFormSchema = z.object({
  serviceType: z.string(),
  residenceType: z.string(),
  bedrooms: z.string(),
  bathrooms: z.string(),
  stories: z.string(),
  package: z.string(),
  frequency: z.string(),
  lastCleaned: z.string(),
  additionalServices: z.array(z.string()),
  furnished: z.string(),
  pets: z.string(),
  heardAbout: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  phone: z.string(),
  streetAddress: z.string(),
  suburb: z.string(),
  state: z.string(),
  postcode: z.string(),
});

const officeQuoteFormSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email address'),
    phone: z.string().min(1, 'Phone is required'),
    company: z.string().min(1, 'Company is required'),
});

function formatDataAsHtml(data: Record<string, any>) {
  let html = '<div style="font-family: Arial, sans-serif; line-height: 1.6;">';
  for (const [key, value] of Object.entries(data)) {
    const formattedKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
    html += `<p><strong>${formattedKey}:</strong> `;
    if (Array.isArray(value)) {
      html += value.join(', ');
    } else {
      html += value;
    }
    html += '</p>';
  }
  html += '</div>';
  return html;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Try parsing as a quote form first
    const quoteParsed = quoteFormSchema.safeParse(body);
    if (quoteParsed.success) {
      const { data, error } = await resend.emails.send({
        from: 'Gleam Genie <onboarding@resend.dev>',
        to: ['anuragrudra91@gmail.com'],
        subject: 'New Instant Quote Request from Gleam Genie',
        html: `
          <h1>New Instant Quote Request</h1>
          ${formatDataAsHtml(quoteParsed.data)}
        `,
      });

      if (error) {
        console.error('Resend error (Quote):', error);
        return NextResponse.json({ error: 'Failed to send quote request.' }, { status: 500 });
      }

      return NextResponse.json({ message: 'Quote request sent successfully!' });
    }

     // Try parsing as an office quote form
    const officeQuoteParsed = officeQuoteFormSchema.safeParse(body);
    if (officeQuoteParsed.success) {
      const { data, error } = await resend.emails.send({
        from: 'Gleam Genie <onboarding@resend.dev>',
        to: ['anuragrudra91@gmail.com'],
        subject: 'New Office Cleaning Quote Request from Gleam Genie',
        html: `
          <h1>New Office Cleaning Quote Request</h1>
          ${formatDataAsHtml(officeQuoteParsed.data)}
        `,
      });

      if (error) {
        console.error('Resend error (Office Quote):', error);
        return NextResponse.json({ error: 'Failed to send office quote request.' }, { status: 500 });
      }

      return NextResponse.json({ message: 'Office quote request sent successfully!' });
    }


    // Fallback to parsing as a contact form
    const contactParsed = contactFormSchema.safeParse(body);
    if (contactParsed.success) {
      const { name, email, message } = contactParsed.data;
      const { data, error } = await resend.emails.send({
        from: 'Gleam Genie <onboarding@resend.dev>',
        to: ['anuragrudra91@gmail.com'],
        subject: `New message from ${name} via Gleam Genie`,
        html: `
          <p>You have received a new message from your website contact form.</p>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      });

      if (error) {
        console.error('Resend error (Contact):', error);
        return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 });
      }

      return NextResponse.json({ message: 'Email sent successfully!' });
    }

    return NextResponse.json({ error: 'Invalid input.' }, { status: 400 });

  } catch (error) {
    console.error('API route error:', error);
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
}
