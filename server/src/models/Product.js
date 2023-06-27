'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.hasOne(models.ComponentsProduct)
      Product.hasMany(models.UserBasketProducts, {
        foreignKey: 'productId', sourceKey: 'id'
      })
      Product.hasMany(models.UserFavoriteProducts, {
        foreignKey: 'productId', sourceKey: 'id'
      })
    }
  }
  Product.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING, allowNull: false,
    },
    photo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Product',
    tableName: 'products',
  });
  return Product;
};