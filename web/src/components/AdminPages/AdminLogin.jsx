import { TextField, Button } from "@mui/material";
import React, { useState, useEffect } from "react";

function Login() {
  const [err, setErr] = useState("");
  const [redirect, setRedirect] = useState(false);

  const login = (event) => {
    setRedirect = true;
  }

  return (
    <form>
      <TextField
        style={{ width: "200px", margin: "5px" }}
        type="text"
        label="Username"
        variant="outlined"
      />
      <br />
      <TextField
        style={{ width: "200px", margin: "5px" }}
        type="password"
        label="Password"
        variant="outlined"
      />
      <br />
      <Button variant="contained" color="primary" disabled="true" onClick={login}>
        save
      </Button>
    </form>
  );
}

export default Login;
