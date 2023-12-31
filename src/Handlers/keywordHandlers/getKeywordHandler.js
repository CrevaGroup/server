const getKeywordController = require('../../Controllers/keywordControllers/getKeywordController.js');

const getKeywordHandler = async (req, res) => {
    try {
        const response = await getKeywordController();
        res.status(200).json(response);
    } catch (err) {
        res.status(404).json(err.message);
    }
}

module.exports = getKeywordHandler;