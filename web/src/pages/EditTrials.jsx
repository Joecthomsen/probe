import {Button, Grid, MenuItem, Select,} from "@mui/material";
import {Add} from "@mui/icons-material";
import * as React from 'react';
import {EditTrialStoreOBJ} from "../stores/EditTrialStore";
import {observer} from "mobx-react-lite";
import popup from "../components/DialogModalTrial";


EditTrialStoreOBJ.updateCardList()

const EditTrials = () => {

    return (
        <Grid container spacing={2} style={{marginTop: 20}}>
            {popup()}
            <Grid item xs={6}><h1>My Trials</h1></Grid>
            <Grid item xs={3}><Select
                id="selectID"
                onChange={(v) => {
                    EditTrialStoreOBJ.setOwnerID(v.target.value);
                    EditTrialStoreOBJ.updateCardList();
                }}>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={-1} disabled>owneridTest</MenuItem>
            </Select></Grid>
            <Grid item xs={3}><Button variant="contained" startIcon={<Add/>} size="large" id="CreateTrial"
                                      onClick={() => {
                                          EditTrialStoreOBJ.openAndClearDialog()
                                      }}>Create
                Trial</Button></Grid>

            <Grid item xs={12}>
                <Grid container title={"cardContainer"}>
                    {EditTrialStoreOBJ.cardList}
                </Grid>
            </Grid>
            {EditTrialStoreOBJ.dontlook}


        </Grid>
    );
}


export default observer(EditTrials);