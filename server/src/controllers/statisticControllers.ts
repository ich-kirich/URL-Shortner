import { Request, Response, NextFunction } from "express";
import ApiError from "../error/apiError";
import Statistic from "../models/statistic";

class StatisticControllers {
  async createStatistic(req: Request, res: Response, next: NextFunction) {
    try {
      const { data, ip, region, browser, oc, linkId } = req.body;
      const statistic = await Statistic.create({
        data,
        ip,
        region,
        browser,
        oc,
        linkId,
      });
      return res.json(statistic);
    } catch (e) {
      return next(ApiError.badRequest(e.message));
    }
  }

  async getStatistic(req: Request, res: Response, next: NextFunction) {
    const { id } = req.query;
    if (!id) {
      next(ApiError.badRequest("Id is not set"));
    } else {
      const AllStatistic = await Statistic.findAll();
      res.json(AllStatistic);
    }
  }
}

export default new StatisticControllers();
