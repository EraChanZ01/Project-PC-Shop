'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserBasketProducts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      UserBasketProducts.belongsTo(models.User, {
        foreignKey: 'userId', sourceKey: 'id'
      })
      UserBasketProducts.belongsTo(models.Product, {
        foreignKey: 'productId', sourceKey: 'id'
      })
    }
  }
  UserBasketProducts.init({
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    productId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'UserBasketProducts',
    tableName: "user_basket_products"
  });
  return UserBasketProducts;
};