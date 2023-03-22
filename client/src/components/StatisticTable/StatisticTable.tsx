import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { COLUMNS, NONE_STATISTIC } from "../../libs/constants";
import { IStaticticTableProps } from "../../types/types";

function StatisticTable(props: IStaticticTableProps) {
  const { info } = props;
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      {info.length > 0 ? (
        <DataGrid
          rows={info}
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
