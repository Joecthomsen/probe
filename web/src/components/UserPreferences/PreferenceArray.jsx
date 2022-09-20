import {userPreferences} from "../../stores/UserPreferencesStore";
import Button from '@mui/material/Button';
import {observer} from "mobx-react-lite";
import Grid from "@mui/material/Unstable_Grid2";

const PreferenceArray = () => {

    const preferences = userPreferences.preferences
    const constructedArray = []

    function editPref(index) {
        console.log("clicked edit on: ", index)
    }

    function deletePref(index) {
        console.log("clicked delete on: ", index)
    }

    function addPref() {
        console.log("clicked add")
    }

    preferences.forEach((preference, index) => {
         constructedArray.push(

        <Grid key={index} container spacing={2} border={1}>
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
        <Grid container spacing={2} >
            <Grid xs={12} md={12}>
           {constructedArray}
            </Grid>
            <Grid xs={12} md={12}>
           <Button variant={"outlined"} onClick={addPref}> Add Another Preference </Button>
            </Grid>
        </Grid>
    )

}

export default observer(PreferenceArray);