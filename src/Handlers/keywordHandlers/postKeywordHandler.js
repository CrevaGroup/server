const postKeywordController = require('../../Controllers/keywordControllers/postKeywordController');

const postKeywordHandler = async (req, res) => {
    try {
        const { keyword } = req.params;
        const response = await postServiceController(keyword);
        res.status(200).json(response);
    } catch (err) {
        res.status(400).json(err.message);
    }
}

module.exports = postKeywordHandler;