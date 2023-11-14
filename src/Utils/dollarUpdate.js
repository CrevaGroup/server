require('dotenv').config();
const axios = require('axios');
const {Config} = require('../db.js');
const TOKEN = process.env.TOKEN_DOLLAR


const dolarUpdate = async () => {

  try{  
  const {data} = await axios.get('https://api.estadisticasbcra.com/usd_of', {
      headers: {
          Authorization: `Bearer ${TOKEN}`
      },
  });
  if(data.length > 0 ){
    
   const ultimaCotizacion = data[data.length - 1].v

  if(typeof ultimaCotizacion === 'number'){

  const configDolarValue = await Config.findOne();

        if (!configDolarValue) {
        
            await Config.create({ dolarValue: ultimaCotizacion});
        } else {

            configDolarValue.dolarValue = ultimaCotizacion;
            await configDolarValue.save();
        }
       
    }
}}

catch(error){
  return error.message

}      
}

module.exports = dolarUpdate;
