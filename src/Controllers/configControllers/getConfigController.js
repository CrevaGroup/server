const {Config} = require('../../db.js')

const getConfigController = async () => {
    const config = await Config.findOne();
    if(config){
        return config;
    }
    throw new Error('No existe una configuración')
}

module.exports = getConfigController