const { Service } = require('../../db');
const { Op } = require("sequelize");
const queryBuilder = require('../../Utils/queryBuilder');

const getServiceController = async (id, order, min, max, keyword) => {
    if (id) {
        const service = await Service.findOne({ where: { id } });  
        if (!service) throw new Error ('No se encuentra el servicio solicitado.')
        return service;
    }
    else {
        const query = queryBuilder(order, min, max, keyword);
        const services = await Service.findAll({ ...query });
        if (!services.length) throw new Error ('No se encuentran servicios.');
        return services;
    }
}

module.exports = getServiceController;