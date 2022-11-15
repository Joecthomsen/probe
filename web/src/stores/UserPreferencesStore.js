import {makeAutoObservable} from "mobx"
import {authenticationStore} from "./AuthenticationStore";
import {userStore} from "./UserStore";

class UserPreferencesStore{

    webUrl = process.env.NODE_ENV === 'development' ? "http://localhost:8080/userPreferences" : "https://probe.joecthomsen.dk/userPreferences"; //Check if dev environment

    // Variables
    thisUsersPreferences = [

    ]

    active = true

    allPreferences = [
        {pref: "Max Distance to Home Address in KM", choices: ['5', '10', '20', '30', '40','50', 'dont care' ],},
        {pref: "Need to be accompanied by helper", choices: ['yes', 'no'],},
        {pref: "Preferred Language", choices: ['Danish', 'English', 'Spanish', 'Chinese', 'Other', 'dont care'],},
    ]

    // Constructor
    constructor() {
        makeAutoObservable(this, {},{autoBind: true} );
    }

    get possiblePrefs()  {
        let usersPrefArray = this.thisUsersPreferences.map(value => value.pref); // An array of strings with pref values
        let posPrefArray = this.allPreferences.filter(value => usersPrefArray.indexOf(value.pref) === -1);
        console.log("posPrefArray", posPrefArray);

        return posPrefArray;
    }

    get defaultPref() {
        if (this.possiblePrefs.length > 0) { return this.possiblePrefs[0] }
        else return "No more prefs to add"
    }
    //currentChoice = this.allPreferences[0].choices[0]

    getPossibleChoices(pref) {
        const singleElement = this.allPreferences.find(value => value.pref === pref) || {pref: "no match", choices: ['no', 'no']};
        console.log(singleElement);
        return  singleElement.choices;
    }

    get statusString() {
        if (this.active) {
            return "You are actively seeking studies";
        } else {
            return "You are NOT seeking studies";
        }
    }

    deletePreference(index) {
        this.thisUsersPreferences.splice(index, 1);
    }

    addPreference = (pref, choice) => {
        console.log("in addPreference")
        console.log("pref is: ", pref)
        console.log("choice is: ", choice)
        this.thisUsersPreferences.push({ pref, choice })
        console.log("this.thisUsersPreferences is: ", this.thisUsersPreferences)
    }

    setActiveState(state) {
        this.active = state
    }

    async getUserPrefFromBackend() {
        if (userStore.email != null) {
            let url = this.webUrl + "/getByOwnerMail/" + userStore.email;
            try {
                this.thisUsersPreferences = await fetch(url, {
                    method: 'GET',
                    mode: 'cors',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'token': authenticationStore.getToken(),
                        'email': "mail"
                    }
                })
            } catch (e) {
                console.error(e);
            }
        }
    }
}

export const userPreferences = new UserPreferencesStore()
