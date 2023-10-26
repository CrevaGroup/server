const Router = require('express');

const URL = '../Handlers/transactionHandlers/'

const postTransactionHandler = require(URL + 'postTransactionHandler');
const getTransactionHandler = require(URL + 'getTransactionHandler')
const putTransactionHandler = require(URL + 'putTransactiontHandler')

const transactionRouter = Router();

transactionRouter.post('/', postTransactionHandler)
transactionRouter.get('/', getTransactionHandler)
transactionRouter.put('/', putTransactionHandler)

module.exports = transactionRouter 