import { userStore } from "../../stores/UserStore";
const SelectUserType = () => {

    const clientUser = "Client User"
    const medicalUser = "Medical User"

    const handleOnClickedClinic = () => {
        userStore.setError(false)
        userStore.setCreateMedicalUser(false)
        userStore.setRole("CLINICAL_USER")
        console.log("hhh: "  + userStore.getCreateMedicalUser())
    }

    const handleOnClickedMedic = () => {
        userStore.setError(false)
        userStore.setCreateMedicalUser(true)
        userStore.setRole("MEDICAL_USER")
        console.log("hhh: "  + userStore.getCreateMedicalUser())
    }
    
    const styles={
        backgroundColor: '#c2c0e4',
    }

    return ( 
        !userStore.createMedicalUser 
        ?
            <div className="select-user-type-wrapper">
                <button type="button" onClick={handleOnClickedClinic} style={styles}>{clientUser}</button>
                <button type="button" onClick={handleOnClickedMedic}>{medicalUser}</button>
            </div>
        :
            <div className="select-user-type-wrapper">
                <button type="button" onClick={handleOnClickedClinic}>{clientUser}</button>
                <button type="button" onClick={handleOnClickedMedic} style={styles}>{medicalUser}</button>
            </div>
    );
}
 
export default SelectUserType;