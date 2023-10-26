const { Service } = require('../../db');
const titleCase = require('../../Utils/titleCase');

const putServiceController = async (serviceInfo) => {
    const service = await Service.findByPk(serviceInfo.id);
    
    if (!service) throw new Error ('No se encuentra el servicio solicitado.')
    for (property in serviceInfo) {
        if (serviceInfo[property] && service.dataValues.hasOwnProperty(property))
        service[property] = serviceInfo[property];
    }

    await service.save();

    return service;
}

module.exports = putServiceController;