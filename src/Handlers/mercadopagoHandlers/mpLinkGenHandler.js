const mpLinkGenController = require("../../Controllers/mercadopagoControllers/mpLinkGenController.js");

const mpLinkGenHandler = async (req, res) => {
    try {

        const products = req.body;
        const response = await mpLinkGenController(products)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json(error.messge)
    }
}

module.exports = mpLinkGenHandler;