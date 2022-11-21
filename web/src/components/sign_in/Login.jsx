import DTUlogo from "../../resources/DTU_Logo_Hvid.jpg";
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
            navigate('/userProfile')
        }
        else{
            EditTrialStoreOBJ.setOwnerID(authenticationStore.loginData.email)
            navigate('/edittrials')
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