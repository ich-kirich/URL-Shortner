import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });
const sequelize = new Sequelize(
  String(process.env.DB_NAME),
  String(process.env.DB_USER),
  String(process.env.DB_PASSWORD),
  {
    dialect: "postgres",
    host: String(process.env.DB_HOST),
    port: Number(process.env.DB_PORT),
  },
);

export default sequelize;
