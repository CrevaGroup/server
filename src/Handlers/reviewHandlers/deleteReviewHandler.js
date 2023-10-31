const deleteReviewController = require('../../Controllers/reviewControllers/deleteReviewController.js')

const deleteReviewHandler = async (req, res) => {
    try {
        const {id} = req.params
        const response = await deleteReviewController(id);
        res.status(201).json(response);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

module.exports = deleteReviewHandler;