const { Review } = require('../../db');

const deleteReviewController = async (id) => {
    const review = await Review.destroy({where: {id: id}})
    return review;
}

module.exports = deleteReviewController;