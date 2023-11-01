const { Service, Keyword, Type } = require('../../db');
const titleCase = require('../../Utils/titleCase');
const inputFinder = require('../../Utils/inputFinder');

const searchServiceController = async (input) => {
    input = titleCase(input).split(' ');
    const keywords = await Keyword.findAll();
    let services = [];
    let servicesNames = [];
    let types = [];
    for (let keyword of keywords) 
        if (input.includes(keyword.name)) {
            const keywordDb = await Keyword.findOne({ where: {name: keyword.name }});
            const keywordTypes = await keywordDb.getTypes();
            types = [ ...types, ...keywordTypes ];
        }
    console.log(types);
    for (let type of types) {
        const typeDb = await Type.findOne({ where: {name: type.name }});
        const typeServices = await typeDb.getServices();
        services = [ ...services, ...typeServices ];
    }

    return services;
}

module.exports = searchServiceController;