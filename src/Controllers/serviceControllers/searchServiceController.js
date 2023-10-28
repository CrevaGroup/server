const { Service } = require('../../db');
const inputFinder = require('../../Utils/inputFinder');

const searchServiceController = async (input) => {
    const query = inputFinder(input);
    const services = await Service.findAll({ ...query });
    if (!services.length) return await Service.findAll();
    return services;
}

module.exports = searchServiceController;