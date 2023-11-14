const  axios  = require('axios');
const {Config} = require('../../db.js')

const getConfigController = async (ip) => {

    const date = new Date()

    const config = await Config.findOne();
console.log('hola')
    if(!config){
        await dollarUpdate()
    } else if (date.toDateString() !== config.dataValues.updatedAt.toDateString()){
        await dollarUpdate()
    }
console.log('chau')
    const config2 = await Config.findOne();

    const {data} = await axios.get(`https://ipinfo.io/${ip}`)
    
    const country = {country: data.country}

    if(config && country){
        return {...config2.dataValues, ...country};
    }
    throw new Error('No existe una configuración')
}

module.exports = getConfigController
