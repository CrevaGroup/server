const { User } = require('../../db');
const transporter = require('../../nodemailer');
const titleCase = require('../../Utils/titleCase');
const emailBuilder = require('../../Utils/emailBuilder');
const { cloudinary } = require('../../cloudinary');


const postUserController = async (userInfo) => {
    const [user, created] = await User.findOrCreate({ where: { id: userInfo.id }, defaults: { ...userInfo } });

    if (!created) throw new Error ('El email ya se encuentra registrado.');

    userInfo = {
        ...userInfo,
        fullName: titleCase(userInfo.fullName),
        photo: (await cloudinary.uploader.upload(userInfo.photo)).secure_url
    };

    transporter.sendMail(emailBuilder(user.email, 'Bienvenid@', `Te damos la bienvenida a Creva, ${user.fullName}.`));
    
    return `Registro exitoso. Bienvenid@ ${user.fullName}!! Se ha enviado un email para validar su cuenta.`;
}

module.exports = postUserController;