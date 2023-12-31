const {Transaction, Service, User} = require('../../db.js');
const transporter = require('../../nodemailer.js');
const emailBuilder = require('../../Utils/emailBuilder.js');

const postTransactionController = async (transactionInfo) => {
 const transaction = await Transaction.create({...transactionInfo});

 for(const id of transactionInfo.services){
    const service = await Service.findByPk(id);
    await transaction.addService(service);
 }

 if(transaction){
   const user = await User.findByPk(transactionInfo.userId)
   transporter.sendMail(emailBuilder(user.email, 'Aviso de compra', `${user.fullName} desde Creva agredecemos por tu compra!!`));
 }

 return transaction;
}

module.exports = postTransactionController;