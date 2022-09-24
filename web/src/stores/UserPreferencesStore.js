import {makeAutoObservable} from "mobx"

class UserPreferencesStore{


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
        const singleElement = this.possiblePreferences.find(value => value.pref === this.currentPref) || {index: 5, pref: "no match", choices: ['no', 'no']}
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
       let prefArray = []
        this.possiblePreferences.forEach(value => {
            prefArray.push(value.pref)
        })
        return prefArray
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



}

export const userPreferences = new UserPreferencesStore()