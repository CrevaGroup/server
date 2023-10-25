const { Review } = require('../../db')

const getReviewController = async(id) => {
    if (id) {
        const review = await Review.findOne({where: {id: id}});
        if(!review) throw new Error('No se encuentra la review solicitada')
        return review;
    }
    else {
        const reviews = await Review.findAll();
        if(!reviews.length) throw new Error('No se encuentran reviews');
        return reviews;
    }
}

module.exports = getReviewController