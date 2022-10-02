import { TextField, Button, Typography, Box } from "@mui/material";
import React, { useState } from "react";
import ApiMock from "../../api/admin_login_mock";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);

  const onChange = (event) => {
    if (event.target.id === "username") {
      setUsername(event.target.value);
    } else {
      setPassword(event.target.value);
    }
    setBtnDisabled(username === "" || password === "");
  };

  const onClick = () => {
    var canLogin = ApiMock.login(username, password);
    if (canLogin) {
      navigate("/admin-page");
    } else {
      setUsername("");
      setPassword("");
      setError("Wrong username or password");
    }
  };

  return (
    <Box
      justifyContent="center"
      alignItems="center"
      sx={{ mx: "auto", width: 400, pm: "auto" }}
    >
      <Typography variant="h3" margin="20px">
        Sign in
      </Typography>

      <form>
        <TextField
          style={{ width: "350px", padding: "10px" }}
          type="text"
          label="Username"
          variant="outlined"
          id="username"
          onChange={onChange}
          value={username}
        />
        <br />
        <TextField
          style={{
            width: "350px",
            padding: "10px",
          }}
          type="password"
          label="Password"
          variant="outlined"
          id="password"
          onChange={onChange}
          value={password}
        />
        <br />
        <Button
          variant="contained"
          color="primary"
          disabled={btnDisabled}
          onClick={onClick}
          sx={{ fontSize: 18 }}
        >
          log in
        </Button>
        <br />
        <Typography component="p" variant="h5">
          {error}
        </Typography>
      </form>
    </Box>
  );
}

export default Login;
