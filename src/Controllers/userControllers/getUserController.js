const { User } = require('../../db');

const getUserController = async (id) => {
    const user = await User.findOne({ where: { id } });
    if (!user) throw new Error ('No se encontró el usuario.');
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

module.exports = getUserController;