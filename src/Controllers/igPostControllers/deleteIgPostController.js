const {IGpost} = require('../../db.js')

const deleteIgPostController = async (id) =>{

 const postDeleted = await IGpost.destroy({where: {id}})
 
 if(postDeleted) return "Post elimiado correctamente"

 throw new Error("No se encontro el post solicitado")


}

module.exports = deleteIgPostController;