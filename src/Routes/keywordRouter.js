const Router = require('express');

const URL = '../Handlers/keywordHandlers/'

const getKeywordHandler = require(URL + 'getKeywordHandler');
const postKeywordHandler = require(URL + 'postKeywordHandler');
const deleteKeywordHandler = require(URL + 'deleteKeywordHandler');

const keywordRouter = Router();

keywordRouter.get('/', getKeywordHandler);
keywordRouter.post('/', postKeywordHandler);
keywordRouter.delete('/:id', deleteKeywordHandler);

module.exports = keywordRouter;