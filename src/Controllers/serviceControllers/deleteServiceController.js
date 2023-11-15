const { Service, Review } = require('../../db.js');

const deleteServiceController = async (id) => {

    const serviceFind = await Service.findOne({where: {id}})
    
    if(serviceFind){
    await Review.destroy({where: {serviceId: id}})
    await Service.destroy({ where: { id }});
    const serviceDeleted = await Service.findOne({where: {id}, paranoid:false})
    return serviceDeleted;
} else {
    await Service.restore({where: {id}});
    await Review.restore({where: {serviceId: id}});
    const restoredService = await Service.findOne({where: {id}});
    return restoredService
}



}

module.exports = deleteServiceController;