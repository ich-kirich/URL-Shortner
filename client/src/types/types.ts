export interface IStatictic {
  id: number;
  data: string;
  ip: string;
  region: string;
  browser: string;
  oc: string;
  linkId: number;
}

export interface ILink {
  id: number;
  name: string;
  info: IStatictic[];
}

export interface IStaticticState {
  statistic: IStatictic[];
  loading: boolean;
  error: null | string;
}

export interface IStaticticAction {
  type: string;
  payload?: any;
}
