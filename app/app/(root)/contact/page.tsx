import ContactForm from "@/components/MailForm";
import nodemailer from "nodemailer";

type MailPayload = {
  email: string;
  message: string;
  subject?: string;
  name?: string;
};

const sendMail = async ({ email, message, subject, name }: MailPayload) => {
  "use server";
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SNTP_USERNAME,
        pass: process.env.SNTP_PASSWORD,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.MAIL_RECEIVER_ADRESS,
      subject: subject || `New message from ${name || "Contact Form"}`,
      text: `
        Name: ${name || "N/A"}
        Email: ${email}
        Subject: ${subject || "No subject"}
        Message:
        ${message}
      `,
    };

    await transporter.sendMail(mailOptions);
    return { success: true, error: null };
  } catch (error: any) {
    console.error("Error sending email:", error);

    return {
      success: false,
      error: error?.message || "Failed to send email",
    };
  }
};

export default function Contact() {
  return (
    <div className="bg-gradient-to-b from-black to-gray-800 text-white min-h-screen flex flex-col items-center justify-center pt-20">
      <ContactForm sendMail={sendMail} />
    </div>
  );
}
