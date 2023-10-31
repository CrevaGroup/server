const Router = require('express');

const URL = '../Handlers/serviceHandlers/'

const getServiceHandler = require(URL + 'getServiceHandler.js');
const putServiceHandler = require(URL + 'putServiceHandler.js');
const postServiceHandler = require(URL + 'postServiceHandler.js');
const deleteServiceHandler = require(URL + 'deleteServiceHandler.js');
const searchServiceHandler = require(URL + 'searchServiceHandler.js');

const serviceRouter = Router();

serviceRouter.get('/', getServiceHandler);
serviceRouter.put('/', putServiceHandler);
serviceRouter.post('/', postServiceHandler);
serviceRouter.delete('/:id', deleteServiceHandler);
serviceRouter.post('/search', searchServiceHandler);

module.exports = serviceRouter;