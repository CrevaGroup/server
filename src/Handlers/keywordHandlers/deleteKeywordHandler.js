const deleteKeywordController = require('../../Controllers/keywordControllers/deleteKeywordController.js');

const deleteKeywordHandler = async (req, res) => {
    try {
        const { keyword } = req.params;
        const response = await deleteKeywordController(keyword);
        res.status(200).json(response);
    } catch (err) {
        res.status(404).json(err.message);
    }
}

module.exports = deleteKeywordHandler;