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
    return 'Usuario eliminado correctamente.';
    }
    else{
        const userRestored = await User.restore({where:{id}});
        await Review.restore({where: {userId: userRestored.id}});
         if(userRestored !== 1) throw new Error("Usuario no encontrado") 
         return 'Usuario restaurado correctamente.';
    }


}




module.exports = deleteUserController;