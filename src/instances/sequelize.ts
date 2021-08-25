import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

export const sequelize = new Sequelize({
  username: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  host: process.env.PGHOST,
  dialect: "postgres",
});

try {
  (async function () {
    await sequelize.authenticate();
  })();
} catch (error) {
  console.log(error);
}
// console.log("All models were synchronized successfully.");
