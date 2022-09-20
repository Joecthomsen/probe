import "../styles/newUser.css"
import WorldImage from "../resources/world-connected.png"
import CreateUserFormOne from "../components/CreateNewUserFormOne";

const CreateUSer = () => {


    return ( 
        <div className="create-user-wrapper">
            <div className="image-wrapper">
                <img className="world-image" src={WorldImage} alt="null" />
            </div>
             <CreateUserFormOne/> 
        </div>
     );
}
 
export default CreateUSer;