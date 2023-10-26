const { Service } = require('../../db');
const titleCase = require('../../Utils/titleCase');

const putServiceController = async (serviceInfo) => {
    const service = await Service.findByPk(serviceInfo.id);
    
    if (!service) throw new Error ('No se encuentra el servicio solicitado.')

    if (serviceInfo.name) service.name = titleCase(serviceInfo.name);
    if (serviceInfo.description) service.description = serviceInfo.description;
    if (serviceInfo.price) service.price = serviceInfo.price;

    await service.save();

    return service;
}

module.exports = putServiceController;