"use strict";
const faker = require("faker");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      const products = [];
      let num = 50;
      while (num--) {
        products.push({
          product_name: faker.commerce.productName(),
          product_description: faker.lorem.sentences(),
          product_varieties: JSON.stringify([
            {
              color: faker.random.arrayElement([
                "Orange",
                "Blue",
                "Black",
                "Pink",
              ]),
              images: [
                faker.image.unsplash.technology(),
                faker.image.unsplash.nature(),
                faker.image.unsplash.buildings(),
                faker.image.unsplash.objects(),
              ],
              quantity: Math.floor(faker.commerce.price()),
              price: faker.commerce.price(),
            },
          ]),
          date_uploaded: new Date(),
          date_edited: new Date(),
        });
      }
      return await queryInterface.bulkInsert("Products", products, {});
    } catch (error) {
      console.log(error);
    }
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
