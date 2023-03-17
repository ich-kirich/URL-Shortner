import { Model } from "sequelize";

class Statistic extends Model {
  public data!: string;

  public ip!: string;

  public region!: string;

  public browser!: string;

  public oc!: string;
}

export default Statistic;
