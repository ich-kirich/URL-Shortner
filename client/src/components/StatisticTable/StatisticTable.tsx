import { Box, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useContext } from "react";
import { CONTEXT } from "../../libs/constants";
import { correctDate } from "../../libs/link";
import { IStaticticTableProps } from "../../types/types";
import styles from "./StatisticTable.module.scss";

function StatisticTable(props: IStaticticTableProps) {
  const { statistics } = props;
  const { translation } = useContext(CONTEXT);
  const correctStatistics = correctDate(statistics);
  const COLUMNS: GridColDef[] = [
    {
      field: "date",
      headerName: `${translation("date")}`,
      editable: false,
      disableColumnMenu: true,
      width: 150,
    },
    {
      field: "region",
      headerName: `${translation("region")}`,
      editable: false,
      disableColumnMenu: true,
      width: 150,
    },
    {
      field: "ip",
      headerName: `${translation("ip")}`,
      editable: false,
      disableColumnMenu: true,
      width: 150,
    },
    {
      field: "browserName",
      headerName: `${translation("browser_name")}`,
      editable: false,
      disableColumnMenu: true,
      width: 150,
    },
    {
      field: "browserVersion",
      headerName: `${translation("browser_version")}`,
      editable: false,
      disableColumnMenu: true,
      width: 150,
    },
    {
      field: "os",
      headerName: `${translation("os")}`,
      editable: false,
      disableColumnMenu: true,
      width: 150,
    },
  ];
  return (
    <Box className={styles.table}>
      {correctStatistics.length > 0 ? (
        <DataGrid
          rows={correctStatistics}
          columns={COLUMNS}
          autoHeight
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          disableRowSelectionOnClick
        />
      ) : (
        <Typography variant="h6" component="h1">
          {translation("none_statistic")}
        </Typography>
      )}
    </Box>
  );
}

export default StatisticTable;
