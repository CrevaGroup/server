const Router = require('express');

const URL = '../Handlers/transactionHandlers/'

const postTransactionHandler = require(URL + 'postTransactionHandler');
const getTransactionHandler = require(URL + 'getTransactionHandler');
const putTransactionHandler = require(URL + 'putTransactiontHandler');
const mercadopagoHandler = require('../Handlers/mercadopagoHandlers/mercadopagoHandler.js');
const mpLinkGenHandler = require('../Handlers/mercadopagoHandlers/mpLinkGenHandler.js');

const transactionRouter = Router();

transactionRouter.post('/mpLink', mpLinkGenHandler)
transactionRouter.post('/', postTransactionHandler)
transactionRouter.get('/', getTransactionHandler)
transactionRouter.put('/', putTransactionHandler)
transactionRouter.post('/notify', mercadopagoHandler)

module.exports = transactionRouter 