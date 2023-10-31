const {DataTypes} = require('sequelize');

module.exports = (sequelize) =>{
    sequelize.define('Transaction',{
        id:{
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        amount:{
            type: DataTypes.FLOAT,
            allowNull: false,
        }

    }, {paranoid: true})

}