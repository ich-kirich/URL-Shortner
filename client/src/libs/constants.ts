import React from "react";
import { IContext } from "../types/types";

export const CONTEXT = React.createContext({} as IContext);

export const INITIAL_LINK = {
  id: 0,
  originalUrl: "init",
  shortUrl: "short",
  shortCode: "code",
  statistics: [],
  createdAt: "now",
  updatedAt: "now",
};

export enum LINK {
  FETCH_LINK = "FETCH_LINK",
  FETCH_LINK_SUCCESS = "FETCH_LINK_SUCCESS",
  FETCH_LINK_ERROR = "FETCH_LINK_ERROR",
}

export enum STATS {
  FETCH_STATS = "FETCH_STATS",
  FETCH_STATS_SUCCESS = "FETCH_STATS_SUCCESS",
  FETCH_STATS_ERROR = "FETCH_STATS_ERROR",
}
