import ActivateDeactivateButton from "../components/UserPreferences/ActivateDeactivateButton";
import Grid from '@mui/material/Unstable_Grid2';
import {userPreferences} from "../stores/UserPreferencesStore";
import {observer} from "mobx-react-lite";
import PreferenceArray from "../components/UserPreferences/PreferenceArray";
import {Box} from "@mui/material";
import * as React from 'react';
import PreferenceAdder from "../components/UserPreferences/PreferenceAdder";
import {Link} from 'react-router-dom'

const UserProfile = () => {


    return (
        <div>
        <div>
            <Grid container spacing={2}>

                <Grid xs={12} md={12}>
                    <h1> User Preferences </h1>
                </Grid>

                <Grid xs={12} md={12}>
                    <Link to="/trials">Go to the view trials page to see relevant trials</Link>
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
                    <PreferenceArray id={"prefArray"} />
                </Grid>
                <Grid>
                    <PreferenceAdder />
                </Grid>
            </Grid>

        </div>

        </div>
    )
}

export default observer(UserProfile);

