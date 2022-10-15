import {Button, Grid} from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import {EditTrialStoreOBJ} from "../../stores/EditTrialStore";


const StudyCard = (props) => {

    let description = props.description;
    if (description.length > 200) {
        description = description.substring(0, 100) + "..."
    }

    return (
        <div className="studycard-container" style={{maxWidth: 250, margin: 20}}>
            <Grid container spacing={1.25}>
                <Grid item xs={12}><h1>{props.header}</h1></Grid>
                <Grid item>
                    <div className="card-location">
                        <span className="material-symbols-outlined">location_on</span>
                        <p className="card-country">{props.country}</p>
                        <p className="card-city">{props.city}</p>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <hr className="card-line"/>
                </Grid>
                <Grid item xs={10}><h2>{props.title}</h2></Grid>
                <Grid item xs={12}>
                    <div className="card-description-container">
                        {description}
                    </div>
                </Grid>
                <Grid item xs={12}/>
                <Grid item xs={9}><p>{props.participants}<PersonIcon fontSize="small"/></p></Grid>
                <Grid item xs={3}><
                    Button variant="contained" onClick={()=>{
                        EditTrialStoreOBJ.setId(props.id)
                    EditTrialStoreOBJ.openAndSetDialog(props.click)
                }}>Edit</Button>
                </Grid>
            </Grid>
        </div>


);
}

export default StudyCard;
