const { Type } = require('../../db.js');
const titleCase = require('../../Utils/titleCase.js');

const postTypeController = async (typeInfo) => {
    typeInfo = {
        ...typeInfo,
        name: await titleCase(typeInfo.name),
    };
    const [type, created] = await Type.findOrCreate({ where: { name: typeInfo.name }, defaults:{ ...typeInfo } });
    if (created) return type;
    else throw new Error ('Ya existe un tipo de servicio con ese nombre.')
}

module.exports = postTypeController;