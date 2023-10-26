const putTransactionController = require("../../Controllers/transactionControllers/putTransactionController");



const putTransactionHandler = async (req, res) => {
    try {
        const transactionInfo = req.body;
        const response = await putTransactionController(transactionInfo);
        res.status(200).json(response);
    } catch (err) {
        res.status(400).json(err.message);
    }
}

module.exports = putTransactionHandler;