import StudyCardLarge from "./StudyCardLarge";
import "react-multi-carousel/lib/styles.css";
import {runInAction} from "mobx";
import * as React from "react";
import {useState} from "react";
import {useEffect} from "react";
import {authenticationStore} from "../stores/AuthenticationStore";
import jwtDecode from "jwt-decode";
import cardData from "../api/clinical_trial_api_mock";

const TrialView = () => {
    const token = authenticationStore.getParameterByName("token");
    if (token != null && token.length > 0) {
        //Store token and remove token from url
        authenticationStore.setToken(token);
        authenticationStore.setLoggedIn(true);
        authenticationStore.setUsername(jwtDecode(authenticationStore.getToken()).email)

        window.location.replace("#/trials");
        console.log(authenticationStore.getToken());
    }

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
                    const lst = setCardList((await json.map((element, index) => {
                        return (<StudyCardLarge key={index}
                                                header={element.header}
                                                title={element.title}
                                                country={element.county}
                                                city={element.city}
                                                description={element.longDescription}/>)
                    })))
                    const studies = cardData.clinicalTrials;
                    if (lst === undefined) {
                        setCardList((studies.map((element, index) => {
                            return (<StudyCardLarge key={index}
                                                    header={element.header}
                                                    title={element.title}
                                                    country={element.county}
                                                    city={element.city}
                                                    description={element.longDescription}/>)
                        })));
                    }
                }))
        )

    } catch (e) {
        console.log("No data found");
    } }, []);

    return (
        <div className="trials-box">
            <ul>{cardList}</ul>
        </div>
    );
};
export default TrialView;
