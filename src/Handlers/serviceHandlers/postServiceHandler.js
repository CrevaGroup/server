const postServiceController = require('../../Controllers/serviceControllers/postServiceController');

const postServiceHandler = async (req, res) => {
    try {
        const serviceInfo = req.body;
        const response = await postServiceController(serviceInfo);
        res.status(201).json(response);
    } catch (err) {
        res.status(400).json(err.message);
    }
}

module.exports = postServiceHandler;