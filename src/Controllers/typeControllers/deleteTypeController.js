const { Type } = require('../../db');
const titleCase = require('../../Utils/titleCase');

const deleteTypeController = async (name) => {
    name = titleCase(name);
    const type = await Type.destroy({ where: { name }});
    if (!type) throw new Error ('No se encontró el tipo de servicio solicitado');
    return 'Tipo de servicio eliminado correctamente.';
}

module.exports = deleteTypeController;