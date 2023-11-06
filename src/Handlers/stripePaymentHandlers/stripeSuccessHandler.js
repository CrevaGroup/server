const stripeSuccessController = require('../../Controllers/stripePaymentController/stripeSuccessController.js')
require('dotenv').config()

const stripeSuccessHandler = async (req, res) => {
  try {
    const { session_id } = req.query;
    const response = await stripeSuccessController(session_id)
    
    if(response === "success"){
      res.redirect(`${process.env.URL_CLIENT}/success`); //aca va la rita de la pestaña de succes de valen
    }

  } catch (err) {
    res.status(500).send('Error al obtener información del pago exitoso.');
  }
}

module.exports = stripeSuccessHandler;