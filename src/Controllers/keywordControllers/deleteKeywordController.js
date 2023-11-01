const { Keyword } = require('../../db');
const titleCase = require('../../Utils/titleCase');

const deleteKeywordController = async (keyword) => {
    keyword = titleCase(keyword);
    const keywordDb = await Keyword.destroy({ where: { name: keyword }});
    if (!keywordDb) throw new Error ('No se encontró la palabra clave.');
    return 'Palabra clave eliminada correctamente.';
}

module.exports = deleteKeywordController;