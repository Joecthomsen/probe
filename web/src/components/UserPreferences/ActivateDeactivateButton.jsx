import {userPreferences} from "../../stores/UserPreferencesStore";
import Button from '@mui/material/Button';
import {observer} from "mobx-react-lite";

const ActivateDeactivateButton = () => {
    if (userPreferences.activeState) {
        return (
            <Button id={"aOrD"} variant="text" onClick={() => userPreferences.activeState = false }>Deactivate Me</Button>
        )
    } else {
        return (
            <Button id={"aOrD"} variant="text" onClick={() => userPreferences.activeState = true }>Activate Me</Button>
        )
    }
}

export default observer(ActivateDeactivateButton);
