const nodemailer = require("nodemailer");
const router = require('express').Router()
const path = require('path');

const test = (async () => {
    // router.post('/contact', async (req, res) => {
        // const { name, email, phone, message } = req.body;
    
      // Set up transporter with your Gmail account
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "troyjgrossi@gmail.com", // Your Gmail address
          pass: "Alfredspyro@22",    // Your generated app password or Gmail password
        },
      });
    
      // Set up email data
      const mailOptions = {
        from: 'troyjgrossi@gmail.com', // The user's email address
        to: "ttroygrossit@gmail.com", // Your email address to receive the form data
        subject: `New contact form submission from ${'name'}`, // Subject of the email
        text: `
          You have a new message from your portfolio contact form.
    
          Name: ${'name'}
          Email: ${'email'}
          Phone: ${'phone'}
          Message: ${'message'}
        `,
      };
    
    
      // Send email
      try {
        await transporter.sendMail(mailOptions);
        // res.status(200).json({ message: "Email sent successfully!" });
      } catch (error) {
        console.error("Error sending email: ", error);
        // res.status(500).json({ error: "Failed to send email" });
      }
    // });
    console.log('test')
})();





module.exports = router