const { User, Review, Transaction, Service } = require('../../db.js');
const transporter = require('../../nodemailer.js');
const emailBuilder = require('../../Utils/emailBuilder.js');
const titleCase = require('../../Utils/titleCase.js');
const cloudinary = require('../../cloudinary.js');
const completeChecker = require('../../Utils/completeChecker.js')

const googleLoginController = async (userInfo) => {
    const userFinded = await User.findOne({
        where: { id: userInfo.id },
        include: [
            {
                model: Transaction,
                as: "buys",
                include: [{
                    model: Service
                }]
            },
            {
                model: Review,
                as: "reviews"
            }]
    })

    if (!userFinded) {

        userInfo = {
            ...userInfo,
            fullName: titleCase(userInfo.fullName),
            photo: (await cloudinary.uploader.upload(userInfo.photo)).secure_url
        };

        const [user, created] = await User.findOrCreate({ where: { id: userInfo.id }, defaults: { ...userInfo } });

        if (created) transporter.sendMail(emailBuilder(user.email, 'Bienvenid@', `Te damos la bienvenida a Creva, ${user.fullName}.`, user.fullName));

        const newUser = await User.findOne({
            where: { id: user.id },
            include: [
                {
                    model: Transaction,
                    as: "buys",
                    include: [{
                        model: Service
                    }]
                },
                {
                    model: Review,
                    as: "reviews"
                }]
        })

        return completeChecker(newUser)
    }

   return completeChecker(userFinded)

}

module.exports = googleLoginController;