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
        from : "Memurai <noreply@memurai.com>",
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

const download = ({ email, url }) => {
    const mailOptions = {
        from: "Memurai Team <support@memurai.com>",
        to: email,
        subject: "Memurai for Windows download link",
        html: `
        Thank you for your interest in the Memurai for Windows Developer Edition!<br /><br />
        <b>To download the software please follow the link below:</b><br /><br />
        <a clicktracking=off href="${url}">Download Memurai for Windows (Developer Edition)</a><br /><br />
        For help with installation and more, check out the documentation at <a clicktracking=off href="https://docs.memurai.com">https://docs.memurai.com</a><br /><br />
        Feel free to contact us to report issues, ask questions, or provide suggestions. We are happy to help!
        Just email <a clicktracking=off href="mailto:support@memurai.com">support@memurai.com</a>,
        or visit the support portal at <a clicktracking=off href="https://support.memurai.com">https://support.memurai.com</a><br /><br />
        Kind regards,<br />
        The Memurai team<br />
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
