const {Transaction} = require('../../db');

const postTransactionController = async (transactionInfo) => {
 const transaction = await Transaction.create({...transactionInfo})
 return transaction;
}

module.exports = postTransactionController;