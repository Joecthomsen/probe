import {TextField, Button} from "@mui/material";

export default function Login() {
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
        <br/>
        <Button variant="contained" color="primary" disabled='true'>
          save
        </Button>
    </form>
  );
};