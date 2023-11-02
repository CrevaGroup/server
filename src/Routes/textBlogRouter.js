const Router = require('express')

const URL = '../Handlers/textBlogHandlers/';

const postTextBlogHandler = require(URL + 'postTextBlogHandler.js');


const textBlogRouter = Router();

textBlogRouter.post('/', postTextBlogHandler);

module.exports = textBlogRouter;