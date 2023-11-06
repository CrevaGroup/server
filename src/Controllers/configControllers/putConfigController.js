const {Config} = require('../../db.js');

const putConfigController = async (configInfo) => {
    const config = await Config.findByPk(configInfo.id)
    if(config){
        if(configInfo.filters) config.filters = configInfo.filters;
        if(configInfo.dolarValue) config.dolarValue = configInfo.dolarValue;

        config.save()

        return config
    }
    throw new Error('No se ha encontrado una configuración')
}

module.exports = putConfigController