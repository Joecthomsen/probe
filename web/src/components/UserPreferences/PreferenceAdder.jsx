import {userPreferences} from "../../stores/UserPreferencesStore";
import Button from '@mui/material/Button';
import {observer} from "mobx-react-lite";
import * as React from "react";
import BasicSelect from "./BasicSelect";

const PreferenceAdder = () => {

    function addPref() {
       userPreferences.addPreference();
    }

    function prefChanged(newValue) {
        console.log("prefChanged", newValue)
        userPreferences.prefToAdd = newValue
    }

    function choiceChanged(newValue) {
        console.log("choiceChanged", newValue)
        userPreferences.choiceToAdd = newValue
    }

    return (
        <div>
                <BasicSelect myArray = { userPreferences.possiblePrefs } labelName = "Preference" onValueChanged = {prefChanged}   ></BasicSelect>
                <BasicSelect myArray = { userPreferences.possibleChoices } labelName = "Choice" onValueChanged = {choiceChanged}></BasicSelect>
                <Button variant={"outlined"} onClick={addPref}> Add This Preference </Button>
        </div>
    )

}

export default observer(PreferenceAdder);
