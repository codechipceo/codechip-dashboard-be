const nodemailer = require("nodemailer");
const pug = require("pug");
const path = require("path");
const { HttpsProxyAgent } = require("https-proxy-agent");
const smtpTransport = require("nodemailer-smtp-transport");
const proxyUrl = "http://154.16.146.41:80";
const email = "morningstar.luciferr01@gmail.com";
const pwd = "tphyfmefmfbtqhud";

const smtpConfig = {
  host: "smtp.hostinger.com", // e.g., 'smtp.gmail.com'
  port: 465, // usually 587 for secure SMTP
  secure: true, // true for 465, false for other ports
  auth: {
    user: "mansabmir@codechip.in",
    pass: "Trespassers@007",
  },
};

const gmailConfig = {
  service: "gmail",
  auth: {
    user: email,
    pass: pwd,
  },
};
// Create a proxy agent
const proxyAgent = new HttpsProxyAgent(proxyUrl);

// Create the transporter with the proxy agent
// const transporter = nodemailer.createTransport(
//   smtpTransport({
//     ...smtpConfig,
//     tls: {
//       rejectUnauthorized: false,
//       agent: proxyAgent,
//     },
//   })
// );

transporter = nodemailer.createTransport(smtpConfig);

class EmailUtil {
  compileTemplate(templateName, data) {
    const filePath = path.join(__dirname, "templates", `${templateName}.pug`);
    return pug.renderFile(filePath, data);
  }

  // Send email
  async sendEmail(to, subject, templateName, templateData) {
    try {
      const html = this.compileTemplate(templateName, templateData);

      const mailOptions = {
        from: "mansabmir@codechip.in",
        to,
        subject,
        html,
      };

      await transporter.sendMail(mailOptions).then((res) => console.log(res));
      await new Promise((resolve) => setTimeout(resolve, 1000 * 60 * 3)); // 3 minute gap between each email
      console.log("Email sent successfully", to);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  }
}
// Create a transporter
const emailUtility = new EmailUtil();
module.exports = { emailUtility };
