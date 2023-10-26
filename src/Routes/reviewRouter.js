const Router = require('express');

const URL = '../Handlers/reviewHandlers/'

const postReviewHandler = require(URL + 'postReviewHandler');
const getReviewHandler = require(URL + 'getReviewHandler');
const putReviewHandler = require(URL + 'putReviewHandler');

const reviewRouter = Router();

reviewRouter.post('/', postReviewHandler)
reviewRouter.get('/', getReviewHandler)
reviewRouter.put('/', putReviewHandler)

module.exports = reviewRouter