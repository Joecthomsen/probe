import { DataGrid } from "@mui/x-data-grid";
import * as React from "react";
const columns = [
  { field: "id", headerName: "ID" },
  { field: "title", headerName: "Title", width: 300 },
  { field: "body", headerName: "Body", width: "2%" },
];

const rows = [];

export default function ListView() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}
