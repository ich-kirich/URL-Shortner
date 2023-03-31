import sequelize from "../db";
import Link from "./link";
import Statistic from "./statistic";

const initDb = async () => {
  Statistic.belongsTo(Link);
  Link.hasMany(Statistic, { as: "statistics" });

  await sequelize.authenticate();
  await sequelize.sync();
  return;
};

export default initDb;
