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

    // if (created) transporter.sendMail(emailBuilder(user.email, 'Bienvenido', `Te damos la bienvenida a CreVa, ${user.fullName}.`));

    if (!user.age) return {
        ...user,
        access: true,
        complete: false
    }
    return {
        ...user,
        access: true,
        complete: true
    }
}

module.exports = googleLoginController;