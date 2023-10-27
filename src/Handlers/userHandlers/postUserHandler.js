const postUserController = require('../../Controllers/userControllers/postUserController');

const postUserHandler = async (req,res) => {
    try {
        const userInfo = req.body;
        const response = await postUserController(userInfo);
        res.status(201).json(response);
    } catch (err) {
        res.status(400).json(err.message);
    }
}

module.exports = postUserHandler;