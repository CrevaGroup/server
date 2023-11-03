require('dotenv').config()
const Stripe = require("stripe")
const stripe = new Stripe(process.env.STRIPE_KEY)

const stripePaymentController = async (stripeInfo) => {

    const ids = stripeInfo.items.map(item => item.id)

    const userId = stripeInfo.userId;

    const items = stripeInfo.items.map(item => ({
        price_data:{
            product_data:{ 
            name: item.title,
            description: item.description
            },
            currency: "usd",
            unit_amount: item.price * 100},
            quantity : 1

    })
    )
    
    const payment = await stripe.checkout.sessions.create({
        
        line_items: items,
        client_reference_id:userId,
        metadata: ids,

        mode: "payment",
        success_url: "http://localhost:3001/stripe/success?session_id={CHECKOUT_SESSION_ID}",
        cancel_url: "http://localhost:3001/stripe/cancel"
})
    return payment;
}


module.exports = stripePaymentController;

