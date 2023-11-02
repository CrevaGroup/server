const Router = require('express');

const URL = '../Handlers/igPostHandlers/'

const postIgPostHandler = require(URL + 'postIgPostHandler.js')
const getIgPostHandler = require(URL + 'getIgPostHandler.js')
const putIgPostHandler = require(URL + 'putIgPostHandler.js')
const deleteIgPostHandler = require(URL + 'deleteIgPostHandler.js')

const igPostRouter = Router()

igPostRouter.post('/', postIgPostHandler);
igPostRouter.get('/', getIgPostHandler);
igPostRouter.put('/', putIgPostHandler);
igPostRouter.delete('/:id', deleteIgPostHandler);


module.exports = igPostRouter;