import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Grid,
} from "@mui/material";
import {Add} from "@mui/icons-material";
import cardData from "../api/clinical_trial_api_mock";
import EditTrialsStudyCards from "../components/TrialCard";
import * as React from 'react';
import DialogContextTrial from "../components/EditTrialDialogContext";

const EditTrials = () => {
    const [open, setOpen] = React.useState(false);


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClickClose = () => {
        setOpen(false);
    };

    const studies = cardData.clinicalTrials.filter(obj => obj.ownerId === 0);

    const cardList = studies.map((element, index) => {
        return (<EditTrialsStudyCards key={index}
                                      header={element.header}
                                      title={element.title}
                                      country={element.county}
                                      city={element.city}
                                      description={element.cardDescription}
                                      click={null}
        />)
    });

    const popup = () => {
        return (
            <Dialog open={open} onClose={handleClickClose}>
                <DialogTitle>Edit Trial</DialogTitle>
                <DialogContent>
                    <DialogContextTrial/>
                </DialogContent>
                <DialogActions>
                    <Grid container>
                        <Grid item xs={8}><Button onClick={handleClickClose} color="error" variant={"outlined"}>Delete</Button></Grid>
                        <Grid item xs={2}><Button onClick={handleClickClose} variant={"outlined"}>Cancel</Button></Grid>
                        <Grid item xs={2}><Button onClick={handleClickClose} variant={"outlined"}>Save</Button></Grid>
                    </Grid>
                </DialogActions>
            </Dialog>
        );
    }

    return (
        <Grid container spacing={2}>
            {popup()}
            <Grid item xs={10}><h1>My Trials</h1></Grid>
            <Grid item xs={2}><Button variant="contained" startIcon={<Add/>} size="large" onClick={handleClickOpen}>Create
                Trial</Button></Grid>


            <Grid item xs={12}>
                <Grid container title={"cardContainer"}>
                    {cardList}
                </Grid>
            </Grid>


        </Grid>
    );
}


export default EditTrials;