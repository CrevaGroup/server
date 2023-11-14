const { Transaction, Service, User } = require('../../db.js');
const emailBuilder = require('../../Utils/emailBuilder.js');
const transporter = require('../../nodemailer.js');

const mercadopago = require('mercadopago');

const mercadopagoController = async (paymentId) => {
  const payment = await mercadopago.payment.findById(Number(paymentId));
  if (payment.body.status === "approved") {

    const userId = payment.body.additional_info.payer.address.zip_code

    const amount = payment.body.transaction_amount

    const items = payment.body.additional_info.items

    const ids = items.map(item => item.id)

    const transaction = await Transaction.create({ amount: amount, status: "approved", userId: userId })

    for (const id of ids) {
      const service = await Service.findByPk(id);
      await transaction.addService(service);
    }

    const user = await User.findByPk(userId)
    const service = await Service.findByPk(ids[0]);

    const mail = emailBuilder(user.email, 'Bienvenid@', `Te damos la bienvenida a Creva, ${user.fullName}.`,user.fullName, service.name)

    transporter.sendMail(mail);

    return 'success'
  }
}

module.exports = mercadopagoController;