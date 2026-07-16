import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email } = await request.json();

    // Basic validation
    if (!name || !email) {
      return Response.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    // Send yourself an email with the requester's details
    await resend.emails.send({
      from: "CV Requests <onboarding@resend.dev>", // Resend's default sender until you verify your own domain
      to: "briantony942@gmail.com", // replace with your real email
      subject: `CV Request from ${name}`,
      text: `${name} (${email}) requested your CV. Reply to them directly to send it.`,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error(err);
    return Response.json({ error: "Failed to send" }, { status: 500 });
  }
}