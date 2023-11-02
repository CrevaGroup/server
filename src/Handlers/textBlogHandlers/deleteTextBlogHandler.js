const deleteTextBlogController = require("../../Controllers/textBlogControllers/deleteTextBlogController.js");

const deleteTextBlogHandler = async (req,res)=>{

    try {
        const {id} = req.params
        const response = await deleteTextBlogController(id)
        res.status(201).json(response)
    } catch (error) {
        res.status(400).json(error.message)
    }

}
module.exports = deleteTextBlogHandler;