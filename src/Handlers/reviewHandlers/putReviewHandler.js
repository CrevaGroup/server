const putReviewController = require('../../Controllers/reviewControllers/putReviewController.js')

const putReviewHandler = async (req, res) => {
    try {
        const reviewInfo = req.body
        const response = await putReviewController(reviewInfo);
        res.status(201).json(response);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

module.exports = putReviewHandler;