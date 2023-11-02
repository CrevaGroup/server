const postTextBlogController = require("../../Controllers/textBlogControllers/postTextBlogController.js");



const postTextBlogHandler = async (req,res) => {

    try {
        const newPost = req.body;
        const response = await postTextBlogController(newPost)
        res.status(201).json(response) 

    } catch (error) {
        res.status(400).json(error.massege)
    }

}

module.exports = postTextBlogHandler;