import {userStore} from "../stores/UserStore";
import {authenticationStore} from "../stores/AuthenticationStore";
import {loadingStore} from  "../stores/LoadingStore";

const loginUrl = process.env.NODE_ENV === 'development' ?  "http://localhost:8080/authentication/signin" : "https://probe.joecthomsen.dk/authentication/signin"; //Check if dev environment

export const loginRequest = async (email, password) => {
    try {
        loadingStore.setLoading(true)
        const requestOptions = {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: email, password: password })
        };
        const response = await fetch(loginUrl, requestOptions);
        const data = await response.json();
        if(data.token.length > 0) {
            loadingStore.setLoading(false)
            console.log("Finished")
            console.log("DATA: " + JSON.stringify(data))
            userStore.setEmail(data.email)
            userStore.setGender(data.sex)
            userStore.setFirstName(data.firstName)
            userStore.setLastName(data.lastName)
            userStore.setDob(data.dob)
            userStore.setWeight(data.weight)
            userStore.setChronicDisease(data.chronicDisease)
            userStore.setEmail(data.email)
            userStore.setPhoneNumber(data.phoneNumber)
            userStore.setStreetName(data.streetName)
            userStore.setDoorNumber(data.doorNumber)
            userStore.setZipCode(data.zipCode)
            userStore.setCity(data.city)
            userStore.setCountry(data.country)
            userStore.setRole(data.roles)
            authenticationStore.setLoggedIn(true)
            authenticationStore.setToken(data.token)
        }
    }catch (error){
        console.log("error: " + error.response)
    }
}
//export default loginRequest()