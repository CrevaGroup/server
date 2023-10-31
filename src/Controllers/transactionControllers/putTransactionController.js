const { Transaction, Service } = require('../../db.js');

const putTransactionController = async (transactionInfo) => {
    const transaction = await Transaction.findByPk(transactionInfo.id)

    if (!transaction) throw new Error ('No se encuentra la transaccion solicitada.')
    for(property in transactionInfo){
        if(transactionInfo[property] && transaction.dataValues.hasOwnProperty(property)) transaction[property] = transactionInfo[property]
    }

    await transaction.setServices([]);

    for(const id of transactionInfo.services){
        const service = await Service.findByPk(id);
        await transaction.addService(service);
     }

    await transaction.save()

    return transaction;
}

module.exports = putTransactionController;
