import React, { useState } from "react";
import { ToggleButton, Box, ToggleButtonGroup, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import UserApi from "../../requests/users";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Btn = (row) => {
  const navigate = useNavigate();
  const onClick = (row) => {
    navigate("/admin-page/data/" + row.field.id);
  };

  return (
    <Button
      variant="contained"
      size="small"
      style={{ marginLeft: 16 }}
      onClick={() => {
        onClick(row);
      }}
    >
      Veiw
    </Button>
  );
};

const userCols = [
  {
    field: "btn",
    headerName: "",
    flex: 0,

    renderCell: (field) => <Btn field={field} />,
  },
  { field: "email", headerName: "Email", flex: 3 },
  { field: "firstName", headerName: "First Name", flex: 3 },
  { field: "lastName", headerName: "Last Name", flex: 3 },
  { field: "sex", headerName: "Sex", flex: 2 },
  { field: "chronicDisease", headerName: "Chronic Disease", flex: 3 },
  { field: "streetName", headerName: "Adress", flex: 3 },
  { field: "city", headerName: "City", flex: 3 },
  { field: "zipCode", headerName: "Zip", flex: 0 },
  { field: "region", headerName: "Region", flex: 3 },
  { field: "country", headerName: "Country", flex: 2 },
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
  { field: "country", headerName: "Country", flex: 2 },
];

const researcherCols = [
  { field: "id", headerName: "ID", flex: 0 },
  { field: "firstName", headerName: "First Name", flex: 2 },
  { field: "lastName", headerName: "Last Name", flex: 2 },
  { field: "adress", headerName: "Adress", flex: 3 },
  { field: "city", headerName: "City", flex: 2 },
  { field: "zipCode", headerName: "Zip", flex: 2 },
  { field: "region", headerName: "Region", flex: 2 },
  { field: "country", headerName: "Country", flex: 2 }, 
];

function ListView({ data, columns }) {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid rows={data} columns={columns} getRowId={(row) => row.email} />
    </div>
  );
}

function Page() {
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState(userCols);
  const [activeBtn, setActiveBtn] = useState("users");

  useEffect(() => {
    fetchData(activeBtn);
  }, [activeBtn]);

  const fetchData = (active) => {
    switch (active) {
      case "trials":
        setData([]);
        setColumns(trialCols);
        break;
      case "researchers":
        setData([]);
        setColumns(researcherCols);
        break;
      case "users":
        setColumns(userCols);
        UserApi.getUsers().then((d) => {
          setData(d);
        });
        break;
      default:
        setColumns(userCols);
        UserApi.getUsers().then((d) => {
          setData(d);
        });
    }
  };

  const handleChange = (e, newActiveBtn) => {
    setActiveBtn(newActiveBtn);
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
