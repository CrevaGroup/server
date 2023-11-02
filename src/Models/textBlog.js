const { DataTypes } = require('sequelize');

module.exports = (sequelize)=>{
    sequelize.define('textBlog',{
    id: {
       type: DataTypes.UUID,
       primaryKey: true,
       defaultValue: DataTypes.UUIDV4
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    
    content: {
        type: DataTypes.STRING,
        allowNull: false
    }


    },{paranoid: true})
}