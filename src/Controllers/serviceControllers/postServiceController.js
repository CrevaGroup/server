const { Service } = require('../../db');
const titleCase = require('../../Utils/titleCase');
const cloudinary = require('../../cloudinary')

const postServiceController = async (serviceInfo) => {
    serviceInfo = {
        ...serviceInfo,
        name: await titleCase(serviceInfo.name),
        photo: (await cloudinary.uploader.upload(serviceInfo.photo)).secure_url
    };
    const [service, created] = await Service.findOrCreate({ where: { name: serviceInfo.name }, defaults:{ ...serviceInfo } });
    if (created) return service;
    else throw new Error ('Ya existe un servicio con ese nombre.')
}

module.exports = postServiceController;