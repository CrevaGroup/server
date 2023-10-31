const { Review, Service, User } = require('../../db');

const postReviewController = async (reviewInfo) => {
    const review = await Review.create({...reviewInfo})

    return review;
}

module.exports = postReviewController;