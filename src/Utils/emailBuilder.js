const { SMTP_ADMINEMAIL } = process.env;
const htmlToString = require("../Utils/PlantillasEmail/htmlString")

const emailBuilder = (to, subject, message, name, service) => {

    const messageHtml = htmlToString(name, service)


    return {
        from: 'group.creva@gmail.com',
        to: to === 'ADMIN' ? SMTP_ADMINEMAIL : to,
        subject: subject,
        text: message,
        html: messageHtml
    }
}

module.exports = emailBuilder;