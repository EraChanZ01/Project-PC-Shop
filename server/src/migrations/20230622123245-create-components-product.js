'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('components_products', {
      productId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'products',
          key: 'id',
        },
      },
      cpu: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      mainboard: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cooling: {
        type: Sequelize.STRING,
        allowNull: false
      },
      ram: {
        type: Sequelize.STRING,
        allowNull: false
      },
      graphic: {
        type: Sequelize.STRING,
        allowNull: false
      },
      power: {
        type: Sequelize.STRING,
        allowNull: false
      },
      ssd: {
        type: Sequelize.STRING,
      },
      case: {
        type: Sequelize.STRING,
        allowNull: false
      },
      os: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('components_products');
  }
};