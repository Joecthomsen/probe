import {makeAutoObservable} from "mobx"
import {loginRequest} from '../requests/loginRequest'
import {useNavigate} from "react-router-dom";
//import axios from "axios"
// import jwt_decode from 'jwt-decode';
// import {EditTrialStoreOBJ} from "./EditTrialStore";
//import app from "../App";


// const getToken = "https://probe.joecthomsen.dk/authentication/jwt";
//const getToken = "http://localhost:8080/authentication/jwt";

class AuthenticationStore {

    loggedIn = false;
    token = null;
    loginData = {
        email: "",
        password: ""
    }

    // Constructor
    constructor() {
        makeAutoObservable(this,
            {},
            {autoBind: true}//For non-arrow-functions bind
        )
    }

    async doLogin(e) {
        e.preventDefault()
        await loginRequest(this.loginData.email, this.loginData.password)

    }

    setUsername(userName) {
        this.loginData.email = userName;
    }

    setPassword(password) {
        this.loginData.password = password;
    }

    setToken(token) {
        this.token = token;
    }

    setLoggedIn(status) {
        this.loggedIn = status;
    }

    getLoggedIn() {
        return this.loggedIn;
    }

}

export const authenticationStore = new AuthenticationStore()