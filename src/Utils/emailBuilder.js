const { SMTP_ADMINEMAIL } = process.env;

const emailBuilder = (to, subject, message, messageHtml) => {
    return {
        from: 'group.creva@gmail.com',
        to: to === 'ADMIN' ? SMTP_ADMINEMAIL : to,
        subject: subject,
        text: message,
        html: messageHtml,
        attachments:[
            {
                filename: "Gmail.svg",
                path: "./PlantillasEmail/Fotitos/BxBxlGmail.svg",
                cid: "Gmail"
            },
            {
                filename: "Creva.svg",
                path: "./PlantillasEmail/Fotitos/logo.png",
                cid: "creva"
            },
            {
                filename: "wapp.svg",
                path: "./PlantillasEmail/Fotitos/MdiWhatsapp.svg",
                cid: "Wapp"
            },
            {
                filename: "Ig.svg",
                path: "./PlantillasEmail/Fotitos/PhInstagramLogo.svg",
                cid: "Ig"
            },
            {
                filename: "Linkedin.svg",
                path: "./PlantillasEmail/Fotitos/UilLinkedin.svg",
                cid: "Linkedin"
            }
        ]
    }
}

module.exports = emailBuilder;