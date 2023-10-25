const Router = require('express');

const URL = '../Handlers/serviceHandlers/'

const getServiceHandler = require(URL + 'getServiceHandler');
const postServiceHandler = require(URL + 'postServiceHandler');

const serviceRouter = Router();

serviceRouter.get('/', getServiceHandler);
serviceRouter.post('/', postServiceHandler);

module.exports = serviceRouter;