export const ERROR_LOADING = "Error loading statistics";
export const BASE_URL = "http://localhost:5000/";
export const ERROR_PAGE = "ERROR: nonexistent page";
export const INITIAL_LINK = {
  id: 0,
  originalUrl: "init",
  shortUrl: "short",
  info: [],
  createdAt: "now",
  updatedAt: "now",
};

export enum LINK {
  FETCH_LINK = "FETCH_LINK",
  FETCH_LINK_SUCCESS = "FETCH_LINK_SUCCESS",
  FETCH_LINK_ERROR = "FETCH_LINK_ERROR",
}
