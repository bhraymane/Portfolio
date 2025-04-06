import { Resend } from 'resend';
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['bhr.ayman7@gmail.com'],
      subject: `Message from ${name}`,
      html: `
        <div style="max-width:600px;margin:0 auto;background:#ffffff;padding:24px;border-radius:12px;
              font-family: 'Poppins', sans-serif; box-shadow:0 4px 20px rgba(0,0,0,0.1);">
    <div style="border-bottom:1px solid #eee;padding-bottom:12px;margin-bottom:24px;">
      <h2 style="margin:0;color:#111;">📬 New Contact Message</h2>
      <p style="margin:4px 0;color:#555;">You've received a new message from your portfolio.</p>
    </div>

    <table style="width:100%;font-size:16px;color:#333;">
      <tr>
        <td style="padding:8px 0;"><strong>Name:</strong></td>
        <td style="padding:8px 0;">${name}</td>
      </tr>
      <tr>
        <td style="padding:8px 0;"><strong>Email:</strong></td>
        <td style="padding:8px 0;">${email}</td>
      </tr>
      <tr>
        <td style="padding:8px 0; vertical-align:top;"><strong>Message:</strong></td>
        <td style="padding:8px 0;">
          <div style="padding:12px;background:#f9f9f9;border-left:4px solid #0070f3;border-radius:6px;">
            ${message}
          </div>
        </td>
      </tr>
    </table>

    <div style="margin-top:32px;text-align:center;color:#888;font-size:14px;">
      ⌨️ Sent from your contact form · ${new Date().toLocaleDateString()}
    </div>
  </div>
      `
    });

    if (error) {
      return NextResponse.json({ success: false, error });
    }
    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}