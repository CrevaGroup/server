const getTypeController = require('../../Controllers/typeControllers/getTypeController');

const getTypeHandler = async (req, res) => {
    try {
        const { id, order, min, max, keyword } = req.query;
        const response = await getTypeController(id, order, min, max, keyword);
        res.status(200).json(response);
    } catch (err) {
        res.status(404).json(err.message);
    }
}

module.exports = getTypeHandler;