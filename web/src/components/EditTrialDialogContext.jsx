import {Autocomplete, Button, DialogContentText, Grid, TextField} from "@mui/material";
import match_codes_api from "../api/match_codes_api";
import * as React from "react";

export default function DialogContextTrial() {

    return (
        <DialogContentText>
            <Grid container spacing={2}>
                <Grid container item xs={7} spacing={1}>
                    <Grid item xs={6}><TextField id="Header" label="Header" variant="filled" required={true}/></Grid>
                    <Grid item xs={6}><TextField label="Country" variant="filled" required={true}/></Grid>
                    <Grid item xs={6}><TextField id="Title" label="Title" variant="filled"/></Grid>
                    <Grid item xs={6}><TextField label="City" variant="filled" required={true}/></Grid>
                    <Grid item xs={6}><Autocomplete disablePortal id="Match" options={match_codes_api}
                                                    renderInput={(params) => <TextField {...params}
                                                                                        label="Match*"/>}
                                                    required={true}/></Grid>
                    <Grid item xs={6}><TextField label="Zip-code" variant="filled"/></Grid>
                    <Grid item xs={6}><TextField id="MinAge" label="MinAge" variant="filled" required={true}/></Grid>
                    <Grid item xs={6}><TextField id="Address" label="Address" variant="filled" required={true}/></Grid>
                    <Grid item xs={6}><TextField id="MaxAge" label="MaxAge" variant="filled" required={true}/></Grid>
                    <Grid item xs={6}><TextField id="StartDate" label="StartDate" variant="filled"
                                                 required={true}/></Grid>
                    <Grid item xs={6}><TextField id="Required_visits" label="Required visits" variant="filled"
                                                 required={true}/></Grid>
                    <Grid item xs={6}><TextField id="StartTime" label="StartTime" variant="filled"
                                                 required={true}/></Grid>
                </Grid>
                <Grid container item xs={5}>
                    <Grid item xs={12}><img src={'https://images.unsplash.com/photo-1567306301408-9b74779a11af'}
                                            alt={"props"} height={200} width={230}/></Grid>
                    <Grid item xs={12}>
                        <Button variant={"outlined"}>Upload new picture</Button>
                    </Grid>
                </Grid>

                <Grid item xs={12}>
                    <h3>Card Description</h3>
                    <TextField multiline rows={2} defaultValue="Lorem Ipsum" inputProps={{maxLength: 200}}
                               fullWidth={true}/></Grid>

                <Grid item xs={12}>
                    <h3>Long Description</h3>
                    <TextField multiline rows={4} defaultValue="Lorem Ipsum" inputProps={{maxLength: 200}}
                               fullWidth={true}/></Grid>

                <Grid item xs={12}>
                    <h3>Applicants</h3>
                    <TextField multiline rows={2} defaultValue="Lorem Ipsum" inputProps={{maxLength: 200}}
                               fullWidth={true}/></Grid>
            </Grid>

        </DialogContentText>
    );
}