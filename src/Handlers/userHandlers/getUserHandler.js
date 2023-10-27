const getUserController = require('../../Controllers/userControllers/getUserController');

const getUserHandler = async (req,res) => {
    try {
        const { id } = req.params;
        const response = await getUserController(id);
        res.status(200).json(response);
    } catch (err) {
        res.status(400).json(err.message);
    }
}

module.exports = getUserHandler;