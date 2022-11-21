import "../styles/login.css"
import Login from "../components/sign_in/Login";
import CreateNewUser from "../components/sign_in/CreateNewUser";
import {authenticationStore} from "../stores/AuthenticationStore";
import {CircularProgress} from "@mui/material";

const login = () => {
    return (
        authenticationStore.getLoading()
        ?
            <CircularProgress/>
        :
            <div className="page-container">
                <Login/>
                <CreateNewUser/>
            </div>
    );
}
export default login;
