import {Autocomplete, Button, DialogContentText, Grid, TextField} from "@mui/material";
import match_codes_api from "../api/match_codes_api";
import * as React from "react";
import {EditTrialStoreOBJ} from "../stores/EditTrialStore";

function DialogContextTrial() {

    return (
        <DialogContentText>
            <Grid container spacing={2}>
                <Grid container item xs={7} spacing={1}>
                    <Grid item xs={6}><TextField id="Header" label="Header" variant="filled" required={true}
                                                 InputLabelProps={{shrink: true}}
                                                 value={EditTrialStoreOBJ.getHeader()}/></Grid>
                    <Grid item xs={6}><TextField id="Country" label="Country" variant="filled" required={true}
                                                 InputLabelProps={{shrink: true}}
                                                 value={EditTrialStoreOBJ.getCountry()}/></Grid>
                    <Grid item xs={6}><TextField id="Title" label="Title" variant="filled"
                                                 InputLabelProps={{shrink: true}}
                                                 value={EditTrialStoreOBJ.getTitle()}/></Grid>
                    <Grid item xs={6}><TextField id="City" label="City" variant="filled" required={true}
                                                 InputLabelProps={{shrink: true}}
                                                 value={EditTrialStoreOBJ.getCity()}/></Grid>
                    <Grid item xs={6}><Autocomplete inputValue={EditTrialStoreOBJ.getMatch()}
                                                    value={EditTrialStoreOBJ.getMatch()} disablePortal id="Match"
                                                    options={match_codes_api}
                                                    renderInput={(params) => <TextField {...params}
                                                                                        label="Match*"/>}
                                                    required={true}/></Grid>
                    <Grid item xs={6}><TextField id="ZipCode" label="Zip-code" variant="filled"
                                                 InputLabelProps={{shrink: true}}
                                                 value={EditTrialStoreOBJ.getZipCode()}/></Grid>
                    <Grid item xs={6}><TextField id="MinAge" label="MinAge" variant="filled" required={true}
                                                 InputLabelProps={{shrink: true}}
                                                 value={EditTrialStoreOBJ.getMinAge()}/></Grid>
                    <Grid item xs={6}><TextField id="Address" label="Address" variant="filled" required={true}
                                                 InputLabelProps={{shrink: true}}
                                                 value={EditTrialStoreOBJ.getAddress()}/></Grid>
                    <Grid item xs={6}><TextField id="MaxAge" label="MaxAge" variant="filled" required={true}
                                                 InputLabelProps={{shrink: true}}
                                                 value={EditTrialStoreOBJ.getMaxAge()}/></Grid>
                    <Grid item xs={6}><TextField id="StartDate" label="StartDate" variant="filled"
                                                 required={true} InputLabelProps={{shrink: true}}
                                                 value={EditTrialStoreOBJ.getStartDate()}/></Grid>
                    <Grid item xs={6}><TextField id="Required_visits" label="Required visits" variant="filled"
                                                 required={true} InputLabelProps={{shrink: true}}
                                                 value={EditTrialStoreOBJ.getRequiredVisit()}/></Grid>
                    <Grid item xs={6}><TextField id="time" label="Time" variant="filled"
                                                 required={true} InputLabelProps={{shrink: true}}
                                                 value={EditTrialStoreOBJ.getStartTime()}/></Grid>
                </Grid>
                <Grid container item xs={5}>
                    <Grid item xs={12}><img id="Img"
                                            src={EditTrialStoreOBJ.getImg()}
                                            alt={"props"} height={200} width={230}/></Grid>
                    <Grid item xs={12}>
                        <Button variant={"outlined"}>Upload new picture</Button>
                    </Grid>
                </Grid>

                <Grid item xs={12}>
                    <h3>Card Description</h3>
                    <TextField id="CardDesc" multiline rows={2} defaultValue="Lorem Ipsum" inputProps={{maxLength: 200}}
                               fullWidth={true} value={EditTrialStoreOBJ.getCardDesc()}/></Grid>

                <Grid item xs={12}>
                    <h3>Long Description</h3>
                    <TextField id="LongDesc" multiline rows={4} defaultValue="Lorem Ipsum" inputProps={{maxLength: 200}}
                               fullWidth={true} value={EditTrialStoreOBJ.getLongDesc()}/></Grid>

                <Grid item xs={12}>
                    <h3>Applicants</h3>
                    <TextField id="Applicants" multiline rows={2} defaultValue="Lorem Ipsum"
                               inputProps={{maxLength: 200}}
                               fullWidth={true} value={JSON.stringify(EditTrialStoreOBJ.getApplicants())}/></Grid>
            </Grid>

        </DialogContentText>
    );
}

export default DialogContextTrial;