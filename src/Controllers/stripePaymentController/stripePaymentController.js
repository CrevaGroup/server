require('dotenv').config()
const Stripe = require("stripe")
const stripe = new Stripe(process.env.STRIPE_KEY)

const stripePaymentController = async (stripeInfo) => {

    const ids = stripeInfo.map(product => product.price_data.product_data.metadata.product_id)
    
    const payment = await stripe.checkout.sessions.create({
        
        line_items: stripeInfo,
        client_reference_id:"1234567890",
        metadata: ids,

        mode: "payment",
        success_url: "http://localhost:3001/stripe/success?session_id={CHECKOUT_SESSION_ID}",
        cancel_url: "http://localhost:3001/stripe/cancel"
})
    return payment;
}


module.exports = stripePaymentController;

