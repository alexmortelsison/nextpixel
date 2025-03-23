import sendgrid from "@sendgrid/mail";
import { NextRequest, NextResponse } from "next/server";

// Define the interface for the expected body
interface ContactFormData {
  firstName: string;
  lastName: string;
  phone: string; // phone should be a string, as numbers can have leading zeros
  email: string;
  message: string;
}

sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string);

export default async function handler(req: NextRequest) {
  if (req.method === "POST") {
    // Parse the request body with the correct type
    const { firstName, lastName, phone, email, message }: ContactFormData =
      await req.json();

    const msg = {
      to: process.env.RECIPIENT_EMAIL,
      from: "no-reply@example.com", // Ensure this is a valid sender email for SendGrid
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      text: `Name: ${firstName} ${lastName}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`,
    };

    try {
      await sendgrid.send(msg);
      return new NextResponse(
        JSON.stringify({ message: "Email sent successfully" }),
        { status: 200 }
      );
    } catch (error: unknown) {
      // Narrow the error type from `unknown` to `Error`
      if (error instanceof Error) {
        return new NextResponse(
          JSON.stringify({
            message: "Failed to send email",
            error: error.message,
          }),
          { status: 500 }
        );
      } else {
        return new NextResponse(
          JSON.stringify({ message: "An unknown error occurred" }),
          { status: 500 }
        );
      }
    }
  } else {
    return new NextResponse(JSON.stringify({ message: "Method Not Allowed" }), {
      status: 405,
    });
  }
}
