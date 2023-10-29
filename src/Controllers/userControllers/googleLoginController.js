const { User, Review, Transaction, Service } = require('../../db');
const transporter = require('../../nodemailer');
const emailBuilder = require('../../Utils/emailBuilder');
const titleCase = require('../../Utils/titleCase');
const cloudinary = require('../../cloudinary')

const googleLoginController = async (userInfo) => {
    const exist = await User.findOne({ 
        where: {id: userInfo.id}, 
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

    if(!exist){    

        userInfo = {
            ...userInfo,
        fullName: titleCase(userInfo.fullName),
        photo: (await cloudinary.uploader.upload(userInfo.photo)).secure_url
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

    if (!exist.dataValues.age) return {
        ...exist.dataValues,
    access: true,
    complete: false
}
return {
    ...exist.dataValues,
    access: true,
    complete: true
}
        
}

module.exports = googleLoginController;