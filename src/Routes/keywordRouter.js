const Router = require('express');

const URL = '../Handlers/keywordHandlers/'

const getKeywordHandler = require(URL + 'getKeywordHandler');
const postKeywordHandler = require(URL + 'postKeywordHandler');
const deleteKeywordHandler = require(URL + 'deleteKeywordHandler');

const keywordRouter = Router();

keywordRouter.get('/', getKeywordHandler);
keywordRouter.post('/:keyword', postKeywordHandler);
keywordRouter.delete('/:keyword', deleteKeywordHandler);

module.exports = keywordRouter;