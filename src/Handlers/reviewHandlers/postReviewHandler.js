const postReviewController = require('../../Controllers/reviewControllers/postReviewController.js')

const postReviewHandler = async (req, res) => {
    try {
        const reviewInfo = req.body
        const response = await postReviewController(reviewInfo);
        res.status(201).json(response);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

module.exports = postReviewHandler;