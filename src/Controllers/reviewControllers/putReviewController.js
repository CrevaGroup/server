const { Review } = require('../../db');

const putReviewController = async (reviewInfo) => {
    const review = await Review.findByPk(reviewInfo.id)

    for(property in reviewInfo){
        if(reviewInfo[property] && review.dataValues.hasOwnProperty(property)) review[property] = reviewInfo[property]
    }

    await review.save()

    return review;
}

module.exports = putReviewController;