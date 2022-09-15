import {Link} from 'react-router-dom'

const CreateNewUser = () => {
    return ( 
        <div className="create-new-user">
        {/* <div className="color-overlay" /> */}
        <h1 className="create-user-header">New Here?</h1>
        <h2>Sign up and and discover a new world of opportunities!</h2>
        <Link to="/createuser"><button>Create New User</button></Link>
        
    </div>
     );
}
 
export default CreateNewUser;