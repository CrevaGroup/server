const { User, Review, Transaction, Service } = require('../../db');
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
    
    const newUser = await User.findOne({ 
        where: {id: user.id}, 
        include: [
        {
            model: Transaction,
            as: "buys",
            include:[{
                model: Service
            }]
        },
        {
            model: Review,
            as: "reviews"
        }] 
    })

    console.log(newUser);

    if (!newUser.dataValues.age) return {
        ...newUser.dataValues,
        access: true,
        complete: false
    }
    return {
        ...newUser.dataValues,
        access: true,
        complete: true
    }
}

module.exports = googleLoginController;