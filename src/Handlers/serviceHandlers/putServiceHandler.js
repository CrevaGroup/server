const putServiceController = require('../../Controllers/serviceControllers/putServiceController');

const putServiceHandler = async (req, res) => {
    try {
        const info = req.body;
        const response = await putServiceController(info);
        res.status(200).json(response);
    } catch (err) {
        res.status(400).json(err.message);
    }
}

module.exports = putServiceHandler;