import { Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

function StatisticTable() {
  const columns: GridColDef[] = [
    {
      field: "firstName",
      headerName: "First name",
      editable: false,
      disableColumnMenu: true,
      flex: 1,
    },
    {
      field: "lastName",
      headerName: "Last name",
      editable: false,
      disableColumnMenu: true,
      flex: 1,
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      editable: false,
      disableColumnMenu: true,
      flex: 1,
    },
  ];

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
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
    </Box>
  );
}

export default StatisticTable;
