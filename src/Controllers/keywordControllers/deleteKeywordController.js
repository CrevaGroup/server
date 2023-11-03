const { Keyword } = require('../../db.js');
const titleCase = require('../../Utils/titleCase.js');

const deleteKeywordController = async (keyword) => {
    keyword = titleCase(keyword);
    const keywordDb = await Keyword.destroy({ where: { name: keyword }});
    if (!keywordDb) throw new Error ('No se encontró la palabra clave.');
    return 'Palabra clave eliminada correctamente.';
}

module.exports = deleteKeywordController;