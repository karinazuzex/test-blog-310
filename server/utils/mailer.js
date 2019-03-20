const nodemailer = require("nodemailer");
const config = require("../config");

const transporter = nodemailer.createTransport({
    port: config.smtp_port,
    host: config.smtp_server,
    secure: true,
    requireTLS: true,
    disableFileAccess: true,
    auth: {
        type: 'login',
        user: config.smtp_username,
        pass: config.smtp_password
    },
});

const contact = ({ email, name, subject, message }) => {
    const mailOptions = {
        from : "Memurai Website",
        to: "contact@memurai.com",
        subject,
        html: `
        <h2>New callback request</h2><br />
        <strong>Name:</strong> ${name}<br />
        <strong>Email:</strong> ${email}<br />
        <strong>Message:</strong><br />
        ${message}
        `,
    };

    return new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
};

const download = ({ email, name, url }) => {
    const mailOptions = {
        from : "Memurai Website",
        to: `${name} <${email}>`,
        subject: "Download link",
        html: `
        <h2>Your download link for <strong>Memurai</strong></h2><br />
        <a href="${url}">url</a>
        `,
    };

    return new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
};

module.exports = {
    contact,
    download,
};
