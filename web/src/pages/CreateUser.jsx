import "../styles/newUser.css"
import WordImage from "../resources/world-connected.png"

const CreateUSer = () => {
    return ( 
        <div className="create-user-wrapper">
            <img className="world-image" src={WordImage} alt="null" />
            <form className="create-user-form">
                <label htmlFor="Create a new user"></label>
                <input type="text" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <input type="password" placeholder="Repeat password"/>
                <input type="text" placeholder="First name(s)"/>
                <input type="text" placeholder="Last name"/>
                <label htmlFor="user-birthday">Day of Birth:</label>
                <input type="date" name="Birthday" id="user-birthday"/>
                <input type="text" placeholder="Street name"/>
                <input type="text" placeholder="door number"/>
                <input type="text" placeholder="Floor"/>
                <input type="text" placeholder="city"/>
                <input type="text" placeholder="Region"/>
                <input type="text" placeholder="County"/>
                <button type="button">Next</button>
            </form>
        </div>
     );
}
 
export default CreateUSer;