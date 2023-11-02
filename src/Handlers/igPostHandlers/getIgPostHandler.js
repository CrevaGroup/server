const getIgPostController = require("../../Controllers/igPostControllers/getIgPostController.js");


const getIgPostHandler = async (req,res)=>{
try {
    const {id} = req.query;
    const response = await getIgPostController(id)
    res.status(200).json(response)

} catch (error) {
    res.status(400).json(error.message)
}

}
module.exports = getIgPostHandler