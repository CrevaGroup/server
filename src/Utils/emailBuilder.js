const { SMTP_ADMINEMAIL } = process.env;

const emailBuilder = (to, subject, message) => {
    return {
        from: 'group.creva@gmail.com',
        to: to = 'ADMIN' ? SMTP_ADMINEMAIL : to,
        subject: subject,
        text: message
    }
}

module.exports = emailBuilder;