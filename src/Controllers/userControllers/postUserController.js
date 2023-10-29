const { User } = require('../../db');
const transporter = require('../../nodemailer');
const titleCase = require('../../Utils/titleCase');
const emailBuilder = require('../../Utils/emailBuilder');
const  cloudinary  = require('../../cloudinary');


const postUserController = async (userInfo) => {

    const userFinded = await User.findByPk(userInfo.id)

    if (!userFinded) {

        if (userInfo.photo) userInfo.photo = (await cloudinary.uploader.upload(userInfo.photo)).secure_url;
        if (userInfo.fullName) userInfo.fullName = titleCase(userInfo.fullName);

        const user = await User.create({ ...userInfo });

        transporter.sendMail(emailBuilder(user.email, 'Bienvenid@', `Te damos la bienvenida a Creva, ${user.fullName}.`));

        return `Registro exitoso. Bienvenid@ ${user.fullName}!! Se ha enviado un email para validar su cuenta.`;
    }

    throw new Error('El email ya se encuentra registrado.');

}

module.exports = postUserController;