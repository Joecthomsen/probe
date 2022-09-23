import { observer } from 'mobx-react-lite';
import {Link} from 'react-router-dom'
import { windowSizeStore } from '../stores/WindowSizeStore';
import { homepageStore } from '../stores/HomepageStore';

const NavBar = () => {

    function handleResize() {
        windowSizeStore.setWindowWidth(window.innerWidth)
        windowSizeStore.setWindowHeight(window.innerHeight) 
    }

    const handleBurgerMenuClick = () => {
        // window.alert("I should probably make a real menu. \n Till that, use a labtop.")
        homepageStore.toggleBurgerMenu()
        console.log(homepageStore.burgerMenuToggled)
    }
  
    window.addEventListener('resize', handleResize)

    return (
        windowSizeStore.windowWidth > 950 
        ?
        <nav className="nav-bar-container">
            <h1 className="nav-bar-logo">PROBE</h1>
            <div className="nav-bar-links-container">
                <Link to='/' className="nav-bar-links">Home</Link>
                <Link to='/about' className="nav-bar-links">About</Link>
                <Link to='/login' className="nav-bar-links">Login</Link>
            </div>
        </nav>
        : 
        <nav className="nav-bar-container">
            <h1 className="nav-bar-logo">PROBE</h1>
            <div className="nav-bar-links-container">
                <span onClick={handleBurgerMenuClick} className="material-symbols-outlined">menu</span>
            </div>
        </nav>
    );
}
 
export default observer(NavBar);