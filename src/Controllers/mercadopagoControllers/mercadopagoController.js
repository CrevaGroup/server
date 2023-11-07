const { Transaction, Service } = require('../../db.js')

const mercadopago = require('mercadopago');

const mercadopagoController = async (paymentId) => {
  const payment = await mercadopago.payment.findById(Number(paymentId));
  console.log(payment);
  if (payment?.body?.status === "approved") {

  //   const userId = payment.body.additional_info.payer.address.zip_code

  //   const amount = payment.body.transaction_amount

  //   const items = payment.body.additional_info.items

  //   const ids = items.map(item => item.id)

    const transaction = await Transaction.create({ amount: 200, status: "approved", userId: "NMHlUe6VpKZke80NVzLRT2PYMdG2" })

    // for (const id of ids) {
      const service = await Service.findByPk("0ba76c78-c37f-4d1c-abbd-43edffbd83e8");
      await transaction.addService(service);
    // }
    return 'success'
  }
  
  const transaction = await Transaction.create({ amount: 300, status: "disapproved", userId: "NMHlUe6VpKZke80NVzLRT2PYMdG2" })
  return 'no'

}

module.exports = mercadopagoController;