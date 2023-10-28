const { Service } = require('../../db');

const deleteTypeController = async (id) => {
    const service = await Service.destroy({ where: { id }});
    if (!service) throw new Error ('No se encontró el servicio solicitado');
    return 'Servicio eliminado correctamente.';
}

module.exports = deleteTypeController;