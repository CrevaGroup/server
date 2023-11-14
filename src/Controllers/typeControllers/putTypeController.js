const { Type, Keyword } = require('../../db.js');
const titleCase = require('../../Utils/titleCase.js');

const putTypeController = async (typeInfo) => {
    const type = await Type.findOne({ where: { name: typeInfo.name } });
    
    if (!type) throw new Error ('No se encuentra la palabra clave.')
    
    if (typeInfo.name) type.name = typeInfo.name;
    await type.save();

    return type;
}

module.exports = putTypeController;