import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { COLUMNS, NONE_STATISTIC } from "../../libs/constants";
import { IStaticticTableProps } from "../../types/types";
import styles from "./StatisticTable.module.scss";

function StatisticTable(props: IStaticticTableProps) {
  const { statistics } = props;
  return (
    <Box className={styles.table}>
      {statistics.length > 0 ? (
        <DataGrid
          rows={statistics}
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
          {NONE_STATISTIC}
        </Typography>
      )}
    </Box>
  );
}

export default StatisticTable;
