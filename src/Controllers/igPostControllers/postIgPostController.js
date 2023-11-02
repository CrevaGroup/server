const {IGpost} = require('../../db.js') 

const postIgPostController = async (postIgInfo) => {
    
 const instagramPosted = await IGpost.create({...postIgInfo})
  
 return instagramPosted

}

module.exports = postIgPostController;