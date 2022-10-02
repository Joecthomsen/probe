import { observer } from "mobx-react-lite";
import { windowSizeStore } from "../../stores/WindowSizeStore";

const NavBar = () => {
  function handleResize() {
    windowSizeStore.setWindowWidth(window.innerWidth);
    windowSizeStore.setWindowHeight(window.innerHeight);
  }
  window.addEventListener("resize", handleResize);

  return windowSizeStore.windowWidth > 950 ? (
    <nav className="nav-bar-container">
      <h1 className="nav-bar-logo">PROBE</h1>
    </nav>
  ) : (
    <nav className="nav-bar-container">
      <h1 className="nav-bar-logo">PROBE</h1>
      <div className="nav-bar-links-container"></div>
    </nav>
  );
};

export default observer(NavBar);
