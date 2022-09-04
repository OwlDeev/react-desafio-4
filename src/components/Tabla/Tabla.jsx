import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: '100%' },
  { field: "name", headerName: "Nombre", width: '100%' },
  // {
  //   field: 'age',
  //   headerName: 'Age',
  //   type: 'number',
  //   width: 90,
  // },
  // {
  //   field: 'fullName',
  //   headerName: 'Full name',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params) =>
  //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  // },
];

export default function DataTable({ url, listaPokemon }) {
  return (
    <div style={{ height: 300, width: '100%', color: "#fff !important" }}>
      {listaPokemon.length !== 0 ? (
        <DataGrid
          rows={listaPokemon}
          columns={columns}
          pageSize={20}
          rowsPerPageOptions={[20]}
        />
      ) : (
        <DataGrid
          rows={url}
          columns={columns}
          pageSize={20}
          rowsPerPageOptions={[20]}
        />
      )}
    </div>
  );
}
