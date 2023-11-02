const Router = require('express');

const userRouter = require('./userRouter.js');
const typeRouter = require('./typeRouter.js');
const reviewRouter = require('./reviewRouter.js');
const serviceRouter = require('./serviceRouter.js');
const transactionRouter = require('./transactionRouter.js');
const igPostRouter = require('./igPostRouter.js');
const configRouter = require('./configRouter.js');
const textBlogRouter = require('./textBlogRouter.js')
const keywordRouter = require('./keywordRouter');

const mainRouter = Router();

mainRouter.use('/user', userRouter);
mainRouter.use('/type', typeRouter);
mainRouter.use('/review', reviewRouter);
mainRouter.use('/service', serviceRouter);
mainRouter.use('/transaction', transactionRouter);
mainRouter.use('/igpost', igPostRouter);
mainRouter.use('/config', configRouter);
mainRouter.use('/textblog', textBlogRouter)
mainRouter.use('/keyword', keywordRouter);

module.exports = mainRouter;