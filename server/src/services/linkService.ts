import config from "config";
import { nanoid } from "nanoid";
import Link from "../../models/link";
import Statistic from "../../models/statistic";

async function createInfo(info: string, id: number) {
  if (info) {
    try {
      const newStatistic = JSON.parse(info);
      for (const item of newStatistic){
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
      }
      return;
    } catch (e) {
      console.error(e.message);
    }
  }
}

async function createShortCode() {
  const code = nanoid(8);
  const link = await Link.findOne({
    where: {
      shortCode: code,
    },
  });
  if(link){
    createShortCode()
  }
  return code
}

export async function createUrl(
  checkLink: Link,
  originalUrl: string,
  info: string,
) {
  if (checkLink) {
    return checkLink;
  }
  const code = await createShortCode();
  const link = await Link.create({
    originalUrl,
    shortUrl: `${config.get("base_url")}/${code}`,
    shortCode: code,
  });
  await link.save();
  await createInfo(info, link.dataValues.id);
  return link;
}

export default createUrl;
