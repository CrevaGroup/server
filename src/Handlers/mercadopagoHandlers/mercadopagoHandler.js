const mercadopagoController = require("../../Controllers/mercadopagoControllers/mercadopagoController.js");


const postTransactionHandler = async (req, res) => {
    try {
        const topic = req.query.topic || req.query.type;
        
        if(topic === "payment"){
            const paymentId=req.query.id || req.query["data.id"];
            const response = await mercadopagoController(paymentId);
            res.status(201).json(response);
        }
    } catch (error) {
        res.status(400).json(error.messge)
        
    }
}

module.exports = postTransactionHandler;