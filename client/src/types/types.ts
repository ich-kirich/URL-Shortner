import { TFunction } from "i18next";

export interface IStatictic {
  id: number;
  date: Date | string;
  ip: string;
  region: string;
  browserName: string;
  browserVersion: string;
  os: string;
  LinkId: number;
  createdAt: string;
  updatedAt: string;
}

export interface ILink {
  id: number;
  originalUrl: string;
  shortUrl: string;
  statistics: IStatictic[];
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

export interface IShortnerBtnProps {
  url: string;
  isError: boolean;
}

export interface INewLink {
  originalUrl: string;
}

export interface IShortUrlProps {
  link: ILink;
}

export interface IStaticticTableProps {
  statistics: IStatictic[];
}

export interface IContext {
  translation: TFunction<"translation", undefined, "translation">;
}
