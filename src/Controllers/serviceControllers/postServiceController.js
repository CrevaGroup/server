const { Service, Type } = require('../../db.js');
const titleCase = require('../../Utils/titleCase.js');

const postServiceController = async (serviceInfo) => {
    if (serviceInfo.name) serviceInfo.name = titleCase(serviceInfo.name);
    
    const [service, created] = await Service.findOrCreate({ where: { name: serviceInfo.name }, defaults:{ ...serviceInfo } });
    if (created) {
        for (let name of serviceInfo.types) {
            const type = await Type.findOne({ where: { name: titleCase(name) } });
            await service.addType(type);
        };
        return service;
    } else throw new Error ('Ya existe un servicio con ese nombre.');
}

module.exports = postServiceController;