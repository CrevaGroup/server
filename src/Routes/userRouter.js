const Router = require('express');

const URL = '../Handlers/userHandlers/'

const postUserHandler = URL + 'postUserHandler';

const userRouter = Router();

serviceRouter.post('/', postUserHandler);

module.exports = userRouter