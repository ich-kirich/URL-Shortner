import { DataTypes, Model } from "sequelize";
import sequelize from "../src/db";
import Statistic from "./statistic";

class Link extends Model {
  public id!: number;

  public originalUrl!: string;

  public shortUrl!: string;

  public shortCode!: string;
}

Link.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    originalUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    shortUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    shortCode: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    tableName: "links",
  },
);

export default Link;
