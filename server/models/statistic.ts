import { DataTypes, Model } from "sequelize";
import sequelize from "../src/db";

class Statistic extends Model {
  public date!: string;

  public ip!: string;

  public region!: string;

  public browserName!: string;

  public browserVersion!: string;

  public os!: string;
}

Statistic.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    date: {
      type: DataTypes.DATE,
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
    os: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "statistics",
  },
);

export default Statistic;
