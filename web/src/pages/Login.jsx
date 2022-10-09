import "../styles/login.css"
import Login from "../components/singin/Login";
import CreateNewUser from "../components/singin/CreateNewUser";

const login = () => {
    return (    
        <div className="page-container">
            <Login/>
            <CreateNewUser/>
        </div> 
    );
}
export default login;
