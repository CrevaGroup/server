const { Type, Keyword } = require('../../db');
const titleCase = require('../../Utils/titleCase');

const putTypeController = async (typeInfo) => {
    const type = await Type.findOne({ where: { name: typeInfo.name } });
    
    if (!type) throw new Error ('No se encuentra la palabra clave.')
    
    if (typeInfo.name) type.name = typeInfo.name;
    await type.save();

    await type.setKeywords([]);

    for (let name of typeInfo.keywords) {
        const keyword = await Keyword.findOne({ where: { name: titleCase(name) } });
        await type.addKeyword(keyword);
    };

    return type;
}

module.exports = putTypeController;