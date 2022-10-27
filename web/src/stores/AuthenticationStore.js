import { makeAutoObservable } from "mobx"
import axios from "axios"

const baseUrl = "https://probe.joecthomsen.dk/authentication/login";
class AuthenticationStore{

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
            {autoBind:true}//For non-arrow-functions bind
        )
    }



    async doLogin() {
        // const headers = {
        //     'Access-Control-Allow-Origin':  '*',
        //     'Access-Control-Allow-Methods': 'POST',
        //     'Access-Control-Allow-Headers' : 'Content-Type, Authorization'
        // }
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
        console.log("User: " + this.loginData.email + " logged in: " + this.loggedIn + " token: " + this.token)
    }

    setUsername(userName){
        this.loginData.email = userName;
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
    getLoggedIn(){
        return this.loggedIn;
    }

}
export const authenticationStore = new AuthenticationStore()