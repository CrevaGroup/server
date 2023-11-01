const Router = require('express');

const URL = '../Handlers/typeHandlers/';

const getTypehandler = require(URL + 'getTypehandler');
const putTypeHandler = require(URL + 'putTypeHandler');
const postTypeHandler = require(URL + 'postTypeHandler');
const deleteTypeHandler = require(URL + 'deleteTypeHandler');

const typeRouter = Router();

typeRouter.get('/', getTypehandler);
typeRouter.put('/', putTypeHandler);
typeRouter.post('/', postTypeHandler);
typeRouter.delete('/:name', deleteTypeHandler);

module.exports = typeRouter;