import {userPreferences} from "../../stores/UserPreferencesStore";
import Button from '@mui/material/Button';
import {observer} from "mobx-react-lite";
import Grid from "@mui/material/Unstable_Grid2";
import * as React from 'react';


const PreferenceArray = () => {

    const preferences = userPreferences.thisUsersPreferences

    function editPref(index) {
        alert("not implemeted yet")
        console.log("clicked edit on: ", index)    // TODO make it actual possible to change stuff
    }

    function deletePref(index) {
        userPreferences.deletePreference(index)
        console.log("clicked delete on: ", index)
    }

    if (userPreferences.thisUsersPreferences.length > 0 ) {
    return (
            <div>
                {preferences && preferences.map((preference, index) => {
                    return <Grid key={`${index}consArray`} container spacing={2} border={1}>
                        <Grid xs={12} md={3}>
                            <p>  { preference.pref.text } </p>
                        </Grid>
                        <Grid xs={12} md={3} borderLeft={1} borderRight={1}>
                            <p>  { preference.choice.text } </p>
                        </Grid>
                        <Grid xs={12} md={3}>
                            <Button variant={"contained"} onClick={() => deletePref(index)}> Delete Preference </Button>
                        </Grid>
                        <Grid xs={12} md={3} borderLeft={1} borderRight={1}>
                            <Button variant={"contained"} onClick={() => editPref(index)}> Edit Preference </Button>
                        </Grid>
                    </Grid>
                })}

            </div>

    )
    } else {
        return (
        <div>
        <p> No preferences choosen </p>
        </div>
        )
    }

}

export default observer(PreferenceArray);
