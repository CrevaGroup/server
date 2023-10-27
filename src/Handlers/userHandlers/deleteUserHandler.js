const deleteUserController = require('../../Controllers/userControllers/deleteUserController');

const deleteUserHandler = async (req,res) => {
    try {
        const { id } = req.params;
        const response = await deleteUserController(userInfo);
        res.status(200).json(response);
    } catch (err) {
        res.status(400).json(err.message);
    }
}

module.exports = deleteUserHandler;