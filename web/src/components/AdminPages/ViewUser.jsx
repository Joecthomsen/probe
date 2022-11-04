import React from "react";
import { TextField, Box } from "@mui/material";
import { useParams } from "react-router-dom";
import users from "../../api/user_api_mock";

function findUser(id) {
  return users["users"].find((obj) => {
    return obj.id == id;
  });
}

function TextFields({ data }) {
  return (
    <TextField
      hiddenLabel
      id="filled-hidden-label-small"
      variant="filled"
      size="small"
      placeholder={data}
    />
  );
}

function ViewUser() {
  let { id } = useParams();

  const user = findUser(id);
  console.log(user);

  return (
    <div style={{ width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          p: 10,
          m: 5,
          borderRadius: 1,
        }}
      >
        <Box sx={{ justifyContent: "center" }}>
          <table>
            <tbody>
              <tr>
                <td>First Name</td>
                <td>
                  <TextFields data={user.firstName} />
                </td>
              </tr>
              <tr>
                <td>Last Name</td>
                <td>
                  <TextFields data={user.lastName} />
                </td>
              </tr>
              <tr>
                <td>CPR</td>
                <td>
                  <TextFields data={user.cpr} />
                </td>
              </tr>
              <tr>
                <td>Age</td>
                <td>
                  <TextFields data={user.age} />
                </td>
              </tr>
              <tr>
                <td>Chronic Disease</td>
                <td>
                  <TextFields data={user.chronicDisease} />
                </td>
              </tr>
              <tr>
                <td>Adress</td>
                <td>
                  <TextFields data={user.streetName} />
                </td>
              </tr>
              <tr>
                <td>City</td>
                <td>
                  <TextFields data={user.city} />
                </td>
              </tr>
              <tr>
                <td>Zip Code</td>
                <td>
                  <TextFields data={user.zipCode} />
                </td>
              </tr>
              <tr>
                <td>Region</td>
                <td>
                  <TextFields data={user.region} />
                </td>
              </tr>
              <tr>
                <td>Country</td>
                <td>
                  <TextFields data={user.county} />
                </td>
              </tr>
            </tbody>
          </table>
        </Box>
        <Box>Some text here </Box>
      </Box>
    </div>
  );
}
export default ViewUser;
