const postUserController = require('../../Controllers/userControllers/postUserController.js');
const googleLoginController = require('../../Controllers/userControllers/googleLoginController.js');

const postUserHandler = async (req,res) => {
    try {
        const userInfo = req.body;
        const response = userInfo.providerId === 'google.com' ? await googleLoginController(userInfo) : await postUserController(userInfo);
        res.status(201).json(response);
    } catch (err) {
        res.status(400).json(err.message);
    }
}

module.exports = postUserHandler;
