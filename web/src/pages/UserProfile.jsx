import ActivateDeactivateButton from "../components/UserPreferences/ActivateDeactivateButton";
import Grid from '@mui/material/Unstable_Grid2';
import {userPreferences} from "../stores/UserPreferencesStore";
import {observer} from "mobx-react-lite";
import PreferenceArray from "../components/UserPreferences/PreferenceArray";
import {Box} from "@mui/material";
import * as React from 'react';
import PreferenceAdder from "../components/UserPreferences/PreferenceAdder";
import {Link} from 'react-router-dom'
import Button from "@mui/material/Button";

const UserProfile = () => {

   /* const [allPreferences, setAllPreferences] = React.useState([]);
    const [preferences, setPreferences] = React.useState([]);
    const [possiblePreferences, setPossiblePreferences] = React.useState([]);

    React.useEffect(async () => {
        setPreferences(await API.getUserPreferences());
        setAllPreferences(await API.geAllPreferences());
    }, []);

    React.useEffect(async () => {
        const usersPrefArray = preferences.map(value => value.pref)
        const posPrefArray = allPreferences.filter(value => usersPrefArray.indexOf(value.pref) === -1);
        setPossiblePreferences(posPrefArray);
    }, [allPreferences, preferences]);


    */

    function persistPrefsInDB() {      // TODO implement it
          alert("not implemented yet")
    }

    return (
        <div>
        <div>
            <Grid container spacing={2}>

                <Grid xs={12} md={12}>
                    <h1> User Preferences </h1>
                </Grid>

                <Grid xs={12} md={6}>
                    <Box border={2} >
                  <p>  {userPreferences.statusString} </p>
                    <ActivateDeactivateButton/>
                    </Box>
                </Grid>
                <Grid xs={12} md={6}>

                </Grid>
                <Grid xs={12} md={12} >
                    <PreferenceArray  id={"prefArray"} />
                </Grid>
                <Grid xs={12} md={12}>
                    <PreferenceAdder />
                </Grid>
                <Grid xs={3} md={3}>
                </Grid>
                <Grid xs={6} md={6}>
                    <Button variant={"contained"} onClick={persistPrefsInDB}> Save changes to database </Button>
                </Grid>
                <Grid xs={3} md={3}>
                </Grid>
                <Grid xs={12} md={12}>
                    <Link to="/trials">Go to the view trials page to see relevant trials</Link>
                </Grid>
            </Grid>

        </div>

        </div>
    )
}

export default observer(UserProfile);

