import geoip from "geoip-lite";
import { Request } from "express";
import useragent from "useragent";
import browser from "browser-detect";
import Statistic from "../models/statistic";
import { UNKNOWN } from "../libs/constants";

function getCountry(geo: geoip.Lookup) {
  if (geo === null) {
    return UNKNOWN;
  }
  return geo.country;
}

export async function createStatistic(req: Request, id: number) {
  const ipAddress = req.ip;
  const geo = geoip.lookup(ipAddress);
  const userRegion = getCountry(geo);
  const userInf = browser(req.headers["user-agent"]);
  const userAgent = useragent.parse(req.headers["user-agent"]);
  const userBrowserName = userAgent.family;
  const userBrowserVersion = userAgent.toVersion();
  const userOs = userInf.os;
  const dateUser = new Date(Date.now());
  await Statistic.create({
    date: dateUser,
    ip: ipAddress,
    region: userRegion,
    browserName: userBrowserName,
    browserVersion: userBrowserVersion,
    os: userOs,
    LinkId: id,
  });
}

export default createStatistic;
