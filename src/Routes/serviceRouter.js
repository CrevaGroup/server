const Router = require('express');

const URL = '../Handlers/serviceHandlers'

const postServiceHandler = require(URL + 'postServiceHandler');

const serviceRouter = Router();

serviceRouter.post('/', postServiceHandler);

module.exports = serviceRouter;