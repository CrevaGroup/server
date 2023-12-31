const Router = require('express');

const URL = '../Handlers/transactionHandlers/'

const postTransactionHandler = require(URL + 'postTransactionHandler.js');
const getTransactionHandler = require(URL + 'getTransactionHandler.js');
const putTransactionHandler = require(URL + 'putTransactiontHandler.js');
const mercadopagoHandler = require('../Handlers/mercadopagoHandlers/mercadopagoHandler.js');
const mpLinkGenHandler = require('../Handlers/mercadopagoHandlers/mpLinkGenHandler.js');

const transactionRouter = Router();

transactionRouter.post('/mpLink', mpLinkGenHandler)
transactionRouter.post('/', postTransactionHandler)
transactionRouter.get('/', getTransactionHandler)
transactionRouter.put('/', putTransactionHandler)
transactionRouter.post('/notify', mercadopagoHandler)

module.exports = transactionRouter 
