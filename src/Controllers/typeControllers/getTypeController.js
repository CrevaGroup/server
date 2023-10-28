const { Type } = require('../../db');

const getTypeController = async () => {
    const types = await Type.findAll();
    if (!types.length) throw new Error ('No se encuentran tipos de servicios.');
    return types;
}

module.exports = getTypeController;