function htmlToString (name, service){
    
const plantillas = [
    {   name: "Curriculum",
        subject:"¡Gracias por tu compra del servicio 'Confección de curriculum'!",
        message: `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
        <style>
            p, a, h1, h2, h3, h4, h5, h6 {font-family: 'Roboto', sans-serif !important;}
            h1{ font-size: 30px !important;}
            h2{ font-size: 25px !important;}
            h3{ font-size: 18px !important;}
            h4{ font-size: 16px !important;}
            p, a{font-size: 15px !important;}
    
            .claseBoton{
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
            .claseBoton:hover{
                background-color: #4b1073;
                color: #ffffff;
            }
            .imag{
                width: 20px;
                height: 20px;
            }
            .contA{
                margin: 0px 5px 0 5px;
            }
            .afooter{
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
                <div style="display: flex; justify-content: space-between; align-items: baseline; background-color: #c6a9d9; padding: 10px 0px 10px 0px; width: 100%; text-align: center;">
                    <img src="https://res.cloudinary.com/dk4amlgtk/image/upload/v1699542930/lpgnqarne61rp5rlbgrs.png" alt="creva" style="width: 50px; height: auto; margin: 0 0 0 20px;">
                    <h3 style="margin: 0 10px 0 0;">CreVa</h3>
                </div>
                <!-- Imagen inicial -->
    
                <!-- Contenido principal -->
                <div style="background-color: #ffffff; padding: 20px 0px 5px 0px; width: 100%; text-align: left;">
                    <div style="width: 100%; display: flex; justify-content: center;">
                        <h1>Confección de currículum</h1>
                    </div>
                    <div style="padding-left: 50px; padding-right: 50px;">
                        <p>¡HOLA ${name}!</p>
                        <p>¡Gracias por confiar en CreVa para potenciar tu carrera laboral!</p>
                        <p>A continuación, te proporcionamos un <a href="https://forms.office.com/r/8wvRLvXMyJ">enlace</a> para acceder al formulario que deberás completar con tus datos de contacto e información académica y profesional.</p>
                        <p>Este formulario nos permitirá conocer más sobre tu perfil y tus metas laborales, lo que nos ayudará a diseñar un currículum a medida que destaque tus habilidades y experiencia de la mejor manera posible.</p>
                        <p>Una vez completo, nuestro equipo comenzará a trabajar en tu CV personalizado. 
                            Nos comprometemos a entregarte el documento final en formato PDF dentro de los próximos <strong>7 días hábiles</strong> después de recibir el formulario completo.</p>
                        <p>Si tienes alguna pregunta o necesitas asistencia, no dudes en ponerte en contacto con nuestro equipo de soporte crevagroup.global@gmail.com</p>
                        <!-- Gracias -->
                        <p>¡Estamos ansiosos por ayudarte a alcanzar tus metas profesionales!</p>
                    </div>
                    
                    <div style="width: 100%; display: flex; justify-content: right; align-items: center;margin-bottom: 50px;" >
                        <img src="https://res.cloudinary.com/dk4amlgtk/image/upload/v1699542930/lpgnqarne61rp5rlbgrs.png" style="padding-right: 10px; width: 30px; height: 30px;"/>
                        <p style=" padding-right: 50px;"><i>Atentamente:</i><br>Equipo CreVa</p>
                    </div>
    
                    <!-- Botón -->
                    <div style="width: 100%; display: flex; justify-content: center;">
                        <a class="claseBoton" href="https://creva.vercel.app/">CreVa</a>
                    </div>
                </div>
                <!-- Contenido principal -->
    
                <!-- Footer -->
                <div style="background-color: #c6a9d9; color: #ffffff; padding: 5px 0px 0px 0px; width: 100%; text-align: center;">
                    <!-- Redes sociales -->
                    <a href="https://www.linkedin.com/company/creva-group/" class="contA"><img src="https://res.cloudinary.com/dk4amlgtk/image/upload/v1699557628/pay9uja4vkx7x4dd0vk4.png" class="imag" /></a>
                    <a href="https://www.instagram.com/creva.group/" class="contA"><img src="https://res.cloudinary.com/dk4amlgtk/image/upload/v1699557628/lmw7rj7eyiyi5b8t4vil.png" class="imag" /></a>
                    <a href="https://api.whatsapp.com/send?phone=5491167867530&text=%C2%A1Hola%21+Quiero+conocer+m%C3%A1s+sobre+los+servicios+de+CreVa+Group." class="contA"><img src="https://res.cloudinary.com/dk4amlgtk/image/upload/v1699557628/l0aulvrsqpsbfrighypo.png" class="imag" /></a>
                    <a href="mailto:crevagroup.global@gmail.com" class="contA"><img src="https://res.cloudinary.com/dk4amlgtk/image/upload/v1699557628/bepikbe0pax0t4zoeld6.png" class="imag" /></a>
                    <!-- Redes sociales -->
    
                    <h4>Soporte</h4>
                    <p style="font-size: 13px; padding: 0px 20px 0px 20px;">
                        Comunícate con nosotros por los siguientes medios:<br>
                        Correo: <a class="afooter" href="mailto:crevagroup.global@gmail.com">crevagroup.global@gmail.com</a><br>
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
    },
    {   name: "Busqueda",
        subject: "¡Gracias por tu compra del E-book de Búsqueda Laboral!",
        message: `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
        
            <style>
                p, a, h1, h2, h3, h4, h5, h6 {font-family: 'Roboto', sans-serif !important;}
                h1{ font-size: 30px !important;}
                h2{ font-size: 25px !important;}
                h3{ font-size: 18px !important;}
                h4{ font-size: 16px !important;}
                p, a{font-size: 15px !important;}
        
                .claseBoton{
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
                .claseBoton:hover{
                    background-color: #4b1073;
                    color: #ffffff;
                }
                .imag{
                    width: 20px;
                    height: 20px;
                }
                .contA{
                    margin: 0px 5px 0 5px;
                }
                .afooter{
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
                    <div style="display: flex; justify-content: space-between; align-items: baseline; background-color: #c6a9d9; padding: 10px 0px 10px 0px; width: 100%; text-align: center;">
                        <img src="https://res.cloudinary.com/dk4amlgtk/image/upload/v1699542930/lpgnqarne61rp5rlbgrs.png" alt="creva" style="width: 50px; height: auto; margin: 0 0 0 20px;">
                        <h3 style="margin: 0 10px 0 0;">CreVa</h3>
                    </div>
                    <!-- Imagen inicial -->
        
                    <!-- Contenido principal -->
                    <div style="background-color: #ffffff; padding: 20px 0px 5px 0px; width: 100%; text-align: left;">
                        <div style="width: 100%; display: flex; justify-content: center;">
                            <h1>E-Book Búsqueda laboral</h1>
                        </div>
                        <div style="padding-left: 50px; padding-right: 50px;">
                            <p>¡HOLA ${name}!</p>
                            <p>Gracias por elegir nuestro servicio de E-book de Búsqueda Laboral, tu pago ha sido procesado con éxito. Durante el día de mañana, el e-book será enviado a tu correo para que puedas descargarlo.</p>
                            <p>Estamos emocionados de poder ayudarte en tu búsqueda de empleo y brindarte herramientas valiosas para tener éxito en tu carrera profesional.</p>
                            <p>Si tienes alguna pregunta o necesitas asistencia, no dudes en ponerte en contacto con nuestro equipo de soporte crevagroup.global@gmail.com</p>
                            <!-- Gracias -->
                            <p>Esperamos que este E-book te sea de gran utilidad en tu búsqueda laboral y te ayude a alcanzar tus metas profesionales. ¡Te deseamos mucho éxito en tu camino!
                            </p>
                        </div>
                        
                        <div style="width: 100%; display: flex; justify-content: right; align-items: center;margin-bottom: 50px;" >
                            <img src="https://res.cloudinary.com/dk4amlgtk/image/upload/v1699542930/lpgnqarne61rp5rlbgrs.png" style="padding-right: 10px; width: 30px; height: 30px;"/>
                            <p style=" padding-right: 50px;"><i>Atentamente:</i><br>Equipo CreVa</p>
                        </div>
        
                        <!-- Botón -->
                        <div style="width: 100%; display: flex; justify-content: center;">
                            <a class="claseBoton" href="https://creva.vercel.app/">CreVa</a>
                        </div>
                    </div>
                    <!-- Contenido principal -->
        
                    <!-- Footer -->
                    <div style="background-color: #c6a9d9; color: #ffffff; padding: 5px 0px 0px 0px; width: 100%; text-align: center;">
                        <!-- Redes sociales -->
                        <a href="https://www.linkedin.com/company/creva-group/" class="contA"><img src="https://res.cloudinary.com/dk4amlgtk/image/upload/v1699557628/pay9uja4vkx7x4dd0vk4.png" class="imag" /></a>
                        <a href="https://www.instagram.com/creva.group/" class="contA"><img src="https://res.cloudinary.com/dk4amlgtk/image/upload/v1699557628/lmw7rj7eyiyi5b8t4vil.png" class="imag" /></a>
                        <a href="https://api.whatsapp.com/send?phone=5491167867530&text=%C2%A1Hola%21+Quiero+conocer+m%C3%A1s+sobre+los+servicios+de+CreVa+Group." class="contA"><img src="https://res.cloudinary.com/dk4amlgtk/image/upload/v1699557628/l0aulvrsqpsbfrighypo.png" class="imag" /></a>
                        <a href="mailto:crevagroup.global@gmail.com" class="contA"><img src="https://res.cloudinary.com/dk4amlgtk/image/upload/v1699557628/bepikbe0pax0t4zoeld6.png" class="imag" /></a>
                        <!-- Redes sociales -->
        
                        <h4>Soporte</h4>
                        <p style="font-size: 13px; padding: 0px 20px 0px 20px;">
                            Comunícate con nosotros por los siguientes medios:<br>
                            Correo: <a class="afooter" href="mailto:crevagroup.global@gmail.com">crevagroup.global@gmail.com</a><br>
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
    },
    {   name: "Practica",
        subject:"¡Gracias por elegir nuestro Servicio de Capacitación en Entrevistas!",
        message: `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
        
            <style>
                p, a, h1, h2, h3, h4, h5, h6 {font-family: 'Roboto', sans-serif !important;}
                h1{ font-size: 30px !important;}
                h2{ font-size: 25px !important;}
                h3{ font-size: 18px !important;}
                h4{ font-size: 16px !important;}
                p, a{font-size: 15px !important;}
        
                .claseBoton{
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
                .claseBoton:hover{
                    background-color: #4b1073;
                    color: #ffffff;
                }
                .imag{
                    width: 20px;
                    height: 20px;
                }
                .contA{
                    margin: 0px 5px 0 5px;
                }
                .afooter{
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
                    <div style="display: flex; justify-content: space-between; align-items: baseline; background-color: #c6a9d9; padding: 10px 0px 10px 0px; width: 100%; text-align: center;">
                        <img src="https://res.cloudinary.com/dk4amlgtk/image/upload/v1699542930/lpgnqarne61rp5rlbgrs.png" alt="creva" style="width: 50px; height: auto; margin: 0 0 0 20px;">
                        <h3 style="margin: 0 10px 0 0;">CreVa</h3>
                    </div>
                    <!-- Imagen inicial -->
        
                    <!-- Contenido principal -->
                    <div style="background-color: #ffffff; padding: 20px 0px 5px 0px; width: 100%; text-align: left;">
                        <div style="width: 100%; display: flex; justify-content: center;">
                            <h1>Capacitación para entrevistas</h1>
                        </div>
                        <div style="padding-left: 50px; padding-right: 50px;">
                            <p>¡HOLA ${name}!</p>
                            <p>Agradecemos tu elección de nuestro Servicio de Capacitación en Entrevistas.</p>
                            <p>Para continuar con el proceso, te contamos los próximos pasos:</p>
                            <ol>
                                <li>Te proporcionamos un <a href="https://calendly.com/crevagroup/agenda">enlace a nuestro calendario</a> para que puedas programar la sesión virtual de capacitación con uno de nuestros expertos en entrevistas.</li>
                                <li>Asi mismo, es necesario que completes el siguiente <a href="https://forms.office.com/r/SeiHTG5y44">formulario</a> con tus datos de contacto, información académica y profesional.
                                    Esta información, nos ayudará a adaptar la capacitación a tus necesidades específicas y metas profesionales.</li>
                            </ol>
                            <p>Si tienes alguna pregunta o necesitas asistencia, no dudes en ponerte en contacto con nuestro equipo de soporte a través de crevagroup.global@gmail.com</p>
                            <!-- Gracias -->
                            <p>Esperamos trabajar contigo de cerca y brindarte la mejor capacitación en entrevistas posible. ¡Estamos ansiosos por ayudarte a alcanzar tus metas profesionales!</p>
                            <p>Gracias nuevamente por confiar en nuestro servicio.</p>
                        </div>
                        
                        <div style="width: 100%; display: flex; justify-content: right; align-items: center;margin-bottom: 50px;" >
                            <img src="https://res.cloudinary.com/dk4amlgtk/image/upload/v1699542930/lpgnqarne61rp5rlbgrs.png" style="padding-right: 10px; width: 30px; height: 30px;"/>
                            <p style=" padding-right: 50px;"><i>Atentamente:</i><br>Equipo CreVa</p>
                        </div>
        
                        <!-- Botón -->
                        <div style="width: 100%; display: flex; justify-content: center;">
                            <a class="claseBoton" href="https://creva.vercel.app/">CreVa</a>
                        </div>
                    </div>
                    <!-- Contenido principal -->
        
                    <!-- Footer -->
                    <div style="background-color: #c6a9d9; color: #ffffff; padding: 5px 0px 0px 0px; width: 100%; text-align: center;">
                        <!-- Redes sociales -->
                        <a href="https://www.linkedin.com/company/creva-group/" class="contA"><img src="https://res.cloudinary.com/dk4amlgtk/image/upload/v1699557628/pay9uja4vkx7x4dd0vk4.png" class="imag" /></a>
                        <a href="https://www.instagram.com/creva.group/" class="contA"><img src="https://res.cloudinary.com/dk4amlgtk/image/upload/v1699557628/lmw7rj7eyiyi5b8t4vil.png" class="imag" /></a>
                        <a href="https://api.whatsapp.com/send?phone=5491167867530&text=%C2%A1Hola%21+Quiero+conocer+m%C3%A1s+sobre+los+servicios+de+CreVa+Group." class="contA"><img src="https://res.cloudinary.com/dk4amlgtk/image/upload/v1699557628/l0aulvrsqpsbfrighypo.png" class="imag" /></a>
                        <a href="mailto:crevagroup.global@gmail.com" class="contA"><img src="https://res.cloudinary.com/dk4amlgtk/image/upload/v1699557628/bepikbe0pax0t4zoeld6.png" class="imag" /></a>
                        <!-- Redes sociales -->
        
                        <h4>Soporte</h4>
                        <p style="font-size: 13px; padding: 0px 20px 0px 20px;">
                            Comunícate con nosotros por los siguientes medios:<br>
                            Correo: <a class="afooter" href="mailto:crevagroup.global@gmail.com">crevagroup.global@gmail.com</a><br>
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
    },
    {   name: "Perfil",
        subject: "¡Gracias por tu compra del Servicio de Armado de Perfil de LinkedIn!",
        message: `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
        
            <style>
                p, a, h1, h2, h3, h4, h5, h6 {font-family: 'Roboto', sans-serif !important;}
                h1{ font-size: 30px !important;}
                h2{ font-size: 25px !important;}
                h3{ font-size: 18px !important;}
                h4{ font-size: 16px !important;}
                p, a{font-size: 15px !important;}
        
                .claseBoton{
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
                .claseBoton:hover{
                    background-color: #4b1073;
                    color: #ffffff;
                }
                .imag{
                    width: 20px;
                    height: 20px;
                }
                .contA{
                    margin: 0px 5px 0 5px;
                }
                .afooter{
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
                    <div style="display: flex; justify-content: space-between; align-items: baseline; background-color: #c6a9d9; padding: 10px 0px 10px 0px; width: 100%; text-align: center;">
                        <img src="https://res.cloudinary.com/dk4amlgtk/image/upload/v1699542930/lpgnqarne61rp5rlbgrs.png" alt="creva" style="width: 50px; height: auto; margin: 0 0 0 20px;">
                        <h3 style="margin: 0 10px 0 0;">CreVa</h3>
                    </div>
                    <!-- Imagen inicial -->
        
                    <!-- Contenido principal -->
                    <div style="background-color: #ffffff; padding: 20px 0px 5px 0px; width: 100%; text-align: left;">
                        <div style="width: 100%; display: flex; justify-content: center;">
                            <h1>Armado de perfil de LinkedIn</h1>
                        </div>
                        <div style="padding-left: 50px; padding-right: 50px;">
                            <p>¡HOLA ${name}!</p>
                            <p>Agradecemos tu elección de nuestro Servicio de Armado de Perfil de LinkedIn.</p>
                            <p>A continuación, te pedimos que ingreses en el siguiente enlace y completes el <a href="https://forms.office.com/r/a7kpsFWBTB">formulario</a> con tus datos de contacto, información académica y profesional.</p>
                            <p>Este formulario nos permitirá conocer más sobre tu perfil y tus metas laborales, lo que nos ayudará a diseñar un perfil de LinkedIn a medida, que destaque tus habilidades y experiencia de la mejor manera posible.</p>
                            <p>Si tienes alguna pregunta o necesitas asistencia, no dudes en ponerte en contacto con nuestro equipo de soporte: crevagroup.global@gmail.com</p>
                            <!-- Gracias -->
                            <p>Estamos ansiosos por trabajar contigo y ayudarte a destacar en LinkedIn. ¡Esperamos que tu nuevo perfil te ayude a alcanzar tus metas profesionales!</p>
                        </div>
                        
                        <div style="width: 100%; display: flex; justify-content: right; align-items: center;margin-bottom: 50px;" >
                            <img src="https://res.cloudinary.com/dk4amlgtk/image/upload/v1699542930/lpgnqarne61rp5rlbgrs.png" style="padding-right: 10px; width: 30px; height: 30px;"/>
                            <p style=" padding-right: 50px;"><i>Atentamente:</i><br>Equipo CreVa</p>
                        </div>
        
                        <!-- Botón -->
                        <div style="width: 100%; display: flex; justify-content: center;">
                            <a class="claseBoton" href="https://creva.vercel.app/">CreVa</a>
                        </div>
                    </div>
                    <!-- Contenido principal -->
        
                    <!-- Footer -->
                    <div style="background-color: #c6a9d9; color: #ffffff; padding: 5px 0px 0px 0px; width: 100%; text-align: center;">
                        <!-- Redes sociales -->
                        <a href="https://www.linkedin.com/company/creva-group/" class="contA"><img src="https://res.cloudinary.com/dk4amlgtk/image/upload/v1699557628/pay9uja4vkx7x4dd0vk4.png" class="imag" /></a>
                        <a href="https://www.instagram.com/creva.group/" class="contA"><img src="https://res.cloudinary.com/dk4amlgtk/image/upload/v1699557628/lmw7rj7eyiyi5b8t4vil.png" class="imag" /></a>
                        <a href="https://api.whatsapp.com/send?phone=5491167867530&text=%C2%A1Hola%21+Quiero+conocer+m%C3%A1s+sobre+los+servicios+de+CreVa+Group." class="contA"><img src="https://res.cloudinary.com/dk4amlgtk/image/upload/v1699557628/l0aulvrsqpsbfrighypo.png" class="imag" /></a>
                        <a href="mailto:crevagroup.global@gmail.com" class="contA"><img src="https://res.cloudinary.com/dk4amlgtk/image/upload/v1699557628/bepikbe0pax0t4zoeld6.png" class="imag" /></a>
                        <!-- Redes sociales -->
        
                        <h4>Soporte</h4>
                        <p style="font-size: 13px; padding: 0px 20px 0px 20px;">
                            Comunícate con nosotros por los siguientes medios:<br>
                            Correo: <a class="afooter" href="mailto:crevagroup.global@gmail.com">crevagroup.global@gmail.com</a><br>
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
]

for(const plantilla of plantillas){
    if (plantilla.name === service){
        return {
            message: plantilla.message, 
            subject: plantilla.subject
        }
    }
}

}

module.exports = htmlToString