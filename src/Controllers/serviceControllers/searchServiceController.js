const { Service, Keyword, Type } = require('../../db');
const titleCase = require('../../Utils/titleCase');

const searchServiceController = async (input) => {
    input = titleCase(input).split(' ');
    const keywords = await Keyword.findAll();
    let types = [];
    let services = [];
    let servicesId = [];
    for (let keyword of keywords) 
        if (input.includes(keyword.name)) {
            const keywordDb = await Keyword.findOne({ where: { name: keyword.name }});
            types = [ ...types, ...await keywordDb.getTypes() ];
        }
    for (let type of types) {
        const typeDb = await Type.findOne({ where: {name: type.name }});
        services = [ ...services, ...await typeDb.getServices() ];
    }
    return !services.length ? await Service.findAll() : services.filter(service => {
        if (!servicesId.includes(service.id)) {
            servicesId.push(service.id);
            return service;
        }
    });
}

module.exports = searchServiceController;