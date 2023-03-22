import { makeStyles } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";

export const ERROR_LOADING = "Error loading statistics";

export const BASE_URL = "http://localhost:5000/";

export const ERROR_PAGE = "ERROR: nonexistent page";

export const NONE_STATISTIC = "No one has clicked on this url yet";

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

export const COLUMNS: GridColDef[] = [
  {
    field: "data",
    headerName: "Date",
    editable: false,
    disableColumnMenu: true,
    flex: 1,
  },
  {
    field: "region",
    headerName: "Region",
    editable: false,
    disableColumnMenu: true,
    flex: 1,
  },
  {
    field: "ip",
    headerName: "IP",
    editable: false,
    disableColumnMenu: true,
    flex: 1,
  },
  {
    field: "browserName",
    headerName: "Browser Name",
    editable: false,
    disableColumnMenu: true,
    flex: 1,
  },
  {
    field: "browserVersion",
    headerName: "Browser Version",
    editable: false,
    disableColumnMenu: true,
    flex: 1,
  },
  {
    field: "oc",
    headerName: "OC",
    editable: false,
    disableColumnMenu: true,
    flex: 1,
  },
];
