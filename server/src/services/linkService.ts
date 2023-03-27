import config from "config";
import Link from "../models/link";
import Statistic from "../models/statistic";

async function createInfo(info: string, id: number) {
  if (info) {
    try {
      const newStatistic = JSON.parse(info);
      newStatistic.forEach(async (item: Statistic) => {
        try {
          await Statistic.create({
            date: item.date,
            ip: item.ip,
            region: item.region,
            browserName: item.browserName,
            browserVersion: item.browserVersion,
            os: item.os,
            LinkId: id,
          });
        } catch (e) {
          console.error(e.message);
        }
      });
    } catch (e) {
      console.error(e.message);
    }
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
  link.shortUrl = `${config.get("BASE_URL")}/${link.id}`;
  await link.save();
  await createInfo(info, link.id);
  return link;
}

export default createUrl;
