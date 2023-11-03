require('dotenv').config()
const Stripe = require("stripe")
const stripe = new Stripe(process.env.STRIPE_KEY)
      
      
      const stripeSuccessHandler = async (req , res)=>{
      const { session_id } = req.query;
    try {
        
        const session = await stripe.checkout.sessions.retrieve(session_id);
        console.log("session", session)

        const events = await stripe.checkout.sessions.listLineItems(session_id, {
          limit: 5,
        });
    
        const eventData = events.data[0];
    
        if (!eventData) {
          throw new Error('No se encontraron eventos para la sesión.');
        }

        console.log("eventData", eventData)
    
        const displayItems = eventData.display_items;

        console.log("displayItems",displayItems)

           if(displayItems){
        // Iterar sobre los elementos
        displayItems.forEach((item, index) => {
          console.log(`Item ${index + 1}:`);
          console.log(`Name: ${item.custom.name}`);
          console.log(`Quantity: ${item.quantity}`);
          console.log(`Total Amount: ${item.amount.total}`);
          console.log('---');
        });
      }



        const purchaseId = session.payment_intent;
        console.log('ID de compra:', purchaseId);
      
        
        i
    
        res.redirect(`http://localhost:5173/success?purchaseId=${purchaseId}&userData=${JSON.stringify(session.status)}`);
       
      } catch (err) {
        console.error(err);
        res.status(500).send('Error al obtener información del pago exitoso.');
      }
    
      }
 

      module.exports = stripeSuccessHandler;