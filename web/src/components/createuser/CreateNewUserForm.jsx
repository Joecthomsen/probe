import { useState } from "react";
import {userStore} from "../../stores/UserStore"
import { observer } from "mobx-react-lite"
import SelectUserType from "./SelectUserType";
import {useNavigate} from "react-router-dom";
import {loadingStore} from "../../stores/LoadingStore";
import "../../styles/login.css"

const CreateUserFormOne = () => {

    const addUserUrl = process.env.NODE_ENV === 'development' ?  "http://localhost:8080/user/add" : "https://probe.joecthomsen.dk/user/add"; //Check if dev environment
    const [firstForm, setFirstForm] = useState(true)
    const navigate = useNavigate()

    const handleEmail = (event) => {
        userStore.setEmail(event.target.value)
    }
    const handlePassword = (event) => {

        userStore.setPassword(event.target.value)
    }
    const handleRepeatPassword = (event) => {
        userStore.setRepeatPassword(event.target.value)
    }
    const handleFirstName = (event) => {
        userStore.setFirstName(event.target.value)
    }
    const handleLastName = (event) => {
        userStore.setLastName(event.target.value)
    }
    const handleBirthday = (event) => {
        userStore.setDob(event.target.value)
    }
    const handleCity = (event) => {
        userStore.setCity(event.target.value)
    }
    const handleRegion = (event) => {
        userStore.setRegion(event.target.value)
    }
    const handleCountry = (event) => {
        userStore.setCountry(event.target.value)
    }
    const handleGender = (event) => {
        userStore.setGender(event.target.value)
    }
    const handleDiagnose = (event) => {
        userStore.setChronicDisease(event.target.value)
    }
    const handleWeight = (event) => {
        userStore.setWeight(event.target.value)
    }
    const handlePhoneNumber = (event) => {
        userStore.setPhoneNumber(event.target.value)
    }

    const checkFirstForm = (event) => {
        event.preventDefault();
        let computedErrorMsg = "Please fill in the following information: "
        let hasError = false;

        if(userStore.password !== userStore.repeatPassword){
            hasError = true
            computedErrorMsg = "Password does not match"
        }
        else{
            if(!userStore.email){
                hasError = true;
                computedErrorMsg += " email,"
            }

            if(!userStore.password){
                hasError = true;
                computedErrorMsg += " password,"
            }

            if(!userStore.repeatPassword){
                hasError = true;
                computedErrorMsg += " repeated password,"
            }

            if(!userStore.firstName){
                hasError = true;
                computedErrorMsg += " firstname,"
            }

            if(!userStore.lastName){
                hasError = true;
                computedErrorMsg += " lastname,"
            }

            if(!userStore.dob){
                hasError = true;
                computedErrorMsg += " date of birth,"
            }

            if(!userStore.city){
                hasError = true;
                computedErrorMsg += " city,"
            }

            if(!userStore.region){
                hasError = true;
                computedErrorMsg += " region,"
            }

            if(!userStore.country){
                hasError = true;
                computedErrorMsg += " country,"
            }
        }
        computedErrorMsg += "\n and resubmit - thank you!"
        if(hasError){
            userStore.setErrorMsg(computedErrorMsg)
            userStore.setError(true)
        }
        else{
            userStore.setError(false)
            setFirstForm(false)
        }
    }

    const submitUser = async (event) => {
        event.preventDefault();
        //const role = JSON.stringify( userStore.getRole());
        console.log("ROLE: " + userStore.getRole())
        const role = userStore.getRole().role === "MEDICAL_USER" ? [{
                "id": 2,
                "roleName": "MEDICAL_USER"
            }] :

            [{
                "id": 1,
                "roleName": "CLIENT_USER"
            }]

        const requestOptions = {
            method: 'POST',
            mode: 'cors',
            headers:
                {
                'Content-Type': 'application/json' ,
                'Accept': 'application/json'
                },
            body: JSON.stringify({
                sex: userStore.sex,
                firstName: userStore.firstName,
                lastName: userStore.lastName,
                password: userStore.password,
                dob: userStore.dob,
                weight: userStore.weight,
                chronicDisease: userStore.chronicDisease,
                email: userStore.email,
                phoneNumber: userStore.phoneNumber,
                streetName: userStore.streetName,
                doorNumber: userStore.doorNumber,
                zipCode: userStore.zipCode,
                city: userStore.zipCode,
                region: userStore.region,
                country: userStore.country,
                roles: role
            })
        }

        try {
            loadingStore.setLoading(true)
            const response = await fetch(addUserUrl, requestOptions)
            const data = await response.data
            loadingStore.setLoading(false)
            console.log("response: " + JSON.stringify( data ))
            await navigate("/")
            window.alert("New user " + userStore.firstName + " has been created\nPlease sign in with your credential")
        }
        catch (error) {
            console.log("error: " + error)
        }

    }

    return (
        //Check if the user wants to create a medical user
        !userStore.createMedicalUser
        ?
        firstForm
            ?
            <form className="create-user-form">
                <SelectUserType/>
                <label htmlFor="Create a new user"></label>
                <input onChange={handleEmail} name="email" type="text" placeholder= "Email"/>
                <input onChange={handlePassword} type="password" placeholder="Password"/>
                <input onChange={handleRepeatPassword} type="password" placeholder="Repeat password"/>
                <input onChange={handleFirstName} type="text" placeholder="First name(s)"/>
                <input onChange={handleLastName} type="text" placeholder="Last name"/>
                <label htmlFor="user-birthday">Day of Birth:</label>
                <input onChange={handleBirthday} type="date" data-testid="create-user-dob" name="Birthday" id="user-birthday" placeholder= ""/>
                <input onChange={handleCity} type="text" placeholder="City"/>
                <input onChange={handleRegion} type="text" placeholder= "Region"/>
                <input onChange={handleCountry} type="text" placeholder="Country"/>
                <button onClick={checkFirstForm} >Next</button>
                {userStore.error ? <p data-testid="error-msg" className="error-messages">{userStore.errorMsg}</p> : <p></p>}
            </form>
            :
            <div>
                <div className="gender-selection">
                    <p>Select gender</p>
                    <div className="radio-buttons">
                        <div className="form-check">
                            <input data-testid="radio-button-male" className="form-check-input" type="radio" onChange={handleGender} name="exampleRadios" id="exampleRadios1" value="male" />
                            <label data-testid="radio-label-male" className="form-check-label" htmlFor="exampleRadios1">
                                Male
                            </label>
                        </div>
                        <div className="form-check">
                            <input data-testid="radio-button-female" className="form-check-input" type="radio" onChange={handleGender} name="exampleRadios" id="exampleRadios2" value="female"/>
                            <label data-testid="radio-button-female" className="form-check-label" htmlFor="exampleRadios2">
                                Female
                            </label>
                        </div>
                    </div>
                </div>
                <form className="create-user-form">
                    <label htmlFor="Create a new user"></label>
                    <input onChange={handleDiagnose} type="text" placeholder="Your diagnose (If any)"></input>
                    <input onChange={handleWeight} type="text" placeholder="Weight"></input>
                    <input onChange={handlePhoneNumber} type="text" placeholder="Phone number"></input>
                    <button onClick={submitUser}>Create User</button>
                    {userStore.error ? <p data-testid="error-msg" className="error-messages">{userStore.errorMsg}</p> : <p></p>}
                </form>
            </div>
        : //If the user wants to create a medical user
        <form className="create-user-form">
            <SelectUserType/>
            <label htmlFor="Create a new user"></label>
            <input onChange={handleEmail} name="email" type="text" placeholder="Email"/>
            <input onChange={handlePassword} type="password" placeholder="Password"/>
            <input onChange={handleRepeatPassword} type="password" placeholder="Repeat password"/>
            <input onChange={handleFirstName} type="text" placeholder="First name(s)"/>
            <input onChange={handleLastName} type="text" placeholder= "Last name"/>
            <input onChange={handleCity} type="text" placeholder="City"/>
            <input onChange={handleRegion} type="text" placeholder="Region"/>
            <input onChange={handleCountry} type="text" placeholder= "Country"/>
            <button onClick={submitUser} >Create User</button>
            {userStore.error ? <p data-testid="error-msg" className="error-messages">{userStore.errorMsg}</p> : <p></p>}
        </form>
    );
}

export default observer(CreateUserFormOne)