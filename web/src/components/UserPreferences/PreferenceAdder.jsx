import {userPreferences} from "../../stores/UserPreferencesStore";
import Button from '@mui/material/Button';
import {observer} from "mobx-react-lite";
import * as React from "react";
import {FormControl, InputLabel, NativeSelect} from "@mui/material";

const PreferenceAdder = () => {

    const [selectedPref, setSelectedPref] = React.useState(userPreferences.defaultPref.pref);
    const [choices, setChoices] = React.useState([]);
    const [selectedChoice, setSelectedChoice] = React.useState(userPreferences.defaultPref.choices[0]);

    React.useEffect(() => {
        const newPref = userPreferences.possiblePrefs.find(p => p.pref === selectedPref);
        setChoices(newPref.choices);
    }, [selectedPref])


    function addPref() {
       userPreferences.addPreference(selectedPref, selectedChoice);
    }

    const prefList = userPreferences.possiblePrefs.map((value) =>
        <option key={`${value.pref}pref`} value={value.pref}>{value.pref}</option>
    )

    const choiceList = choices.map((value) =>
        <option key={`${value}choice`} value={value}>{value}</option>
    )

    return (
        <div>
            <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    Preference
                </InputLabel>
                <NativeSelect defaultValue={selectedPref}
                onChange={event => {setSelectedPref(event.target.value)}}
                >
                    {prefList}
                </NativeSelect>
            </FormControl>

            <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    Choice
                </InputLabel>
                <NativeSelect defaultValue={selectedChoice}
                              onChange={event => {setSelectedChoice(event.target.value)}}
                >
                    {choiceList}
                </NativeSelect>
            </FormControl>

            <Button variant={"outlined"} onClick={addPref}> Add This Preference </Button>
        </div>
    )

}

export default observer(PreferenceAdder);
