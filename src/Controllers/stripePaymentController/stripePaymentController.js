const Stripe = require("stripe")
const stripe = new Stripe("sk_test_51O57BRIooz29euKCSy30bIPtBhnS4mqtKrekRGqSVnyohrtfg3csn24VaPrAW0HhEjh2odNI2qd4youtatMQqLY900c123ZDXF")

const stripePaymentController = async (stripeInfo) => {
    
    const payment = await stripe.checkout.sessions.create({
        
        line_items: stripeInfo,

        mode: "payment",
        success_url: "http://localhost:3001/stripe/success?session_id={CHECKOUT_SESSION_ID}",
        cancel_url: "http://localhost:3001/stripe/cancel"
})
    return payment;
}


module.exports = stripePaymentController;

