import IP from "ip";
import geoip from "geoip-lite";
import { Request } from "express";
import useragent from "useragent";
import browser from "browser-detect";
import Link from "../models/link";
import Statistic from "../models/statistic";
import { BASE_URL, UNKNOWN } from "./constants";

async function createInfo(info: string, id: number) {
  if (info) {
    try {
      const newStatistic = JSON.parse(info);
      newStatistic.map((item: Statistic) =>
        Statistic.create({
          date: item.date,
          ip: item.ip,
          region: item.region,
          browserName: item.browserName,
          browserVersion: item.browserVersion,
          os: item.os,
          LinkId: id,
        }),
      );
    } catch (e) {
      console.log(e);
    }
  }
}

function getCountry(geo: geoip.Lookup) {
  if (geo === null) {
    return UNKNOWN;
  }
  return geo.country;
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
  await createInfo(info, link.id);
  return link;
}

export function createDate(date: Date) {
  return `${date.getHours()}:${date
    .getMinutes()
    .toString()
    .padStart(2, "0")} ${date.getUTCDate().toString().padStart(2, "0")}.${(
    date.getUTCMonth() + 1
  )
    .toString()
    .padStart(2, "0")}.${date.getUTCFullYear()}`;
}

export async function createStatistic(req: Request, id: number) {
  const ipAddress = IP.address();
  const geo = geoip.lookup(ipAddress);
  const userRegion = getCountry(geo);
  const userInf = browser(req.headers["user-agent"]);
  const userAgent = useragent.parse(req.headers["user-agent"]);
  const userBrowserName = userAgent.family;
  const userBrowserVersion = userAgent.toVersion();
  const userOs = userInf.os;
  const dateUser = createDate(new Date(Date.now()));
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
