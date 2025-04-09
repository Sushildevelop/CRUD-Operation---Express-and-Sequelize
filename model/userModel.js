const { DataTypes } = require('sequelize');
const { sequelize } = require("../config/dbconnect")

const userModel = sequelize.define(
    'userModel',
    {
        firstName: {
            type: DataTypes.STRING
        },
        lastName: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        password:{
              type:DataTypes.STRING
        },
        age: DataTypes.INTEGER,
        mobile: DataTypes.STRING,
        isActive: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }



    },{
        freezeTableName:true
    }
)

module.exports={userModel}


