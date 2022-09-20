import ActivateDeactivateButton from "../components/UserPreferences/ActivateDeactivateButton";
import Grid from '@mui/material/Unstable_Grid2';
import {userPreferences} from "../stores/UserPreferencesStore";
import {observer} from "mobx-react-lite";

const UserProfile = () => {

    return (
        <div>
            <Grid container spacing={2}>
                <Grid xs={12} md={12}>
                    <h1> User Preferences </h1>
                </Grid>
                <Grid xs={12} md={6}>
                  <p>  {userPreferences.statusString} </p>
                </Grid>
                <Grid xs={12} md={6}>
                    <ActivateDeactivateButton            />
                </Grid>
            </Grid>

        </div>
    )
}

export default observer(UserProfile);

