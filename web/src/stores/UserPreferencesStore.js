import { makeObservable, observable, computed } from "mobx"

class UserPreferencesStore{
    // Variables
    preferences = [
        { key: "Only Interested in Paid Studies", value: "yes" },
        {key: "Max Distance to Home Address in KM", value: "12"}]
    active = true

    // Constructor
    constructor() {
        makeObservable(this,{
            preferences: observable,
            active: observable,
            statusString: computed
        } )
    }

    get statusString() {
        console.log("Computing...")
        if (this.active) {
            return "You are actively seeking studies"
        } else {
            return "You are NOT seeking studies"
        }

    }

    addPreference = (preference) => {
        if (this.preferences.length === 1 && this.preferences[0] === 'No Preference Set') {
            this.preferences.splice(0,1)
        }

        this.preferences.push(preference)
    }

    setActiveState = (state) => {
        this.active = state
        console.log("active is: ", this.active);
    }



}

export const userPreferences = new UserPreferencesStore()