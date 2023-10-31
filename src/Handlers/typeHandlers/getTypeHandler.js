const getTypeController = require('../../Controllers/typeControllers/getTypeController.js');

const getTypeHandler = async (req, res) => {
    try {
        const response = await getTypeController();
        res.status(200).json(response);
    } catch (err) {
        res.status(404).json(err.message);
    }
}

module.exports = getTypeHandler;