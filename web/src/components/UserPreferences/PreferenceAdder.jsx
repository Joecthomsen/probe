import {userPreferences} from "../../stores/UserPreferencesStore";
import Button from '@mui/material/Button';
import {observer} from "mobx-react-lite";
import * as React from "react";
import {FormControl, InputLabel, NativeSelect} from "@mui/material";

const PreferenceAdder = () => {

    function addPref() {
       userPreferences.addPreference()
    }

    function setPref(value) {
        console.log("in setPref in preferenceAdder value is: ", value)
        userPreferences.setCurrentPref(value);
        userPreferences.setCurrentChoice(userPreferences.getPossibleChoices()[0]);
    }
    function setChoice(value) {
        userPreferences.setCurrentChoice(value);
    }

    const prefList = userPreferences.getPossiblePrefs().map((value) =>
    <option key={`${value}pref`} value={value}>{value}</option>
    )

    const choiceList = userPreferences.getPossibleChoices().map((value) =>
    <option key={`${value}choice`} value={value}>{value}</option>
    )

    return (
        <div>
            <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    Preference
                </InputLabel>
                <NativeSelect defaultValue={userPreferences.getPossiblePrefs()[0]}
                onChange={event => {setPref(event.target.value)}}
                >
                    {prefList}
                </NativeSelect>
            </FormControl>

            <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    Choice
                </InputLabel>
                <NativeSelect defaultValue={userPreferences.getPossibleChoices()[0]}
                              onChange={event => {setChoice(event.target.value)}}
                >
                    {choiceList}
                </NativeSelect>
            </FormControl>

            <Button variant={"outlined"} onClick={addPref}> Add Another Preference </Button>
        </div>
    )

}

export default observer(PreferenceAdder);
