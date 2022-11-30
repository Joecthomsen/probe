import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const LogoutButton = (onClick) => {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={onClick}
      sx={{ fontSize: 18 }}
    >
      Log out
    </Button>
  );
};

const NavBar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/admin");
  };

  return (
    <nav className="nav-bar-container">
      <h1 className="nav-bar-logo">PROBE</h1>
      <div className="nav-bar-links-container"></div>
      <LogoutButton onClick={logout} />
    </nav>
  );
};

export default observer(NavBar);
