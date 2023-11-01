const postIgPostController = require('../../Controllers/igPostControllers/postIgPostController.js') 

const postIgPostHandler = async (req , res ) =>{
   try {
       const postInstagram = req.body;
    
       const response = await postIgPostController(postInstagram)

       res.status(200).json(response)
       
   } catch (error) {
      res.status(400).json(error.message)
    }
}

module.exports = postIgPostHandler;


 