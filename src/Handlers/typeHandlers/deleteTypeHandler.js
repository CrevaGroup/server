const deleteTypeController = require('../../Controllers/typeControllers/deleteTypeController.js');

const deleteTypeHandler = async (req, res) => {
    try {
        const { name } = req.params;
        const response = await deleteTypeController(name);
        res.status(200).json(response);
    } catch (err) {
        res.status(400).json(err.message);
    }
}

module.exports = deleteTypeHandler;