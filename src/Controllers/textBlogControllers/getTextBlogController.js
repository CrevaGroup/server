const {TextBlog} = require('../../db.js')

const getTextBlogController = async(id)=>{

    if(!id){
        const allBlogs = await TextBlog.findAll()
        if(allBlogs.length === 0) throw new Error('No hay ningun blog')
        return allBlogs;
          }
    const blogPosted = await TextBlog.findOne({where:{id}})
    
    if(!blogPosted) throw new Error("No se ha encontrado el blog solicitado")

    return blogPosted;

}

module.exports = getTextBlogController;