const Router = require('express');

const URL = '../Handlers/reviewHandlers/'

const postReviewHandler = require(URL + 'postReviewHandler');

const reviewRouter = Router();

reviewRouter.post('/', postReviewHandler)

module.exports = reviewRouter