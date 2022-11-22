import { observer } from "mobx-react-lite";

const NavBar = ({isLoggedIn}) => {
  return (
    <nav className="nav-bar-container">
      <h1 className="nav-bar-logo">PROBE</h1>
      <div className="nav-bar-links-container"></div>
      <button>
        Log out
      </button>
    </nav>
  );
};

export default observer(NavBar);
