"use strict";
const faker = require("faker");
// export interface ProductAttributes {
//   id: number;
//   product_name: string;
//   product_description: string;
//   product_varieties: ProductVarieties[];
//   date_uploaded: string;
//   date_edited: string;
// }

// export interface ProductVarieties {
//   id: number;
//   color: string;
//   quantity: string;
//   images: string[];
//   price: string;
// }

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      const products = [];
      let num = 100;
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
                faker.internet.url(),
                faker.internet.url(),
                faker.internet.url(),
              ],
              quantity: String(Math.random() * (20 - 1) + 1),
              price: String(Math.random() * (100 - 10) + 10),
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
