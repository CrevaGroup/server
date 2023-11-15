const { Service, Type } = require('../../db.js');
const queryBuilder = require('../../Utils/queryBuilder.js');

const getServiceController = async ({ id, order, min, max, type }) => {
    if (id) {
        const service = await Service.findOne({ where: { id } });  
        if (!service) throw new Error ('No se encuentra el servicio solicitado.')
        return service;
    }
    else {
        const query = queryBuilder(order, min, max, type);
        const services = await Service.findAll({ ...query, paranoid:false });
        return services;
    }
}

module.exports = getServiceController;