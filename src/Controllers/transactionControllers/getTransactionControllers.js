const {Transaction} = require('../../db')

const getTransactionController = async(id) =>{
    console.log("controller",id)
    if(id){
        const transaction = await Transaction.findOne({where: {id: id}});
        if(!transaction) throw new Error('No se encontro la transaccion')
        return transaction;
    }
    else{
        const transactionAll = await Transaction.findAll();
        if(!transactionAll.length) throw new Error('No se encontraron transacciones')
        return transactionAll;
    }
}

module.exports = getTransactionController;