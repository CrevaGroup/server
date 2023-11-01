const deleteIgPostController = require("../../Controllers/igPostControllers/deleteIgPostController");


const deleteIgPostHandler = async (req,res)=>{
try {
    const {id} = req.params
    const response = await deleteIgPostController(id);
    res.status(201).json(response);
} catch (error) {
    res.status(404).json(error.message)
}

}

module.exports = deleteIgPostHandler;
