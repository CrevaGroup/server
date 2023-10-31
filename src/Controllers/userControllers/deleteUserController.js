const { User } = require('../../db');

const deleteUserController = async (id) => {

    const userFind =  await User.findByPk(id);
    
    if(userFind !== null){
    await User.destroy({ where: { id }});
    return 'Usuario eliminado correctamente.';
    }
    else{
        const userRestored = await User.restore({where:{id}});
         if(userRestored !== 1) throw new Error("Usuario no encontrado") 
         return 'Usuario restaurado correctamente.';
    }


}




module.exports = deleteUserController;