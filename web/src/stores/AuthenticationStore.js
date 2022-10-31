import {makeAutoObservable} from "mobx"
import {loginRequest} from '../requests/loginRequest'
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

    async doLogin() {

        //Fix cors issues
        // const cors = require('cors');
        // app.use(cors())

        await loginRequest(this.loginData.email, this.loginData.password);

        // if (this.token != null) {
        //     this.setLoggedIn(true)
        //
        //     if (this.getLoggedIn()) {
        //
        //         if (jwt_decode(this.token).role.toString() === "Medical") {
        //             window.location = "#/editTrials";
        //             EditTrialStoreOBJ.setOwnerID(jwt_decode(this.token).ownerID.toString());
        //         }
        //     }
        // }

        //Har lige tilføjet den her hilsen Troels :-)

        //Har lige udkommenteret det. Tænker ikke at det skal bruges med den nye struktur jeg har lavet.

        console.log("User: " + this.loginData.email + " logged in: " + this.loggedIn + " token: " + this.token)
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