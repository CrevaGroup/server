const { User } = require('../../db');

const putUserController = async (userInfo) => {
    const user = await User.findOne({ where: { id: userInfo.id } });
    if (!user) throw new Error ('No se encontró el usuario.');

    for (property in userInfo) {
        if (userInfo[property] && user.dataValues.hasOwnProperty(property))
        user[property] = userInfo[property];
    }

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