const deleteTypeController = require('../../Controllers/typeControllers/deleteTypeController');

const deleteTypeHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await deleteTypeController(id);
        res.status(200).json(response);
    } catch (err) {
        res.status(400).json(err.message);
    }
}

module.exports = deleteTypeHandler;