const { Review } = require('../../db.js');

const deleteReviewController = async (id) => {
    const review = await Review.destroy({where: {id: id}})
    if(review) return 'Review eliminada correctamente'
    throw new Error('No se encontro la review solicitada');
}

module.exports = deleteReviewController;