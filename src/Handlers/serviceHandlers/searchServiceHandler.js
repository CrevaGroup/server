const searchServiceController = require('../../Controllers/serviceControllers/searchServiceController');

const searchServiceHandler = async (req, res) => {
    try {
        const { input } = req.body;
        const response = await searchServiceController(input);
        res.status(200).json(response);
    } catch (err) { 
        res.status(404).json(err.message);
    }
}

module.exports = searchServiceHandler;