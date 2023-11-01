const { Keyword } = require('../../db.js');

const getKeywordController = async () => {
    const keywords = await Keyword.findAll();
    if (!keywords.length) throw new Error ('No se encuentran palabras clave.');
    return keywords;
}

module.exports = getKeywordController;