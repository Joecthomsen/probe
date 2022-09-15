import "../styles/login.css"
import Login from "../components/Login";
import CreateNewUser from "../components/CreateNewUser";

const login = () => {
    return (    
        <div className="page-container">
            <Login/>
            <CreateNewUser/>
            {/* <div className="create-new-user">

                <h1 className="create-user-header">New Here?</h1>
                <h2>Sign up and and discover a new world of opportunities!</h2>
                <button>Create New User</button>
            </div> */}
        </div> 
    );
}
export default login;
