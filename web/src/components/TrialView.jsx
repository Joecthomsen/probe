import StudyCardLarge from "./StudyCardLarge";
import "react-multi-carousel/lib/styles.css";
import {runInAction} from "mobx";
import * as React from "react";


const TrialView = () => {
    let cardList = [];
    const url = "http://localhost:8080/viewTrials/getAll";
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
            (json) => runInAction(async () => {
                console.log("BLABLA: " + json.length)
                this.cardList = (await json.map((element, index) => {
                    return(<StudyCardLarge key={index}
                                           header={element.header}
                                           title={element.title}
                                           country={element.county}
                                           city={element.city}
                                           description={element.longDescription}/>)
                }));
            })));

    return (
        <div className="trials-box">
            <ul>{cardList}</ul>
        </div>

    );
}

export default TrialView;