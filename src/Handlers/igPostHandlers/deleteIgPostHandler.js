const deleteIgPostController = require("../../Controllers/igPostControllers/deleteIgPostController.js");


const deleteIgPostHandler = async (req,res)=>{
try {
    const {id} = req.params
    const response = await deleteIgPostController(id);
    res.status(201).json(response);
} catch (error) {
    res.status(400).json(error.message)
}

}

module.exports = deleteIgPostHandler;
