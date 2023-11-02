const getConfigController = require("../../Controllers/configControllers/getConfigController.js")

const getConfigHandler = async (req, res) => {
    try {
        const config = await getConfigController()
        res.status(200).json(config);
    } catch (error) {
        res.status(404).json(error.message)
    }
}

module.exports = getConfigHandler