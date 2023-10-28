const Router = require('express');

const userRouter = require('./userRouter');
const typeRouter = require('./typeRouter');
const reviewRouter = require('./reviewRouter');
const serviceRouter = require('./serviceRouter');
const transactionRouter = require('./transactionRouter');

const mainRouter = Router();

mainRouter.use('/user', userRouter);
mainRouter.use('/type', typeRouter);
mainRouter.use('/review', reviewRouter);
mainRouter.use('/service', serviceRouter);
mainRouter.use('/transaction', transactionRouter);

module.exports = mainRouter;