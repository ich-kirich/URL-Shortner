import { Box, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { FormattedMessage, useIntl } from "react-intl";
import { correctDate } from "../../libs/link";
import { IStaticticTableProps } from "../../types/types";
import styles from "./StatisticTable.module.scss";

function StatisticTable(props: IStaticticTableProps) {
  const { statistics } = props;
  const translate = useIntl();
  const correctStatistics = correctDate(statistics);
  const COLUMNS: GridColDef[] = [
    {
      field: "date",
      headerName: translate.formatMessage({ id: "date" }),
      editable: false,
      disableColumnMenu: true,
      width: 150,
    },
    {
      field: "region",
      headerName: translate.formatMessage({ id: "region" }),
      editable: false,
      disableColumnMenu: true,
      width: 150,
    },
    {
      field: "ip",
      headerName: translate.formatMessage({ id: "ip" }),
      editable: false,
      disableColumnMenu: true,
      width: 150,
    },
    {
      field: "browserName",
      headerName: translate.formatMessage({ id: "browser_name" }),
      editable: false,
      disableColumnMenu: true,
      width: 150,
    },
    {
      field: "browserVersion",
      headerName: translate.formatMessage({ id: "browser_version" }),
      editable: false,
      disableColumnMenu: true,
      width: 150,
    },
    {
      field: "os",
      headerName: translate.formatMessage({ id: "os" }),
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
          <FormattedMessage id="none_statistic" />
        </Typography>
      )}
    </Box>
  );
}

export default StatisticTable;
