const Router = require('express');

const URL = '../Handlers/typeHandlers/';

const getTypehandler = require(URL + 'getTypehandler');
const postTypeHandler = require(URL + 'postTypeHandler');
const deleteTypeHandler = require(URL + 'deleteTypeHandler');

const TypeRouter = Router();

typeRouter.get('/', getTypehandler);
typeRouter.post('/', postTypeHandler);
typeRouter.delete('/:id', deleteTypeHandler);

module.exports = TypeRouter;