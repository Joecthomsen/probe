import { DataGrid } from "@mui/x-data-grid";
import React, { useState } from "react";
import users from "../../api/user_api_mock";
import clinicalTrials from "../../api/clinical_trial_api_mock";

const userCols = [
  { field: "id", headerName: "ID", flex: 0 },
  { field: "firstName", headerName: "First Name", flex: 2 },
  { field: "lastName", headerName: "Last Name", flex: 2 },
  { field: "cpr", headerName: "CPR", flex: 2 },
  { field: "age", headerName: "Age", flex: 0 },
  { field: "chronicDisease", headerName: "Chronic Disease", flex: 3 },
  { field: "adress", headerName: "Adress", flex: 3 },
  { field: "city", headerName: "City", flex: 2 },
  { field: "zipCode", headerName: "Zip", flex: 2 },
  { field: "region", headerName: "Region", flex: 2 },
  { field: "county", headerName: "Country", flex: 2 }, // TODO change to proper field name
];

const trialCols = [
  { field: "id", headerName: "ID", flex: 0 },
  { field: "header", headerName: "Header", flex: 2 },
  { field: "dateSubmitted", headerName: "Date Submitted", flex: 2 },
  { field: "title", headerName: "Title", flex: 2 },
  { field: "minAge", headerName: "Min Age", flex: 0 },
  { field: "maxAge", headerName: "Max Age", flex: 3 },
  { field: "hospital", headerName: "Hospital", flex: 3 },
  { field: "city", headerName: "City", flex: 2 },
  { field: "zipCode", headerName: "Zip", flex: 2 },
  { field: "region", headerName: "Region", flex: 2 },
  { field: "county", headerName: "Country", flex: 2 }, // TODO change to proper field name
];

const researcherCols = [
  { field: "id", headerName: "ID", flex: 0 },
  { field: "firstName", headerName: "First Name", flex: 2 },
  { field: "lastName", headerName: "Last Name", flex: 2 },
  { field: "adress", headerName: "Adress", flex: 3 },
  { field: "city", headerName: "City", flex: 2 },
  { field: "zipCode", headerName: "Zip", flex: 2 },
  { field: "region", headerName: "Region", flex: 2 },
  { field: "county", headerName: "Country", flex: 2 }, // TODO change to proper field name
];

//console.log(users);

// TODO fix double re-render
const rows = users["users"];
export default function ListView({ data, columns }) {
  console.log(data);
  console.log(columns);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid rows={data} columns={columns} getRowId={(row) => row.id} />
    </div>
  );
}
