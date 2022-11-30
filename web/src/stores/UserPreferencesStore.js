import {makeAutoObservable} from "mobx"
import {authenticationStore} from "./AuthenticationStore";
import {userStore} from "./UserStore";

class UserPreferencesStore{

    webUrl = process.env.NODE_ENV === 'development' ? "http://localhost:8080/userSettings" : "https://probe.joecthomsen.dk/userSettings";

    // Variables

    thisUsersPreferences = [
        // { pref: {} , choice: {}}}
    ]

    allPrefClean = [
        {id: "0p", text: "Max Distance to Home Address in KM", choiceType: "numbers_51020304050"},
        {id: "1p", text: "Need to be accompanied by helper", choiceType: "yesNo"},
        {id: "2p", text: "Preferred Language", choiceType: "language"},
        {id: "3p", text: "Only accept paid studies", choiceType: "yesNo"},
    ];

    allChoices = [
        {type: "yesNo", choices: [{ id: "yes", text: "yes" }, { id:"no", text: "no" }]},
        {type: "numbers_51020304050", choices: [{id: "five", text: '5' }, { id: "ten", text: '10' }, { id: "twenty", text: '20' }, { id: "thirty", text: '30' }, {id: "forty", text: '40' }, { id: "fifty", text: '50' }, {id: "dontcare", text: 'dont care'}]},
        {type: "language", choices: [{ id: "da", text: 'Danish' }, { id: "en", text: 'English' }, {id: "sp", text: 'Spanish' }, { id: "ch", text: 'Chinese' }, {id: "ot", text: 'Other'}, { text: 'dont care' }]}
    ];

    resultA;

    // Constructor
    constructor() {
        makeAutoObservable(this, {},{autoBind: true} );
    }

    get possiblePrefs()  {
        return  this.allPrefClean.filter(({id}) => !this.thisUsersPreferences.find(p => p.pref.id === id));
    }

    get defaultPref() {
        if (this.possiblePrefs.length > 0) { return this.possiblePrefs[0] }
        else return null
    }

    get possibleChoices() {
        if (this.prefToAdd !== null) {
            return this.allChoices.find(c => c.type === this.prefToAdd.choiceType).choices
                || [{ id: "nomatch", text: "no match"}]
        } else {
            return []
        }
    }

    get statusString() {
        if (this.activeState) {
            return "You are actively seeking studies";
        } else {
            return "You are NOT seeking studies";
        }
    }

    deletePreference(index) {
        this.thisUsersPreferences.splice(index, 1);
        if (this.possiblePrefs.length === 1) {
            this.prefToAdd = this.possiblePrefs[0]
            this.choiceToAdd = this.possibleChoices[0]
        }
    }

    addPreference = () => {
        if (this.prefToAdd === null || this.choiceToAdd === null) {
        alert("Please choose a pref and a choice before adding")
        return
        }

        this.thisUsersPreferences.push({pref: this.prefToAdd, choice: this.choiceToAdd })
        this.prefToAdd = null
        this.choiceToAdd = null
        console.log("this.thisUsersPreferences is: ", this.thisUsersPreferences)
    }


    async getSettingsAndUserPref() {
        if (userStore.getEmail() != null) {
            let url = this.webUrl + "/getUserPrefsByOwnerMail/" + userStore.getEmail();
                await fetch(url, {
                    method: 'GET',
                    mode: 'cors',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'token': authenticationStore.getToken(),
                        'email': 'mail'
                    }
                }).then(async value => {
                    try {
                        let temp = await value.json().catch()
                        console.log("temp")
                        console.log(temp)
                    } catch (e) {
                        console.error(e)
                    }
                })

        } else {console.log("no email to use")}
    }

    _prefToAdd = null;
    _choiceToAdd = null;

    get prefToAdd() { return this._prefToAdd; }
    set prefToAdd(newValue) { this._prefToAdd = newValue }

    get choiceToAdd() { return this._choiceToAdd; }
    set choiceToAdd(newValue) { this._choiceToAdd = newValue }

    _activeState = true;

    get activeState() {return this._activeState}
    set activeState(newValue) { this._activeState = newValue}

}

export const userPreferences = new UserPreferencesStore()
