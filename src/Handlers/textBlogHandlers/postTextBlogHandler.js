const postTextBlogController = require("../../Controllers/textBlogControllers/postTextBlogController");



const postTextBlogHandler = async (req,res) => {

    try {
        const newPost = req.body;
        const response = await postTextBlogController(newPost)
        res.status(201).json(response) 

    } catch (error) {
        res.status(404).json(error.massege)
    }

}

module.exports = postTextBlogHandler;