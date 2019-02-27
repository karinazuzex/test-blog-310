const nodemailer = require("nodemailer");
const secrets = require("../secrets");

const sendContact = ({ email, name, subject, message }) => {
    const transporter = nodemailer.createTransport({
        port: secrets.smtp_port,
        host: secrets.smtp_server,
        secure: true,
        requireTLS: true,
        disableFileAccess: true,
        auth: {
            type: 'login',
            user: secrets.smtp_username,
            pass: secrets.smtp_password
        },
    });

    const from = `${name} <${email}>`;
    const mailOptions = {
        from : "Memurai Website",
        to: "contact@memurai.com",
        subject,
        text: message,
    };

    return new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (err, res) => {
            err ? reject(err) : resolve(res);
        });
    });

};

module.exports = sendContact;
