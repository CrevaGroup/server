const { User } = require('../../db');

const getUserController = async (id) => {
    const user = await User.findOne({ where: { id } });
    if (!user) throw new Error ('No se encuentra el usuario.');
    return {
        ...user.dataValues,
        access: true
    };
}

module.exports = getUserController;