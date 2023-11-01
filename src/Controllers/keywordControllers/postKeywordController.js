const { Keyword } = require('../../db.js');
const titleCase = require('../../Utils/titleCase');

const postKeywordController = async (keyword) => {
    keyword = titleCase(keyword);
    const [keywordDb, created] = await Keyword.findOrCreate({ where: { name: keyword }, defaults:{ name: keyword } });
    if (created) return keywordDb;
    else throw new Error ('La palabra clave ya existe.')
}

module.exports = postKeywordController;