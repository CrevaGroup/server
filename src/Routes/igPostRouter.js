const Router = require('express');

const URL = '../Handlers/igPostHandlers/'

const postIgPostHandler = require(URL + 'postIgPostHandler.js')
const getIgPostHandler = require(URL + 'getIgPostHandler.js')


const igPostRouter = Router()

igPostRouter.post('/', postIgPostHandler);
igPostRouter.get('/', getIgPostHandler);

module.exports = igPostRouter;