import "../styles/login.css"
import Login from "../components/Login";

const login = () => {
    return (    
        <div className="page-container">
            <Login/>
            <div className="create-new-user">
                {/* <div className="color-overlay" /> */}
                <h1 className="create-user-header">New Here?</h1>
                <h2>Sign up and and discover a new world of opportunities!</h2>
                <button>Create New User</button>
            </div>
        </div> 
    );
}
export default login;
