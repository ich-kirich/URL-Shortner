import geoip from "geoip-lite";
import { Request } from "express";
import Statistic from "../../models/statistic";
import { UNKNOWN } from "../libs/constants";
import { BrowserDetectInfo } from "browser-detect/dist/types/browser-detect.interface";
import useragent from "useragent";

function getCountry(geo: geoip.Lookup) {
  if (geo === null) {
    return UNKNOWN;
  }
  return geo.country;
}

export async function createStatistic(id: number, ipAddress: string, userInf: BrowserDetectInfo , userAgent: useragent.Agent) {
  const geo = geoip.lookup(ipAddress);
  const userRegion = getCountry(geo);
  const userBrowserName = userAgent.family;
  const userBrowserVersion = userAgent.toVersion();
  const userOs = userInf.os;
  const dateUser = new Date(Date.now());
  return await Statistic.create({
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
