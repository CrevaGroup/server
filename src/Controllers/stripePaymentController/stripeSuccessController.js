require('dotenv').config()
const Stripe = require("stripe")
const stripe = new Stripe(process.env.STRIPE_KEY)
const {Transaction, Service} = require("../../db.js")
      
      
      const stripeSuccessController = async (session_id)=>{
        
        const session = await stripe.checkout.sessions.retrieve(session_id);

        const amount = session.amount_total / 100;

        const serviceIds = []
        for(const prop in session.metadata){
          const id = session.metadata[prop]
          serviceIds.push(id)
        }

        const userId = session.client_reference_id

        const status = session.payment_status
        

        if(status === "paid"){
                const transaction = await Transaction.create({amount: amount, status: "approved", userId: userId, currency: "USD", from: "Stripe"})

          for(const serviceId of serviceIds){
            const service = await Service.findByPk(serviceId);
            await transaction.addService(service)
          }
        }

        return 'success'
    
      }
 

      module.exports = stripeSuccessController;