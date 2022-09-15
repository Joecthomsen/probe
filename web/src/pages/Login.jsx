import "../styles/login.css"
import Login from "../components/Login";
import CreateNewUser from "../components/CreateNewUser";

const login = () => {
    return (    
        <div className="page-container">
            <Login/>
            <CreateNewUser/>
        </div> 
    );
}
export default login;
