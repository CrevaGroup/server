const Router = require('express');

const URL = '../Handlers/userHandlers/';

const getUserhandler = require(URL + 'getUserhandler');
const putUserHandler = require(URL + 'putUserHandler.js');
const postUserHandler = require(URL + 'postUserHandler.js');
const deleteUserHandler = require(URL + 'deleteUserHandler.js');

const userRouter = Router();

userRouter.get('/', getUserhandler);
userRouter.put('/', putUserHandler);
userRouter.post('/', postUserHandler);
userRouter.delete('/:id', deleteUserHandler);

module.exports = userRouter;
