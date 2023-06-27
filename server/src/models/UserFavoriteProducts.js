'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserFavoriteProducts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      UserFavoriteProducts.belongsTo(models.User, {
        foreignKey: 'userId', sourceKey: 'id'
      })
      UserFavoriteProducts.belongsTo(models.Product, {
        foreignKey: 'productId', sourceKey: 'id'
      })
    }
  }
  UserFavoriteProducts.init({
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    productId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'UserFavoriteProducts',
    tableName: 'user_favorite_products'
  });
  return UserFavoriteProducts;
};