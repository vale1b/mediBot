const { Sequelize, DataTypes, Model } = require('sequelize');
const {sequelize} = require('../db');

class User extends Model {}

User.init(
    {
      user_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
    },
    {
        sequelize,
        modelName: 'User'
    }
);

module.exports = User;