import {authenticationStore} from "../stores/AuthenticationStore";
import {Link} from 'react-router-dom';
import * as React from "react";
import {EditTrialStoreOBJ} from "../stores/EditTrialStore";
import {userStore} from "../stores/UserStore";

function SignUp() {
    EditTrialStoreOBJ.setApplicants(userStore.getEmail());
}

function JoinButton() {
    if (authenticationStore.getLoggedIn()) {
        return (<button className="join-button" onClick={SignUp}>Join Trial</button>)
    } else {
        return (<Link to="/login"><button className="join-button">Log In</button></Link>)
    }
}

const StudyCardLarge = (props) => {
    console.log(props);
    let description = props.description;
    if(description.length > 1200){
        description = description.substring(0, 1200 ) + "..."
    }

    return (
        <div className="studycard-container-large">
            <h1>{props.header}</h1>
            <div className="card-location">
                <span className="material-symbols-outlined">location_on</span>
                <p className="card-country">{props.country}</p>
                <p className="card-city">{props.city}</p>
            </div>
            <hr className="card-line"/>
            <h2>{props.title}</h2>
            <div className="card-description-container">
                <p>{description}</p>
            </div>
            <div className="links">
                <div>
                    <JoinButton></JoinButton>
                </div>
                <div className="link-button">
                    <span className="material-symbols-outlined">read_more</span>
                </div>
            </div>
        </div>
    );
}



export default StudyCardLarge;