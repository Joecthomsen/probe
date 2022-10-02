import { TextField, Button } from "@mui/material";
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
    <form>
      <TextField
        style={{ width: "200px", margin: "5px" }}
        type="text"
        label="Username"
        variant="outlined"
        id="username"
        onChange={onChange}
        value={username}
      />
      <br />
      <TextField
        style={{ width: "200px", margin: "5px" }}
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
        id="loginBtn"
        onClick={onClick}
      >
        save
      </Button>
      <br />
      {error}
    </form>
  );
}

export default Login;
