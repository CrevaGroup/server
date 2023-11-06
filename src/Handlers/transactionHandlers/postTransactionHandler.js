const postTransactionController = require("../../Controllers/transactionControllers/postTransactionController.js");

const postTransactionHandler = async (req, res) => {
    try {
        const transactionInfo = req.body
        const response = await postTransactionController(transactionInfo);
        res.status(201).json(response);
    } catch (error) {
        res.status(400).json(error.messge)
        
    }
}

module.exports = postTransactionHandler;