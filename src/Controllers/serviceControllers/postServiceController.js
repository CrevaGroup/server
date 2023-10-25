const { Service } = require('../../db');

const postServiceController = async (serviceInfo) => {
    const [service, created] = await Service.findOrCreate({ where: { name: serviceInfo.name }, defaults:{ ...serviceInfo } });
    if (created) return service;
    else throw new Error ('Ya existe un servicio con ese nombre.')
}

module.exports = postServiceController;