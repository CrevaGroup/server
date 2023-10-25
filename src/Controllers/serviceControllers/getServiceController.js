const { Service } = require('../../db');

const getServiceController = (id) => {
    if (id) return Service.findOne({ where: { id } });
    else return Service.findAll();
}

module.exports = getServiceController;