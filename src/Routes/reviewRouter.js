const Router = require('express');

const URL = '../Handlers/reviewHandlers/';

const postReviewHandler = require(URL + 'postReviewHandler');
const getReviewHandler = require(URL + 'getReviewHandler');
const putReviewHandler = require(URL + 'putReviewHandler');
const deleteReviewHandler = require(URL + 'deleteReviewHandler');

const reviewRouter = Router();

reviewRouter.post('/', postReviewHandler);
reviewRouter.get('/', getReviewHandler);
reviewRouter.put('/', putReviewHandler);
reviewRouter.delete('/:id', deleteReviewHandler);

module.exports = reviewRouter