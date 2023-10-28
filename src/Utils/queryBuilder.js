const { Op } = require("sequelize");

const queryBuilder = (order, min, max, keyword) => {
    let query = {};
    if (min) query = { ...query, where: { price: { [Op.gte]: min } } };
    if (max) query = { ...query, where: { price: { [Op.lte]: max } } };
    if (min && max) query = { ...query, where: { price: { [Op.between]: [min, max] } } };

    // if (keyword) query = { ...query, where: { keyWord: { [Op.contains]: ['cv'] } } }
    // if (keyword && min && max) query = { ...query, where: { ...query.where, keyWord: { [Op.contains]: ['cv'] } } }

    query = { ...query, order: [[ 'price', order ? order : 'ASC' ]]};
    return query;
}

module.exports = queryBuilder;