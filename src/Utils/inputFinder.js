const { Type } = require('../db.js');
const { Op } = require('sequelize');
const { CV_MAP, PERFIL_MAP, BUSQUEDA_MAP, PRACTICA_MAP } = require('./inputMap.js');

const inputFinder = (input) => {
    let query = {};
    input = input.toLowerCase().split(' ');
    CV_MAP.forEach(word => {
        if (input.includes(word)) {
            query = { ...query, include: [{ model: Type, where: { name: 'Cv' } }] };
        }
    });
    PERFIL_MAP.forEach(word => {
        if (input.includes(word)) {
            query = { ...query, include: [{ model: Type, where: { name: 'Perfil' } }] };
        }
    });
    BUSQUEDA_MAP.forEach(word => {
        if (input.includes(word)) {
            query = { ...query, include: [{ model: Type, where: { name: 'Busqueda' } }] };
            // query = { ...query, include: [{ model: Type, where: { [Op.or]: [{ name: 'Cv'}, { name: 'Busqueda'}] }}]};
        }
    });
    PRACTICA_MAP.forEach(word => {
        if (input.includes(word)) {
            query = { ...query, include: [{ model: Type, where: { name: 'Practica' } }] };
        }
    });
    return query
}

module.exports = inputFinder;