const Router = require('express')

const URL = '../Handlers/textBlogHandlers/';

const postTextBlogHandler = require(URL + 'postTextBlogHandler.js');
const getTextBlogHandler = require(URL + 'getTextBlogHandler.js');
const putTextBlogHandler = require(URL + 'putTextBlogHandler.js');
const deleteTextBlogHandler = require(URL + 'deleteTextBlogHandler.js');


const textBlogRouter = Router();

textBlogRouter.post('/', postTextBlogHandler);
textBlogRouter.get('/', getTextBlogHandler);
textBlogRouter.put('/', putTextBlogHandler);
textBlogRouter.delete('/:id', deleteTextBlogHandler);

module.exports = textBlogRouter;