const postReviewController = require('../../Controllers/reviewControllers/postReviewController')

const postReviewHandler = async (req, res) => {
    try {
        const reviewInfo = req.body
        console.log(reviewInfo);
        const response = await postReviewController(reviewInfo);
        res.status(201).json(response);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

module.exports = postReviewHandler;