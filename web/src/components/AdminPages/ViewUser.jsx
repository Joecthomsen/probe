import React from "react";
import { TextField, Box, Button } from "@mui/material";
import { useParams } from "react-router-dom";
import users from "../../api/user_api_mock";
import { useState } from "react";
import getUsers from "../../requests/users";

function findUser(id) {
  console.log(getUsers);
  return users["users"].find((obj) => {
    return obj.id === parseInt(id);
  });
}

function TextFields({ data, isEditable }) {
  return (
    <TextField
      hiddenLabel
      id="filled-hidden-label-small"
      variant="filled"
      size="small"
      value={data}
      disabled={!isEditable}
      sx={{ width: 500 }}
    />
  );
}

function ViewUser() {
  let { id } = useParams();

  const user = findUser(id);
  const [isEditable, setIsEditable] = useState(false);
  const [btnText, setBtnText] = useState("Edit");

  const btnDeleteClick = (e) => {};

  const editBtnOnClick = (e) => {
    if (isEditable) {
      setIsEditable(false);
      setBtnText("Edit");

      // TODO: Save edited data
    } else {
      setIsEditable(true);
      setBtnText("Save");
    }
  };

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
          <table align="center">
            <tbody>
              <tr>
                <td>First Name</td>
                <td>
                  <TextFields data={user.firstName} isEditable={isEditable} />
                </td>
              </tr>
              <tr>
                <td>Last Name</td>
                <td>
                  <TextFields data={user.lastName} isEditable={isEditable} />
                </td>
              </tr>
              <tr>
                <td>CPR</td>
                <td>
                  <TextFields data={user.cpr} isEditable={isEditable} />
                </td>
              </tr>
              <tr>
                <td>Age</td>
                <td>
                  <TextFields data={user.age} isEditable={isEditable} />
                </td>
              </tr>
              <tr>
                <td>Chronic Disease</td>
                <td>
                  <TextFields
                    data={user.chronicDisease}
                    isEditable={isEditable}
                  />
                </td>
              </tr>
              <tr>
                <td>Adress</td>
                <td>
                  <TextFields data={user.streetName} isEditable={isEditable} />
                </td>
              </tr>
              <tr>
                <td>City</td>
                <td>
                  <TextFields data={user.city} isEditable={isEditable} />
                </td>
              </tr>
              <tr>
                <td>Zip Code</td>
                <td>
                  <TextFields data={user.zipCode} isEditable={isEditable} />
                </td>
              </tr>
              <tr>
                <td>Region</td>
                <td>
                  <TextFields data={user.region} isEditable={isEditable} />
                </td>
              </tr>
              <tr>
                <td>Country</td>
                <td>
                  <TextFields data={user.county} isEditable={isEditable} />
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <Box
            sx={{
              justifyContent: "space-evenly",
              display: "flex",
              p: "50px 50px 10px 100px;",
            }}
          >
            <Button
              size="small"
              color="primary"
              variant="contained"
              onClick={editBtnOnClick}
            >
              {btnText}
            </Button>
            <Button
              size="small"
              color="primary"
              variant="contained"
              onClick={btnDeleteClick}
            >
              Delete
            </Button>
          </Box>
        </Box>
        <Box>Some text here </Box>
      </Box>
    </div>
  );
}
export default ViewUser;