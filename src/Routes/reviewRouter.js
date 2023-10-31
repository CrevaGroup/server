const Router = require('express');

const URL = '../Handlers/reviewHandlers/';

const postReviewHandler = require(URL + 'postReviewHandler.js');
const getReviewHandler = require(URL + 'getReviewHandler.js');
const putReviewHandler = require(URL + 'putReviewHandler.js');
const deleteReviewHandler = require(URL + 'deleteReviewHandler.js');

const reviewRouter = Router();

reviewRouter.post('/', postReviewHandler);
reviewRouter.get('/', getReviewHandler);
reviewRouter.put('/', putReviewHandler);
reviewRouter.delete('/:id', deleteReviewHandler);

module.exports = reviewRouter