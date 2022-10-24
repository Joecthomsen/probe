import { DataGrid } from "@mui/x-data-grid";
import React from "react";

// TODO fix double re-render
export default function ListView({ data, columns }) {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid rows={data} columns={columns} getRowId={(row) => row.id} />
    </div>
  );
}
