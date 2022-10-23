import { makeAutoObservable } from "mobx"
import axios from "axios"

const baseUrl = "http://localhost:8080/authentication/post";
//const axios = require('axios')

class AuthenticationStore{

    loggedIn = false;
    token = null;
    loginData = {
        userName: "",
        password: ""
    }

    // Constructor
    constructor() {
        makeAutoObservable(this,
            {},
            {autoBind:true}//For non-arrow-functions bind
        )
    }

    async doLogin() {
         await axios.post(baseUrl, this.loginData)
            .then(response => {
                console.log(response)
                console.log(response.data)
                this.setToken(response.data)
            })
            .catch(error => console.log(error)
      )
        if(this.token != null){
            this.setLoggedIn(true)
        }
        console.log("User: " + this.loginData.userName + " logged in: " + this.loggedIn + " token: " + this.token)
    }

    setUsername(userName){
        this.loginData.userName = userName;
    }
    setPassword(password){
        this.loginData.password = password;
    }
    setToken(token){
        this.token = token;
    }
    setLoggedIn(status){
        this.loggedIn = status;
    }

}
export const authenticationStore = new AuthenticationStore()