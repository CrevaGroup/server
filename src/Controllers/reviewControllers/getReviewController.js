const { Review, User, Service } = require('../../db.js')

const getReviewController = async(id) => {
    if (id) {
        const review = await Review.findOne({
            where: {id: id},
            include: [{
                model: User,
                as: "user"
            },{
                model: Service,
                as: "service"
            }]
        });
        if(!review) throw new Error('No se encuentra la review solicitada')
        return review;
    }
    else {
        const reviews = await Review.findAll({include: [{
            model: User,
            as: "user"
        },{
            model: Service,
            as: "service"
        }]});
        if(!reviews.length) throw new Error('No se encuentran reviews');
        return reviews;
    }
}

module.exports = getReviewController