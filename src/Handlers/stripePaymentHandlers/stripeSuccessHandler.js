const stripeSuccessController = require('../../Controllers/stripePaymentController/stripeSuccessController.js')

const stripeSuccessHandler = async (req, res) => {
  try {
    const { session_id } = req.query;
    const response = await stripeSuccessController(session_id)
    
    if(response === "success"){
      res.redirect(`http://localhost:5173/success`); //aca va la rita de la pestaña de succes de valen
    }

  } catch (err) {
    res.status(500).send('Error al obtener información del pago exitoso.');
  }
}

module.exports = stripeSuccessHandler;