const nodemailer = require('nodemailer');
const { SMTP_HOST, SMTP_USERNAME, SMTP_PASSWORD } = process.env;

const transporter = nodemailer.createTransport({
    service: SMTP_HOST,
    auth: {
        user: SMTP_USERNAME,
        pass: SMTP_PASSWORD
    }
})

module.exports = transporter;