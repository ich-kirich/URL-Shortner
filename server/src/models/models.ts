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
      originalUrl: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      shortUrl: {
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
      browserName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      browserVersion: {
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
  Link.hasMany(Statistic, { as: "statistics" });

  await sequelize.authenticate();
  await sequelize.sync();
};

export default initDb;
