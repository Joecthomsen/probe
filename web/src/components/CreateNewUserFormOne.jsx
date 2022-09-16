import { useState } from "react";
import users from "../api/user_api_mock";

const CreateUserFormOne = () => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState();
    const [repeatPassword, setRepeatPassword] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [dob, setDob] = useState();
    const [city, setCity] = useState();
    const [region, setRegion] = useState();
    const [country, setCountry] = useState();

    const [error, setError] = useState(false)
    const [errorMsg, setErrorMsg] = useState("")
    const [firstForm, setFirstForm] = useState(true)

    const [value, setValue] = useState()

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }
    const handlePassword = (event) => {
        setPassword(event.target.value)
    } 
    const handleRepeatPassword = (event) => {
        setRepeatPassword(event.target.value)
    } 
    const handleFirstName = (event) => {
        setFirstName(event.target.value)
    } 
    const handleLastName = (event) => {
        setLastName(event.target.value)
    } 
    const handleBirthday = (event) => {
        setDob(event.target.value)
    }
    const handleCity = (event) => {
        setCity(event.target.value)
    }
    const handleRegion = (event) => {
        setRegion(event.target.value)
    }
    const handleCountry = (event) => {
        setCountry(event.target.value)
    }

    const checkForm = (event) => {
        event.preventDefault();
        let computedErrorMsg = "Please fill in the folloving information: "
        let hasError = false;

        if(password !== repeatPassword){
            hasError = true
            computedErrorMsg = "Password does not match"          
        }
        else{
            if(!email){
                hasError = true;
                computedErrorMsg += " email,"
            }

            if(!password){
                hasError = true;
                computedErrorMsg += " password,"
            }

            if(!repeatPassword){
                hasError = true;
                computedErrorMsg += " repeated password,"
            }

            if(!firstName){
                hasError = true;
                computedErrorMsg += " firstname,"
            }

            if(!lastName){
                hasError = true;
                computedErrorMsg += " lastname,"
            }

            if(!dob){
                hasError = true;
                computedErrorMsg += " date of birth,"
            }

            if(!city){
                hasError = true;
                computedErrorMsg += " city,"
            }

            if(!region){
                hasError = true;
                computedErrorMsg += " region,"
            }

            if(!country){
                hasError = true;
                computedErrorMsg += " country,"
            }
        }
        computedErrorMsg += "\n and resubmit - thank you!"
        if(hasError){
            setErrorMsg(computedErrorMsg)
            setError(true)
        }
        else{
            setError(false)
            setFirstForm(false)
        }
    }

    const submitUser = () => {
        users.users.push({
            "id": 0,
            "image": "<PATH_TO_IMAGE_HERE>",
            "firstName": firstName,
            "lastName": lastName,
            "cpr": "NIL",
            "age": 40,
            "chronicDisease": "Lung cancer stage 4",
            "streetName": "Nørrebrogade",
            "doorNumber": 42,
            "zipCode": 2200,
            "city": city,
            "region": region,
            "county": country
        }
        )
    }

return (
    firstForm 
    ?             
        <form className="create-user-form">
            <label htmlFor="Create a new user"></label>
            <input onChange={handleEmail} name="email" type="text" placeholder="Email"/>
            <input onChange={handlePassword} type="password" placeholder="Password"/>
            <input onChange={handleRepeatPassword} type="password" placeholder="Repeat password"/>
            <input onChange={handleFirstName} type="text" placeholder="First name(s)"/>
            <input onChange={handleLastName} type="text" placeholder="Last name"/>
            <label htmlFor="user-birthday">Day of Birth:</label>
            <input onChange={handleBirthday} type="date" name="Birthday" id="user-birthday"/>
            <input onChange={handleCity} type="text" placeholder="city"/>
            <input onChange={handleRegion} type="text" placeholder="Region"/>
            <input onChange={handleCountry} type="text" placeholder="County"/>
            <button onClick={checkForm} >Next</button>
            {error ? <p className="error-messages">{errorMsg}</p> : <p></p>}
        </form>
    : 
        <form className="create-user-form">
            <label htmlFor="Create a new user"></label>
            <input type="text" placeholder="Your diagnose (If any)"></input>
            <input placeholder="Discribe your life with your diagnose"></input>
            <button onClick={submitUser} >Create Users</button>
            {error ? <p className="error-messages">{errorMsg}</p> : <p></p>}
        </form>
    );
}
 
export default CreateUserFormOne;