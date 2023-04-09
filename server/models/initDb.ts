import sequelize from "../src/db";
import Link from "./link";
import Statistic from "./statistic";

const initDb = async () => {
  Statistic.belongsTo(Link);
  Link.hasMany(Statistic, { as: "statistics" });
  await sequelize.authenticate();
  return;
};

export default initDb;
