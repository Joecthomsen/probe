import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Grid
} from "@mui/material";
import {Add} from "@mui/icons-material";
import cardData from "../api/clinical_trial_api_mock";
import EditTrialsStudyCards from "../components/TrialCard";
import * as React from 'react';


const EditTrials = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const studies = cardData.clinicalTrials.filter(obj => obj.ownerId == "0");

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
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Test Form</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Test
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="error">Delete</Button>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Save</Button>
                </DialogActions>
            </Dialog>
        );
    }

    return (
        <Grid container spacing={2}>
            {popup()}
            <Grid item xs={12}></Grid>


            <Grid item xs={1}/>
            <Grid item xs={8}><h1>My Trials</h1></Grid>
            <Grid item xs={3}><Button variant="contained" startIcon={<Add/>} size="large" onClick={handleClickOpen}>Create
                Trial</Button></Grid>

            <Grid item xs={1}/>
            <Grid item xs={10}>
                <Grid container title={"cardContainer"}>
                    {cardList}
                </Grid>
            </Grid>

        </Grid>
    );
}

export default EditTrials;