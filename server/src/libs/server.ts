import Link from "../models/link";
import Statistic from "../models/statistic";
import { BASE_URL } from "./constants";

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
  return link;
}
