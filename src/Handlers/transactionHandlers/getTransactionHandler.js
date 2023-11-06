const getTransactionController = require("../../Controllers/transactionControllers/getTransactionControllers.js");


const getTransactionHandler = async (req, res) => {
 try {
    const {id} = req.query;
        const transaccion = await getTransactionController(id)
        res.status(200).json(transaccion);
       } catch (error) {
     res.status(400).json(error.message)
 }
}

module.exports = getTransactionHandler;