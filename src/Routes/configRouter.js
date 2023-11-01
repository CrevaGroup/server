const Router = require('express');

const URL = '../Handlers/configHandlers/';

const postConfigHandler = require(URL + 'postConfigHandler.js')
const putConfigHandler = require(URL + 'putConfigHandler.js')
const getConfigHandler = require(URL + 'getConfigHandler.js')

const configRouter = Router();

configRouter.post('/', postConfigHandler);
configRouter.put('/', putConfigHandler);
configRouter.get('/', getConfigHandler);

module.exports = configRouter

