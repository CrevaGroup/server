const { Service, Type } = require('../../db');
const titleCase = require('../../Utils/titleCase');
const cloudinary = require('../../cloudinary');

const postServiceController = async (serviceInfo) => {
    if (serviceInfo.photo) serviceInfo.photo = (await cloudinary.uploader.upload(serviceInfo.photo)).secure_url;
    if (serviceInfo.name) serviceInfo.name = titleCase(serviceInfo.name);
    
    const [service, created] = await Service.findOrCreate({ where: { name: serviceInfo.name }, defaults:{ ...serviceInfo } });
    if (created) {
        serviceInfo.types.forEach(async name => {
            const type = await Type.findOne({ where: { name: titleCase(name) } });
            await service.addType(type);
        });
        return service;
    } else throw new Error ('Ya existe un servicio con ese nombre.');
}

module.exports = postServiceController;