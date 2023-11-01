const {IGpost} = require('../../db.js')

const getIgPostController = async (id) => {
   
    if(!id) throw new Error('Debe pasar un ID')

    const postInstagram = await IGpost.findOne({where: {id}})
    
    if(!postInstagram) throw new Error('No se encuentra el posteo solicitado')
    
    return postInstagram

}

module.exports = getIgPostController;