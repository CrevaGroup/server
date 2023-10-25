const Router = require('express');

const URL = '../Handlers/serviceHandlers/'

const getServiceRouter = require(URL + 'getServiceRouter');
const postServiceHandler = require(URL + 'postServiceHandler');

const serviceRouter = Router();

serviceRouter.get('/', getServiceRouter);
serviceRouter.post('/', postServiceHandler);

module.exports = serviceRouter;