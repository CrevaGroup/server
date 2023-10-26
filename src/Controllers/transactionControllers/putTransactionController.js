const { Transaction } = require('../../db');

const putTransactionController = async (transactionInfo) => {
    const transaction = await Transaction.findOne(transactionInfo.id)

    if (!transaction) throw new Error ('No se encuentra la transaccion solicitada.')
    for(property in transactionInfo){
        if(transactionInfo[property] && transaction.dataValues.hasOwnProperty(property)) transaction[property] = transactionInfo[property]
    }

    await transaction.save()

    return transaction;
}

module.exports = putTransactionController;
