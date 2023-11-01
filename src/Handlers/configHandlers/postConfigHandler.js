const postConfigController = require('../../Controllers/configControllers/postConfigController.js')

const postConfigHandler = async (req, res) => {
    try {
        const configInfo = req.body;
        const response = await postConfigController(configInfo);
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

module.exports = postConfigHandler