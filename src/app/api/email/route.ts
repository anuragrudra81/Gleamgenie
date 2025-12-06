
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

const contactFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = contactFormSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid input.' }, { status: 400 });
    }

    const { name, email, message } = parsed.data;

    const { data, error } = await resend.emails.send({
      from: 'Gleam Genie <noreply@gleamgenie.com.au>',
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
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('API route error:', error);
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
}
