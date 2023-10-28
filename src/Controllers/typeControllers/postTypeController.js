const { Type } = require('../../db');
const titleCase = require('../../Utils/titleCase');

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