const { Service } = require('../../db.js');
const inputFinder = require('../../Utils/inputFinder.js');

const searchServiceController = async (input) => {
    const query = inputFinder(input);
    const services = await Service.findAll({ ...query });
    if (!services.length) return await Service.findAll();
    return services;
}

module.exports = searchServiceController;