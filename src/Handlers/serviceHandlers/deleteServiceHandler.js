const deleteServiceController = require('../../Controllers/serviceControllers/deleteServiceController.js');

const deleteServiceHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await deleteServiceController(id);
        res.status(200).json(response);
    } catch (err) {
        res.status(400).json(err.message);
    }
}

module.exports = deleteServiceHandler;