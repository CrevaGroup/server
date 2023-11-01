const Router = require('express');

const URL = '../Handlers/configHandlers/';

const postConfigHandler= require(URL + 'postConfigHandler.js')

const configRouter = Router();

configRouter.post('/', postConfigHandler);

module.exports = configRouter

