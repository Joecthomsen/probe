import "../styles/newUser.css"
import WorldImage from "../resources/world-connected.png"
import CreateUserFormOne from "../components/CreateNewUserFormOne";
import { useState } from "react";

const CreateUSer = () => {

    const [formOne, setFormOne] = useState(true)

    return ( 
        <div className="create-user-wrapper">
            <div className="image-wrapper">
                <img className="world-image" src={WorldImage} alt="null" />
            </div>
            {formOne ? <CreateUserFormOne/> : <h1>Lets write some more stuff</h1>}
        </div>
     );
}
 
export default CreateUSer;