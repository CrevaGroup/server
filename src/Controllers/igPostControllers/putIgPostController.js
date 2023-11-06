const {IGpost} = require('../../db.js');


const putIgPostController = async (postInfo)=>{

    const post = await IGpost.findByPk(postInfo.id)
    if(!post) throw new Error("No se encuentra el registro solicitado")
    
    for(property in postInfo){
        if(postInfo[property] && post.dataValues.hasOwnProperty(property)) post[property] = postInfo[property]
    } 

    await post.save()

    return post;


}

module.exports = putIgPostController;

