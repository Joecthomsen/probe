import "../styles/login.css"
import Login from "../components/sign_in/Login";
import CreateNewUser from "../components/sign_in/CreateNewUser";

const login = () => {
    return (    
        <div className="page-container">
            <Login/>
            <CreateNewUser/>
        </div> 
    );
}
export default login;
