const Router = require('express');

const URL = '../Handlers/typeHandlers/';

const getTypeHandler = require(URL + 'getTypeHandler.js');
const postTypeHandler = require(URL + 'postTypeHandler.js');
const deleteTypeHandler = require(URL + 'deleteTypeHandler.js');

const typeRouter = Router();

typeRouter.get('/', getTypeHandler);
typeRouter.post('/', postTypeHandler);
typeRouter.delete('/:name', deleteTypeHandler);

module.exports = typeRouter;
