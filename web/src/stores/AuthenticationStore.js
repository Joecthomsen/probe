import {makeAutoObservable} from "mobx"
import {loginRequest} from '../requests/loginRequest'

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