const Router = require('express');

const URL = '../Handlers/serviceHandlers/'

const getServiceHandler = require(URL + 'getServiceHandler');
const putServiceHandler = require(URL + 'putServiceHandler');
const postServiceHandler = require(URL + 'postServiceHandler');
const deleteServiceHandler = require(URL + 'deleteServiceHandler');
const searchServiceHandler = require(URL + 'searchServiceHandler');

const serviceRouter = Router();

serviceRouter.get('/', getServiceHandler);
serviceRouter.put('/', putServiceHandler);
serviceRouter.post('/', postServiceHandler);
serviceRouter.delete('/:id', deleteServiceHandler);
serviceRouter.post('/search', searchServiceHandler);

module.exports = serviceRouter;