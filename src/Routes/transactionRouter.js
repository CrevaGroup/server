const Router = require('express');

const URL = '../Handlers/transactionHandlers/'

const postTransactionHandler = require(URL + 'postTransactionHandler.js');
const getTransactionHandler = require(URL + 'getTransactionHandler.js')
const putTransactionHandler = require(URL + 'putTransactiontHandler.js')

const transactionRouter = Router();

transactionRouter.post('/', postTransactionHandler)
transactionRouter.get('/', getTransactionHandler)
transactionRouter.put('/', putTransactionHandler)

module.exports = transactionRouter 