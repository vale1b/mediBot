const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
    sequelize.define(
        'user',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
              },
            first_name: {
                type: DataTypes.STRING(100),
                allowNull: false
            },
            last_name: {
                type: DataTypes.STRING(100),
                allowNull: true
            },
            phone: {
                type: DataTypes.STRING(20),
                allowNull: true  
            },
            email: {
                type: DataTypes.STRING(150),
                allowNull: false,
                unique: true
            },
            birth_date: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            address: {
                type: DataTypes.STRING(150),
                allowNull: true,
            },
            password: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            image_profile: {
                type: DataTypes.STRING(100),
                allowNull: true,
            },
            rol_id: {
                type: DataTypes.INTEGER,
                allowNull: true  
            },
            created_at: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: DataTypes.NOW,
            },
        },
        {
            timestamps: false,
        }
    );
};