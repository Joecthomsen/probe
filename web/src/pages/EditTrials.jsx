import {Button,Grid,} from "@mui/material";
import {Add} from "@mui/icons-material";
import * as React from 'react';
import {EditTrialStoreOBJ} from "../stores/EditTrialStore";
import {observer} from "mobx-react-lite";
import popup from "../components/DialogModalTrial";
import EditTrialsStudyCards from "../components/landingPage/TrialCard";


EditTrialStoreOBJ.updateCardList()

const EditTrials =() => {

    const element = EditTrialStoreOBJ.cardList;
    return (
        <Grid container spacing={2}  style={{ marginTop:20 }}>
            {popup()}
            <Grid item xs={9}><h1>My Trials</h1></Grid>
            <Grid item xs={3}><Button variant="contained" startIcon={<Add/>} size="large" id="CreateTrial"
                                      onClick={()=>{
                                          EditTrialStoreOBJ.openAndClearDialog()
                                      }}>Create
                Trial</Button></Grid>

            <Grid item xs={12}>
                <Grid container title={"cardContainer"}>
                    {element && <EditTrialsStudyCards key={element.id}
                                           id={element.id}
                                           header={element.header}
                                           title={element.title}
                                           country={element.county}
                                           city={element.city}
                                           description={element.cardDescription}
                                           participants={element?.participantsID?.length}
                                           click={element}
                    />}
                </Grid>
            </Grid>
            {EditTrialStoreOBJ.dontlook}


        </Grid>
    );
}


export default observer(EditTrials);