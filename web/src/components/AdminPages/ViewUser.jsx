import React from "react";
import { TextField, Box, Button, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useState } from "react";
import userApi from "../../requests/users";
import { useEffect } from "react";

function TableEntry({ label, data, isEditable, onChange, name }) {
  return (
    <tr>
      <td>{label}</td>
      <td>
        <TextField
          hiddenLabel
          name={name}
          id="filled-hidden-label-small"
          variant="filled"
          size="small"
          value={data}
          disabled={!isEditable}
          onChange={onChange}
          sx={{ width: 500 }}
        />
      </td>
    </tr>
  );
}

/*
function Modal({ open, handleModalClose }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
*/
const emptyUser = {
  email: "",
  sex: "",
  firstName: "",
  lastName: "",
  weight: "",
  dob: "",
  phoneNumber: "",
  chronicDisease: "",
  streetName: "",
  doorNumber: "",
  zipCode: "",
  city: "",
  region: "",
  country: "",
};

function ViewUser() {
  const mail = useParams();
  const [isEditable, setIsEditable] = useState(false);
  const [btnText, setBtnText] = useState("Edit");
  const [user, setUser] = useState(emptyUser);
  //const [modelOpen, setModalOpen] = useState(false);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    userApi.getUser(mail.id).then((user) => {
      setUser(user);
    });
  }, [mail.id]);

  //const handleModalOpen = () => setModalOpen(true);
  //const handleModalClose = () => setModalOpen(false);

  const btnDeleteClick = (e) => {
    //handleModalOpen();
    //userApi.deleteUser(user.email);
  };

  const editBtnOnClick = (e) => {
    if (isEditable) {
      userApi.updateUser(user);
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
          m: 1,
          borderRadius: 1,
        }}
      >
        <Box sx={{ justifyContent: "center" }}>
          <table align="center">
            <tbody>
              <TableEntry
                label="Email"
                data={user.email}
                isEditable={false} // Cannot be edited since it is primary key in db
              />
              <TableEntry
                label="Sex"
                data={user.sex}
                isEditable={false} // Cannot be edited since it is primary key in db
              />
              <TableEntry
                label="First Name"
                name="firstName"
                data={user.firstName}
                isEditable={isEditable}
                onChange={handleChange}
              />
              <TableEntry
                label="Last Name"
                name="lastName"
                data={user.lastName}
                isEditable={isEditable}
                onChange={handleChange}
              />
              <TableEntry
                label="Weight"
                name="weight"
                data={user.weight}
                isEditable={isEditable}
                onChange={handleChange}
              />
              <TableEntry
                label="Date of Birth"
                name="dob"
                data={user.dob}
                isEditable={isEditable}
                onChange={handleChange}
              />
              <TableEntry
                label="Phone Number"
                name="phoneNumber"
                data={user.phoneNumber}
                isEditable={isEditable}
                onChange={handleChange}
              />
              <TableEntry
                label="Chronic Disease"
                name="chronicDisease"
                data={user.chronicDisease}
                isEditable={isEditable}
                onChange={handleChange}
              />
              <TableEntry
                label="Street Name"
                name="streetName"
                data={user.streetName}
                isEditable={isEditable}
                onChange={handleChange}
              />
              <TableEntry
                label="Door Number"
                name="doorNumber"
                data={user.doorNumber}
                isEditable={isEditable}
                onChange={handleChange}
              />
              <TableEntry
                label="City"
                name="city"
                data={user.city}
                isEditable={isEditable}
                onChange={handleChange}
              />
              <TableEntry
                label="Zip Code"
                name="zipCode"
                data={user.zipCode}
                isEditable={isEditable}
                onChange={handleChange}
              />
              <TableEntry
                label="Region"
                name="region"
                data={user.region}
                isEditable={isEditable}
                onChange={handleChange}
              />
              <TableEntry
                label="Country"
                name="country"
                data={user.country}
                isEditable={isEditable}
                onChange={handleChange}
              />
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
