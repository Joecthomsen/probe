import "../styles/login.css"
import Login from "../components/sign_in/Login";
import CreateNewUser from "../components/sign_in/CreateNewUser";
import {authenticationStore} from "../stores/AuthenticationStore";
import {loadingStore} from "../stores/LoadingStore";
import {CircularProgress} from "@mui/material";
import {observer} from "mobx-react-lite";


const login = observer ( () => {
    return (
        loadingStore.getLoading()
        ?
            <div className="loading-spinner-wrapper">
                <CircularProgress size={200} />
            </div>
        :
            <div className="page-container">
                <Login/>
                <CreateNewUser/>
            </div>
    );
})
export default login;
