import React from "react";
import { TextField, Box } from "@mui/material";
import { useParams } from "react-router-dom";
import users from "../../api/user_api_mock";

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

  const user = users.find((obj) => {
    return obj.id === id;
  });
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
                  <TextFields data="hej" />
                </td>
              </tr>
              <tr>
                <td>Last Name</td>
                <td>
                  <TextFields data="hej" />
                </td>
              </tr>
              <tr>
                <td>CPR</td>
                <td>
                  <TextFields data="hej" />
                </td>
              </tr>
              <tr>
                <td>Age</td>
                <td>
                  <TextFields data="hej" />
                </td>
              </tr>
              <tr>
                <td>Chronic Disease</td>
                <td>
                  <TextFields data="hej" />
                </td>
              </tr>
              <tr>
                <td>Adress</td>
                <td>
                  <TextFields data="hej" />
                </td>
              </tr>
              <tr>
                <td>City</td>
                <td>
                  <TextFields data="hej" />
                </td>
              </tr>
              <tr>
                <td>Zip Code</td>
                <td>
                  <TextFields data="hej" />
                </td>
              </tr>
              <tr>
                <td>Region</td>
                <td>
                  <TextFields data="hej" />
                </td>
              </tr>
              <tr>
                <td>Country</td>
                <td>
                  <TextFields data="hej" />
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
