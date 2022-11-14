import React, { useState } from "react";
import { ToggleButton, Box, ToggleButtonGroup } from "@mui/material";
import users from "../../api/user_api_mock";
import clinicalTrials from "../../api/clinical_trial_api_mock";
import { DataGrid } from "@mui/x-data-grid";
import getUsers from "../../requests/users";
import { useEffect } from "react";

const userCols = [
  { field: "id", headerName: "ID", flex: 0 },
  { field: "firstName", headerName: "First Name", flex: 2 },
  { field: "lastName", headerName: "Last Name", flex: 2 },
  { field: "cpr", headerName: "CPR", flex: 2 },
  { field: "age", headerName: "Age", flex: 0 },
  { field: "chronicDisease", headerName: "Chronic Disease", flex: 3 },
  { field: "adress", headerName: "Adress", flex: 3 },
  { field: "city", headerName: "City", flex: 2 },
  { field: "zipCode", headerName: "Zip", flex: 0 },
  { field: "region", headerName: "Region", flex: 2 },
  { field: "county", headerName: "Country", flex: 2 }, // TODO change to proper field name
];

const trialCols = [
  { field: "id", headerName: "ID", flex: 0 },
  { field: "header", headerName: "Header", flex: 3 },
  { field: "dateSubmitted", headerName: "Date Submitted", flex: 2 },
  { field: "title", headerName: "Title", flex: 2 },
  { field: "minAge", headerName: "Min Age", flex: 0 },
  { field: "maxAge", headerName: "Max Age", flex: 0 },
  { field: "hospital", headerName: "Hospital", flex: 3 },
  { field: "city", headerName: "City", flex: 2 },
  { field: "zipCode", headerName: "Zip", flex: 0 },
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

// TODO fix double re-render
function ListView({ data, columns }) {
  const [D, setD] = useState([]);
  useEffect(() => {
    getUsers().then((d) => {
      setD(d);
    });
  }, []);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid rows={D} columns={columns} getRowId={(row) => row.email} />
    </div>
  );
}

function Page() {
  const [data, setData] = useState(users["users"]);
  const [columns, setColumns] = useState(userCols);
  const [activeBtn, setActiveBtn] = useState("users");

  const handleChange = (e, newActiveBtn) => {
    setActiveBtn(newActiveBtn);
    switch (newActiveBtn) {
      case "trials":
        setData(clinicalTrials["clinicalTrials"]);
        setColumns(trialCols);
        break;
      case "users":
        setData(users["users"]);
        setColumns(userCols);
        break;
      case "researchers":
        // FIXME: Add researchers
        setData([]);
        setColumns(researcherCols);
        break;
      default:
        setData(users["users"]);
        setColumns(userCols);
        break;
    }
  };

  return (
    <div>
      <Box
        justifyContent="center"
        alignItems="center"
        sx={{ mx: "auto", width: 400, pm: "auto", padding: "50px" }}
      >
        <ToggleButtonGroup
          size="large"
          color="primary"
          value={activeBtn}
          onChange={handleChange}
          exclusive
        >
          <ToggleButton value="users" sx={{ fontSize: 24 }}>
            Users
          </ToggleButton>
          <ToggleButton sx={{ fontSize: 24 }} value="researchers">
            Researchers
          </ToggleButton>
          <ToggleButton value="trials" sx={{ fontSize: 24 }}>
            Trials
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
      <Box
        justifyContent="center"
        alignItems="center"
        sx={{ mx: "auto", pm: "auto", width: "70%" }}
      >
        <ListView data={data} columns={columns} />
      </Box>
    </div>
  );
}

export default Page;
