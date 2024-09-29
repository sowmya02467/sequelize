const { Sequelize } = require("sequelize");

const {DataTypes} = Sequelize;


const User = Sequelize.Define('user',{
    username:{
        type: DataTypes.STRING,
        allowNull:false,
        unique:true,
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
     
    }

})
Model.exports = User