const { Type } = require('../db.js');
const { Op } = require('sequelize');
const titleCase = require('../Utils/titleCase.js');

const queryBuilder = (order, min, max, type) => {
    let query = {};
    if (min && max) query = { ...query, where: { price: { [Op.between]: [min, max] } } };
    if (type) query = { ...query, include: { model: Type, where: { name: [...type.split('-')] } } };
    query = { ...query, order: [[ 'price', order ? order : 'ASC' ]]};
    return query;
}

module.exports = queryBuilder;