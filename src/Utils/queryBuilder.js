const { Type } = require('../db');
const { Op } = require('sequelize');
const titleCase = require('../Utils/titleCase');

const queryBuilder = (order, min, max, type) => {
    let query = {};
    // if (min) query = { ...query, where: { price: { [Op.gte]: min } } };
    // if (max) query = { ...query, where: { price: { [Op.lte]: max } } };
    if (min && max) query = { ...query, where: { price: { [Op.between]: [min, max] } } };
    if (type) query = { ...query, include: [{ model: Type, where: { name: titleCase(type) } }] };
    query = { ...query, order: [[ 'price', order ? order : 'ASC' ]]};
    return query;
}

module.exports = queryBuilder;