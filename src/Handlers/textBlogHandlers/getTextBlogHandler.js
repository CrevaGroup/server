const getTextBlogController = require("../../Controllers/textBlogControllers/getTextBlogController.js");

const getTextBlogHandler = async (req , res) =>{

try {
    const {id} = req.query
    const response = await getTextBlogController(id)
    res.status(201).json(response)

} catch (error) {
   res.status(404).json(error.message)    
}

}

module.exports = getTextBlogHandler;