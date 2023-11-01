const Router = require('express');

const userRouter = require('./userRouter');
const typeRouter = require('./typeRouter');
const reviewRouter = require('./reviewRouter');
const serviceRouter = require('./serviceRouter');
const transactionRouter = require('./transactionRouter');
const igPostRouter = require('./igPostRouter.js')

const mainRouter = Router();

mainRouter.use('/user', userRouter);
mainRouter.use('/type', typeRouter);
mainRouter.use('/review', reviewRouter);
mainRouter.use('/service', serviceRouter);
mainRouter.use('/transaction', transactionRouter);
mainRouter.use('/igpost', igPostRouter);

module.exports = mainRouter;