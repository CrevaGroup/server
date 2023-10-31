const putUserController = require('../../Controllers/userControllers/putUserController');

const putUserHandler = async (req,res) => {
    try {
        const userInfo = req.body;
        const response = await putUserController(userInfo);
        res.status(200).json(response);
    } catch (err) {
        res.status(400).json(err.message);
    }
}

module.exports = putUserHandler;