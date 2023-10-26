const Router = require('express');

const URL = '../Handlers/serviceHandlers/'

const getServiceHandler = require(URL + 'getServiceHandler');
const putServiceHandler = require(URL + 'putServiceHandler');
const postServiceHandler = require(URL + 'postServiceHandler');

const serviceRouter = Router();

serviceRouter.get('/', getServiceHandler);
serviceRouter.put('/', putServiceHandler);
serviceRouter.post('/', postServiceHandler);

module.exports = serviceRouter;