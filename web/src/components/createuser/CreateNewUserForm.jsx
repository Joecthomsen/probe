import { useState } from "react";
//import users from "../../api/user_api_mock";
//import { useNavigate } from 'react-router-dom';
import {userStore} from "../../stores/UserStore"
import { observer } from "mobx-react-lite"
import SelectUserType from "../SelectUserType";
import axios from "axios";
// import bcrypt from 'bcryptjs';

const CreateUserFormOne = () => {

    const [firstForm, setFirstForm] = useState(true)
    // const [createMedicalUser, setCreateMedicalUser] = useState(false)

    //const navigate = useNavigate();

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

    const submitUser = (event) => {
        event.preventDefault();
        if(!userStore.createMedicalUser) {
            axios.post('https://probe.joecthomsen.dk/user/add', userStore.getClinicalUserObject())
                .then(response => {
                    console.log(response)
                })
                .catch(error => console.log(error))
        }
        else{
            axios.post('https://probe.joecthomsen.dk/user/add', userStore.getMedicalUserObject())
                .then(response => {
                    console.log(response)
                })
                .catch(error => console.log(error))
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
                    <input onChange={handleEmail} name="email" type="text" placeholder={userStore.email ? userStore.email : "Email"}/>
                    <input onChange={handlePassword} type="password" placeholder="Password"/>
                    <input onChange={handleRepeatPassword} type="password" placeholder="Repeat password"/>
                    <input onChange={handleFirstName} type="text" placeholder={userStore.firstName ? userStore.firstName : "First name(s)"}/>
                    <input onChange={handleLastName} type="text" placeholder={userStore.lastName ? userStore.lastName : "Last name"}/>
                    <label htmlFor="user-birthday">Day of Birth:</label>
                    <input onChange={handleBirthday} type="date" name="Birthday" id="user-birthday" placeholder={userStore.dob ? userStore.dob : ""}/>
                    <input onChange={handleCity} type="text" placeholder={userStore.city ? userStore.city : "city"}/>
                    <input onChange={handleRegion} type="text" placeholder={userStore.region ? userStore.region : "Region"}/>
                    <input onChange={handleCountry} type="text" placeholder={userStore.country ? userStore.city : "County"}/>
                    <button onClick={checkFirstForm} >Next</button>
                    {userStore.error ? <p className="error-messages">{userStore.errorMsg}</p> : <p></p>}
                </form>
                :
                <div>
                    <div className="gender-selection">
                        <p>Select gender</p>
                        <div className="radio-buttons">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" onChange={handleGender} name="exampleRadios" id="exampleRadios1" value="male" />
                                <label className="form-check-label" htmlFor="exampleRadios1">
                                    Male
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" onChange={handleGender} name="exampleRadios" id="exampleRadios2" value="female"/>
                                <label className="form-check-label" htmlFor="exampleRadios2">
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
                        <button onClick={submitUser} >Create Users</button>
                        {userStore.error ? <p className="error-messages">{userStore.errorMsg}</p> : <p></p>}
                    </form>
                </div>
            : //If the user wants to create a medical user
            <form className="create-user-form">
                <SelectUserType/>
                <label htmlFor="Create a new user"></label>
                <input onChange={handleEmail} name="email" type="text" placeholder={userStore.email ? userStore.email : "Email"}/>
                <input onChange={handlePassword} type="password" placeholder="Password"/>
                <input onChange={handleRepeatPassword} type="password" placeholder="Repeat password"/>
                <input onChange={handleFirstName} type="text" placeholder={userStore.firstName ? userStore.firstName : "First name(s)"}/>
                <input onChange={handleLastName} type="text" placeholder={userStore.lastName ? userStore.lastName : "Last name"}/>
                <input onChange={handleCity} type="text" placeholder={userStore.city ? userStore.city : "city"}/>
                <input onChange={handleRegion} type="text" placeholder={userStore.region ? userStore.region : "Region"}/>
                <input onChange={handleCountry} type="text" placeholder={userStore.country ? userStore.city : "County"}/>
                <button onClick={submitUser} >Create User</button>
                {userStore.error ? <p className="error-messages">{userStore.errorMsg}</p> : <p></p>}
            </form>
    );
}

export default observer(CreateUserFormOne)