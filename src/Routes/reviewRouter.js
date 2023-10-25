const Router = require('express');

const URL = '../Handlers/reviewHandlers/'

const postReviewHandler = require(URL + 'postReviewHandler');
const getReviewHandler = require(URL + 'getReviewHandler');

const reviewRouter = Router();

reviewRouter.post('/', postReviewHandler)
reviewRouter.get('/', getReviewHandler)

module.exports = reviewRouter