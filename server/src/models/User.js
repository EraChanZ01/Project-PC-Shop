'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.UserBasketProducts, {
        foreignKey: 'userId', sourceKey: 'id'
      })
      User.hasMany(models.UserFavoriteProducts, {
        foreignKey: 'userId', sourceKey: 'id'
      })
    }
  }
  User.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: { type: DataTypes.STRING, allowNull: false },
    lastName: { type: DataTypes.STRING, allowNull: false },
    phoneNumber: { type: DataTypes.INTEGER, unique: true, allowNull: false },
    password: { type: DataTypes.TEXT, allowNull: false }
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
  });
  return User;
};