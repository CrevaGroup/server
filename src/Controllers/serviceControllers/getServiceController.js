const { Service } = require('../../db');

const getServiceController = async (id) => {
    if (id) {
        const service = await Service.findOne({ where: { id } });  
        if (!service) throw new Error ('No se encuentra el servicio solicitado.')
        return service;
    }
    else {
        const services = await Service.findAll();
        if (!services.length) throw new Error ('No se encuentran servicios.');
        return services;
    }
}

module.exports = getServiceController;