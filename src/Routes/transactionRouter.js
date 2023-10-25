const Router = require('express');

const URL = '../Handlers/transactionHandlers/'

const postTransactionHandler = require(URL + 'postTransactionHandler');

const transactionRouter = Router();

transactionRouter.post('/', postTransactionHandler)

module.exports = transactionRouter