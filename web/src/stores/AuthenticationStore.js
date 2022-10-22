import { makeAutoObservable } from "mobx"
import axios from "axios";

const baseUrl = "http://localhost:8080/authentication/post";

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

    doLogin() {
        axios.post(baseUrl, this.loginData)
            .then(response => {
                console.log(response)
            })
            .catch(error => console.log(error)
      )
        console.log(this.loginData.userName + " ........ " + this.loggedIn)
    }

    setUsername(userName){
        this.loginData.userName = userName;
    }
    setPassword(password){
        this.loginData.password = password;
    }

}
export const authenticationStore = new AuthenticationStore()