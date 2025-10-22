import { NextResponse } from "next/server";
import { z } from "zod";
import { config } from "@/data/config";

// Validate email input
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

    // ✅ Lazy import Resend only when running on server (prevents build-time crash)
    const { Resend } = await import("resend");
    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      console.warn("Missing RESEND_API_KEY, skipping email send.");
      return NextResponse.json({
        success: false,
        error: "Missing email API key (deployment-safe fallback).",
      });
    }

    const resend = new Resend(resendApiKey);

    // Lazy import the email template to avoid build-time dependency issues
    const { EmailTemplate } = await import("@/components/email-template");

    const { data, error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: [config.email],
      subject: `Contact from ${fullName}`,
      react: EmailTemplate({ fullName, email, message }),
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
