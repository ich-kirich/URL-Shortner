import { Model } from "sequelize";

class Link extends Model {
  public id!: number;

  public originalUrl!: string;

  public shortUrl!: string;

  public shortCode!: string;
}

export default Link;
