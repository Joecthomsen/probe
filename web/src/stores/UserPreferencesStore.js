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
        {pref: "Max Distance to Home Address in KM", choices: ['5', '10', '20', '30', '40','50', 'dont care' ],},
        {pref: "Need to be accompanied by helper", choices: ['yes', 'no'],},
        {pref: "Preferred Language", choices: ['Danish', 'English', 'Spanish', 'Chinese', 'Other', 'dont care'],},

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

    getPossiblePrefs()  {
        let filteredArray = []
        let posPrefArray = this.possiblePreferences.map(value => value.pref)


        let usersPrefArray = this.thisUsersPreferences.map(value => value)


        posPrefArray.forEach(posPref => {
            if (!usersPrefArray.includes(posPref)) {
                filteredArray.push(posPref)
            }
        })

        console.log("filteredArray", filteredArray)


        return filteredArray
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

    deletePreference(index) {
        this.thisUsersPreferences.splice(index, 1);
    }

    addPreference = () => {
        if (this.thisUsersPreferences.length === 1 && this.thisUsersPreferences[0].value === 'No Preference Set') {
            this.thisUsersPreferences.splice(0,1)
        }

        const newPref = {pref: this.currentPref, choice: this.currentChoice}
        this.thisUsersPreferences.push(newPref)

        console.log("after add thisUsersPreference", this.thisUsersPreferences)
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
