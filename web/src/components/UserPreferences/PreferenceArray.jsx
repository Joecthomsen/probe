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

    return (
            <div>
                { preferences && preferences.map((preference, index) => {
                    console.log(preference);
                    return <Grid key={`${index}consArray`} container spacing={2} border={1}>
                            <Grid xs={12} md={3}>
                                <p>  {preference.pref} </p>
                            </Grid>
                            <Grid xs={12} md={3} borderLeft={1} borderRight={1}>
                                <p>  {preference.choice} </p>
                            </Grid>
                            <Grid xs={12} md={3}>
                                <Button variant={"contained"} onClick={() => deletePref(index)} > Delete Preference  </Button>
                            </Grid>
                            <Grid xs={12} md={3} borderLeft={1} borderRight={1}>
                                <Button variant={"contained"} onClick={() => editPref(index)} > Edit Preference  </Button>
                            </Grid>
                        </Grid>
                })}
            </div>
        );
    /*
    if (preferences) {

        preferences.forEach((preference, index) => {
             constructedArray.push(

            <Grid key={`${index}consArray`} container spacing={2} border={1}>
                <Grid xs={12} md={3}>
                   <p>  {preference.key} </p>
                 </Grid>
                <Grid xs={12} md={3} borderLeft={1} borderRight={1}>
                  <p>  {preference.value} </p>
                </Grid>
                <Grid xs={12} md={3}>
                    <Button variant={"contained"} onClick={() => deletePref(index)} > Delete Preference  </Button>
                </Grid>
                <Grid xs={12} md={3} borderLeft={1} borderRight={1}>
                    <Button variant={"contained"} onClick={() => editPref(index)} > Edit Preference  </Button>
                </Grid>
            </Grid>
             )
        })
    } else {
        constructedArray.push(
            <Grid key={`GuarderdArray`} container spacing={2} border={1}>
                <Grid xs={12} md={3}>
                    <p>  No preferences yet </p>
                </Grid>
                <Grid xs={12} md={3} borderLeft={1} borderRight={1}>
                    <p>  Add preference below </p>
                </Grid>
            </Grid>


        )
    }

    return (
        constructedArray
    )
     */

}

export default observer(PreferenceArray);
