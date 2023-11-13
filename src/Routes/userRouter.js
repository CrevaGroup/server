const Router = require('express');

const URL = '../Handlers/userHandlers/';

const getUserHandler = require(URL + 'getUserHandler.js');
const putUserHandler = require(URL + 'putUserHandler.js');
const postUserHandler = require(URL + 'postUserHandler.js');
const deleteUserHandler = require(URL + 'deleteUserHandler.js');

const userRouter = Router();

userRouter.get('/', getUserHandler);
userRouter.put('/', putUserHandler);
userRouter.post('/', postUserHandler);
userRouter.delete('/:id', deleteUserHandler);

module.exports = userRouter;
