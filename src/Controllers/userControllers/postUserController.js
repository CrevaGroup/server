const { User } = require('../../db.js');
const transporter = require('../../nodemailer.js');
const titleCase = require('../../Utils/titleCase.js');
const emailBuilder = require('../../Utils/emailBuilder.js');


const postUserController = async (userInfo) => {

    const userFinded = await User.findByPk(userInfo.id)

    if (!userFinded) {

        if (userInfo.fullName) userInfo.fullName = titleCase(userInfo.fullName);
        if (userInfo.age) userInfo.age = JSON.stringify(userInfo.age)

        const user = await User.create({ ...userInfo });

        transporter.sendMail(emailBuilder(user.email, 'Bienvenid@', `Te damos la bienvenida a Creva, ${user.fullName}.`));

        return `Registro exitoso. Bienvenid@ ${user.fullName}!! Se ha enviado un email para validar su cuenta.`;
    }

    throw new Error('El email ya se encuentra registrado.');

}

module.exports = postUserController;