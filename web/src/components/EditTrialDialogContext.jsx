import {Autocomplete, Button, DialogContentText, Grid, TextField} from "@mui/material";
import match_codes_api from "../api/match_codes_api";
import * as React from "react";
import {EditTrialStoreOBJ} from "../stores/EditTrialStore";


function DialogContextTrial() {

    return (
        <DialogContentText>
            <Grid container spacing={2}>
                <Grid container item xs={9} spacing={1}>
                    <Grid item xs={6}><TextField id="Header" label="Header" variant="filled" required={true}
                                                 InputLabelProps={{shrink: true}}
                                                 defaultValue={EditTrialStoreOBJ.getHeader()}
                                                 onChange={() => {
                                                     EditTrialStoreOBJ.setHeader(document.getElementById("Header").value)
                                                 }}/></Grid>
                    <Grid item xs={6}><TextField id="Country" label="Country" variant="filled" required={true}
                                                 InputLabelProps={{shrink: true}}
                                                 defaultValue={EditTrialStoreOBJ.getCountry()}
                                                 onChange={() => {
                                                     EditTrialStoreOBJ.setCountry(document.getElementById("Country").value)
                                                 }}/></Grid>
                    <Grid item xs={6}><TextField id="Title" label="Title" variant="filled"
                                                 InputLabelProps={{shrink: true}}
                                                 defaultValue={EditTrialStoreOBJ.getTitle()}
                                                 onChange={() => {
                                                     EditTrialStoreOBJ.setTitle(document.getElementById("Title").value)
                                                 }}/></Grid>
                    <Grid item xs={6}><TextField id="City" label="City" variant="filled" required={true}
                                                 InputLabelProps={{shrink: true}}
                                                 defaultValue={EditTrialStoreOBJ.getCity()}
                                                 onChange={() => {
                                                     EditTrialStoreOBJ.setCity(document.getElementById("City").value)
                                                 }}/></Grid>
                    <Grid item xs={6}> <Autocomplete id="Match"
                                                     options={match_codes_api.map((option) => option.label)}
                                                     defaultValue={EditTrialStoreOBJ.getMatch()}
                                                     renderInput={(params) => <TextField {...params}
                                                                                         label="Match"/>}
                                                     onChange={(e, v) => {
                                                         EditTrialStoreOBJ.setMatch(v)
                                                     }}
                                                     required={true}/>
                    </Grid>
                    <Grid item xs={6}><TextField id="ZipCode" label="Zip-code" variant="filled"
                                                 InputLabelProps={{shrink: true}}
                                                 defaultValue={EditTrialStoreOBJ.getZipCode()}
                                                 onChange={() => {
                                                     EditTrialStoreOBJ.setZipCode(document.getElementById("ZipCode").value)
                                                 }}/></Grid>
                    <Grid item xs={6}><TextField id="MinAge" label="MinAge" variant="filled" required={true}
                                                 InputLabelProps={{shrink: true}}
                                                 defaultValue={EditTrialStoreOBJ.getMinAge()}
                                                 onChange={() => {
                                                     EditTrialStoreOBJ.setMinAge(document.getElementById("MinAge").value)
                                                 }}/></Grid>
                    <Grid item xs={6}><TextField id="Address" label="Address" variant="filled" required={true}
                                                 InputLabelProps={{shrink: true}}
                                                 defaultValue={EditTrialStoreOBJ.getAddress()}
                                                 onChange={() => {
                                                     EditTrialStoreOBJ.setAddress(document.getElementById("Address").value)
                                                 }}/></Grid>
                    <Grid item xs={6}><TextField id="MaxAge" label="MaxAge" variant="filled" required={true}
                                                 InputLabelProps={{shrink: true}}
                                                 defaultValue={EditTrialStoreOBJ.getMaxAge()}
                                                 onChange={() => {
                                                     EditTrialStoreOBJ.setMaxAge(document.getElementById("MaxAge").value)
                                                 }}/></Grid>
                    <Grid item xs={6}><TextField id="StartDate" label="StartDate" variant="filled"
                                                 required={true} InputLabelProps={{shrink: true}}
                                                 defaultValue={EditTrialStoreOBJ.getStartDate()}
                                                 onChange={() => {
                                                     EditTrialStoreOBJ.setStartDate(document.getElementById("StartDate").value)
                                                 }}/></Grid>
                    <Grid item xs={6}><TextField id="Required_visits" label="Required visits" variant="filled"
                                                 required={true} InputLabelProps={{shrink: true}}
                                                 defaultValue={EditTrialStoreOBJ.getRequiredVisit()}
                                                 onChange={() => {
                                                     EditTrialStoreOBJ.setRequiredVisit(document.getElementById("Required_visits").value)
                                                 }}/></Grid>
                    <Grid item xs={6}><TextField id="time" label="Time" variant="filled"
                                                 required={true} InputLabelProps={{shrink: true}}
                                                 defaultValue={EditTrialStoreOBJ.getStartTime()}
                                                 onChange={() => {
                                                     EditTrialStoreOBJ.setStartTime(document.getElementById("time").value)
                                                 }}/></Grid>
                </Grid>
                <Grid container item xs={3}>
                    <Grid item xs={12}><img id="Img"
                                            src={EditTrialStoreOBJ.getImg()}
                                            alt={"props"} height={200} width={100}/></Grid>
                    <Grid item xs={12}>
                        <Button variant={"outlined"}>Upload new picture</Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Autocomplete id="Vek"
                                      defaultValue={EditTrialStoreOBJ.getVek()}
                                      options={[
                                          {value: ""},
                                          {value: 'Yes'},
                                          {value: 'No'}].map((option) => option.value)}
                                      renderInput={(params) => <TextField {...params}
                                                                          label="Vek"/>}
                                      onChange={(e, v) => {
                                          EditTrialStoreOBJ.setVek(v)
                                      }}
                                      required={true}/>
                    </Grid>
                </Grid>

                <Grid item xs={12}>
                    Card Description
                    <TextField id="CardDesc" multiline rows={2} inputProps={{maxLength: 200}}
                               fullWidth={true} defaultValue={EditTrialStoreOBJ.getCardDesc()}
                               onChange={() => {
                                   EditTrialStoreOBJ.setCardDesc(document.getElementById("CardDesc").value)
                               }}/></Grid>

                <Grid item xs={12}>
                    Long Description
                    <TextField id="LongDesc" multiline rows={4} inputProps={{maxLength: 200}}
                               fullWidth={true} defaultValue={EditTrialStoreOBJ.getLongDesc()}
                               onChange={() => {
                                   EditTrialStoreOBJ.setLongDesc(document.getElementById("LongDesc").value)
                               }}/></Grid>

                <Grid item xs={12}>
                    Applicants
                    <TextField id="Applicants" multiline rows={2}
                               inputProps={{maxLength: 200}}
                               fullWidth={true}
                               defaultValue={JSON.stringify(EditTrialStoreOBJ.getApplicants())}
                               disabled={true}
                               onChange={() => {
                                   EditTrialStoreOBJ.setApplicants(document.getElementById("Applicants").value)
                               }}/></Grid>
            </Grid>
        </DialogContentText>
    )
        ;
}

export default DialogContextTrial;