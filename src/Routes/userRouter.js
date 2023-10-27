const Router = require('express');

const URL = '../Handlers/userHandlers/';

const postUserHandler = require(URL + 'postUserHandler');

const userRouter = Router();

userRouter.post('/', postUserHandler);

module.exports = userRouter;