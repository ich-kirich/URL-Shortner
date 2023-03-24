import { NextFunction, Request, Response } from "express";
import Link from "../models/link";
import Statistic from "../models/statistic";
import ApiError from "../error/apiError";
import { createStatistic, createUrl } from "../libs/utils";
import { ERROR_NOT_FOUND } from "../libs/constants";

class LinkControllers {
  async createLink(req: Request, res: Response, next: NextFunction) {
    try {
      const { originalUrl, info } = req.body;
      const checkLink = await Link.findOne({ where: { originalUrl } });
      const link = await createUrl(checkLink, originalUrl, info);
      return res.json(link);
    } catch (e) {
      return next(ApiError.badRequest(e.message));
    }
  }

  async getLink(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const link = await Link.findOne({
        where: { id },
        include: [{ model: Statistic, as: "statistics" }],
      });
      if (link) {
        return res.json(link);
      }
      return next(ApiError.badRequest(ERROR_NOT_FOUND));
    } catch (e) {
      return next(ApiError.badRequest(e.message));
    }
  }

  async redirectByLink(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const link = await Link.findByPk(id);
      if (link) {
        await createStatistic(req, link.id);
        res.redirect(link.originalUrl);
      } else {
        res.sendStatus(404);
      }
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}

export default new LinkControllers();
