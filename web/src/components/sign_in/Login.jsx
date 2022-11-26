import DTUlogo from "../../resources/DTU_Logo_Hvid.jpg";
import {authenticationStore} from "../../stores/AuthenticationStore";
import {useNavigate} from "react-router-dom";
import jwtDecode from "jwt-decode";
import {EditTrialStoreOBJ} from "../../stores/EditTrialStore";
import {loadingStore} from "../../stores/LoadingStore";

const url = process.env.NODE_ENV === 'development' ? "http://localhost:8080/authentication/validate/" : "https:/probe.joecthomsen.dk/authentication/validate/"; //Check if dev environment


const setUsername = (event) => {
    authenticationStore.setUsername(event.target.value)
}

const setPassword = (event) => {
    authenticationStore.setPassword(event.target.value);
}

const Login = () => {
    const navigate = useNavigate()

    const HandleSubmit = async (e) => {
        await authenticationStore.doLogin(e)
        const token = authenticationStore.getToken() === null ? "0" : jwtDecode(authenticationStore.getToken() )
        const validateTokenUrl = url+authenticationStore.getToken()
        console.log("TOKEN: " + validateTokenUrl)
        loadingStore.setLoading(true)
        const requestOptions = {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
        };
        try {
            loadingStore.setLoading(true)
            const response = await fetch(validateTokenUrl, requestOptions);
            const data = await response.json();
            loadingStore.setLoading(false)
            console.log("Token : " + data)
            if(data){
                console.log("Inside if")
                if (token.roles.includes("CLINICAL_USER")){
                    navigate('/userProfile')
                }
                else {
                    EditTrialStoreOBJ.setOwnerID(authenticationStore.loginData.email)
                    navigate('/edittrials')
                }
            }
            else{
                window.alert("Could not sign in with credentials - try again.")
                loadingStore.setLoading(false)
            }
        }catch (e){
            window.alert("Could not sign in with credentials - try again.")
            console.log("ERROR!")
            loadingStore.setLoading(false)
        }

        //console.log("Finished!! " + JSON.stringify(userStore.getRole().pop().roleName ))

        // if (userStore.getRole().pop().roleName === "MEDICAL_USER"){
        //     console.log("MEDICAL MOFO ! ! !")
        //     navigate('/edittrials')
        // }
        // else{
        //     console.log("Meeeh!")
        //     navigate('/about')
        // }
        //console.log("Finished!! " + JSON.stringify(userStore.getRole().pop().roleName ))
    }
    return (
        <div className="page-container">
            <div className="login-page">
                <h1 className="login-header">Login to your account</h1>
                <h2>Login Using DTU</h2>
                <div className="so-me-login-buttons">
                    <img className="facebook-button" src={DTUlogo} alt="DTU_Campus_Login" onClick={authenticationStore.dtucasFetch} />
                </div>
                <hr className="line-breaker"></hr>
                <h2>Login With Credential</h2>
                <form className="login-container">
                    <input onChange={setUsername} type="text" placeholder="Username" id="Username"/>
                    <input onChange={setPassword} type="password" placeholder="Password" id="Password"/>
                    <button onClick={HandleSubmit}>Log in</button>
                </form>
            </div>
        </div>
     );
}

export default Login;