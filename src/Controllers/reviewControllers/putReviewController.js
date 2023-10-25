const { Review } = require('../../db');

const putReviewController = async (reviewInfo) => {
    const review = await Review.findByPk(reviewInfo.id)

    review.description = reviewInfo.description;
    review.assessment = reviewInfo.assessment;

    await review.save()

    return review;
}

module.exports = putReviewController;