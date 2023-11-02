const {TextBlog} = require('../../db.js')

const deleteTextBlogController = async (id) => {

    const blogDeleted = await TextBlog.destroy({where:{id}})

    if(!blogDeleted) throw new Error("no se encontro el Blog solicitado para eliminar");

    return "El blog se elimino correctamente";

}

module.exports = deleteTextBlogController;