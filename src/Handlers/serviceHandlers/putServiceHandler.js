const putServiceController = require('../../Controllers/serviceControllers/putServiceController.js');

const putServiceHandler = async (req, res) => {
    try {
        const serviceInfo = req.body;
        const response = await putServiceController(serviceInfo);
        res.status(200).json(response);
    } catch (err) {
        res.status(400).json(err.message);
    }
}

module.exports = putServiceHandler;