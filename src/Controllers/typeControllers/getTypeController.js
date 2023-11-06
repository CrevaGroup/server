const { Type } = require('../../db.js');

const getTypeController = async () => {
    const types = await Type.findAll();
    if (!types.length) throw new Error ('No se encuentran tipos de servicios.');
    return types;
}

module.exports = getTypeController;