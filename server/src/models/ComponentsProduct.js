'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ComponentsProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ComponentsProduct.belongsTo(models.Product, {
        foreignKey: { field: "productId" }, sourceKey: 'id'
      })
    }
  }
  ComponentsProduct.init({
    productId: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true },
    cpu: { type: DataTypes.STRING, allowNull: false },
    mainboard: { type: DataTypes.STRING, allowNull: false },
    cooling: { type: DataTypes.STRING, allowNull: false },
    ram: { type: DataTypes.STRING, allowNull: false },
    graphic: { type: DataTypes.STRING, allowNull: false },
    power: { type: DataTypes.STRING, allowNull: false },
    ssd: { type: DataTypes.STRING, },
    case: { type: DataTypes.STRING, allowNull: false },
    os: { type: DataTypes.STRING, allowNull: false }
  }, {
    sequelize,
    modelName: 'ComponentsProduct',
    tableName: 'components_products',
  });
  return ComponentsProduct;
};