import {Button,Grid,} from "@mui/material";
import {Add} from "@mui/icons-material";
import cardData from "../api/clinical_trial_api_mock";
import EditTrialsStudyCards from "../components/TrialCard";
import * as React from 'react';
import {EditTrialStoreOBJ} from "../stores/EditTrialStore";
import {observer} from "mobx-react-lite";
import popup from "../components/DialogModalTrial";

const EditTrials = () => {
    let studies = cardData.clinicalTrials.filter(obj => obj.ownerId === EditTrialStoreOBJ.getOwnerId());

    const cardList=(studies.map((element, index) => {
        return <EditTrialsStudyCards key={index}
                                     id={element.id}
                                     header={element.header}
                                     title={element.title}
                                     country={element.county}
                                     city={element.city}
                                     description={element.cardDescription}
                                     participants={element.participants.length}
                                     click={element}
        />
    }));

    return (
        <Grid container spacing={2}>
            {popup()}
            <Grid item xs={10}><h1>My Trials</h1></Grid>
            <Grid item xs={2}><Button variant="contained" startIcon={<Add/>} size="large"
                                      onClick={()=>{
                                          EditTrialStoreOBJ.openAndClearDialog()
                                      }}>Create
                Trial</Button></Grid>

            <Grid item xs={12}>
                <Grid container title={"cardContainer"}>
                    {cardList}
                </Grid>
            </Grid>


        </Grid>
    );
}


export default observer(EditTrials);