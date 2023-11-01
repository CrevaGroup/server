const getIgPostController = require("../../Controllers/igPostControllers/getIgPostController.js");


const getIgPostHandler = async (req,res)=>{
try {
    const {id} = req.query;
    const response = await getIgPostController(id)
    console.log("response", response);
    res.status(200).json(response)

} catch (error) {
    res.status(404).json(error.message)
}

}
module.exports = getIgPostHandler