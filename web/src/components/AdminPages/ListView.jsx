import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import getUsers from "../../requests/users";

// TODO fix double re-render
export default function ListView({ data, columns }) {
  const data1 = getUsers();
  console.log("saoihdsiod", data1);
  console.log(JSON.parse(data1));
  //console.log(data);
  return (
    <div style={{ display: "flex", height: 500 }}>
      <DataGrid
        rows={data}
        columns={columns}
        getRowId={(row) => row.id}
        checkboxSelection={true}
      />
    </div>
  );
}
