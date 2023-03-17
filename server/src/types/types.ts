export interface IStatictic {
  data: string;
  ip: string;
  region: string;
  browser: string;
  oc: string;
}

export interface ILink {
  url: string;
  statistic: IStatictic[];
}
