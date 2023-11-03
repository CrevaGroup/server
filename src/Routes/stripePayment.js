

const Router = require('express')

const URL = '../Handlers/stripePaymentHandlers/';


const stripePaymentHandler = require(URL + 'stripePaymentHandler.js');
const stripeSuccesshandler = require(URL + 'stripeSuccessHandler.js')

const stripeRouter = Router();

stripeRouter.post('/', stripePaymentHandler);

stripeRouter.get('/success', stripeSuccesshandler )
    

stripeRouter.get('/cancel',(req, res) => {res.send(req)})


module.exports = stripeRouter;