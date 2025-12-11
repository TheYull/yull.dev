import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// protection against <script> injection
const HTML_ESCAPE_MAP = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "`": "&#x60;",
  "=": "&#x3D;",
  "/": "&#x2F;",
};

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"'`=\/]/g, (char) => HTML_ESCAPE_MAP[char]);
}

// POST /api/contact
export async function POST(req) {
  try {
    const data = await req.json();
    const { name, email, message, agree, honeypot } = data;

    // honeypot
    if (honeypot && honeypot.trim() !== "") {
      return new Response(null, { status: 204 });
    }

    // validation
    if (!name || String(name).trim().length < 2) {
      return Response.json(
        { ok: false, error: "The name is too short" },
        { status: 400 }
      );
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email))) {
      return Response.json(
        { ok: false, error: "Invalid email address" },
        { status: 400 }
      );
    }

    if (!message || String(message).trim().length < 10) {
      return Response.json(
        { ok: false, error: "Please describe the project in more detail." },
        { status: 400 }
      );
    }

    if (agree !== true) {
      return Response.json(
        { ok: false, error: "You must agree to the terms and conditions." },
        { status: 400 }
      );
    }

    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL;

    if (!to || !from) {
      return Response.json(
        {
          ok: false,
          error:
            "Email configuration is not set up (CONTACT_TO_EMAIL / CONTACT_FROM_EMAIL)",
        },
        { status: 500 }
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");

    const subject = `New message from ${safeName} (portfolio)`;

    const html = `
      <h1>New message from portfolio</h1>
      <p>You received a new message from the contact form.</p>
      <hr />
      <p><strong>Name:</strong> ${safeName}</p>
      <p><strong>Email:</strong> ${safeEmail}</p>
      <hr />
      <p><strong>Message:</strong></p>
      <p>${safeMessage}</p>
    `;

    const text = `
New message from portfolio

Name: ${name}
Email: ${email}

Message:
${message}
    `.trim();

    const { data: resendData, error } = await resend.emails.send({
      from,
      to,
      subject,
      html,
      text,
      reply_to: email,
    });
    
    console.log("Resend send result:", { data: resendData, error });

    if (error) {
      console.error("Resend email error:", error);
      return Response.json(
        { ok: false, error: error?.message ||
                            error?.name ||
                            "Failed to send email (Resend error).",},
        { status: 500 }
      );
    }

    return Response.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("Contact API error:", err);

    return Response.json(
      { ok: false, error: err?.message || "Internal server error" },
      { status: 500 }
    );
  }
}