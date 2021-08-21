import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();
export const sequelize = new Sequelize({
  username: process.env.USER_NAME,
  password: process.env.PASS,
  database: process.env.DATABASE,
  host: process.env.HOST,
  dialect: "postgres",
});

sequelize.sync();
console.log("All models were synchronized successfully.");