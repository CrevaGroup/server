const  axios  = require('axios');
const {Config} = require('../../db.js')

const getConfigController = async () => {

    const {data} = await axios.get('https://ipinfo.io')
    const country = {country: data.country}
    const config = await Config.findOne();
   
    if(config && country){
        return {...config, ...country};
    }
    throw new Error('No existe una configuración')
}

module.exports = getConfigController