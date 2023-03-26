import { GridColDef } from "@mui/x-data-grid";

export const ERROR_LOADING = "Error loading statistics";

export const ERROR_PAGE = "ERROR: nonexistent page";

export const NONE_STATISTIC = "No one has clicked on this url yet";

export const INITIAL_LINK = {
  id: 0,
  originalUrl: "init",
  shortUrl: "short",
  statistics: [],
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
    field: "date",
    headerName: "Date",
    editable: false,
    disableColumnMenu: true,
    width: 150,
  },
  {
    field: "region",
    headerName: "Region",
    editable: false,
    disableColumnMenu: true,
    width: 150,
  },
  {
    field: "ip",
    headerName: "IP",
    editable: false,
    disableColumnMenu: true,
    width: 150,
  },
  {
    field: "browserName",
    headerName: "Browser Name",
    editable: false,
    disableColumnMenu: true,
    width: 150,
  },
  {
    field: "browserVersion",
    headerName: "Browser Version",
    editable: false,
    disableColumnMenu: true,
    width: 150,
  },
  {
    field: "os",
    headerName: "OS",
    editable: false,
    disableColumnMenu: true,
    width: 150,
  },
];
