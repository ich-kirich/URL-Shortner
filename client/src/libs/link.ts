import { IStatictic } from "../types/types";

function createDate(date: Date) {
  return `${date.getHours()}:${date
    .getMinutes()
    .toString()
    .padStart(2, "0")} ${date.getUTCDate().toString().padStart(2, "0")}.${(
    date.getUTCMonth() + 1
  )
    .toString()
    .padStart(2, "0")}.${date.getUTCFullYear()}`;
}

export function isValidUrl(url: string): boolean {
  try {
    const check = new URL(url);
    return true;
  } catch (err) {
    return false;
  }
} // https://dev.to/davidemaye/how-to-validate-urls-in-javascript-adm

export function correctDate(stats: IStatictic[]) {
  return stats.map((item: IStatictic) => ({
    ...item,
    date: createDate(new Date(item.date)),
  }));
}
