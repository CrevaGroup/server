const { User, Transaction, Review, Service } = require('../../db.js');

const putUserController = async (userInfo) => {
    console.log(userInfo);
    const user = await User.findOne({ where: { id: userInfo.id }, include: [
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
        }] });
    console.log('despues de buscar el user:', user);
    if (!user) throw new Error ('No se encontró el usuario.');

    for (property in userInfo ) {
        if (userInfo[property] && user.dataValues.hasOwnProperty(property))
        user[property] = userInfo[property];
    }
    console.log("despues de cambiar las props", user);
    await user.save();

    if (!user.age) return {
        ...user.dataValues,
        access: true,
        complete: false
    };
    return {
        ...user.dataValues,
        access: true,
        complete: true
    };
}

module.exports = putUserController;
