const nodemailer = require("nodemailer");
const router = require("express").Router();
const path = require("path");
const dotenv = require("dotenv");

dotenv.config();

const generateEmailHtml = ({ name, email, phone, message }) => {
  // Conditionally add the phone number row
  const phoneRow = phone
    ? `
      <tr>
          <td style="font-weight: bold; padding: 8px 0;">Phone Number:</td>
          <td style="padding: 8px 0;">${phone}</td>
      </tr>`
    : "";

  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Contact Form Submission</title>
  </head>
  <body style="font-family: Arial, sans-serif; background-color: rgb(30, 30, 30); padding: 20px;">
      <div style="max-width: 600px; margin: 0 auto; background-color: rgb(30, 30, 30); border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); padding: 20px;">
          <h2 style="color: rgba(212, 175, 55); text-align: center;">New Contact Form Submission</h2>
          <p style="font-size: 16px; color: rgb(255, 255, 255);">You have received a new message from your website's contact form.</p>
          
          <hr style="border: 1px solid #eaeaea; margin: 20px 0;">
          
          <table style="width: 100%; font-size: 16px; color: rgb(255, 255, 255);">
              <tr>
                  <td style="font-weight: bold; padding: 8px 0;">Name:</td>
                  <td style="padding: 8px 0;">${name}</td>
              </tr>
              <tr>
                  <td style="font-weight: bold; padding: 8px 0;">Email:</td>
                  <td style="padding: 8px 0;">${email}</td>
              </tr>
              ${phoneRow}
              <tr>
                  <td style="font-weight: bold; padding: 8px 0;">Message:</td>
                  <td style="padding: 8px 0;">${message}</td>
              </tr>
          </table>
          
          <hr style="border: 1px solid #eaeaea; margin: 20px 0;">
  
      </div>
  </body>
  </html>`;
};

router.post("/contact", async (req, res) => {
  const { name, email, phone, message } = req.body;
  console.log(req.body);

  try {
    // Set up transporter with your Gmail account
    let transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // Replace with your region's SMTP endpoint
      port: process.env.NODE_ENV === "development" ? 587 : 465, // TLS port (use 465 for SSL)
      secure: process.env.NODE_ENV === "development" ? false : true, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER, // Your SES SMTP username
        pass: process.env.SMTP_PASSWORD, // Your SES SMTP password
      },
    });

    // Set up email data
    let mailOptions = {
      from: process.env.MAIL_FROM,
      to: process.env.MAIL_TO,
      subject: process.env.DOMAIN,
      html: generateEmailHtml({ ...req.body }),
      replyTo: process.env.REPLY_TO
    };

    // Send email

    await transporter.sendMail(mailOptions);
    console.log("mail sent successfully");
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email: ", error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

module.exports = router;

// Supported services
// Service names are case insensitive

// "1und1"
// "AOL"
// "DebugMail.io"
// "DynectEmail"
// "FastMail"
// "GandiMail"
// "Gmail"
// "Godaddy"
// "GodaddyAsia"
// "GodaddyEurope"
// "hot.ee"
// "Hotmail"
// "iCloud"
// "mail.ee"
// "Mail.ru"
// "Mailgun"
// "Mailjet"
// "Mandrill"
// "Naver"
// "Postmark"
// "QQ"
// "QQex"
// "SendCloud"
// "SendGrid"
// "SES"
// "Sparkpost"
// "Yahoo"
// "Yandex"
// "Zoho"
