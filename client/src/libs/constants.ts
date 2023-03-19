export const ERROR_LOADING = "Error loading statistics";
export const BASE_URL = "http://localhost:3000/api/";
export const INITIAL_LINK = {
  id: 0,
  name: "init",
  info: [],
  createdAt: "1",
  updatedAt: "1",
};

export enum LINK {
  FETCH_LINK = "FETCH_LINK",
  FETCH_LINK_SUCCESS = "FETCH_LINK_SUCCESS",
  FETCH_LINK_ERROR = "FETCH_LINK_ERROR",
}
