const Router = require('express');

const URL = '../Handlers/userHandlers/';

// const getUserhandler = require(URL + 'getUserhandler');
// const putUserHandler = require(URL + 'putUserHandler');
const postUserHandler = require(URL + 'postUserHandler');
// const deleteUserHandler = require(URL + 'deleteUserHandler');

const userRouter = Router();

// userRouter.get('/', getUserhandler);
// userRouter.put('/', putUserHandler);
userRouter.post('/', postUserHandler);
// userRouter.delete('/:id', deleteUserHandler);

module.exports = userRouter;