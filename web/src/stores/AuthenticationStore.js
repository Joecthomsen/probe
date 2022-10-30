import {makeAutoObservable} from "mobx"
import axios from "axios"
import jwt_decode from 'jwt-decode';
import {EditTrialStoreOBJ} from "./EditTrialStore";
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

        const fetchData = async () => {
            try {
                const response = await axios.post("http://localhost:8080/authentication/signin", { email: this.loginData.email, password: this.loginData.password })
                const data = response.data
                console.log("Data: " + JSON.stringify(data))
            }catch (error){
                console.log("error: " + error.response)
            }
        }

        await fetchData();

/////////////////////////////////////////////
        // const res = await axios({
        //     method: "get",
        //     url: "http://localhost:8080/user/hello",
        //     data: {
        //         email: this.loginData.email,
        //         password: this.loginData.password,
        //     },
        //     headers: {
        //         "Content-Type": "application/x-www-form-urlencoded",
        //     },
        // });
        //
        // console.log("Blabla: " + res)
////////////////////////////////////////////////////////////////
        // await axios.post(baseUrl, this.loginData)
        //     .then(response => {
        //         console.log(response)
        //         console.log(response.data)
        //         this.setToken(response.data)
        //         localStorage.setItem("token", response.data)
        //     })
        //     .catch(error => console.log(error)
        //     )

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