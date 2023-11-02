const { TextBlog } = require('../../db');

const putTextBlogController = async (textBlogInfo) => {
    const blogEdited = await TextBlog.findByPk(textBlogInfo.id)

    if (!blogEdited) throw new Error ('No se encuentra el blog solicitado.')
    for(property in textBlogInfo){
        if(textBlogInfo[property] && blogEdited.dataValues.hasOwnProperty(property)) blogEdited[property] = textBlogInfo[property]
    }

    await blogEdited.save()

    return blogEdited;
}

module.exports = putTextBlogController;
