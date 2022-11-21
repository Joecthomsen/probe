import "../styles/login.css"
import Login from "../components/sign_in/Login";
import CreateNewUser from "../components/sign_in/CreateNewUser";
import {authenticationStore} from "../stores/AuthenticationStore";

const login = () => {
    return (
        authenticationStore.getLoading()
        ?
            <h1>LOADING...</h1>
        :
            <div className="page-container">
                <Login/>
                <CreateNewUser/>
            </div>
    );
}
export default login;
