const { User, Review } = require('../../db.js');

const deleteUserController = async (id) => {

    const userFind =  await User.findByPk(id, {
        include: [
            {
                model: Review,
                as: "reviews"
            }]
    });
    
    if(userFind !== null){
    for(const review of userFind.reviews){
        await Review.destroy({where: {id: review.id}})
    }
    await User.destroy({ where: { id }});
    const deletedUser = await User.findOne({where: {id}, paranoid: false})
    return deletedUser;
    }
    else{
        const userRestored = await User.restore({where:{id}});
        await Review.restore({where: {userId: id}});
         if(userRestored !== 1) throw new Error("Usuario no encontrado");
         const restoredUser = await User.findOne({where: {id}}) 
         return restoredUser;
    }


}




module.exports = deleteUserController;