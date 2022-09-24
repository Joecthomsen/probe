import {userPreferences} from "../../stores/UserPreferencesStore";
import Button from '@mui/material/Button';
import {observer} from "mobx-react-lite";
import Grid from "@mui/material/Unstable_Grid2";

const PreferenceArray = () => {

    const preferences = userPreferences.thisUsersPreferences
    const constructedArray = []

    function editPref(index) {
        console.log("clicked edit on: ", index)
    }

    function deletePref(index) {
userPreferences.deletePreference(index)
        console.log("clicked delete on: ", index)
    }

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

    return (
        constructedArray
    )

}

export default observer(PreferenceArray);