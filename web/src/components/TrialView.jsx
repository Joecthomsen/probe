import StudyCardLarge from "./StudyCardLarge";
import "react-multi-carousel/lib/styles.css";
import {runInAction} from "mobx";
import * as React from "react";
import {useState} from "react";
import {useEffect} from "react";

const TrialView = () => {
    const [cardList, setCardList] = useState();
    const url = "https://probe.joecthomsen.dk/viewTrials/getAll";
    useEffect(() => { try {
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
                    //console.log(json);
                    setCardList((await json.map((element, index) => {
                        return (<StudyCardLarge key={index}
                                                header={element.header}
                                                title={element.title}
                                                country={element.county}
                                                city={element.city}
                                                description={element.longDescription}/>)
                    })));
                    //console.log(cardList);
                })))

    } catch (e) {
        console.log("No data found");
    } }, []);

    if (cardList !== undefined) {
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
};
export default TrialView;