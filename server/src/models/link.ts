import { Model } from "sequelize";

class Link extends Model {
  public id!: number;

  public url!: string;
}

export default Link;
