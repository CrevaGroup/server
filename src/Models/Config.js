const { DataTypes } = require('sequelize');

module.exports = (sequelize)=>{
    sequelize.define('Config', {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        filters: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        },
        dolarValue: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {paranoid: true})
}