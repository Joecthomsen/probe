import "../styles/login.css"
import googleLogo from "../resources/google_logo.svg";

const login = () => {
    return ( 
        <div className="outer-page">
            <h1 className="login-header">Sign in to your account</h1>
            <div className="login-container">  
                <input placeholder="Email" type="text"/>
                <input placeholder="Password" type="password"/>
                <button>Sign in</button>   
            </div>
                <h2>Or</h2>
                <div className="so-me-login-buttons">
                    <img className="google-button" src={googleLogo} alt="Google" />
                </div>
            </div>
     );
}
 
export default login;