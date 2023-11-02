const {IGpost} = require('../../db.js')

const getIgPostController = async (id) => {
   
    if(!id) {
        
        const allPost = await IGpost.findAll()
    
        if(allPost.length === 0)throw new Error("No hay posteos realizados")
        
        return allPost
    }

    const postInstagram = await IGpost.findOne({where: {id}})
    
    if(!postInstagram) throw new Error('No se encuentra el posteo solicitado')
    
    return postInstagram

}

module.exports = getIgPostController;