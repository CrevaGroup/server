const putConfigController = require("../../Controllers/configControllers/putConfigController.js");

const putConfigHandler = async (req, res) => {
    try {
        const configInfo = req.body;
        const newConfig = await putConfigController(configInfo);
        res.status(200).json(newConfig);
    } catch (error) {
        res.status(404).json(error.message)
    }
}

module.exports = putConfigHandler