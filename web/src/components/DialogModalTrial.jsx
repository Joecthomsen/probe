import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid} from "@mui/material";
import {EditTrialStoreOBJ} from "../stores/EditTrialStore";
import DialogContextTrial from "./EditTrialDialogContext";
import * as React from "react";

const popup = () => {
    return (
        <Dialog open={EditTrialStoreOBJ.getDialog()} onClose={EditTrialStoreOBJ.closeDialog}>
            <DialogTitle>Edit Trial</DialogTitle>
            <DialogContent>
                <DialogContextTrial/>
            </DialogContent>
            <DialogActions>
                <Grid container>
                    <Grid item xs={8}><Button onClick={() => {
                        console.log("Delete sql Entry: " + EditTrialStoreOBJ.getId());
                        EditTrialStoreOBJ.setOwnerID(EditTrialStoreOBJ.getOwnerId());
                        EditTrialStoreOBJ.closeDialog();
                    }} color="error"
                                              variant={"outlined"}>Delete</Button></Grid>
                    <Grid item xs={2}><Button onClick={EditTrialStoreOBJ.closeDialog}
                                              variant={"outlined"}>Cancel</Button></Grid>
                    <Grid item xs={2}><Button onClick={() => {
                        console.log(JSON.stringify(EditTrialStoreOBJ.getDialogInfo()))
                        EditTrialStoreOBJ.closeDialog()
                    }} variant={"outlined"}>Save</Button></Grid>
                </Grid>
            </DialogActions>
        </Dialog>
    )
        ;
}
export default popup;