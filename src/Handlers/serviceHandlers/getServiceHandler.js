const getServiceController = require('../../Controllers/serviceControllers/getServiceController');

const getServiceHandler = async (req, res) => {
    try {
        const { id, order, min, max } = req.query;
        const response = await getServiceController(id, order, min, max);
        res.status(200).json(response);
    } catch (err) {
        res.status(404).json(err.message);
    }
}

module.exports = getServiceHandler;