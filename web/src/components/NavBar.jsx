import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="nav-bar-container">
            <h1 className="nav-bar-logo">PROBE</h1>
            <div className="nav-bar-links-container">
                {/* <h1>Hej</h1>
                <h1>About</h1>
                <h1>Login</h1> */}
                <Link to='/' className="nav-bar-links">Home</Link>
                <Link to='/about' className="nav-bar-links">About</Link>
                <Link to='/login' className="nav-bar-links">Login</Link>
            </div>
        </nav>
    );
}
 
export default NavBar;