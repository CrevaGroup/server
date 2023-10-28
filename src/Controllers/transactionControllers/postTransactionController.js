const {Transaction, Service} = require('../../db');

const postTransactionController = async (transactionInfo) => {
 const transaction = await Transaction.create({...transactionInfo});

 for(const id of transactionInfo.services){
    const service = await Service.findByPk(id);
    await transaction.addService(service);
 }

 return transaction;
}

module.exports = postTransactionController;