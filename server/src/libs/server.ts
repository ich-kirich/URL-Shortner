import IP from "ip";
import geoip from "geoip-lite";
import browser from "browser-detect";
import { Request } from "express";
import Link from "../models/link";
import Statistic from "../models/statistic";
import { BASE_URL, UNKNOWN } from "./constants";

function createInfo(info: string, id: number) {
  if (info) {
    const newStatistic = JSON.parse(info);
    newStatistic.map((item: Statistic) =>
      Statistic.create({
        data: item.data,
        ip: item.ip,
        region: item.region,
        browserName: item.browserName,
        browserVersion: item.browserVersion,
        oc: item.oc,
        LinkId: id,
      }),
    );
  }
}

function getCountry(geo: geoip.Lookup) {
  if (geo === null) {
    return UNKNOWN;
  }
  return geo.country;
}

export async function tryCatchWrapper(
  callback: () => Promise<void | unknown>,
  onError: Function,
) {
  try {
    await callback();
  } catch (e) {
    onError(e);
  }
}

export async function createUrl(
  checkLink: Link,
  originalUrl: string,
  info: string,
) {
  if (checkLink) {
    return checkLink;
  }
  const link = await Link.create({ originalUrl, shortUrl: "" });
  link.shortUrl = `${BASE_URL}/${link.id}`;
  await link.save();
  createInfo(info, link.id);
  return link;
}

export function createDate(date: Date) {
  return `${date.getHours()}:${date.getMinutes()} ${date.getUTCDate()}.${
    date.getUTCMonth() + 1
  }.${date.getUTCFullYear()}`;
}

export function createStatistic(req: Request, id: number) {
  const ipAddress = IP.address();
  const geo = geoip.lookup(ipAddress);
  const userRegion = getCountry(geo);
  const userInf = browser(req.headers["user-agent"]);
  const userBrowserName = userInf.name;
  const userBrowserVersion = userInf.version;
  const userOs = userInf.os;
  const date = createDate(new Date(Date.now()));
  Statistic.create({
    data: date,
    ip: ipAddress,
    region: userRegion,
    browserName: userBrowserName,
    browserVersion: userBrowserVersion,
    oc: userOs,
    LinkId: id,
  });
}
