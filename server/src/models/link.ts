import { Model } from "sequelize";

class Link extends Model {
  public id!: number;

  public name!: string;
}

export default Link;
