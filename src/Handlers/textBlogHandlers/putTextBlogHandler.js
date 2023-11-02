const putTextBlogController = require("../../Controllers/textBlogControllers/putTextBlogController.js");


const putTextBlogHandler = async (req, res) => {
try {
    const InfoBlog = req.body
    const response = await putTextBlogController(InfoBlog)
    res.status(201).json(response)

} catch (error) {

    res.status(400).json(error.message);
}

}

module.exports = putTextBlogHandler;