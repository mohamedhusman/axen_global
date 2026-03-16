import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    // Antispam mechanism
    const honeypot = formData.get("honeypot");
    if (honeypot) {
      return NextResponse.json({ message: "Spam detected." }, { status: 400 });
    }

    // Extract fields
    const name = formData.get("name") || "No Name Provided";
    const email = formData.get("email") || "No Email Provided";
    const phone = formData.get("phone") || "Not Provided";
    const company = formData.get("company") || "Not Provided";
    const service = formData.get("service") || "Not Provided";
    const industry = formData.get("industry") || "Not Provided";
    const systems = formData.get("systems") || "Not Provided";
    const estimatedRecords = formData.get("estimatedRecords") || "Not Provided";
    const message = formData.get("message") || "No Message Provided";
    const preferredContact = formData.get("preferredContact") || "Not Provided";
    const preferredTime = formData.get("preferredTime") || "Not Provided";

    const attachment = formData.get("attachment") as File | null;

    // Transporter Config (Defaults to Ethereal or standard env vars)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Attachment Parsing
    let mailAttachments: nodemailer.SendMailOptions["attachments"] = [];
    if (attachment && attachment.size > 0) {
      const buffer = Buffer.from(await attachment.arrayBuffer());
      mailAttachments.push({
        filename: attachment.name,
        content: buffer,
        contentType: attachment.type,
      });
    }

    const mailOptions = {
      from: `"Solution Wings Website" <${process.env.SMTP_USER || "no-reply@SolutionWings.com"}>`,
      to: process.env.CONTACT_EMAIL || "info@solutionwings.com", // Where to send the leads
      subject: `New Lead from ${name} - ${service}`,
      html: `
        <h2>New Contact Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Service Interested:</strong> ${service}</p>
        <p><strong>Industry:</strong> ${industry}</p>
        <p><strong>Estimated Records:</strong> ${estimatedRecords}</p>
        <p><strong>Systems Used:</strong> ${systems}</p>
        <p><strong>Preferred Contact Method:</strong> ${preferredContact}</p>
        <p><strong>Preferred Contact Time:</strong> ${preferredTime}</p>
        <br/>
        <h3>Message:</h3>
        <p>${message}</p>
      `,
      attachments: mailAttachments,
    };

    // This will error if env variables are not supplied, but the code structure is correct.
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: "Email sent successfully!" },
      { status: 200 },
    );
  } catch (error: any) {
    console.error("Nodemailer routing error: ", error);
    // In dev, show error. In prod, mask it. We will return error message to help user debug the env config.
    return NextResponse.json(
      { success: false, message: error.message || "Failed to send email." },
      { status: 500 },
    );
  }
}
