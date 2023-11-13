const { SMTP_ADMINEMAIL } = process.env;
const htmlToString = require("../Utils/PlantillasEmail/htmlString")

const emailBuilder = (to, subject, message, name, service) => {

    const messageHtml = htmlToString(name, service)
    console.log('hola');

if(name && service && messageHtml !== undefined){

    return {
        from: 'group.creva@gmail.com',
        to: to === 'ADMIN' ? SMTP_ADMINEMAIL : to,
        subject: messageHtml.subject?messageHtml.subject:subject,
        text: message,
        html: messageHtml.message
    }
}

return {
    from: 'group.creva@gmail.com',
    to: to === 'ADMIN' ? SMTP_ADMINEMAIL : to,
    subject: subject,
    text: message
}

}

module.exports = emailBuilder;