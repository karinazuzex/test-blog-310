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

const contact = ({ email, name, subject, message, location }, ) => {
    const mailOptions = {
        from : "Memurai <noreply@memurai.com>",
        to: "contact@memurai.com",
        subject,
        html: `
            <h2>Memurai info request</h2><br />
            <strong>Name:</strong> ${name}<br />
            <strong>Email:</strong> ${email}<br />
            <strong>Message:</strong><br />
            ${message}
            <br />
            <br />
            ---- Location ---<br />
            <strong>IP address:</strong> ${location.ip}<br />
            <strong>ISP:</strong> ${location.isp}<br />
            <strong>City:</strong> ${location.city}<br />
            <strong>Region:</strong> ${location.region}<br />
            <strong>Country:</strong> ${location.country_name}<br />
        `,
    };

    return new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
};

const contactThanks = ({ email, name, subject, message }, toSelf = true) => {
    const from = toSelf ? `Memurai Contact: ${name}` : "Memurai Contact Form";
    const mailOptions = {
        from: {
            name: from,
            address: 'contact@memurai.com'
        },
        to: toSelf ? "noreply@memurai.com" : email,
        replyTo: toSelf ? email : undefined,
        subject,
        html: `
            Thank you for contacting Memurai.<br />
            <br />
            For our Licensing team to provide the best possible solution please tell us more about the Memurai usage scenarios.
            <br />
            1. Is it for in-house use, or to be redistributed as part of your company's application?
            <br />
            2. If used in house:
            <br />
            <span style="margin-left: 10px;">
                a) Do you have a particular topology in mind? (i.e. high availability, number of instances, ...)
            </span>
            <br />
            3. If redistributed:
            <br />
            <span style="margin-left: 10px;">
                a) How many end-user deployments do you anticipate and what does the typical topology look like?
            </span>
            <br />
            <span style="margin-left: 10px;">
                b) Is your application licensed on a subscription basis or do you issue perpetual licenses?
                If you prefer to discuss your particular scenario please schedule a short 10-15 min call here is my calendar to book a call.
            </span>
            <br />
            Thank you for your interest in Memurai.
            <br />
            Thank you,<br />
            Rush Velcsov<br />
            Senior Technical PM – Memurai & Janea Systems
            <br />
            <br />
            _____
            <br />
            Memurai information request
            <br /><br />
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
    contactThanks,
};
