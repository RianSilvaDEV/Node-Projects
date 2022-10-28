require('dotenv').config();

const port = process.env.PORT || port;
const nodemailer = require('nodemailer');

const SMTP_CONFIG = require('./config/smtp');

const transporter = nodemailer.createTransport({
    host: SMTP_CONFIG.host,
    port: SMTP_CONFIG.port,
    secure: false,
    auth: {
        user: SMTP_CONFIG.user,
        pass: SMTP_CONFIG.password
    },
    tls: {
        rejectUnauthorized: false,
    }
});

const run = async () =>{
    const mailSent = await transporter.sendMail({
        text: "Texto do E-mail",
        subject: "Assunto do e-mail",
        from: "",
        to: ["", ""],
        html: `
        <html>
        <body>
          <p> Mensagem....</p>
        </body>
      </html> 
        `,
      });
      console.log(mailSent);
}
run();
