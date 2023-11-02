const Router = require('express')

const URL = '../Handlers/textBlogHandlers/';

const postTextBlogHandler = require(URL + 'postTextBlogHandler.js');
const getTextBlogHandler = require(URL + 'getTextBlogHandler.js');
const putTextBlogHandler = require(URL + 'putTextBlogHandler.js');


const textBlogRouter = Router();

textBlogRouter.post('/', postTextBlogHandler);
textBlogRouter.get('/', getTextBlogHandler);
textBlogRouter.put('/', putTextBlogHandler);

module.exports = textBlogRouter;