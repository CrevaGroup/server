const Router = require('express');

const URL = '../Handlers/typeHandlers/';

const getTypehandler = require(URL + 'getTypehandler.js');
const putTypeHandler = require(URL + 'putTypeHandler.js');
const postTypeHandler = require(URL + 'postTypeHandler.js');
const deleteTypeHandler = require(URL + 'deleteTypeHandler.js');

const typeRouter = Router();

typeRouter.get('/', getTypehandler);
typeRouter.put('/', putTypeHandler);
typeRouter.post('/', postTypeHandler);
typeRouter.delete('/:name', deleteTypeHandler);

module.exports = typeRouter;