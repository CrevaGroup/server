const putTypeController = require('../../Controllers/typeControllers/putTypeController');

const putTypeHandler = async (req, res) => {
    try {
        const serviceInfo = req.body;
        const response = await putTypeController(serviceInfo);
        res.status(200).json(response);
    } catch (err) {
        res.status(400).json(err.message);
    }
}

module.exports = putTypeHandler;