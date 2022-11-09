import StudyCardLarge from "./StudyCardLarge";
import "react-multi-carousel/lib/styles.css";
import {runInAction} from "mobx";
import * as React from "react";


const TrialView = () => {
    let cardList = [];
    let success = 0;
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
                (json) => runInAction(async () => {
                    console.log(json);
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
        success = 1;
        console.log("No data found");
    }
    if (cardList.length != 0) {
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