import React, { useState } from "react";
import { Button, Box, ButtonGroup } from "@mui/material";
import ListView from "./ListView";
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

function Page() {
  const [data, setData] = useState(users["users"]);
  const [columns, setColumns] = useState(userCols);

  const onClick = (e) => {
    switch (e.target.id) {
      case "trials":
        setData(clinicalTrials["clinicalTrials"]);
        setColumns(trialCols);
        break;
      case "users":
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
        <ButtonGroup
          variant="outlined"
          aria-label="outlined button group"
          size="large"
        >
          <Button id="users" sx={{ fontSize: 24 }} onClick={onClick}>
            Users
          </Button>
          <Button id="researchers" sx={{ fontSize: 24 }} onClick={onClick}>
            Researchers
          </Button>
          <Button id="trials" sx={{ fontSize: 24 }} onClick={onClick}>
            Trials
          </Button>
        </ButtonGroup>
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
