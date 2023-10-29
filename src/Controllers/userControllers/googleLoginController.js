const { User } = require('../../db');
const transporter = require('../../nodemailer');
const emailBuilder = require('../../Utils/emailBuilder');
const titleCase = require('../../Utils/titleCase');

const googleLoginController = async (userInfo) => {
    userInfo = {
        ...userInfo,
        fullName: titleCase(userInfo.fullName)
    };

    const [user, created] = await User.findOrCreate({ where: { id: userInfo.id }, defaults: { ...userInfo } });

    if (created) transporter.sendMail(emailBuilder(user.email, 'Bienvenid@', `Te damos la bienvenida a Creva, ${user.fullName}.`));

    if (!user.age) return {
        ...user.dataValues,
        access: true,
        complete: false
    }
    return {
        ...user.dataValues,
        access: true,
        complete: true
    }
}

module.exports = googleLoginController;