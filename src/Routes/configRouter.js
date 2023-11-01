const Router = require('express');

const URL = '../Handlers/configHandlers/';

const postConfigHandler = require(URL + 'postConfigHandler.js')
const putConfigHandler = require(URL + 'putConfigHandler.js')

const configRouter = Router();

configRouter.post('/', postConfigHandler);
configRouter.put('/', putConfigHandler);

module.exports = configRouter

