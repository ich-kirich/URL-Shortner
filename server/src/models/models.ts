import { DataTypes } from "sequelize";
import sequelize from "../db";
import Link from "./link";
import Statistic from "./statistic";

const initDb = async () => {
  Link.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "links",
    },
  );

  Statistic.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      data: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ip: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      region: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      browser: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      oc: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "statistics",
    },
  );

  Statistic.belongsTo(Link);
  Link.hasMany(Statistic, { as: "info" });

  await sequelize.authenticate();
  await sequelize.sync();
};

export default initDb;
