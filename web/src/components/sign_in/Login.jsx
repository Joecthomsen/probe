import googleLogo from "../../resources/google_logo.svg";
import facebookLogo from "../../resources/facebook-round-logo.png"

const Login = () => {
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
                    <input type="text" placeholder="Username"/>
                    <input type="password" placeholder="Password"/>
                    <button>Sign in</button>
                </form>
            </div>
        </div>
     );
}
 
export default Login;