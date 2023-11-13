const  axios  = require('axios');
const {Config} = require('../../db.js')

const getConfigController = async (ip) => {

    const {data} = await axios.get(`https://ipinfo.io/${ip}`)
    
    const country = {country: data.country}

    const config = await Config.findOne();

    if(config && country){
        return {...config.dataValues, ...country};
    }
    throw new Error('No existe una configuración')
}

module.exports = getConfigController