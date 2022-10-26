import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid} from "@mui/material";
import {EditTrialStoreOBJ} from "../stores/EditTrialStore";
import DialogContextTrial from "./EditTrialDialogContext";
import * as React from "react";

function DeleteButtonPick() {
    if (EditTrialStoreOBJ.getId() === "") {
        return (<Button color="error" variant={"outlined"} disabled={true}>Delete
        </Button>)
    }
    return (
        <Button onClick={() => {
            EditTrialStoreOBJ.deleteTrial();
            EditTrialStoreOBJ.closeDialog();
        }} color="error" variant={"outlined"}>Delete
        </Button>
    );
}

function SaveButtonPick() {
    if (EditTrialStoreOBJ.getId() === "") {
        return <Button onClick={() => {
            EditTrialStoreOBJ.createTrial();
            EditTrialStoreOBJ.closeDialog();
        }} variant={"outlined"} id={"Create"}>Create</Button>
    }
    return (<Button onClick={() => {
        EditTrialStoreOBJ.putTial()
        EditTrialStoreOBJ.closeDialog();
    }} variant={"outlined"} id={"Update"}>Update</Button>)
}

const popup = () => {
    return (
        <Dialog open={EditTrialStoreOBJ.getDialog()} onClose={EditTrialStoreOBJ.closeDialog}>
            <DialogTitle>Edit Trial</DialogTitle>
            <DialogContent>
                <DialogContextTrial/>
            </DialogContent>
            <DialogActions>
                <Grid container>
                    <Grid item xs={8}>
                        {DeleteButtonPick()}
                    </Grid>
                    <Grid item xs={2}><Button onClick={EditTrialStoreOBJ.closeDialog}
                                              variant={"outlined"}>Cancel</Button></Grid>
                    <Grid item xs={2}>{SaveButtonPick()}</Grid>
                </Grid>
            </DialogActions>
        </Dialog>
    )
        ;
}
export default popup;