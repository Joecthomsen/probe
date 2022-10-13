import { userStore } from "../../stores/UserStore";
const SelectUserType = () => {

    const clientUser = "Client User"
    const medicalUser = "Medical User"

    const handleOnClicked = () => {
        userStore.setError(false)
        userStore.setCreateMedicalUser(!userStore.createMedicalUser)
    }
    
    const styles={
        backgroundColor: '#c2c0e4',
    }

    return ( 
        !userStore.createMedicalUser 
        ?
            <div className="select-user-type-wrapper">
                <button type="button" onClick={handleOnClicked} style={styles}>{clientUser}</button>
                <button type="button" onClick={handleOnClicked}>{medicalUser}</button>
            </div>
        :
            <div className="select-user-type-wrapper">
                <button type="button" onClick={handleOnClicked}>{clientUser}</button>
                <button type="button" onClick={handleOnClicked} style={styles}>{medicalUser}</button>
            </div>
    );
}
 
export default SelectUserType;