import { NextFunction, Request, Response } from "express";
import Link from "../models/link";
import Statistic from "../models/statistic";
import ApiError from "../error/apiError";

class LinkControllers {
  async createLink(req: Request, res: Response, next: NextFunction) {
    try {
      const { originalUrl, info } = req.body;
      const checkLink = await Link.findOne({ where: { originalUrl } });
      if (checkLink) {
        return res.json(checkLink);
      }
      const link = await Link.create({ originalUrl, shortUrl: "" });
      link.shortUrl = `http://localhost:${process.env.PORT}/${link.id}`;
      await link.save();
      if (info) {
        const newStatistic = JSON.parse(info);
        newStatistic.map((item: Statistic) =>
          Statistic.create({
            data: item.data,
            ip: item.ip,
            region: item.region,
            browser: item.browser,
            oc: item.oc,
            linkId: link.id,
          }),
        );
      }
      return res.json(link);
    } catch (e) {
      return next(ApiError.badRequest(e.message));
    }
  }

  async getOne(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const link = await Link.findOne({
      where: { id },
      include: [{ model: Statistic, as: "info" }],
    });
    return res.json(link);
  }

  async getLink(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const link = await Link.findByPk(id);
    if (link) {
      res.redirect(link.originalUrl);
    } else {
      res.sendStatus(404);
    }
  }
}

export default new LinkControllers();
