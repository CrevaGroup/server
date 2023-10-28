const postTypeController = require('../../Controllers/typeControllers/postTypeController');

const postTypeHandler = async (req, res) => {
    try {
        const serviceInfo = req.body;
        const response = await postTypeController(serviceInfo);
        res.status(201).json(response);
    } catch (err) {
        res.status(400).json(err.message);
    }
}

module.exports = postTypeHandler;