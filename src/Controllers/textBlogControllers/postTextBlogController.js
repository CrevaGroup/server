const {TextBlog} = require('../../db.js');

const postTextBlogController = async (textBlogInfo)=>{

    if(!textBlogInfo) throw new Error("No hay informacion para un nuevo blog")

    const blogPosted = await TextBlog.create(textBlogInfo)

    return blogPosted;


}

module.exports = postTextBlogController;