const getReviewController = require("../../Controllers/reviewControllers/getReviewController.js");

const getReviewHandler = async(req, res) => {
    try {
        const {id} = req.query;
        const response = await getReviewController(id);
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json(error.message)
    }
}

module.exports = getReviewHandler