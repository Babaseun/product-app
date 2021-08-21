"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      "Products",
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        product_name: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        product_description: {
          type: Sequelize.STRING(3000),
          allowNull: false,
        },
        product_varieties: {
          type: Sequelize.STRING(3000),
          allowNull: false,
        },
        date_uploaded: {
          type: Sequelize.DATE,
          defaultValue: new Date(),
        },
        date_edited: {
          type: Sequelize.DATE,
          defaultValue: new Date(),
        },
      },
      {
        timestamps: false,
        createdAt: false,
        updatedAt: false,
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
