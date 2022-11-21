import {makeAutoObservable} from "mobx"
import {loginRequest} from '../requests/loginRequest'

class AuthenticationStore {
    webUrl = process.env.NODE_ENV === 'development' ? "http://localhost:8080/campusnet/login" : "https://probe.joecthomsen.dk/campusnet/login"; //Check if dev environment

    loading = false;
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

    getToken() {
        return this.token
    }

    setLoading(loading){
        this.loading = loading;
    }

    getLoading(){
        return this.loading;
    }

    getParameterByName(name, url) {
        if (!url) {
            url = window.location.href;
        }
        //name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    dtucasFetch() {
        let url = this.webUrl + "2";
        fetch(url, {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            }

            /*).then(() => {
                const token = this.getParameterByName("token");
                if (token != null && token.length > 0) {
                    //Store token and redirect to baseURL
                    this.setToken(token)
                    window.location.replace("#/trials");
                    console.log(token)
                    console.log(this.getToken())
                }
            }*/).then((res) => res.text()).then((res) => {
            console.log(res);
            window.location.replace(res)
        })
    }

}

export const authenticationStore = new AuthenticationStore()