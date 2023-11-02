const { DataTypes } = require('sequelize');

module.exports = (sequelize)=>{
    sequelize.define('TextBlog',{
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
        type: DataTypes.TEXT,
        allowNull: false
    }


    },{paranoid: true})
}