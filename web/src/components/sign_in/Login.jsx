import googleLogo from "../../resources/google_logo.svg";
import facebookLogo from "../../resources/facebook-round-logo.png"
import {authenticationStore} from "../../stores/AuthenticationStore";
import {useNavigate} from "react-router-dom";
import jwtDecode from "jwt-decode";
import {EditTrialStoreOBJ} from "../../stores/EditTrialStore";


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
        const token = jwtDecode(authenticationStore.getToken() )

        if (token.roles.includes("CLINICAL_USER")){
            console.log("CLINIC MOFO ! ! !")
            EditTrialStoreOBJ.setOwnerID(authenticationStore.loginData.email)
            navigate('/edittrials')
        }
        else{
            console.log("Meeeh!")
            navigate('/about')
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
                <h2>Login Using Social Media</h2>
                <div className="so-me-login-buttons">
                    <img className="google-button" src={googleLogo} alt="Google" />
                    <img className="facebook-button" src={facebookLogo} alt="Facebook" />
                </div>
                <hr className="line-breaker"></hr>
                <h2>Login With Credential</h2>
                <form className="login-container">
                    <input onChange={setUsername} type="text" placeholder="Username"/>
                    <input onChange={setPassword} type="password" placeholder="Password"/>
                    <button onClick={HandleSubmit}>Log in</button>
                </form>
            </div>
        </div>
     );
}
 
export default Login;