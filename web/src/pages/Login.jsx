import "../styles/login.css"

const login = () => {
    return ( 
        <div className="login-container">
            <input placeholder="Email" type="text"/>
            <input placeholder="Password" type="password"/>
            <button>Sign in</button>
        </div>
     );
}
 
export default login;