import { DataTypes, Model } from "sequelize";
import sequelize from "../db";

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
      allowNull: true,
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
