const stripePaymentController = require("../../Controllers/stripePaymentController/stripePaymentController");

const stripePaymentHandler = async (req, res) => {
    try {
        const paymentInfo = req.body;
        const response = await stripePaymentController(paymentInfo)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json(error.message)
    }
    
     


}


module.exports = stripePaymentHandler;