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

const contact = ({ email, name, subject, message, location }) => {
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
    const from = toSelf ? `Memurai Contact` : "Memurai Contact Form";
    subject += ` - request from ${name}`;
    const mailOptions = {
        from: {
            name: from,
            address: 'contact@memurai.com'
        },
        to: toSelf ? "noreply@memurai.com" : email,
        replyTo: toSelf ? email : undefined,
        subject,
        html: `
            Hello ${name},<br />
            <br />
            Thank you for your interest in Memurai Enterprise. One of our team members will reach out shortly.<br />
            <br />
            For the best license op on please answer the following ques ons about your Memurai Enterprise usage scenarios.<br />
            <br />
            1. Is it for in-house use at your company? Or to be redistributed as commercial system that is built for a 3rd party end-user by your developers?<br />
            2. If used in house:
            <br />
            <span style="margin-left: 45px;">
                a. Do you have a particular topology in mind? (i.e. high availability, number of instances, ...)
            </span>
            <br />
            3. If redistributed:
            <br />
            <span style="margin-left: 45px;">
                a. How many end-user deployments do you anticipate and what does the typical topology look like?
            </span>
            <br />
            <span style="margin-left: 45px;">
                b. Is your application licensed on a subscription basis or do you issue perpetual licenses?<br />
            </span>
            <br />
            To clarify specific technical or implementa on ques ons please feel free to schedule a call at your convenience - <a href="https://calendly.com/rushvel/memurai"
            style="font-weight:bold; color:#442534; text-decoration-color: #954f72;">https://calendly.com/rushvel/memurai</a> <br />
            <br />
            Rush Velcsov<br />
            Senior Technical PM – <a href="https://twitter.com/MemuraiHQ" style="color:#0707ff;text-decoration:underline;text-decoration-color:#954f72;">Memurai</a> &
            <a href="https://twitter.com/JaneaSystems" style="color:#0707ff; text-decoration:underline; text-decoration-color:#166dc5">Janea Systems.</a>
            <br />
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
