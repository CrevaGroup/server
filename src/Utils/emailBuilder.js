const { SMTP_ADMINEMAIL } = process.env;
const htmlToString = require("../Utils/PlantillasEmail/htmlString.js")

const emailBuilder = (to, subject, message, name, service) => {

    const messageHtml = htmlToString(name, service)

    if (name && service && messageHtml !== undefined) {

        return {
            from: 'group.creva@gmail.com',
            to: to === 'ADMIN' ? SMTP_ADMINEMAIL : to,
            subject: messageHtml.subject ? messageHtml.subject : subject,
            text: message,
            html: messageHtml.message
        }
    } else if (name && service) {

        return {
            from: 'group.creva@gmail.com',
            to: to === 'ADMIN' ? SMTP_ADMINEMAIL : to,
            subject: subject,
            text: message,
            html: `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
        <style>
            p,
            a,
            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
                font-family: 'Roboto', sans-serif !important;
            }
    
            h1 {
                font-size: 30px !important;
            }
    
            h2 {
                font-size: 25px !important;
            }
    
            h3 {
                font-size: 18px !important;
            }
    
            h4 {
                font-size: 16px !important;
            }
    
            p,
            a {
                font-size: 15px !important;
            }
    
            .claseBoton {
                width: 30%;
                background-color: #adcbfe;
                border: 3px solid #adcbfe;
                color: black;
                padding: 16px 32px;
                text-align: center;
                text-decoration: none;
                font-weight: bold;
                display: inline-block;
                font-size: 16px;
                margin: 4px 2px;
                transition-duration: 0.4s;
                cursor: pointer;
            }
    
            .claseBoton:hover {
                background-color: #4b1073;
                color: #ffffff;
            }
    
            .imag {
                width: 20px;
                height: 20px;
            }
    
            .contA {
                margin: 0px 5px 0 5px;
            }
    
            .afooter {
                color: #ffffff !important;
                text-decoration: none;
                font-size: 13px !important;
            }
        </style>
    </head>
    
    <body>
        <div style="width: 100%; background-color: #e3e3e3;">
            <div style="padding: 20px 10px 20px 10px;">
                <!-- Imagen inicial -->
                <div
                    style="display: flex; justify-content: space-between; align-items: baseline; background-color: #c6a9d9; padding: 10px 0px 10px 0px; width: 100%; text-align: center;">
                    <img src="cid:creva" alt="creva" style="width: 50px; height: auto; margin: 0 0 0 20px;">
                    <h3 style="margin: 0 10px 0 0;">CreVa</h3>
                </div>
                <!-- Imagen inicial -->
    
                <!-- Contenido principal -->
                <div style="background-color: #ffffff; padding: 20px 0px 5px 0px; width: 100%; text-align: left;">
                    <div style="width: 100%; display: flex; justify-content: center;">
                        <h1>${service}</h1>
                    </div>
                    <div style="padding-left: 50px; padding-right: 50px;">
                        <p>¡HOLA ${name}!</p>
                        <p>¡Desde CreVa te agradecemos por confiar en nosotros y adquirir nuestro servicio!</p>
                        <p>Nuestro equipo comenzará a trabajar en tu solicitud. Nos comprometemos a brindarte un excelente
                            servicio y un producto final de calidad.</p>
                        <p>Si tienes alguna pregunta o necesitas asistencia, no dudes en ponerte en contacto con nosotros a
                            través de nuestro <a class="afooter" href="mailto:crevagroup.global@gmail.com">correo electrónico</a>.</p>
                        <p>¡Estamos entusiasmados por colaborar contigo y ayudarte a alcanzar tus metas profesionales!</p>
                    </div>
    
                    <div
                        style="width: 100%; display: flex; justify-content: right; align-items: center;margin-bottom: 50px;">
                        <img src="cid:creva" style="padding-right: 10px; width: 30px; height: 30px;" />
                        <p style=" padding-right: 50px;"><i>Atentamente:</i><br>Equipo CreVa</p>
                    </div>
    
                    <!-- Botón -->
                    <div style="width: 100%; display: flex; justify-content: center;">
                        <a class="claseBoton" href="https://creva.vercel.app/">CreVa</a>
                    </div>
                </div>
                <!-- Contenido principal -->
    
                <!-- Footer -->
                <div
                    style="background-color: #c6a9d9; color: #ffffff; padding: 5px 0px 0px 0px; width: 100%; text-align: center;">
                    <!-- Redes sociales -->
                    <a href="https://www.linkedin.com/company/creva-group/" class="contA"><img src="cid:Linkedin"
                            class="imag" /></a>
                    <a href="https://www.instagram.com/creva.group/" class="contA"><img src="cid:Ig" class="imag" /></a>
                    <a href="https://api.whatsapp.com/send?phone=5491167867530&text=%C2%A1Hola%21+Quiero+conocer+m%C3%A1s+sobre+los+servicios+de+CreVa+Group."
                        class="contA"><img src="cid:Wapp" class="imag" /></a>
                    <a href="mailto:crevagroup.global@gmail.com" class="contA"><img src="cid:Gmail" class="imag" /></a>
                    <!-- Redes sociales -->
    
                    <h4>Soporte</h4>
                    <p style="font-size: 13px; padding: 0px 20px 0px 20px;">
                        Comunícate con nosotros por los siguientes medios:<br>
                        Correo: <a class="afooter"
                            href="mailto:crevagroup.global@gmail.com">crevagroup.global@gmail.com</a><br>
                        Whatsapp: <a class="afooter" href="https://wa.me/5491167867530">+54 9 11 6786 7530</a><br>
                    </p>
                    <p style="background-color: #4b1073; padding: 10px 0px 10px 0px; font-size: 12px !important;">
                        © 2023 CreVa, todos los derechos reservados.
                    </p>
                </div>
                <!-- Footer -->
    
    
    
            </div>
        </div>
    </body>
    
    </html>`
        }
    } else if(subject === "Bienvenid@") {
        return {
            from: 'group.creva@gmail.com',
            to: to === 'ADMIN' ? SMTP_ADMINEMAIL : to,
            subject: subject,
            text: message,
            html: `<!DOCTYPE html>
            <html lang="en">
            
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
            
                <style>
                    p,
                    a,
                    h1,
                    h2,
                    h3,
                    h4,
                    h5,
                    h6 {
                        font-family: 'Roboto', sans-serif !important;
                    }
            
                    h1 {
                        font-size: 30px !important;
                    }
            
                    h2 {
                        font-size: 25px !important;
                    }
            
                    h3 {
                        font-size: 18px !important;
                    }
            
                    h4 {
                        font-size: 16px !important;
                    }
            
                    p,
                    a {
                        font-size: 15px !important;
                    }
            
                    .claseBoton {
                        width: 30%;
                        background-color: #adcbfe;
                        border: 3px solid #adcbfe;
                        color: black;
                        padding: 16px 32px;
                        text-align: center;
                        text-decoration: none;
                        font-weight: bold;
                        display: inline-block;
                        font-size: 16px;
                        margin: 4px 2px;
                        transition-duration: 0.4s;
                        cursor: pointer;
                    }
            
                    .claseBoton:hover {
                        background-color: #4b1073;
                        color: #ffffff;
                    }
            
                    .imag {
                        width: 20px;
                        height: 20px;
                    }
            
                    .contA {
                        margin: 0px 5px 0 5px;
                    }
            
                    .afooter {
                        color: #ffffff !important;
                        text-decoration: none;
                        font-size: 13px !important;
                    }
                </style>
            </head>
            
            <body>
                <div style="width: 100%; background-color: #e3e3e3;">
                    <div style="padding: 20px 10px 20px 10px;">
                        <!-- Imagen inicial -->
                        <div
                            style="display: flex; justify-content: space-between; align-items: baseline; background-color: #c6a9d9; padding: 10px 0px 10px 0px; width: 100%; text-align: center;">
                            <img src="cid:creva" alt="creva" style="width: 50px; height: auto; margin: 0 0 0 20px;">
                            <h3 style="margin: 0 10px 0 0;">CreVa</h3>
                        </div>
                        <!-- Imagen inicial -->
            
                        <!-- Contenido principal -->
                        <div style="background-color: #ffffff; padding: 20px 0px 5px 0px; width: 100%; text-align: left;">
                            <div style="width: 100%; display: flex; justify-content: center;">
                                <h1>¡BIENVENID@!</h1>
                            </div>
                            <div style="padding-left: 50px; padding-right: 50px;">
                                <p>¡HOLA ${name}!</p>
                                <p>¡Bienvenid@ a nuestra comunidad!</p>
                                <p>Estamos emocionados de darte la bienvenida a CreVa. Queremos que te sientas parte de
                                    nuestra comunidad desde el primer momento.</p>
                                <p>En nuestro sitio, encontrarás recursos útiles, artículos interesantes y herramientas que te
                                    ayudarán en tu desarrollo profesional.</p>
                                <p>Si tienes alguna pregunta o necesitas ayuda, no dudes en contactarnos. Estamos aquí para apoyarte
                                    en tu camino hacia el éxito.</p>
                                <p>¡Gracias por unirte a nosotros! Estamos ansiosos por verte alcanzar tus metas profesionales.</p>
                            </div>
            
                            <div
                                style="width: 100%; display: flex; justify-content: right; align-items: center;margin-bottom: 50px;">
                                <img src="cid:creva" style="padding-right: 10px; width: 30px; height: 30px;" />
                                <p style=" padding-right: 50px;"><i>Atentamente:</i><br>Equipo CreVa</p>
                            </div>
            
                            <!-- Botón -->
                            <div style="width: 100%; display: flex; justify-content: center;">
                                <a class="claseBoton" href="https://creva.vercel.app/">CreVa</a>
                            </div>
                        </div>
                        <!-- Contenido principal -->
            
                        <!-- Footer -->
                        <div
                            style="background-color: #c6a9d9; color: #ffffff; padding: 5px 0px 0px 0px; width: 100%; text-align: center;">
                            <!-- Redes sociales -->
                            <a href="https://www.linkedin.com/company/creva-group/" class="contA"><img src="cid:Linkedin"
                                    class="imag" /></a>
                            <a href="https://www.instagram.com/creva.group/" class="contA"><img src="cid:Ig" class="imag" /></a>
                            <a href="https://api.whatsapp.com/send?phone=5491167867530&text=%C2%A1Hola%21+Quiero+conocer+m%C3%A1s+sobre+los+servicios+de+CreVa+Group."
                                class="contA"><img src="cid:Wapp" class="imag" /></a>
                            <a href="mailto:crevagroup.global@gmail.com" class="contA"><img src="cid:Gmail" class="imag" /></a>
                            <!-- Redes sociales -->
            
                            <h4>Soporte</h4>
                            <p style="font-size: 13px; padding: 0px 20px 0px 20px;">
                                Comunícate con nosotros por los siguientes medios:<br>
                                Correo: <a class="afooter"
                                    href="mailto:crevagroup.global@gmail.com">crevagroup.global@gmail.com</a><br>
                                Whatsapp: <a class="afooter" href="https://wa.me/5491167867530">+54 9 11 6786 7530</a><br>
                            </p>
                            <p style="background-color: #4b1073; padding: 10px 0px 10px 0px; font-size: 12px !important;">
                                © 2023 CreVa, todos los derechos reservados.
                            </p>
                        </div>
                        <!-- Footer -->
            
            
            
                    </div>
                </div>
            </body>
            
            </html>`
        }
    } else {
        return {
            from: 'group.creva@gmail.com',
            to: to === 'ADMIN' ? SMTP_ADMINEMAIL : to,
            subject: subject,
            text: message,
            html: `<!DOCTYPE html>
            <html lang="en">
            
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
            
                <style>
                    p,
                    a,
                    h1,
                    h2,
                    h3,
                    h4,
                    h5,
                    h6 {
                        font-family: 'Roboto', sans-serif !important;
                    }
            
                    h1 {
                        font-size: 30px !important;
                    }
            
                    h2 {
                        font-size: 25px !important;
                    }
            
                    h3 {
                        font-size: 18px !important;
                    }
            
                    h4 {
                        font-size: 16px !important;
                    }
            
                    p,
                    a {
                        font-size: 15px !important;
                    }
            
                    .claseBoton {
                        width: 30%;
                        background-color: #adcbfe;
                        border: 3px solid #adcbfe;
                        color: black;
                        padding: 16px 32px;
                        text-align: center;
                        text-decoration: none;
                        font-weight: bold;
                        display: inline-block;
                        font-size: 16px;
                        margin: 4px 2px;
                        transition-duration: 0.4s;
                        cursor: pointer;
                    }
            
                    .claseBoton:hover {
                        background-color: #4b1073;
                        color: #ffffff;
                    }
            
                    .imag {
                        width: 20px;
                        height: 20px;
                    }
            
                    .contA {
                        margin: 0px 5px 0 5px;
                    }
            
                    .afooter {
                        color: #ffffff !important;
                        text-decoration: none;
                        font-size: 13px !important;
                    }
                </style>
            </head>
            
            <body>
                <div style="width: 100%; background-color: #e3e3e3;">
                    <div style="padding: 20px 10px 20px 10px;">
                        <!-- Imagen inicial -->
                        <div
                            style="display: flex; justify-content: space-between; align-items: baseline; background-color: #c6a9d9; padding: 10px 0px 10px 0px; width: 100%; text-align: center;">
                            <img src="cid:creva" alt="creva" style="width: 50px; height: auto; margin: 0 0 0 20px;">
                            <h3 style="margin: 0 10px 0 0;">CreVa</h3>
                        </div>
                        <!-- Imagen inicial -->
            
                        <!-- Contenido principal -->
                        <div style="background-color: #ffffff; padding: 20px 0px 5px 0px; width: 100%; text-align: left;">
                            <div style="width: 100%; display: flex; justify-content: center;">
                                <h1>¡ATENCION!</h1>
                            </div>
                            <div style="padding-left: 50px; padding-right: 50px;">
                                <p>${message}</p>
                            </div>
            
                            <div
                                style="width: 100%; display: flex; justify-content: right; align-items: center;margin-bottom: 50px;">
                                <img src="cid:creva" style="padding-right: 10px; width: 30px; height: 30px;" />
                                <p style=" padding-right: 50px;"><i>Atentamente:</i><br>Equipo CreVa</p>
                            </div>
            
                            <!-- Botón -->
                            <div style="width: 100%; display: flex; justify-content: center;">
                                <a class="claseBoton" href="https://creva.vercel.app/">CreVa</a>
                            </div>
                        </div>
                        <!-- Contenido principal -->
            
                        <!-- Footer -->
                        <div
                            style="background-color: #c6a9d9; color: #ffffff; padding: 5px 0px 0px 0px; width: 100%; text-align: center;">
                            <!-- Redes sociales -->
                            <a href="https://www.linkedin.com/company/creva-group/" class="contA"><img src="cid:Linkedin"
                                    class="imag" /></a>
                            <a href="https://www.instagram.com/creva.group/" class="contA"><img src="cid:Ig" class="imag" /></a>
                            <a href="https://api.whatsapp.com/send?phone=5491167867530&text=%C2%A1Hola%21+Quiero+conocer+m%C3%A1s+sobre+los+servicios+de+CreVa+Group."
                                class="contA"><img src="cid:Wapp" class="imag" /></a>
                            <a href="mailto:crevagroup.global@gmail.com" class="contA"><img src="cid:Gmail" class="imag" /></a>
                            <!-- Redes sociales -->
            
                            <h4>Soporte</h4>
                            <p style="font-size: 13px; padding: 0px 20px 0px 20px;">
                                Comunícate con nosotros por los siguientes medios:<br>
                                Correo: <a class="afooter"
                                    href="mailto:crevagroup.global@gmail.com">crevagroup.global@gmail.com</a><br>
                                Whatsapp: <a class="afooter" href="https://wa.me/5491167867530">+54 9 11 6786 7530</a><br>
                            </p>
                            <p style="background-color: #4b1073; padding: 10px 0px 10px 0px; font-size: 12px !important;">
                                © 2023 CreVa, todos los derechos reservados.
                            </p>
                        </div>
                        <!-- Footer -->
            
            
            
                    </div>
                </div>
            </body>
            
            </html>`
        }
    }

}

module.exports = emailBuilder;