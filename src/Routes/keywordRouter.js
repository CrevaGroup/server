const Router = require('express');

const URL = '../Handlers/keywordHandlers/'

const getKeywordHandler = require(URL + 'getKeywordHandler.js');
const postKeywordHandler = require(URL + 'postKeywordHandler.js');
const deleteKeywordHandler = require(URL + 'deleteKeywordHandler.js');

const keywordRouter = Router();

keywordRouter.get('/', getKeywordHandler);
keywordRouter.post('/:keyword', postKeywordHandler);
keywordRouter.delete('/:keyword', deleteKeywordHandler);

module.exports = keywordRouter;