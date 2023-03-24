import { Model } from "sequelize";

class Statistic extends Model {
  public date!: string;

  public ip!: string;

  public region!: string;

  public browserName!: string;

  public browserVersion!: string;

  public os!: string;
}

export default Statistic;
