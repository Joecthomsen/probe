import {userStore} from "../stores/UserStore";
import {authenticationStore} from "../stores/AuthenticationStore";

const loginUrl = process.env.NODE_ENV === 'development' ?  "http://localhost:8080/authentication/signin" : "https://probe.joecthomsen.dk/authentication/signin"; //Check if dev environment

export const loginRequest = async (email, password) => {

    try {
        const requestOptions = {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: email, password: password })
        };
        const response = await fetch(loginUrl, requestOptions);
        const data = await response.json();
        //const response = await axios.post(loginUrl , { email: email, password: password})
        console.log("DATA: " + JSON.stringify(data))
        userStore.setEmail(data.email)
        userStore.setSex(data.sex)
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
        console.log("Done: ")


        // console.log("DATA: " + JSON.stringify(data))
        // userStore.setEmail(response.data.email)
        // userStore.setSex(response.data.sex)
        // userStore.setFirstName(response.data.firstName)
        // userStore.setLastName(response.data.lastName)
        // userStore.setDob(response.data.dob)
        // userStore.setWeight(response.data.weight)
        // userStore.setChronicDisease(response.data.chronicDisease)
        // userStore.setEmail(response.data.email)
        // userStore.setPhoneNumber(response.data.phoneNumber)
        // userStore.setStreetName(response.data.streetName)
        // userStore.setDoorNumber(response.data.doorNumber)
        // userStore.setZipCode(response.data.zipCode)
        // userStore.setCity(response.data.city)
        // userStore.setCountry(response.data.country)
        // userStore.setRole(response.data.roles)
        // authenticationStore.setLoggedIn(true)
        // authenticationStore.setToken(response.data.token)

        //console.log("Data: " + JSON.stringify(data))
        //
        // console.log("Role: " + JSON.stringify(userStore.getRole().pop().pop().roleName))


    }catch (error){
        console.log("error: " + error.response)
    }
}
//export default loginRequest()