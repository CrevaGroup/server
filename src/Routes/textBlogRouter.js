const Router = require('express')

const URL = '../Handlers/textBlogHandlers/';

const postTextBlogHandler = require(URL + 'postTextBlogHandler.js');
const getTextBlogHandler = require(URL + 'getTextBlogHandler.js');


const textBlogRouter = Router();

textBlogRouter.post('/', postTextBlogHandler);
textBlogRouter.get('/', getTextBlogHandler);


module.exports = textBlogRouter;