const {Config} = require('../../db.js')

const postConfigController = async(configInfo)=>{
    const allConfig = await Config.findAll();
    if(allConfig.length >= 1){
        throw new Error('Ya existe una configuración!')
    }
    const config = await Config.create({...configInfo});
    return config;
}

module.exports = postConfigController