const nodemailer = require("nodemailer");

const sendContact = ({ email, name, subject, message }) => {
    console.log("START");
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            type: 'OAuth2',
            user: "",
            clientId: "",
            clientSecret: "",
            refreshToken: "",
            accessToken: "",
        },
    });

    const from = `${name} <${email}>`;
    const mailOptions = {
        from,
        to: "dnskoub@gmail.com",
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
