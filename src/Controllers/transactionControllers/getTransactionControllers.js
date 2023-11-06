const {Transaction, Service, User} = require('../../db.js')

const getTransactionController = async(id) =>{
    if(id){
        const transaction = await Transaction.findOne({
            where: {id: id},
            include:[{
                model: Service,
            },{
                model: User,
                as: 'user'
            }]
        });
        if(!transaction) throw new Error('No se encontro la transaccion')
        return transaction;
    }
    else{
        const transactionAll = await Transaction.findAll({
            include:[{
                model: Service,
            },{
                model: User,
                as: 'user'
            }]
        });
        if(!transactionAll.length) throw new Error('No se encontraron transacciones')
        return transactionAll;
    }
}

module.exports = getTransactionController;
