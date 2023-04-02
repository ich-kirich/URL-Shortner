import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Link from "../../models/link";
import Statistic from "../../models/statistic";
import ApiError from "../error/apiError";
import { createUrl } from "../services/linkService";
import { ERROR_NOT_FOUND } from "../libs/constants";
import { createStatistic } from "../services/statisticService";
import useragent from "useragent";
import browser from "browser-detect";

class LinkControllers {
  async createLink(req: Request, res: Response, next: NextFunction) {
    try {
      const { originalUrl, info } = req.body;
      const checkLink = await Link.findOne({ where: { originalUrl } });
      const link = await createUrl(checkLink, originalUrl, info);
      return res.json(link);
    } catch (e) {
      return next(new ApiError(StatusCodes.BAD_REQUEST, e.message));
    }
  }

  async getLink(req: Request, res: Response, next: NextFunction) {
    try {
      const codeUrl = req.params.id;
      const link = await Link.findOne({
        where: {
          shortCode: codeUrl,
        },
      });
      const stats = await Statistic.findAll({
        where: {
          LinkId: link.dataValues.id,
        },
      });
      if (stats) {
        return res.json(stats);
      }
      return next(new ApiError(StatusCodes.NOT_FOUND, ERROR_NOT_FOUND));
    } catch (e) {
      return next(new ApiError(StatusCodes.BAD_REQUEST, e.message));
    }
  }

  async redirectByLink(req: Request, res: Response, next: NextFunction) {
    try {
      const codeUrl = req.params.id;
      const link = await Link.findOne({
        where: {
          shortCode: codeUrl,
        },
      });
      if (link) {
        const ipAddress = req.ip;
        const userInf = browser(req.headers["user-agent"]);
        const userAgent = useragent.parse(req.headers["user-agent"]);
        await createStatistic(link.dataValues.id, ipAddress, userInf, userAgent);
        res.redirect(link.dataValues.originalUrl);
        return;
      } else {
        res.sendStatus(404);
        return;
      }
    } catch (e) {
      return next(new ApiError(StatusCodes.NOT_FOUND, ERROR_NOT_FOUND));
    }
  }
}

export default new LinkControllers();
