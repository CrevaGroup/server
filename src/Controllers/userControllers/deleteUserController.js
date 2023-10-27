const { User } = require('../../db');

const deleteUserController = async (id) => {
    const user = await User.destroy({ where: { id }});
    if (!user) throw new Error ('No se encontró el usuario.');
    return 'Usuario eliminado correctamente.';
}

module.exports = deleteUserController;