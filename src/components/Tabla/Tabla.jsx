import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columnsAll = [
  { field: "id", headerName: "ID", width: 100, sortable: false },
  { field: "name", headerName: "Nombre", width: 100, sortable: false },
];

const columnsUnique = [
  { field: "id", headerName: "ID", width: 25, sortable: false },
  { field: "name", headerName: "Nombre", width: 150, sortable: false },
  { field: "height", headerName: "Cm (x10)", width: 150, sortable: false},
  { field: "weight", headerName: "Peso (kg)", width: 150, sortable: false },
];

export default function DataTable({ url, listaPokemon }) {
  return (
    <div style={{ height: 300, width: "100%", color: "#fff !important", borderColor: "#000 !important"}}>
      {listaPokemon.length !== 0 ? (
        <DataGrid
          rows={listaPokemon}
          columns={columnsUnique}
          pageSize={20}
          rowsPerPageOptions={[20]}
        />
      ) : (
        <DataGrid
          rows={url}
          columns={columnsAll}
          pageSize={20}
          rowsPerPageOptions={[20]}
        />
      )}
    </div>
  );
}
