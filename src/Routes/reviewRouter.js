const Router = require('express');

const URL = '../Handlers/reviewHandler'

const postReviewHandler = require(URL + 'postReviewHandler');

const reviewRouter = Router();

reviewRouter.post('/', postReviewHandler)