import StudyCardLarge from "./StudyCardLarge";
import "react-multi-carousel/lib/styles.css";
import {runInAction} from "mobx";
import * as React from "react";
import {authenticationStore} from "../stores/AuthenticationStore";


const TrialView = () => {
    const token = authenticationStore.getParameterByName("token");
    if (token != null && token.length > 0) {
        //Store token and remove token from url
        authenticationStore.setToken(token)
        window.location.replace("#/trials");
        console.log(token)
        console.log(authenticationStore.getToken())
    }

    let cardList = [];
    //let success = 0;
    const url = "https://probe.joecthomsen.dk/viewTrials/getAll";
    try {
        fetch(url, {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'email': "mail"
                }
            }
        ).then(
            async (response) => await response.json().then(
                (json) => runInAction(async () => { console.log(json);
                    cardList = (await json.map((element, index) => {
                        return (<StudyCardLarge key={index}
                                                header={element.header}
                                                title={element.title}
                                                country={element.county}
                                                city={element.city}
                                                description={element.longDescription}/>)
                    }));
                })))
        console.log(cardList);
    } catch (e) {
        //success = 1;
        console.log("No data found");
    }
    if (cardList.length !== 0) {
        return (
            <div className="trials-box">
                <ul>{cardList}</ul>
            </div>
        );
    }
    return (
        <div>
            <h1>No data available</h1>
        </div>
    );
}

export default TrialView;