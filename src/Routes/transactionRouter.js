const Router = require('express');

const URL = '../Handlers/transactionHandlers/'

const postTransactionHandler = require(URL + 'postTransactionHandler');
const getTransactionHandler = require(URL + 'getTransactionHandler')

const transactionRouter = Router();

transactionRouter.post('/', postTransactionHandler)
transactionRouter.get('/', getTransactionHandler)

module.exports = transactionRouter 