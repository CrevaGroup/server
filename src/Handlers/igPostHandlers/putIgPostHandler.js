const putIgPostController = require("../../Controllers/igPostControllers/putIgPostController");


const putIgPosHandler = async (req, res) =>{

    try {
        const post = req.body;
        const response = await putIgPostController(post) 
        res.status(201).json(response);

    } catch (error) {
        res.status(400).json(error.message);
        
    }

}

module.exports = putIgPosHandler