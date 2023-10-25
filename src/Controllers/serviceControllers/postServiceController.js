const { Service } = require('../../db');
const titleCase = require('../../Utils/titleCase');

const postServiceController = async (serviceInfo) => {
    serviceInfo = {
        ...serviceInfo,
        name: await titleCase(serviceInfo.name)
    };
    const [service, created] = await Service.findOrCreate({ where: { name: serviceInfo.name }, defaults:{ ...serviceInfo } });
    if (created) return service;
    else throw new Error ('Ya existe un servicio con ese nombre.')
}

module.exports = postServiceController;