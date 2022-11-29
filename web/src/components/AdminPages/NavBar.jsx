import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { useState } from "react";

const LogoutButton = (onClick) => {
  return (<Button
    variant="contained"
    color="primary"
    onClick={onClick}
    sx={{ fontSize: 18 }}
  >
    Log out
  </Button>);
}


const NavBar = ({ isLoggedIn }) => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/admin");
  };

  return (
    <nav className="nav-bar-container">
      <h1 className="nav-bar-logo">PROBE</h1>
      <div className="nav-bar-links-container"></div>
      {isLoggedIn
        ? <LogoutButton onClick={logout} />
        : <div></div>      
        }
    </nav>
  );
};

export default observer(NavBar);
