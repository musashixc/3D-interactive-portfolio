import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import { config } from "@/data/config";

const EmailSchema = z.object({
  fullName: z.string().min(2, "Full name is invalid!"),
  email: z.string().email({ message: "Email is invalid!" }),
  message: z.string().min(10, "Message is too short!"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const result = EmailSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: result.error.errors[0].message },
        { status: 400 }
      );
    }

    const { fullName, email, message } = result.data;

    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      console.warn("Missing RESEND_API_KEY");
      return NextResponse.json(
        { error: "Missing API key" },
        { status: 500 }
      );
    }

    const resend = new Resend(resendApiKey);

    // Use plain HTML instead of React component to avoid client imports
    const html = `
      <div style="font-family: sans-serif;">
        <h2>New Contact Message</h2>
        <p><b>Name:</b> ${fullName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b><br/>${message}</p>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: [config.email],
      subject: `Contact from ${fullName}`,
      html,
    });

    if (error) throw error;

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error("API Send Error:", error);
    return NextResponse.json(
      { error: "Internal server error", details: error?.message },
      { status: 500 }
    );
  }
}
