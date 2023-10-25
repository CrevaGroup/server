const { Review } = require('../../db');

const postReviewController = async (reviewInfo) => {
    const review = await Review.create({default: {...reviewInfo}})
    return review;
}

module.exports = postReviewController;