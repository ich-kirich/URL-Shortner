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
  createdAt: string;
  updatedAt: string;
}

export interface ILinkState {
  link: ILink;
  loading: boolean;
  error: null | string;
}

export interface ILinkAction {
  type: string;
  payload?: any;
}

export interface IChildernProps {
  children: React.ReactNode;
  className?: string;
}

export interface IShortnerBtn {
  url: string;
  isError: boolean;
}
