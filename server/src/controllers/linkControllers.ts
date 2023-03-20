import { NextFunction, Request, Response } from "express";
import IP from "ip";
import geoip from "geoip-lite";
import browser from "browser-detect";
import Link from "../models/link";
import Statistic from "../models/statistic";
import ApiError from "../error/apiError";
import { createUrl, tryCatchWrapper } from "../libs/server";
import { ERROR_NOT_FOUND } from "../libs/constants";

class LinkControllers {
  async createLink(req: Request, res: Response, next: NextFunction) {
    tryCatchWrapper(
      async () => {
        const { originalUrl, info } = req.body;
        const checkLink = await Link.findOne({ where: { originalUrl } });
        const link = await createUrl(checkLink, originalUrl, info);
        return res.json(link);
      },
      (e: Error) => {
        return next(ApiError.badRequest(e.message));
      },
    );
  }

  async getOne(req: Request, res: Response, next: NextFunction) {
    tryCatchWrapper(
      async () => {
        const { id } = req.params;
        const link = await Link.findOne({
          where: { id },
          include: [{ model: Statistic, as: "info" }],
        });
        if (link) {
          return res.json(link);
        }
        return next(ApiError.badRequest(ERROR_NOT_FOUND));
      },
      (e: Error) => {
        return next(ApiError.badRequest(e.message));
      },
    );
  }

  async getLink(req: Request, res: Response, next: NextFunction) {
    tryCatchWrapper(
      async () => {
        const { id } = req.params;
        const link = await Link.findByPk(id);
        if (link) {
          const ipAddress = IP.address(); // ip user
          const geo = geoip.lookup(ipAddress);
          // const region = geo.country; // region user
          const userInf = browser(req.headers["user-agent"]);
          const browserName = userInf.name; // name browser
          const browserVersion = userInf.version; // version browser
          const userOs = userInf.os; // os user
          const date = new Date(Date.now()); // request date
          res.redirect(req.ip);
        } else {
          res.sendStatus(404);
        }
      },
      (e: Error) => {
        return next(ApiError.badRequest(e.message));
      },
    );
  }
}

export default new LinkControllers();
