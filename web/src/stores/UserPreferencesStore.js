import {makeAutoObservable} from "mobx"
import {authenticationStore} from "./AuthenticationStore";
import {userStore} from "./UserStore";

class UserPreferencesStore{

    webUrl = process.env.NODE_ENV === 'development' ? "http://localhost:8080/userPreferences" : "https://probe.joecthomsen.dk/userPreferences"; //Check if dev environment


    // Variables
    thisUsersPreferences = [

    ]

    active = true

    possiblePreferences = [
        {pref: "Only Interested in Paid Studies", choices: ['yes', 'no'],},
        {pref: "Max Distance to Home Address in KM", choices: ['5', '10', '20', '30', '40','50', 'dont care' ],},
        {pref: "Need to be accompanied by helper", choices: ['yes', 'no'],},
        {pref: "Preferred Language", choices: ['Danish', 'English', 'Spanish', 'Chinese', 'Other', 'dont care'],},
        {pref: "Willing to do physical hard work", choices: ['yes', 'no'],},
        {pref: "Max Duration of Test Period in months", choices: ['1','2', '3', '4', '4', '5', '6', '7', '8', '9','10','11','12','dont care'],},
    ]

    currentPref = this.possiblePreferences[0].pref
    currentChoice = this.possiblePreferences[0].choices[0]

    // Constructor
        constructor() {
            makeAutoObservable(this, {},{autoBind: true} )
        }

    setCurrentPref(value) {
        this.currentPref = value
    }
    setCurrentChoice(value) {
        this.currentChoice = value
    }

    getPossibleChoices() {
        const singleElement = this.possiblePreferences.find(value => value.pref === this.currentPref) || {pref: "no match", choices: ['no', 'no']}
        console.log(singleElement)
        return  singleElement.choices
    }

    get statusString() {
        if (this.active) {
            return "You are actively seeking studies"
        } else {
            return "You are NOT seeking studies"
        }
    }

    getPossiblePrefs()  {
       return this.possiblePreferences.map(value => value.pref)
    }

    deletePreference(index) {
        this.thisUsersPreferences.splice(index, 1);
    }

    addPreference = () => {
        if (this.thisUsersPreferences.length === 1 && this.thisUsersPreferences[0].value === 'No Preference Set') {
            this.thisUsersPreferences.splice(0,1)
        }
        this.thisUsersPreferences.push({key: this.currentPref, value: this.currentChoice})
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
