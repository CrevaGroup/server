const { Op } = require("sequelize");

const queryBuilder = (order, min, max) => {
    let query = {};
    if (min) query = { ...query, where: { price: { [Op.gte]: min } } };
    if (max) query = { ...query, where: { price: { [Op.lte]: max } } };
    query = { ...query, order: [[ 'price', order ? order : 'ASC' ]]};
    return query;
}

module.exports = queryBuilder;