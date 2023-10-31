const { Review } = require('../../db.js');

const putReviewController = async (reviewInfo) => {
    const review = await Review.findByPk(reviewInfo.id)

    if (!review) throw new Error ('No se encuentra la review solicitada.')
    for(property in reviewInfo){
        if(reviewInfo[property] && review.dataValues.hasOwnProperty(property)) review[property] = reviewInfo[property]
    }

    await review.save()

    return review;
}

module.exports = putReviewController;
