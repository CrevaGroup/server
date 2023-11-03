

const Router = require('express')

const URL = '../Handlers/stripePaymentHandlers/';


const stripePaymentHandler = require(URL + 'stripePaymentHandler.js');
const stripeSuccessHandler = require(URL + 'stripeSuccessHandler.js')

const stripeRouter = Router();

stripeRouter.post('/', stripePaymentHandler);
stripeRouter.get('/success', stripeSuccessHandler);


module.exports = stripeRouter;