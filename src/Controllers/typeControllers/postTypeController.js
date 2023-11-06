const { Type, Keyword } = require('../../db.js');
const titleCase = require('../../Utils/titleCase.js');

const postTypeController = async (typeInfo) => {
    typeInfo = {
        ...typeInfo,
        name: await titleCase(typeInfo.name),
    };
    const [type, created] = await Type.findOrCreate({ where: { name: typeInfo.name }, defaults:{ ...typeInfo } });
    if (created) {
        for (let name of typeInfo.keywords) {
            const keyword = await Keyword.findOne({ where: { name: titleCase(name) } });
            await type.addKeyword(keyword);
        };
        return type;
    }
    else throw new Error ('Ya existe un tipo de servicio con ese nombre.')
}

module.exports = postTypeController;